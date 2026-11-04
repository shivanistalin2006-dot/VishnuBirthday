import React from 'react';
import { AudioProvider } from './context/AudioContext';
import { FloatingStars } from './components/FloatingStars';
import { Navbar } from './components/Navbar';
import { WelcomeSection } from './components/WelcomeSection';
import { AudioPlayerSection, FloatingAudioWidget } from './components/AudioPlayer';
import { ScrapbookGallery } from './components/ScrapbookGallery';
import { MemoryVault } from './components/MemoryVault';
import { EnvelopeLetter } from './components/EnvelopeLetter';
import { BirthdayCake } from './components/BirthdayCake';
import { FriendshipContract } from './components/FriendshipContract';
import { FinalEmotional } from './components/FinalEmotional';

export const App: React.FC = () => {
  const handleScrollToMusic = () => {
    const el = document.getElementById('section-music');
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

        {/* 8 Structured Sections in Exact Sequence */}
        <main className="relative z-10">
          {/* PAGE 01 ? WELCOME */}
          <WelcomeSection onOpenSurprise={handleScrollToMusic} />

          {/* PAGE 02 ? THESE ARE FOR YOU (Music Player) */}
          <AudioPlayerSection />

          {/* PAGE 03 ? 13 REASONS WHY YOU'RE SPECIAL (Scrapbook Gallery) */}
          <ScrapbookGallery />

          {/* PAGE 04 ? LITTLE SECRET: MEMORY VAULT (Password Protected) */}
          <MemoryVault />

          {/* PAGE 05 ? A BEAUTIFUL LETTER FOR YOU (Unfolding Envelope) */}
          <EnvelopeLetter />

          {/* PAGE 06 ? MAKE A WISH (Birthday Cake with lit candle & 60s timer) */}
          <BirthdayCake />

          {/* PAGE 07 ? FRIENDSHIP CONTRACT (Interactive Question) */}
          <FriendshipContract onProceedToFinal={handleScrollToFinal} />

          {/* PAGE 08 ? FINAL EMOTIONAL PAGE */}
          <FinalEmotional />
        </main>

        {/* Persistent Floating Audio Pill */}
        <FloatingAudioWidget />
      </div>
    </AudioProvider>
  );
};

export default App;
