"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const onlineStyles = `
  .online-glass {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(45px) saturate(210%);
    border: 1px solid rgba(0, 122, 255, 0.15);
    border-radius: 2rem;
  }
  @media (min-width: 768px) {
    .online-glass { border-radius: 4rem; }
  }
  .filter-btn { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
  .text-blue-gradient {
    background: linear-gradient(180deg, #007AFF 0%, #5AC8FA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .glow-blue { box-shadow: 0 0 40px rgba(0, 122, 255, 0.25); }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .ios-input {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.2rem;
    padding: 1rem;
    color: white;
    outline: none;
    width: 100%;
    transition: 0.3s;
    font-size: 14px;
  }
  .ios-input:focus { border-color: #007AFF; background: rgba(0, 122, 255, 0.05); }
`;

export default function Online2Page() {
  const [activeFilter, setActiveFilter] = useState('Barchasi');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [fileName, setFileName] = useState("");

  const categories = ['Barchasi', 'IT', 'Dizayn', 'Marketing', 'AI', 'Menejment'];

  const jobs = [
    { id: 1, title: "Senior AI Engineer", company: "Meta", category: "AI", salary: "45-60 mln", type: "REMOTE", tags: ["Python", "PyTorch"] },
    { id: 2, title: "Lead Product Designer", company: "Uzum", category: "Dizayn", salary: "25-30 mln", type: "HYBRID", tags: ["Figma", "Design Systems"] },
    { id: 3, title: "Frontend Specialist", company: "Payme", category: "IT", salary: "18-22 mln", type: "REMOTE", tags: ["Next.js", "Tailwind"] },
    { id: 4, title: "Growth Marketer", company: "Click", category: "Marketing", salary: "15 mln", type: "FULL-TIME", tags: ["Ads", "Strategy"] },
    { id: 5, title: "Blockchain Dev", company: "Binance", category: "IT", salary: "50 mln", type: "REMOTE", tags: ["Solidity", "Rust"] },
    { id: 6, title: "Project Manager", company: "Amazon", category: "Menejment", salary: "28 mln", type: "REMOTE", tags: ["Agile", "Scrum"] },
  ];

  const filteredJobs = activeFilter === 'Barchasi' ? jobs : jobs.filter(j => j.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 px-4 md:px-6 overflow-x-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: onlineStyles }} />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-5xl">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 md:px-10 py-3 md:py-5 flex justify-between items-center shadow-2xl">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black italic tracking-tighter shrink-0">
            ISHBOR<span className="text-blue-500">.</span>
          </Link>

          {/* Nav Links - Ishbor bilan bir xil stilga keltirildi */}
          <div className="flex gap-4 md:gap-10 text-[12px] md:text-lg font-black italic tracking-tighter">
            <Link href="/online2" className="text-blue-500 underline underline-offset-4 md:underline-offset-8">
              ONLINE
            </Link>
            <Link href="/offline" className="opacity-40 hover:opacity-100 transition-all">
              OFFLINE
            </Link>
          </div>

          {/* Button */}
          <button className="hidden sm:block bg-white text-black px-4 md:px-6 py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">
            A'ZO BO'LISH
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-9xl font-black italic tracking-tighter mb-4 md:mb-6 uppercase text-blue-gradient leading-none">
            Online <span className="text-white">World</span>
          </motion.h1>
          <p className="opacity-30 text-[8px] md:text-[11px] uppercase tracking-[0.8em] md:tracking-[1.5em] font-light">Global Remote Opportunities</p>
        </header>

        {/* --- CATEGORY FILTER --- */}
        <div className="flex justify-start md:justify-center gap-3 mb-12 md:mb-20 overflow-x-auto pb-4 no-scrollbar px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn whitespace-nowrap px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest border transition-all
                ${activeFilter === cat ? 'bg-blue-600 border-blue-400 text-white glow-blue scale-105' : 'bg-white/5 border-white/10 opacity-40'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- JOBS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredJobs.map((job) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="online-glass p-6 md:p-12 flex flex-col justify-between min-h-[350px] md:min-h-[420px] relative group overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div>
                      <span className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-2 block">{job.company}</span>
                      <h3 className="text-2xl md:text-4xl font-black italic tracking-tighter group-hover:text-blue-400 transition-colors leading-tight">{job.title}</h3>
                    </div>
                    <div className="bg-blue-600/10 text-blue-400 px-3 py-1 md:px-5 md:py-2 rounded-full text-[8px] md:text-[9px] font-black uppercase">{job.type}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-[8px] md:text-[9px] font-bold opacity-30 border border-white/10 px-2 py-1 rounded-lg">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[8px] md:text-[9px] font-black opacity-20 uppercase block mb-1">Maosh</span>
                    <span className="text-2xl md:text-3xl font-black tracking-tighter">{job.salary} <small className="text-[9px] italic opacity-30">UZS</small></span>
                  </div>
                  <button 
                    onClick={() => { setSelectedJob(job); setIsApplyOpen(true); }}
                    className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- MODAL SECTION --- */}
      <AnimatePresence>
        {isApplyOpen && (
          <div className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsApplyOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ y: "100%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: "100%", opacity: 0 }}
              className="online-glass w-full max-w-lg p-8 md:p-12 relative border-white/10 shadow-2xl z-20 mb-4 md:mb-0"
            >
              <button onClick={() => setIsApplyOpen(false)} className="absolute top-6 right-6 md:top-10 md:right-10 opacity-30 hover:opacity-100 text-xl">✕</button>
              
              <div className="mb-8 md:mb-10 text-center">
                <span className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 block">Application Form</span>
                <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-2">{selectedJob?.title}</h3>
                <p className="text-[9px] opacity-30 uppercase tracking-[0.2em]">{selectedJob?.company}</p>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Yuborildi!"); setIsApplyOpen(false); }}>
                <input type="text" placeholder="Ism Familiya" className="ios-input" required />
                <input type="tel" placeholder="+998 90 123 45 67" className="ios-input" required />
                
                <div className="relative group border-2 border-dashed border-white/10 rounded-xl p-6 md:p-8 text-center hover:border-blue-500/50 transition-all">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                    required 
                  />
                  <div className="text-xl mb-2">{fileName ? "✅" : "📄"}</div>
                  <span className="text-[9px] font-black uppercase opacity-40">
                    {fileName ? fileName : "Rezyume yuklang (PDF)"}
                  </span>
                </div>

                <button type="submit" className="w-full bg-blue-600 py-5 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] mt-4 hover:shadow-blue-600/30 shadow-lg transition-all">
                  Arizani Yuborish
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed -bottom-10 -left-10 opacity-[0.02] select-none pointer-events-none text-[20vw] font-black italic tracking-tighter hidden md:block">REMOTE</div>
    </div>
  );
}