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
  }

  @media (min-width: 768px) {
    .bento-card { border-radius: 3.5rem; }
  }

  .ios-input-u {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.2rem;
    padding: 1.2rem 1.5rem;
    color: white;
    outline: none;
    width: 100%;
    font-size: 14px;
    transition: 0.3s;
  }
  .ios-input-u:focus { border-color: #007AFF; background: rgba(0, 122, 255, 0.05); }

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

  .blog-img-hover { transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
  .bento-card:hover .blog-img-hover { transform: scale(1.1) rotate(1deg); }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
`;

export default function IshborUltimateMasterPlatform() {
  // --- STATES ---
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [authStep, setAuthStep] = useState<'login' | 'register' | 'profile'>('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [user, setUser] = useState({ name: '', email: '' });

  // --- ANIMATIONS ---
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.85]);

  // --- HANDLERS ---
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthStep('profile');
    setIsProfileOpen(false); // Modalni yopish
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthStep('register');
    setIsProfileOpen(false);
    setUser({ name: '', email: '' });
  };

  // --- DATA ---
  const blogPosts = [
    { id: 1, title: "Ish Qidirishning Kelajagi", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Nega Bizning Hublar Boshqacha?", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Senior Dasturchi Bo'lish Yo'li", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" }
  ];

  const plans = [
    { id: 1, name: "Starter", monthly: "15 000", yearly: "140 000", features: ["3 ta e'lon", "7 kunlik faollik"] },
    { id: 2, name: "Business", monthly: "45 000", yearly: "440 000", popular: true, features: ["Cheksiz e'lon", "AI Mentor", "Premium Hub"] },
    { id: 3, name: "Enterprise", monthly: "99 000", yearly: "950 000", features: ["Shaxsiy HR", "VIP Status", "Analitika"] }
  ];

  return (
    <div className="relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: advancedStyles }} />
      <div className="mesh-bg" />

      {/* --- 1. NAVBAR (Avatar bilan) --- */}
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-6xl">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="bento-card ios-26-blur px-6 md:px-10 py-4 flex justify-between items-center border-white/10 shadow-2xl">
          <Link href="/" className="text-xl md:text-2xl font-black italic tracking-tighter">ISHBOR<span className="text-blue-500">.</span></Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
              <a href="#blog" className="hover:opacity-100 transition-all">Blog</a>
              <a href="#pricing" className="hover:opacity-100 transition-all">Pricing</a>
            </div>

            {isLoggedIn ? (
              <motion.div 
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => { setIsProfileOpen(true); setAuthStep('profile'); }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] cursor-pointer shadow-lg shadow-blue-500/20"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] md:text-[12px] font-black italic uppercase">
                  {user.name ? user.name.slice(0, 1) : "U"}
                </div>
              </motion.div>
            ) : (
              <button onClick={() => { setIsProfileOpen(true); setAuthStep('register'); }}
                className="bg-white text-black px-6 py-2 rounded-full text-[9px] font-black uppercase hover:invert transition-all"
              >Join Now</button>
            )}
          </div>
        </motion.div>
      </nav>

      {/* --- 2. HERO --- */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-[16vw] md:text-[10vw] font-black italic tracking-tighter leading-[0.85] text-ethereal mb-14 uppercase">
          Imkon <br /> <span className="text-blue-600">Sizda.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/30"><a href="/online2">Vakansiyalar</a> </button>
          <button className="bg-white/5 border border-white/10 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest backdrop-blur-xl"><a href="https://t.me/mirfayz_roziyev">Hamkorlik</a></button>
        </div>
      </motion.section>

      {/* --- 3. STATS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ v: "1.5k+", l: "A'zolar" }, { v: "400+", l: "Kompaniyalar" }, { v: "24/7", l: "Qo'llab-quvvatlash" }, { v: "99%", l: "Ishonch" }].map((s, i) => (
            <div key={i} className="bento-card p-10 text-center bg-white/[0.01]">
              <div className="text-3xl font-black italic mb-2 tracking-tighter">{s.v}</div>
              <div className="text-[8px] font-black uppercase opacity-30 tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. BLOG --- */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-16">Oxirgi Maqolalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bento-card group cursor-pointer overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={post.img} className="w-full h-full object-cover blog-img-hover" alt={post.title} />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black italic uppercase group-hover:text-blue-500 transition-all">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PRICING (OBUNA) --- */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-8">Obuna bo'ling</h2>
          <div className="inline-flex p-1.5 bg-white/5 rounded-full border border-white/10">
            <button onClick={() => setBillingCycle('monthly')} className={`px-8 py-3 rounded-full text-[9px] font-black uppercase transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'opacity-30'}`}>Oylik</button>
            <button onClick={() => setBillingCycle('yearly')} className={`px-8 py-3 rounded-full text-[9px] font-black uppercase transition-all ${billingCycle === 'yearly' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'opacity-30'}`}>Yillik</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`bento-card p-12 flex flex-col justify-between min-h-[580px] ${plan.popular ? 'border-blue-500 shadow-2xl scale-105' : ''}`}>
              <div>
                <span className="text-[9px] font-black opacity-30 uppercase tracking-[0.4em] mb-10 block">{plan.name}</span>
                <div className="text-6xl font-black italic tracking-tighter mb-4">{billingCycle === 'monthly' ? plan.monthly : plan.yearly}</div>
                <p className="text-[9px] font-bold opacity-30 uppercase mb-10">UZS / {billingCycle === 'monthly' ? 'Oy' : 'Yil'}</p>
                <ul className="space-y-4 opacity-70 text-[11px] font-bold italic">
                  {plan.features.map((f, i) => <li key={i} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {f}</li>)}
                </ul>
              </div>
              <button onClick={() => setIsPaymentOpen(true)} className="w-full py-5 rounded-2xl font-black text-[10px] uppercase bg-blue-600 mt-10 hover:shadow-lg transition-all">Tanlash</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL: AUTH / PROFILE (Login to'liq ishlaydi) --- */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProfileOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
            <motion.div initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} className="bento-card w-full max-w-md p-10 relative border-white/20 z-20 shadow-2xl">
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-8 right-8 opacity-30 hover:opacity-100">✕</button>

              {authStep === 'register' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-black italic uppercase text-center tracking-tighter">Ro'yxatdan o'tish</h3>
                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    <input type="text" placeholder="TO'LIQ ISMINGIZ" className="ios-input-u uppercase font-black" required onChange={(e) => setUser({...user, name: e.target.value})} />
                    <input type="email" placeholder="EMAIL" className="ios-input-u font-black" required onChange={(e) => setUser({...user, email: e.target.value})} />
                    <input type="password" placeholder="PASSWORD" className="ios-input-u font-black" required />
                    <button type="submit" className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[10px] uppercase mt-4">Sign Up</button>
                  </form>
                  <p className="text-center text-[9px] font-bold opacity-30">AKKAUNTINGIZ BORMI? <button onClick={() => setAuthStep('login')} className="text-blue-500 uppercase">Kirish</button></p>
                </div>
              )}

              {authStep === 'login' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-black italic uppercase text-center tracking-tighter">Kirish</h3>
                  <form onSubmit={handleAuthSubmit} className="space-y-4">
                    <input type="email" placeholder="EMAIL ADDRESS" className="ios-input-u font-black" required />
                    <input type="password" placeholder="PASSWORD" className="ios-input-u font-black" required />
                    <button type="submit" className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[10px] uppercase mt-4 shadow-xl shadow-blue-500/20">Login</button>
                  </form>
                  <p className="text-center text-[9px] font-bold opacity-30 uppercase">YANGIMISIZ? <button onClick={() => setAuthStep('register')} className="text-blue-500">Ro'yxatdan o'tish</button></p>
                </div>
              )}

              {authStep === 'profile' && (
                <div className="space-y-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px] mx-auto shadow-2xl">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl font-black italic uppercase">
                      {user.name ? user.name.slice(0, 1) : "U"}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter">{user.name || "Foydalanuvchi"}</h3>
                  <div className="space-y-3 pt-4">
                    <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl text-[9px] font-black uppercase">Profil sozlamalari</button>
                    <button onClick={handleLogout} className="w-full bg-red-500/10 border border-red-500/20 py-4 rounded-xl text-[9px] font-black uppercase text-red-500">Chiqish</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: TO'LOV --- */}
      <AnimatePresence>
        {isPaymentOpen && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPaymentOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bento-card w-full max-w-md p-10 relative z-20 border-white/20 shadow-2xl">
              <button onClick={() => setIsPaymentOpen(false)} className="absolute top-8 right-8 opacity-30">✕</button>
              <h3 className="text-3xl font-black italic uppercase text-center mb-10 tracking-tighter">To'lov</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("To'lov muvaffaqiyatli!"); setIsPaymentOpen(false); }}>
                <input type="text" placeholder="CARD NUMBER" className="ios-input-u text-center tracking-[0.3em] font-black" maxLength={16} required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="ios-input-u text-center font-black" maxLength={5} required />
                  <input type="text" placeholder="CVV" className="ios-input-u text-center font-black" maxLength={3} required />
                </div>
                <button className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[10px] uppercase tracking-widest mt-6 shadow-xl shadow-blue-500/30">Tasdiqlash</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center opacity-20 text-[9px] font-black tracking-[0.4em] uppercase">
        ISHBOR GLOBAL SYSTEMS • 2026
      </footer>
    </div>
  );
}