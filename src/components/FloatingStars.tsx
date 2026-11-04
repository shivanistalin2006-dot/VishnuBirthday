import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FloatingStars: React.FC = () => {
  // Generate random stable stars
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${(i * 3.3 + (i % 5) * 2) % 100}%`,
      top: `${(i * 7.1 + (i % 7) * 3) % 100}%`,
      size: (i % 3) + 2,
      delay: (i * 0.25) % 3,
      duration: 3 + (i % 4),
      opacity: 0.3 + ((i % 5) * 0.12),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-sky-300"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: '0 0 8px 1px rgba(186, 230, 253, 0.9)',
          }}
          animate={{
            opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.25, 0.8],
            y: [0, -15, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-1/4 left-10 text-sky-300/40 text-2xl select-none"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        ?
      </motion.div>
      <motion.div
        className="absolute top-2/3 right-12 text-sky-400/40 text-3xl select-none"
        animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        ?
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-1/4 text-sky-200/50 text-xl select-none"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        ?
      </motion.div>
    </div>
  );
};
