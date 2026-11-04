import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

interface WelcomeSectionProps {
  onOpenSurprise: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenSurprise }) => {
  const { startMusicOnInteraction } = useAudio();

  const handleOpenClick = () => {
    // Start continuous background music on user's first interaction
    startMusicOnInteraction();
    onOpenSurprise();
  };

  return (
    <section id="section-welcome" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Dreamy Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/50 via-blue-100/40 to-sky-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Stamp / Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-sky-500 animate-spin-slow" />
        <span className="tracking-wide uppercase">A Special Digital Scrapbook</span>
        <Sparkles className="w-4 h-4 text-sky-500 animate-spin-slow" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight max-w-4xl"
      >
        HAPPY BIRTHDAY TO MY{' '}
        <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500 bg-clip-text text-transparent underline decoration-sky-300 decoration-wavy decoration-2">
          FAVORITE PERSON
        </span>
      </motion.h1>

      {/* Vishnu's Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 my-4"
      >
        <span className="font-handwriting text-5xl sm:text-7xl md:text-8xl text-sky-600 font-bold block transform -rotate-2 drop-shadow-sm">
          Vishnu Prasath
        </span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 text-base sm:text-xl text-slate-600 max-w-xl mx-auto mb-10 font-medium"
      >
        A little something made just for you.
      </motion.p>

      {/* Button: Open Your Surprise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(2, 132, 199, 0.4)' }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 text-white font-semibold text-lg shadow-lg shadow-sky-400/30 transition-all cursor-pointer border border-sky-300/40"
        >
          <span>Open Your Surprise ?</span>
          <Heart className="w-5 h-5 fill-white/80 group-hover:scale-125 transition-transform text-white" />
        </motion.button>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 pointer-events-none select-none text-xs"
      >
        <span className="tracking-widest uppercase text-[10px] text-sky-600 font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
