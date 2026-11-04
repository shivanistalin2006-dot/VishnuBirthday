import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Stars, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const emotionalMessages = [
  'Thank you for being my first best male friend.',
  'Thank you for listening without judging me.',
  'Sorry for all the fights, irritation and everything.',
  'Thank you for being someone I can always talk to without thinking twice.',
  'No matter how much we fight, I never want to lose you.',
  'You will always be my Vishnu.',
];

export const FinalEmotional: React.FC = () => {
  const [hugSent, setHugSent] = useState(false);

  const handleSendHug = () => {
    setHugSent(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#BAE6FD', '#F472B6', '#F43F5E', '#FFFFFF'],
    });
  };

  return (
    <section id="section-final" className="relative py-28 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dreamy Ethereal Glow & Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-200/40 via-blue-100/50 to-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle sparkles in corners */}
      <div className="absolute top-10 left-10 text-sky-300 text-3xl animate-twinkle pointer-events-none">?</div>
      <div className="absolute bottom-12 right-12 text-sky-400 text-3xl animate-twinkle pointer-events-none">?</div>

      <div className="relative z-10 max-w-3xl w-full mx-auto">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm"
        >
          <Stars className="w-4 h-4 text-sky-600" />
          <span>From My Soul to Yours</span>
          <Stars className="w-4 h-4 text-sky-600" />
        </motion.div>

        {/* Heading: Thank You. */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-slate-800 tracking-tight mb-12"
        >
          Thank You.
        </motion.h2>

        {/* Grid of 6 Emotional Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 text-left">
          {emotionalMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="bg-white/85 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-sky-100 shadow-md hover:shadow-lg hover:border-sky-200 transition-all flex items-start gap-3.5 group"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
              <p className="font-serif text-base sm:text-lg text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                {msg}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Prominent Climax Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-sky-200 relative overflow-hidden"
          style={{
            boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.25)',
          }}
        >
          {/* Subtle Decorative Heart Watermark */}
          <div className="absolute -bottom-10 -right-10 text-sky-100/60 pointer-events-none select-none">
            <Heart className="w-56 h-56 fill-current" />
          </div>

          <div className="relative z-10 space-y-4">
            <p className="text-xs uppercase font-extrabold tracking-widest text-sky-600">
              Forever My Best Friend
            </p>

            {/* Prominent Message */}
            <h3 className="font-handwriting text-4xl sm:text-6xl md:text-7xl font-bold text-sky-700 leading-tight">
              "Love you lots, my kutty paiya ?"
            </h3>

            {/* Below Message */}
            <p className="font-serif text-2xl sm:text-3xl text-slate-700 italic font-medium pt-2">
              "I never want to miss you."
            </p>

            {/* Send a hug interaction */}
            <div className="pt-8">
              {!hugSent ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendHug}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-semibold shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Send a tight hug back to Shivani ?</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-sky-600 text-sky-600 animate-ping" />
                  <span>Hug received! You are the best friend in the world! ??</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Footer Credit */}
        <div className="mt-16 text-center text-xs text-slate-400 font-medium">
          <p>Created with love, late-night memories, and endless laughter for Vishnu Prasath's Birthday ??</p>
          <p className="mt-1 text-slate-400/80">? A Little World For Vishnu ? Made by Shivani</p>
        </div>
      </div>
    </section>
  );
};
