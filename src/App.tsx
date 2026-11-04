import React from 'react';
import { AudioProvider } from './context/AudioContext';
import { FloatingStars } from './components/FloatingStars';
import { Navbar } from './components/Navbar';
import { WelcomeSection } from './components/WelcomeSection';
import { ScrapbookGallery } from './components/ScrapbookGallery';
import { MemoryVault } from './components/MemoryVault';
import { EnvelopeLetter } from './components/EnvelopeLetter';
import { BirthdayCake } from './components/BirthdayCake';
import { FriendshipContract } from './components/FriendshipContract';
import { FinalEmotional } from './components/FinalEmotional';
import { FloatingMusicToggle } from './components/FloatingMusicToggle';

export const App: React.FC = () => {
  const handleScrollToReasons = () => {
    const el = document.getElementById('section-reasons');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFinal = () => {
    const el = document.getElementById('section-final');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AudioProvider>
      <div className="relative min-h-screen text-slate-800 bg-gradient-to-b from-[#F0F9FF] via-[#EBF5FB] via-[#F4F9FD] to-[#F0F9FF]">
        {/* Floating Stars and Ambience */}
        <FloatingStars />

        {/* Floating Top Navigation */}
        <Navbar />

        {/* Main Website Flow */}
        <main className="relative z-10">
          {/* 01 — WELCOME */}
          <WelcomeSection onOpenSurprise={handleScrollToReasons} />

          {/* 02 — 13 REASONS WHY YOU'RE SPECIAL (Scrapbook Board) */}
          <ScrapbookGallery />

          {/* 03 — LITTLE SECRET: MEMORY VAULT (Password Protected) */}
          <MemoryVault />

          {/* 04 — A BEAUTIFUL LETTER FOR YOU (Unfolding Envelope) */}
          <EnvelopeLetter />

          {/* 05 — MAKE A WISH (Birthday Cake with lit candle & 60s timer) */}
          <BirthdayCake />

          {/* 06 — FRIENDSHIP CONTRACT (Interactive Question) */}
          <FriendshipContract onProceedToFinal={handleScrollToFinal} />

          {/* 07 — FINAL EMOTIONAL PAGE */}
          <FinalEmotional />
        </main>

        {/* Small Elegant Floating Music Toggle Button */}
        <FloatingMusicToggle />
      </div>
    </AudioProvider>
  );
};

export default App;
