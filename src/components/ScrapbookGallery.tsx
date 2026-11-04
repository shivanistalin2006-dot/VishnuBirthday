import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ZoomIn, Camera } from 'lucide-react';
import { ReasonItem } from '../types';

const reasonsData: ReasonItem[] = [
  {
    id: 1,
    filename: '/assets/individual/recent_01.jpg',
    title: 'My Biggest Supporter',
    tagline: 'Always in my corner',
    description: 'No matter what crazy idea or ambition I have, you are always the first one cheering for me with the loudest voice and proudest smile.',
    rotation: '-rotate-2',
    tapeColor: 'bg-sky-200/80',
  },
  {
    id: 2,
    filename: '/assets/individual/recent_02.jpg',
    title: 'My Good Listener',
    tagline: 'Patient ears for all my stories',
    description: 'You listen to my endless stories, rants, and silly theories without ever checking the time or getting tired. You truly hear me.',
    rotation: 'rotate-1.5',
    tapeColor: 'bg-blue-200/80',
  },
  {
    id: 3,
    filename: '/assets/individual/recent_03.jpg',
    title: 'My Personal Caretaker',
    tagline: 'Protective & genuine',
    description: 'From reminding me to take care of myself to checking in when things feel overwhelming, you genuinely care like family.',
    rotation: '-rotate-1',
    tapeColor: 'bg-indigo-100/80',
  },
  {
    id: 4,
    filename: '/assets/individual/recent_04.jpg',
    title: 'My Professional Irritator',
    tagline: 'Master of annoying me with love',
    description: 'Nobody has a PhD in annoying me and pushing my buttons quite like you do, yet life would be so boring without your teasing!',
    rotation: 'rotate-2.5',
    tapeColor: 'bg-sky-100/90',
  },
  {
    id: 5,
    filename: '/assets/individual/recent_05.jpg',
    title: 'My Happiness Booster',
    tagline: 'Instant remedy for bad days',
    description: 'Even on days when nothing seems to go right, just one joke or stupid comment from you brings back my biggest, purest laugh.',
    rotation: '-rotate-2',
    tapeColor: 'bg-blue-100/80',
  },
  {
    id: 6,
    filename: '/assets/individual/recent_06.jpg',
    title: 'My Non-Judgemental Person',
    tagline: 'Zero pretenses, 100% real',
    description: 'With you, I never have to filter my thoughts or pretend. You accept me exactly as the chaotic, emotional soul I am.',
    rotation: 'rotate-1',
    tapeColor: 'bg-sky-200/80',
  },
  {
    id: 7,
    filename: '/assets/individual/recent_07.jpg',
    title: 'My Favourite Sloth',
    tagline: 'Chief executive of chilling',
    description: 'Watching you procrastinate and chill is an art form. My go-to buddy for doing absolutely nothing productive and loving every second.',
    rotation: '-rotate-2.5',
    tapeColor: 'bg-indigo-200/70',
  },
  {
    id: 8,
    filename: '/assets/individual/recent_08.jpg',
    title: 'My Little Ghost',
    tagline: 'Disappears & pops right back',
    description: 'Disappearing out of nowhere for hours or days, only to pop back into chat like nothing happened with a casual "dei"! Classic Vishnu.',
    rotation: 'rotate-2',
    tapeColor: 'bg-sky-200/80',
  },
  {
    id: 9,
    filename: '/assets/individual/recent_09.jpg',
    title: 'My Backup Person',
    tagline: 'Always got my back',
    description: 'Whenever I find myself in a sticky situation or need someone to back me up, you are always just a single call away.',
    rotation: '-rotate-1.5',
    tapeColor: 'bg-blue-200/80',
  },
  {
    id: 10,
    filename: '/assets/individual/recent_10.jpg',
    title: 'My First Best Male Friend',
    tagline: 'A rare and sacred bond',
    description: 'A friendship that changed so much for me. You proved that real, pure, drama-free brotherhood and genuine loyalty truly exist.',
    rotation: 'rotate-1.5',
    tapeColor: 'bg-indigo-100/80',
  },
  {
    id: 11,
    filename: '/assets/individual/recent_11.jpg',
    title: 'My Partner in Every Fight',
    tagline: 'Fighting, laughing, repeat',
    description: 'We argue over the dumbest topics, fight passionately, stop talking for 10 minutes, and then start laughing together again.',
    rotation: '-rotate-2',
    tapeColor: 'bg-sky-100/90',
  },
  {
    id: 12,
    filename: '/assets/individual/recent_12.jpg',
    title: 'My Comfort Person',
    tagline: 'Safe haven of peace',
    description: 'The safe space where I do not have to explain why I am quiet or upset. Your presence alone calms the storm.',
    rotation: 'rotate-2',
    tapeColor: 'bg-blue-100/80',
  },
  {
    id: 13,
    filename: '/assets/individual/recent_13.jpg',
    title: 'My Favourite Human Being',
    tagline: 'Above everyone else',
    description: 'Through all the years, all the phases, and all the chaos ? you remain my absolute favorite person in the entire world.',
    rotation: '-rotate-1',
    tapeColor: 'bg-sky-200/90',
  },
];

export const ScrapbookGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ReasonItem | null>(null);

  return (
    <section id="section-reasons" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mb-4"
        >
          <Camera className="w-4 h-4 text-sky-600" />
          <span>The Memory Board</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
        >
          13 Reasons Why You're Special
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-slate-600 font-medium text-base sm:text-lg"
        >
          Every photograph tells a story of our friendship. Click any Polaroid to zoom in.
        </motion.p>
      </div>

      {/* Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start justify-items-center">
        {reasonsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            className="w-full max-w-sm"
          >
            {/* Polaroid Scrapbook Card */}
            <div
              onClick={() => setSelectedItem(item)}
              className={`group relative bg-white p-4 pb-6 rounded-xl polaroid-shadow hover:polaroid-shadow-hover transition-all duration-300 transform ${item.rotation} hover:rotate-0 hover:scale-[1.03] cursor-pointer border border-sky-100/80`}
            >
              {/* Washi Tape Header */}
              <div
                className={`washi-tape ${item.tapeColor}`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 96% 50%, 100% 100%, 0% 100%, 4% 50%)',
                }}
              />

              {/* Number Badge */}
              <div className="absolute top-6 right-6 z-10 w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
                {item.id}
              </div>

              {/* Photo Container with fixed aspect ratio to prevent distortion */}
              <div className="relative w-full aspect-[3/4] bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-inner">
                <img
                  src={item.filename}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-sky-800 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Card Caption */}
              <div className="text-center px-2">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest block mb-1">
                  Reason #{item.id}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-handwriting text-lg text-slate-500 mt-1 line-clamp-2 leading-tight">
                  "{item.description}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-sky-800 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo */}
              <div className="relative w-full aspect-[3/4] max-h-[60vh] rounded-2xl overflow-hidden shadow-md mb-6 bg-slate-100">
                <img
                  src={selectedItem.filename}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Tagline */}
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>REASON #{selectedItem.id} OF 13</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="font-handwriting text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-md mx-auto">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
