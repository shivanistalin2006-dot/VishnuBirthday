import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, BookOpen, RefreshCw } from 'lucide-react';

export const EnvelopeLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unfolded, setUnfolded] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Sequence: Flap opens (0.6s) -> Letter slides out (0.8s) -> Letter unfolds (0.6s)
      setTimeout(() => {
        setUnfolded(true);
      }, 900);
    }
  };

  const handleClose = () => {
    setUnfolded(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <section id="section-letter" className="relative py-24 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm"
        >
          <Mail className="w-4 h-4 text-sky-600" />
          <span>A Sealed Letter</span>
        </motion.div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          A Beautiful Letter For You
        </h2>

        <p className="font-handwriting text-2xl text-sky-700 mt-2">
          "Scroll for a beautiful letter for you ?"
        </p>
      </div>

      {/* Main Envelope & Letter Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        {!unfolded ? (
          /* CLOSED ENVELOPE VIEW */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Click to open badge */}
            <p className="text-sm font-semibold text-sky-600 mb-6 flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Tap the sealed envelope to open</span>
              <Sparkles className="w-4 h-4 text-sky-500" />
            </p>

            {/* Baby Blue Envelope Container */}
            <div
              onClick={handleOpenEnvelope}
              className="relative w-80 sm:w-96 h-56 sm:h-64 bg-sky-200/90 rounded-2xl shadow-2xl cursor-pointer group hover:scale-[1.02] transition-transform duration-300 border border-sky-300/60 overflow-hidden flex items-center justify-center"
              style={{
                boxShadow: '0 25px 40px -15px rgba(2, 132, 199, 0.25)',
              }}
            >
              {/* Envelope Flap Top Triangle */}
              <motion.div
                animate={{
                  rotateX: isOpen ? 180 : 0,
                  transformOrigin: 'top center',
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-1/2 bg-sky-300/95 z-20"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                }}
              />

              {/* Envelope Left & Right folds */}
              <div
                className="absolute inset-0 bg-sky-200 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                }}
              />
              <div
                className="absolute inset-0 bg-sky-200 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                }}
              />
              {/* Bottom fold */}
              <div
                className="absolute inset-0 bg-sky-100 z-10 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%)',
                }}
              />

              {/* Heart Wax Seal Sticker */}
              <motion.div
                animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute z-30 w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform"
              >
                <Heart className="w-7 h-7 fill-white" />
              </motion.div>

              {/* Letter Peek sliding up */}
              {isOpen && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: -60, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute z-15 w-[85%] h-40 bg-white rounded-lg shadow-md border border-slate-200"
                />
              )}
            </div>

            <p className="mt-4 text-xs text-slate-500 font-medium tracking-wide">
              To: Vishnu Prasath ? From: Your Favorite Irritator
            </p>
          </motion.div>
        ) : (
          /* FULLY UNFOLDED HANDWRITTEN LETTER */
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-[#FCFDFE] paper-texture rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-sky-200 relative overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.2), 0 0 0 1px rgba(224, 242, 254, 0.8)',
            }}
          >
            {/* Top washi tape */}
            <div className="washi-tape bg-sky-200/90" />

            {/* Letter Head */}
            <div className="flex items-center justify-between border-b border-sky-100 pb-4 mb-6">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Handwritten Birthday Note</span>
              </div>
              <button
                onClick={handleClose}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-sky-600 transition-colors"
                title="Fold letter back"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Fold</span>
              </button>
            </div>

            {/* Letter Body in Beautiful Handwritten Font */}
            <div className="font-handwriting text-2xl sm:text-3xl text-slate-800 leading-relaxed space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              <p className="font-bold text-3xl sm:text-4xl text-sky-800">
                Dear Vishnu,
              </p>

              <p>
                Happy Birthday to the most special person in my life! Today is all about celebrating you ? the boy with the gentlest heart, the most patient ears, and the most comforting presence anyone could ever ask for.
              </p>

              <p>
                I honestly don't know where to begin when it comes to you. From the moment you entered my life as my first best male friend, everything shifted. You gave me a friendship that feels effortless, unconditional, and entirely safe. With you, I never have to hesitate, I never have to hide my feelings, and I never have to pretend to be someone I'm not.
              </p>

              <p>
                Thank you for always putting up with my mood swings, my dramatic rants, and my endless irritation. I know I can be a handful sometimes, starting fights over the silliest things and throwing tantrums ? but you always listen with a calm smile, never holding anything against me. You never let me sit alone with my sadness for too long; just one phone call with you has this magical way of making me laugh through my tears.
              </p>

              <p>
                You have stood by me through my hardest days and cheered the loudest during my happiest moments. Having you in my life is one of the greatest blessings I will always be grateful for. No matter where life takes us, how busy we get, or how much we bicker, remember that you hold a place in my heart that no one else can ever replace.
              </p>

              <p>
                I hope life gives you every ounce of happiness, peace, success, and love that you deserve. May all your dreams come true sooner than you imagine, and may that bright smile never fade.
              </p>

              <p>
                Always stay the same kutty paiya, my personal caretaker, and my best buddy.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-sky-100">
                <p className="font-handwriting text-3xl text-slate-800 font-bold leading-normal">
                  With lots of love,
                  <br />
                  <span className="text-sky-600">Your favourite irritator. ????</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
