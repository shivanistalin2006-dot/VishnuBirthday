import React, { useState, useEffect } from 'react';
import { Sparkles, Image, Lock, Mail, Cake, FileText, Heart } from 'lucide-react';

const sections = [
  { id: 'section-welcome', label: 'Welcome', icon: Sparkles },
  { id: 'section-reasons', label: '13 Reasons', icon: Image },
  { id: 'section-vault', label: 'Secret Vault', icon: Lock },
  { id: 'section-letter', label: 'Letter', icon: Mail },
  { id: 'section-wish', label: 'Make a Wish', icon: Cake },
  { id: 'section-contract', label: 'Contract', icon: FileText },
  { id: 'section-final', label: 'Thank You', icon: Heart },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-welcome');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 max-w-fit px-3 py-2 rounded-full bg-white/80 backdrop-blur-md border border-sky-200/80 shadow-lg shadow-sky-500/5 hidden sm:flex items-center gap-1">
      {sections.map((sec) => {
        const Icon = sec.icon;
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isActive
                ? 'text-sky-900 bg-sky-100 shadow-sm'
                : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
            }`}
            title={sec.label}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-600' : 'text-slate-400'}`} />
            <span>{sec.label}</span>
          </button>
        );
      })}
    </header>
  );
};
