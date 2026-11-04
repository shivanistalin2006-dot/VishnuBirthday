import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

interface AudioContextProps {
  isPlaying: boolean;
  togglePlay: () => void;
  startMusicOnInteraction: () => void;
  volume: number;
  setVolume: (val: number) => void;
}

const AudioContext = createContext<AudioContextProps | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.22); // Gentle 15-25% volume level
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}assets/music/background-music.mp3`);
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.22;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const startMusicOnInteraction = useCallback(() => {
    if (!audioRef.current || userPausedRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback prevented by browser policy until gesture:', e);
      });
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      userPausedRef.current = true;
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.warn);
    }
  }, [isPlaying]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        startMusicOnInteraction,
        volume,
        setVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within an AudioProvider');
  return ctx;
};
