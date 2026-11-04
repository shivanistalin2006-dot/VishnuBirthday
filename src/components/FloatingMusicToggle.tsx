import React from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const FloatingMusicToggle: React.FC = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-5 right-5 z-50 flex items-center"
    >
      <button
        onClick={togglePlay}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-sky-200/80 shadow-lg shadow-sky-500/10 text-slate-700 hover:text-sky-800 transition-all cursor-pointer select-none"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause background soundtrack' : 'Play peaceful background soundtrack'}
      >
        {/* Animated Sound Waveform Indicator */}
        <div className="flex items-center gap-0.5 h-3.5 w-3.5 justify-center">
          {isPlaying ? (
            <>
              <motion.span
                className="w-0.5 bg-sky-500 rounded-full"
                animate={{ height: ['40%', '100%', '50%'] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="w-0.5 bg-sky-600 rounded-full"
                animate={{ height: ['80%', '30%', '90%'] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
              />
              <motion.span
                className="w-0.5 bg-sky-400 rounded-full"
                animate={{ height: ['30%', '80%', '40%'] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
            </>
          ) : (
            <Music className="w-3.5 h-3.5 text-slate-400" />
          )}
        </div>

        {/* Text info */}
        <span className="text-xs font-semibold text-slate-600 group-hover:text-sky-700 transition-colors">
          {isPlaying ? 'Music On' : 'Music Paused'}
        </span>

        {/* Small Play/Pause Icon */}
        <div className="w-5 h-5 rounded-full bg-sky-100 group-hover:bg-sky-500 group-hover:text-white text-sky-600 flex items-center justify-center transition-colors">
          {isPlaying ? (
            <Pause className="w-2.5 h-2.5 fill-current" />
          ) : (
            <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
          )}
        </div>
      </button>
    </motion.div>
  );
};
