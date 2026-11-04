import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, PartyPopper, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BirthdayCake: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'counting' | 'ready_to_blow' | 'blown'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const timerRef = useRef<number | null>(null);

  // Timer countdown handling with cleanup
  useEffect(() => {
    if (status === 'counting') {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setStatus('ready_to_blow');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [status]);

  const handleStartWish = () => {
    if (status === 'idle') {
      setTimeLeft(30);
      setStatus('counting');
    }
  };

  const handleBlowCandle = () => {
    if (status === 'ready_to_blow') {
      setStatus('blown');

      // Grand celebration confetti bursts
      const duration = 3.5 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#38BDF8', '#BAE6FD', '#60A5FA', '#F472B6', '#FBBF24'],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#38BDF8', '#BAE6FD', '#60A5FA', '#F472B6', '#FBBF24'],
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStatus('idle');
    setTimeLeft(30);
  };

  const isCandleLit = status !== 'blown';

  return (
    <section id="section-wish" className="relative py-24 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>Candlelight Moment</span>
        </motion.div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          Make a Wish! ??
        </h2>

        <p className="font-handwriting text-2xl text-sky-700 mt-2">
          "A special 30 seconds just to dream with your whole heart."
        </p>
      </div>

      {/* Cake Container Card */}
      <div className="relative z-10 max-w-xl w-full bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-sky-100 flex flex-col items-center text-center">
        {/* Birthday Cake Illustration with SVG */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-6">
          <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-lg">
            {/* Cake Plate */}
            <ellipse cx="150" cy="265" rx="120" ry="16" fill="#E2E8F0" />
            <ellipse cx="150" cy="261" rx="110" ry="12" fill="#F8FAFC" />

            {/* Bottom Tier (Tier 1) */}
            <rect x="55" y="195" width="190" height="60" rx="10" fill="#BAE6FD" />
            <rect x="55" y="215" width="190" height="15" fill="#7DD3FC" opacity="0.6" />
            {/* White Frosting Drippings on Bottom Tier */}
            <path
              d="M55,195 C70,210 80,195 95,208 C110,195 125,212 140,195 C155,210 170,195 185,210 C200,195 215,208 230,195 C240,205 245,195 245,195 L245,195 L55,195 Z"
              fill="#FFFFFF"
            />

            {/* Top Tier (Tier 2) */}
            <rect x="85" y="140" width="130" height="58" rx="8" fill="#E0F2FE" />
            <rect x="85" y="158" width="130" height="12" fill="#BAE6FD" opacity="0.6" />
            {/* Top Frosting Dripping */}
            <path
              d="M85,140 C100,152 110,140 125,152 C140,140 150,152 165,140 C180,152 195,140 215,140 L215,140 L85,140 Z"
              fill="#FFFFFF"
            />

            {/* Decorative Stars / Dots on Cake */}
            <circle cx="105" cy="175" r="3.5" fill="#38BDF8" />
            <circle cx="150" cy="175" r="3.5" fill="#F472B6" />
            <circle cx="195" cy="175" r="3.5" fill="#FBBF24" />
            <circle cx="80" cy="235" r="4" fill="#38BDF8" />
            <circle cx="120" cy="235" r="4" fill="#F472B6" />
            <circle cx="150" cy="235" r="4" fill="#FBBF24" />
            <circle cx="180" cy="235" r="4" fill="#38BDF8" />
            <circle cx="220" cy="235" r="4" fill="#818CF8" />

            {/* Birthday Candle Stem */}
            <rect x="145" y="90" width="10" height="50" rx="3" fill="#38BDF8" />
            {/* Candle Stripes */}
            <path d="M145,100 L155,106" stroke="#FFFFFF" strokeWidth="2.5" />
            <path d="M145,115 L155,121" stroke="#FFFFFF" strokeWidth="2.5" />
            <path d="M145,130 L155,136" stroke="#FFFFFF" strokeWidth="2.5" />
            {/* Candle Wick */}
            <line x1="150" y1="90" x2="150" y2="82" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

            {/* LIT FLAME WITH ANIMATION */}
            {isCandleLit && (
              <g className="flame-animated">
                {/* Outer Glow */}
                <ellipse cx="150" cy="68" rx="14" ry="18" fill="rgba(251, 191, 36, 0.3)" />
                {/* Flame Body */}
                <path
                  d="M150,54 C158,66 160,78 150,83 C140,78 142,66 150,54 Z"
                  fill="#F59E0B"
                />
                {/* Flame Inner Core */}
                <path
                  d="M150,60 C154,68 155,77 150,80 C145,77 146,68 150,60 Z"
                  fill="#FEF08A"
                />
              </g>
            )}

            {/* EXTINGUISHED SMOKE PUFF */}
            {!isCandleLit && (
              <g className="smoke-animated">
                <path
                  d="M150,80 Q145,65 152,50 T148,35"
                  stroke="#94A3B8"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <circle cx="152" cy="40" r="5" fill="#CBD5E1" opacity="0.6" />
                <circle cx="146" cy="30" r="7" fill="#E2E8F0" opacity="0.4" />
              </g>
            )}
          </svg>
        </div>

        {/* STATUS MESSAGES & COUNTDOWN */}
        <div className="w-full">
          {/* 1. INITIAL STATE */}
          {status === 'idle' && (
            <div className="space-y-4">
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Click below to start your exact 30-second wish timer.
                <br />
                Take these 30 seconds to think of your deepest wish!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleStartWish}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 text-white font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>MAKE A WISH ?</span>
              </motion.button>
            </div>
          )}

          {/* 2. COUNTING DOWN STATE (30 seconds) */}
          {status === 'counting' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-5"
            >
              {/* Circular Countdown Display */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="#E0F2FE"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="#0284C7"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 46}
                    strokeDashoffset={(2 * Math.PI * 46) * (1 - timeLeft / 30)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl font-extrabold text-slate-800">
                    {timeLeft}
                  </span>
                  <span className="text-[10px] text-sky-600 font-bold uppercase tracking-wider">
                    Seconds
                  </span>
                </div>
              </div>

              {/* Wish-making message */}
              <div className="bg-sky-50/80 rounded-2xl p-4 border border-sky-200/60 max-w-md mx-auto">
                <p className="font-handwriting text-2xl text-sky-800 leading-snug">
                  "Close your eyes, think of the happiest dream you have, and make a heartfelt wish..."
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  The candle stays lit while you make your wish! ?
                </p>
              </div>
            </motion.div>
          )}

          {/* 3. READY TO BLOW (30 seconds completed) */}
          {status === 'ready_to_blow' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl text-sm font-semibold">
                Time is up! Your wish has been made in your heart! ??
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleBlowCandle}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-sky-500/40 hover:shadow-sky-500/60 transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto animate-pulse"
              >
                <Wind className="w-6 h-6 animate-bounce" />
                <span>BLOW ??</span>
              </motion.button>
            </motion.div>
          )}

          {/* 4. BLOWN OUT (Celebration) */}
          {status === 'blown' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="p-5 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl shadow-sm">
                <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm mb-2">
                  <PartyPopper className="w-5 h-5 text-sky-500" />
                  <span>WISH SENT TO THE STARS! ??</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                  Happy Birthday Vishnu!
                </p>
                <p className="font-handwriting text-2xl text-sky-700 mt-1">
                  "May your wish fly straight to the stars and come true sooner than you imagine!"
                </p>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-600 transition-colors pt-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Make another wish</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
