import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Heart, Disc3 } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const AudioPlayerSection: React.FC = () => {
  const {
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    volume,
    isMuted,
    setVolume,
    toggleMute,
    seek,
    formatTime,
  } = useAudio();

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="section-music" className="relative py-20 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl w-full text-center"
      >
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-sm font-medium mb-4 shadow-sm backdrop-blur-sm">
          <Heart className="w-4 h-4 fill-sky-400 text-sky-500 animate-pulse" />
          <span>Our Soundtrack</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-3">
          These Are For You ?
        </h2>

        <p className="font-handwriting text-2xl text-sky-700 mb-8 tracking-wide">
          "Some songs just remind me of you."
        </p>

        {/* Music Player Container */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 overflow-hidden">
          {/* Decorative Vinyl Record */}
          <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
            {/* Outer Vinyl Groove */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className="w-full h-full rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 p-2 shadow-2xl relative flex items-center justify-center"
              style={{
                boxShadow: isPlaying
                  ? '0 0 30px rgba(56, 189, 248, 0.4), 0 20px 25px -5px rgba(0, 0, 0, 0.3)'
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Concentric rings on vinyl */}
              <div className="w-[85%] h-[85%] rounded-full border border-slate-700/50 flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-slate-700/40 flex items-center justify-center">
                  {/* Center Album Art */}
                  <div className="w-[50%] h-[50%] rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center text-white shadow-inner relative overflow-hidden border-2 border-white/80">
                    <Music className="w-6 h-6 mb-0.5 animate-bounce" />
                    <span className="text-[9px] font-semibold tracking-wider uppercase">Vishnu</span>
                  </div>
                </div>
              </div>

              {/* Center spindle hole */}
              <div className="absolute w-4 h-4 rounded-full bg-white shadow-md border-2 border-slate-900" />
            </motion.div>
          </div>

          {/* Song Info */}
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
              Alaakaa Loova
            </h3>
            <p className="text-sm font-medium text-sky-600 mt-1">
              Sai Abhyankkar ? Special Dedication for Vishnu
            </p>
          </div>

          {/* Equalizer Waveform bars */}
          <div className="flex items-center justify-center gap-1.5 h-8 mb-6">
            {[40, 75, 55, 90, 30, 85, 60, 100, 45, 80, 50, 70, 35].map((height, i) => (
              <motion.span
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-sky-500 to-blue-400"
                animate={{
                  height: isPlaying ? [`${height * 0.2}%`, `${height}%`, `${height * 0.4}%`] : '15%',
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6 + (i % 5) * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Progress Bar & Slider */}
          <div className="space-y-2 mb-6">
            <div
              className="relative w-full h-2.5 bg-sky-100 rounded-full cursor-pointer group overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                seek(clickPos * duration);
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-semibold text-slate-500 tracking-wider">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between pt-2">
            {/* Volume control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label="Toggle mute"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-slate-400" />
                ) : (
                  <Volume2 className="w-5 h-5 text-sky-600" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 sm:w-20 accent-sky-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                aria-label="Volume slider"
              />
            </div>

            {/* Main Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all focus:outline-none focus:ring-4 focus:ring-sky-200"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-white text-white" />
              ) : (
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              )}
            </motion.button>

            {/* Decorative status */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-sky-700 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/60">
              <Disc3 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin text-sky-500' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isPlaying ? 'Playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const FloatingAudioWidget: React.FC = () => {
  const { isPlaying, togglePlay, formatTime, currentTime, duration } = useAudio();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-sky-200 hover:border-sky-300 transition-all text-slate-800"
    >
      <button
        onClick={togglePlay}
        className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors shadow-sm"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
      </button>
      <div className="text-left pr-2">
        <p className="text-xs font-bold text-slate-800 leading-tight">Alaakaa Loova</p>
        <p className="text-[10px] text-sky-600 font-medium">
          {isPlaying ? (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              Playing ? {formatTime(currentTime)}
            </span>
          ) : (
            'Paused'
          )}
        </p>
      </div>
    </motion.div>
  );
};
