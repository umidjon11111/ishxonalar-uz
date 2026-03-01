"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';

// --- iOS 26 KOSMIK DIZAYN TIZIMI ---
const advancedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;600;800&display=swap');
  
  :root { 
    --ios-blue: #007AFF; 
    --glass: rgba(255, 255, 255, 0.02);
    --border: rgba(255, 255, 255, 0.08);
  }

  body { 
    background-color: #000; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    color: #fff; 
    overflow-x: hidden;
  }

  .ios-26-blur {
    backdrop-filter: blur(40px) saturate(210%) brightness(1.1);
    -webkit-backdrop-filter: blur(40px) saturate(210%) brightness(1.1);
  }

  .bento-card {
    background: var(--glass);
    border: 1px solid var(--border);
    border-radius: 2rem;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .bento-card { border-radius: 3.5rem; }
  }

  .bento-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 122, 255, 0.4);
    transform: translateY(-8px) scale(1.01);
  }

  .text-ethereal {
    background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mesh-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: 
      radial-gradient(circle at 10% 10%, rgba(0, 122, 255, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 90% 90%, rgba(255, 59, 48, 0.08) 0%, transparent 40%);
  }

  .blog-img-hover {
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .bento-card:hover .blog-img-hover {
    transform: scale(1.1) rotate(1deg);
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
`;

export default function IshborUltimatePlatform() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.85]);

  const plans = [
    { id: 1, name: "Starter", monthly: "15 000", yearly: "140 000", features: ["3 ta e'lon", "7 kunlik faollik"] },
    { id: 2, name: "Business", monthly: "45 000", yearly: "440 000", popular: true, features: ["Cheksiz e'lon", "AI Mentor", "Hub Access"] },
    { id: 3, name: "Enterprise", monthly: "99 000", yearly: "950 000", features: ["Shaxsiy HR", "VIP Status", "Unlimited Hub"] }
  ];

  const blogPosts = [
    { 
      id: 1, 
      cat: "AI", 
      title: "O'zbekistonda Ish Qidirishning Kelajagi", 
      content: "Sun'iy intellekt ish qidirish jarayonini butunlay o'zgartirmoqda. Bizning platforma orqali siz o'z rezyumengizni AI tahlilidan o'tkazishingiz va 99% aniqlikda o'zingizga mos vakansiyalarni topishingiz mumkin. 2026-yilga kelib, barcha yirik kompaniyalar kadrlar tanlashda AI tizimlaridan foydalanishni rejalashtirmoqda.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      cat: "OFFICE", 
      title: "Nega Bizning Hublar Boshqacha?", 
      content: "Ishbor Hublari shunchaki ofis emas. Bu erda yuqori tezlikdagi internet, 24/7 xavfsizlik va eng asosiysi — kuchli community mavjud. Bizning rezidentlarimiz bir-biri bilan tajriba almashadi va yangi startaplarni aynan shu erda qurishadi.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      cat: "GROWTH", 
      title: "Senior Dasturchi Bo'lish Yo'li", 
      content: "Texnik bilimdan tashqari, senior darajasiga chiqish uchun 'Soft skills' juda muhim. Ushbu maqolada biz qanday qilib jamoani boshqarish, murakkab arxitektura qarorlarini qabul qilish va doimiy o'sishda davom etish haqida maslahatlar beramiz.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
    }
  ];

  return (
    <div className="relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: advancedStyles }} />
      <div className="mesh-bg" />

      {/* --- 1. NAVBAR --- */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-6xl">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="bento-card ios-26-blur px-6 md:px-10 py-4 flex justify-between items-center border-white/10 shadow-2xl">
          <Link href="/" className="text-xl md:text-2xl font-black italic tracking-tighter">ISHBOR<span className="text-blue-500">.</span></Link>
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
              <a href="#blog" className="hover:opacity-100 transition-all">Blog</a>
              <a href="#pricing" className="hover:opacity-100 transition-all">Pricing</a>
            </div>
            <button className="bg-white text-black px-5 md:px-7 py-2 md:py-2.5 rounded-full text-[9px] font-black uppercase hover:invert transition-all">Profil</button>
          </div>
        </motion.div>
      </nav>

      {/* --- 2. HERO --- */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="h-[90vh] md:h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-black text-[8px] md:text-[10px] tracking-[1em] md:tracking-[1.5em] uppercase mb-6 md:mb-10">Next-Gen Interface</motion.span>
        <h1 className="text-[18vw] md:text-[10vw] font-black italic tracking-tighter leading-[0.85] text-ethereal mb-10 md:mb-14">
          IMKON <br className="md:hidden" /> <span className="text-blue-600">SIZDA.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
<Link href="/online2" className="bg-blue-600 px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/30 text-center inline-block">
  Ish qidirish
</Link>
<Link href="/online2" className="bg-black-400 px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/30 text-center inline-block">
  Ish qidirish
</Link>
        </div>
        
      </motion.section>

      {/* --- 3. STATS --- */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[{ v: "1.2k+", l: "Vakansiyalar" }, { v: "24/7", l: "Hub Access" }, { v: "0.2s", l: "AI Match" }, { v: "98%", l: "Success" }].map((s, i) => (
            <motion.div whileHover={{ y: -5 }} key={i} className="bento-card p-6 md:p-10 text-center border-white/5">
              <div className="text-2xl md:text-4xl font-black italic mb-2 tracking-tighter">{s.v}</div>
              <div className="text-[8px] font-black uppercase opacity-30 tracking-widest">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. BLOG SECTION --- */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-20 md:py-40 border-t border-white/5">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Blog</h2>
            <p className="text-blue-500 font-bold uppercase text-[9px] tracking-widest mt-2">Maqolalarimiz</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedBlog(post)} className="bento-card flex flex-col group">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img src={post.img} alt="" className="w-full h-full object-cover blog-img-hover" />
                <span className="absolute top-4 left-4 bg-black/50 ios-26-blur px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-widest">{post.cat}</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                <h3 className="text-xl md:text-2xl font-black italic tracking-tighter mb-8 leading-tight group-hover:text-blue-500 transition-all">{post.title}</h3>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase opacity-30 tracking-widest">O'qish</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PRICING --- */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 md:py-40 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8">Obuna</h2>
          <div className="inline-flex p-1.5 bg-white/5 rounded-full border border-white/10">
            <button onClick={() => setBillingCycle('monthly')} className={`px-6 md:px-10 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 shadow-xl' : 'opacity-30'}`}>Oylik</button>
            <button onClick={() => setBillingCycle('yearly')} className={`px-6 md:px-10 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${billingCycle === 'yearly' ? 'bg-blue-600 shadow-xl' : 'opacity-30'}`}>Yillik</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`bento-card p-10 md:p-14 flex flex-col justify-between min-h-[500px] md:min-h-[600px] ${plan.popular ? 'border-blue-500 shadow-2xl lg:scale-105 z-10' : ''}`}>
              <div>
                <h4 className="text-[9px] font-black opacity-30 uppercase tracking-[0.4em] mb-10">{plan.name}</h4>
                <div className="text-5xl md:text-6xl font-black italic tracking-tighter mb-4">{billingCycle === 'monthly' ? plan.monthly : plan.yearly}</div>
                <p className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-12">UZS / Oy</p>
                <ul className="space-y-5 mb-10 text-[11px] font-bold opacity-60">
                  {plan.features.map((f, i) => <li key={i} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {f}</li>)}
                </ul>
              </div>
              <button onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan); setIsPaymentOpen(true); }} className="w-full py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest bg-blue-600">Sotib olish</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 opacity-30 text-[9px] font-black uppercase tracking-[0.3em]">
          ISHBOR GLOBAL SYSTEMS • 2026
        </div>
      </footer>

      {/* --- MODAL: BLOG DETAILS --- */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 50 }}
              className="bento-card w-full max-w-2xl max-h-[90vh] overflow-y-auto border-white/20 p-0"
            >
              <div className="h-64 md:h-80 w-full relative">
                <img src={selectedBlog.img} className="w-full h-full object-cover" alt="" />
                <button 
                  onClick={() => setSelectedBlog(null)} 
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 ios-26-blur flex items-center justify-center text-white z-20"
                >✕</button>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-blue-500 font-black text-[9px] uppercase tracking-widest">{selectedBlog.cat}</span>
                <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mt-4 mb-8 uppercase leading-tight">{selectedBlog.title}</h2>
                <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                  {selectedBlog.content}
                </p>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <button onClick={() => setSelectedBlog(null)} className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all">Yopish</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: PAYMENT --- */}
      <AnimatePresence>
        {isPaymentOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bento-card w-full max-w-md p-10 md:p-14 relative">
              <button onClick={() => setIsPaymentOpen(false)} className="absolute top-8 right-8 opacity-30 hover:opacity-100">✕</button>
              <h3 className="text-2xl font-black italic uppercase text-center mb-10">To'lov</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Muvaffaqiyatli!"); setIsPaymentOpen(false); }}>
                <input type="text" placeholder="KARTA RAQAMI" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-center font-black tracking-widest outline-none focus:border-blue-500" maxLength={16} />
                <button className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[10px] uppercase mt-6">Tasdiqlash</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}