import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCheck, Heart, Award, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FriendshipContractProps {
  onProceedToFinal: () => void;
}

export const FriendshipContract: React.FC<FriendshipContractProps> = ({ onProceedToFinal }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number } | null>(null);
  const [noMessage, setNoMessage] = useState<string>('');
  const [noEliminated, setNoEliminated] = useState<boolean>(false);
  const [dodgeCount, setDodgeCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Playful dodge logic when hovering or touching NO button
  const handleNoDodge = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Safe bounds within container
    const maxX = (rect.width / 2) - 65;
    const maxY = 100;

    const randomX = (Math.random() * 2 - 1) * maxX;
    const randomY = (Math.random() * 2 - 1) * maxY;

    setNoPosition({ x: randomX, y: randomY });
    setDodgeCount((prev) => prev + 1);

    setNoMessage('Kill you shut!! 😾👊 No other go, click YES!! 😂💙');
  };

  // If he actually clicks/taps NO: remove NO button so there is NO OTHER GO except YES!
  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setNoMessage('Kill you shut!! 😾👊 No other go, click YES!! 😂💙');
    setNoEliminated(true);
  };

  const handleYes = () => {
    setIsSigned(true);
    // Grand celebration burst
    confetti({
      particleCount: 90,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#60A5FA', '#BAE6FD', '#F472B6', '#FBBF24'],
    });
  };

  return (
    <section id="section-contract" className="relative py-24 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm"
        >
          <FileCheck className="w-4 h-4 text-sky-600" />
          <span>Lifetime Agreement</span>
        </motion.div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          One Important Question!
        </h2>
      </div>

      <div className="relative z-10 max-w-xl w-full">
        <AnimatePresence mode="wait">
          {!isSigned ? (
            /* QUESTION & INTERACTIVE BUTTONS */
            <motion.div
              key="contract-question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-sky-100 text-center relative overflow-hidden"
            >
              {/* Question */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800 mb-6 leading-snug">
                Are you willing to sign the contract of being my friend for the rest of your life?
              </h3>

              {/* Playful Warning Message when attempting NO */}
              <AnimatePresence>
                {noMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mb-6 p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl text-rose-600 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md animate-pulse"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                    <span>{noMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interaction Playground */}
              <div
                ref={containerRef}
                className="relative min-h-[160px] flex items-center justify-center gap-6"
              >
                {/* YES BUTTON (Fixed, pulses when NO is tried or eliminated) */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={noMessage ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                  transition={{ repeat: noMessage ? Infinity : 0, duration: 1.2 }}
                  onClick={handleYes}
                  className={`px-9 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all flex items-center gap-2 cursor-pointer z-10 ${
                    noEliminated ? 'scale-110 ring-4 ring-sky-300' : ''
                  }`}
                >
                  <span>{noEliminated ? 'YES! (No Other Go! 💙)' : 'YES 💙'}</span>
                  <Heart className="w-5 h-5 fill-white" />
                </motion.button>

                {/* NO BUTTON (Dodges on hover, and if clicked disappears completely so there is no other go) */}
                {!noEliminated && (
                  <motion.button
                    animate={noPosition ? { x: noPosition.x, y: noPosition.y } : { x: 0, y: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    onMouseEnter={handleNoDodge}
                    onTouchStart={handleNoDodge}
                    onClick={handleNoClick}
                    className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-lg border border-slate-300 shadow-sm transition-colors cursor-pointer select-none"
                  >
                    NO
                  </motion.button>
                )}
              </div>

              {noMessage && (
                <p className="text-xs sm:text-sm text-sky-600 font-bold mt-4">
                  👉 Click YES! No other go! 😂💙
                </p>
              )}
            </motion.div>
          ) : (
            /* SIGNED LIFETIME FRIENDSHIP CERTIFICATE */
            <motion.div
              key="contract-certificate"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-double border-sky-300 text-center relative overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.25)',
              }}
            >
              {/* Certificate Stamp */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 rotate-12">
                <div className="w-20 h-20 rounded-full border-4 border-dashed border-sky-400 bg-sky-50/90 text-sky-600 flex flex-col items-center justify-center p-1 shadow-md">
                  <ShieldCheck className="w-6 h-6 mb-0.5" />
                  <span className="text-[8px] font-black uppercase tracking-widest leading-none">
                    OFFICIAL
                  </span>
                  <span className="text-[7px] font-bold text-sky-500">LIFETIME</span>
                </div>
              </div>

              {/* Certificate Header */}
              <div className="inline-flex items-center gap-2 text-sky-600 mb-2 font-bold text-xs tracking-widest uppercase">
                <Award className="w-5 h-5" />
                <span>Certificate of Lifetime Friendship</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">
                CONTRACT ACCEPTED & SIGNED
              </h3>

              <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-6" />

              {/* Certificate Body */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 font-serif">
                <p>
                  This official document legally, emotionally, and permanently certifies that:
                </p>
                <div className="bg-sky-50 rounded-2xl py-3 px-6 border border-sky-200">
                  <p className="font-handwriting text-3xl text-sky-800 font-bold">
                    Vishnu Prasath
                  </p>
                </div>
                <p>
                  has unconditionally agreed to be my best friend for the rest of his natural life. No refunds, no cancellations, and no escaping allowed! 📜💙
                </p>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-4 border-t border-sky-100 pt-6 mb-8 text-center">
                <div>
                  <p className="font-handwriting text-2xl text-slate-800 font-bold">Vishnu Prasath</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Best Friend Signature</p>
                </div>
                <div>
                  <p className="font-handwriting text-2xl text-sky-700 font-bold">Shivani</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Best Friend Signature</p>
                </div>
              </div>

              {/* Button to proceed to Final Page */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onProceedToFinal}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <span>Read Final Words 💌</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
