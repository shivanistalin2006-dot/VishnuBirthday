import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, KeyRound, Sparkles, AlertCircle, BookHeart, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MemoryVault: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Case-insensitive and trimmed comparison for 'INFINITE'
    const cleanInput = password.trim().toUpperCase();

    if (cleanInput === 'INFINITE') {
      setIsUnlocking(true);
      setErrorMsg('');

      // Celebration burst for unlocking secret
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#BAE6FD', '#0284C7', '#E0F2FE'],
      });

      setTimeout(() => {
        setIsUnlocked(true);
        setIsUnlocking(false);
      }, 900);
    } else {
      setIsShaking(true);
      setErrorMsg('Hmm, think about the depth of our bond... try again ??');
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <section id="section-vault" className="relative py-24 px-4 sm:px-6 min-h-screen flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-sky-600" />
            <span>Vault of Trust</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            LITTLE SECRET ?
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-sky-700 mt-2">
            "How much do you think I trust you?"
          </p>
        </div>

        {/* Vault Content: Locked vs Unlocked */}
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            /* LOCKED STATE: Diary Lockbox */
            <motion.div
              key="locked-vault"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-sky-100 relative text-center overflow-hidden"
            >
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-sky-300 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-sky-300 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-sky-300 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-sky-300 rounded-br-lg" />

              {/* Padlock Icon with Animation */}
              <motion.div
                animate={
                  isUnlocking
                    ? { rotate: [0, -10, 10, -5, 0], scale: [1, 1.2, 1] }
                    : isShaking
                    ? { x: [-10, 10, -8, 8, -4, 4, 0] }
                    : { y: [0, -4, 0] }
                }
                transition={isUnlocking ? { duration: 0.8 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-sky-400/30"
              >
                {isUnlocking ? (
                  <Unlock className="w-10 h-10 animate-bounce" />
                ) : (
                  <Lock className="w-10 h-10" />
                )}
              </motion.div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                This diary page is locked.
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Enter the password to discover something special.
              </p>

              {/* Password Form */}
              <form onSubmit={handleUnlock} className="space-y-4">
                <div className="relative">
                  <KeyRound className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Enter secret word..."
                    className="w-full pl-12 pr-4 py-3.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all text-center font-medium tracking-wider"
                    aria-label="Secret password"
                    autoComplete="off"
                  />
                </div>

                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1.5 text-xs text-rose-500 font-medium pt-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isUnlocking}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{isUnlocking ? 'Unlocking Vault...' : 'Unlock Special Memory'}</span>
                </motion.button>
              </form>
            </motion.div>
          ) : (
            /* UNLOCKED STATE: Secret Diary Layout with memory_01 & memory_02 */
            <motion.div
              key="unlocked-vault"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-sky-200 relative overflow-hidden"
            >
              {/* Unlocked Header Banner */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-sky-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
                      Secret Vault Unlocked
                    </h3>
                    <p className="text-xs text-emerald-600 font-semibold tracking-wide">
                      PASSWORD VERIFIED: INFINITE
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium">
                  <BookHeart className="w-4 h-4 text-sky-500" />
                  <span>Personal Journal</span>
                </div>
              </div>

              {/* Two Special Photographs ONLY: memory_01 and memory_02 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Memory 01 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white p-4 pb-6 rounded-2xl polaroid-shadow border border-sky-100 transform -rotate-1 hover:rotate-0 transition-transform"
                >
                  <div className="washi-tape bg-sky-200/80" />
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-slate-100">
                    <img
                      src="/assets/memories/memory_01.jpg"
                      alt="Special Memory 01"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-handwriting text-center text-xl text-slate-700 font-semibold">
                    "Treasured memory, forever held close."
                  </p>
                </motion.div>

                {/* Memory 02 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white p-4 pb-6 rounded-2xl polaroid-shadow border border-sky-100 transform rotate-1 hover:rotate-0 transition-transform"
                >
                  <div className="washi-tape bg-blue-200/80" />
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-slate-100">
                    <img
                      src="/assets/memories/memory_02.jpg"
                      alt="Special Memory 02"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-handwriting text-center text-xl text-slate-700 font-semibold">
                    "Through every chapter of life."
                  </p>
                </motion.div>
              </div>

              {/* Exact Memory Message in Beautiful Typography */}
              <div className="bg-sky-50/70 border border-sky-200/70 rounded-2xl p-6 sm:p-8 relative">
                <div className="space-y-4 font-serif text-base sm:text-lg text-slate-700 leading-relaxed text-center sm:text-left">
                  <p className="italic">
                    "No matter how difficult my day gets, one call with you makes me laugh again."
                  </p>
                  <p>
                    "You never let me sit with my sadness for too long."
                  </p>
                  <p>
                    "Even when I come with endless complaints, fights and irritation, you patiently listen."
                  </p>
                  <p>
                    "You have been there for me whenever I needed someone the most."
                  </p>
                  <p className="font-medium text-sky-800">
                    "I hope life gives you every, every happiness you deserve. May all your dreams come true sooner than you imagine."
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sky-200/60 flex items-center justify-between text-xs text-sky-600 font-medium">
                  <span>? Written from the bottom of my heart</span>
                  <span>Forever & Always ?</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
