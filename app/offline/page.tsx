"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- PREMIUM OFFLINE HUB STYLES ---
const offlineStyles = `
  .offline-glass {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(255, 59, 48, 0.15);
    border-radius: 2rem;
  }
  @media (min-width: 768px) {
    .offline-glass { border-radius: 4rem; }
  }
  .filter-btn-off {
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .text-red-gradient {
    background: linear-gradient(180deg, #FF3B30 0%, #FF9500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .glow-red {
    box-shadow: 0 0 40px rgba(255, 59, 48, 0.25);
  }
  .ios-input-off {
    background: rgba(255, 59, 48, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.2rem;
    padding: 1rem;
    color: white;
    outline: none;
    width: 100%;
    transition: 0.3s;
    font-size: 14px;
  }
  .ios-input-off:focus { border-color: #FF3B30; background: rgba(255, 59, 48, 0.08); }
  .no-scrollbar::-webkit-scrollbar { display: none; }
`;

export default function OfflinePage() {
  const [activeFilter, setActiveFilter] = useState('Barchasi');
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [selectedHub, setSelectedHub] = useState<any>(null);

  const categories = ['Barchasi', 'Toshkent', 'Samarqand', 'Buxoro', 'Andijon'];

  const hubs = [
    { id: 1, name: "Digital City", city: "Andijon", address: "Bobur Shox Ko'chasi, 4", capacity: "200+ kishi", type: "CO-WORKING", color: "#FF3B30" },
    { id: 2, name: "IT Park Hub", city: "Toshkent", address: "Maxtumquli ko'chasi", capacity: "500+ kishi", type: "INNOVATION CENTER", color: "#FF3B30" },
    { id: 3, name: "C-Space", city: "Samarqand", address: "Amir Temur ko'chasi", capacity: "150+ kishi", type: "BUSINESS HUB", color: "#FF3B30" },
    { id: 4, name: "GroundZero", city: "Toshkent", address: "Mustaqillik shox ko'chasi", capacity: "100+ kishi", type: "CO-WORKING", color: "#FF3B30" },
  ];

  const filteredHubs = activeFilter === 'Barchasi' ? hubs : hubs.filter(h => h.city === activeFilter);

  const handleVisit = (hub: any) => {
    setSelectedHub(hub);
    setIsVisitOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 px-4 md:px-6 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: offlineStyles }} />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-5xl">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 md:px-10 py-3 md:py-5 flex justify-between items-center shadow-2xl">
          <Link href="/" className="text-xl md:text-2xl font-black italic tracking-tighter shrink-0">
            ISHBOR<span className="text-red-500">.</span>
          </Link>
          
          <div className="flex gap-4 md:gap-10 text-[12px] md:text-lg font-black italic tracking-tighter">
            <Link href="/online2" className="opacity-40 hover:opacity-100 transition-all">ONLINE</Link>
            <Link href="/offline" className="text-red-500 underline underline-offset-4 md:underline-offset-8">OFFLINE</Link>
          </div>

          <button className="hidden sm:block bg-red-600 text-white px-4 md:px-6 py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            JOY BAND QILISH
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <header className="text-center mb-12 md:mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-red-600/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black italic tracking-tighter mb-4 md:mb-6 uppercase text-red-gradient leading-none">
            Offline <span className="text-white">Hubs</span>
          </motion.h1>
          <p className="opacity-30 text-[8px] md:text-[11px] uppercase tracking-[0.8em] md:tracking-[1.5em] font-light">Real Space, Real Connection</p>
        </header>

        {/* --- CATEGORY FILTER --- */}
        <div className="flex justify-start md:justify-center gap-3 mb-12 md:mb-20 overflow-x-auto pb-4 no-scrollbar px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn-off whitespace-nowrap px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest border transition-all
                ${activeFilter === cat ? 'bg-red-600 border-red-400 text-white glow-red scale-105' : 'bg-white/5 border-white/10 opacity-40'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- HUBS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredHubs.map((hub) => (
              <motion.div
                layout
                key={hub.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="offline-glass p-6 md:p-12 flex flex-col justify-between min-h-[380px] md:min-h-[450px] relative group overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div>
                      <span className="text-red-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-2 block">{hub.city}</span>
                      <h3 className="text-2xl md:text-4xl font-black italic tracking-tighter group-hover:text-red-400 transition-colors leading-tight">{hub.name}</h3>
                    </div>
                  </div>
                  <div className="space-y-3 opacity-50 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    <p className="flex items-center gap-2">📍 {hub.address}</p>
                    <p className="flex items-center gap-2">👥 {hub.capacity}</p>
                    <p className="flex items-center gap-2 text-red-500 italic">#{hub.type}</p>
                  </div>
                </div>

                <div className="pt-6 md:pt-10 border-t border-white/5">
                  <button 
                    onClick={() => handleVisit(hub)}
                    className="w-full bg-white text-black py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-500"
                  >
                    Apply for Visit
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- VISIT MODAL --- */}
      <AnimatePresence>
        {isVisitOpen && (
          <div className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsVisitOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ y: "100%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: "100%", opacity: 0 }}
              className="offline-glass w-full max-w-lg p-8 md:p-12 relative border-white/10 shadow-[0_0_80px_rgba(255,59,48,0.2)] z-20 mb-4 md:mb-0"
            >
              <button onClick={() => setIsVisitOpen(false)} className="absolute top-6 right-6 md:top-10 md:right-10 opacity-30 hover:opacity-100 text-xl transition-all">✕</button>
              
              <div className="mb-8 md:mb-10 text-center">
                <span className="text-red-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 block">Visit Reservation</span>
                <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-2">{selectedHub?.name}</h3>
                <p className="text-[9px] opacity-30 uppercase tracking-[0.2em]">{selectedHub?.city} • {selectedHub?.type}</p>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Tashrifingiz tasdiqlandi!"); setIsVisitOpen(false); }}>
                <input type="text" placeholder="Ism Familiya" className="ios-input-off" required />
                <input type="tel" placeholder="+998 90 123 45 67" className="ios-input-off" required />
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-[7px] md:text-[8px] font-black opacity-30 uppercase ml-2 md:ml-4">Sana</label>
                    <input type="date" className="ios-input-off text-[10px]" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[7px] md:text-[8px] font-black opacity-30 uppercase ml-2 md:ml-4">Maqsad</label>
                    <select className="ios-input-off text-[10px] appearance-none" required>
                      <option>Ishlash</option>
                      <option>Uchrashuv</option>
                      <option>Ekskursiya</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-red-600 py-5 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] mt-4 hover:shadow-red-600/30 shadow-lg active:scale-95 transition-all">
                  Rezervatsiyani yakunlash
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed -bottom-10 -right-10 opacity-[0.02] select-none pointer-events-none text-[20vw] font-black italic tracking-tighter hidden md:block">OFFLINE</div>
    </div>
  );
}