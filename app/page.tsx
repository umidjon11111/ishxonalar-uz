"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';

// --- iOS 26 KOSMIK DIZAYN TIZIMI ---
const advancedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;600;800&display=swap');
  
  :root { 
    --ios-blue: #007AFF; 
    --glass: rgba(255, 255, 255, 0.03);
    --border: rgba(255, 255, 255, 0.1);
  }

  body { 
    background-color: #000; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    color: #fff; 
    overflow-x: hidden;
  }

  .ios-26-blur {
    backdrop-filter: blur(50px) saturate(210%) brightness(1.2);
    -webkit-backdrop-filter: blur(50px) saturate(210%) brightness(1.2);
    background: rgba(10, 10, 10, 0.4);
  }

  .bento-card {
    background: var(--glass);
    border: 1px solid var(--border);
    border-radius: 2.5rem;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .nav-link-custom {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    opacity: 0.5;
    transition: all 0.4s ease;
  }

  .nav-link-custom:hover {
    opacity: 1;
    color: var(--ios-blue);
    transform: translateY(-1px);
  }

  .ios-input-u {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.5rem;
    padding: 1.2rem 1.5rem;
    color: white;
    outline: none;
    width: 100%;
    font-size: 15px;
    transition: 0.3s;
  }
  .ios-input-u:focus { border-color: #007AFF; background: rgba(0, 122, 255, 0.08); }

  .text-ethereal {
    background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mesh-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: 
      radial-gradient(circle at 15% 15%, rgba(0, 122, 255, 0.15) 0%, transparent 45%),
      radial-gradient(circle at 85% 85%, rgba(255, 59, 48, 0.1) 0%, transparent 45%);
  }

  .blog-img-hover { transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
  .bento-card:hover .blog-img-hover { transform: scale(1.08) rotate(1deg); }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
`;

export default function IshborUltimateMasterPlatform() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [authStep, setAuthStep] = useState<'login' | 'register' | 'profile'>('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [user, setUser] = useState({ name: '', email: '' });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthStep('profile');
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthStep('register');
    setIsProfileOpen(false);
    setUser({ name: '', email: '' });
  };

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

      {/* --- 1. YANGILANGAN NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-7xl">
        <motion.div 
          initial={{ y: -80, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="ios-26-blur px-8 py-5 flex justify-between items-center border border-white/10 rounded-[2.5rem] shadow-2xl"
        >
          <Link href="/" className="text-2xl md:text-3xl font-black italic tracking-tighter hover:scale-105 transition-transform">
            ISHBOR<span className="text-blue-500">.</span>
          </Link>
          
          <div className="flex items-center gap-10">
            <div className="hidden md:flex gap-10">
              <a href="#blog" className="nav-link-custom">Blog</a>
              <a href="#pricing" className="nav-link-custom">Pricing</a>
              <a href="https://t.me/mirfayz_roziyev" className="nav-link-custom">Hamkorlik</a>
            </div>

            {isLoggedIn ? (
              <motion.div 
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => { setIsProfileOpen(true); setAuthStep('profile'); }}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] cursor-pointer shadow-lg shadow-blue-500/20"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-black italic">
                  {user.name ? user.name.slice(0, 1).toUpperCase() : "U"}
                </div>
              </motion.div>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setIsProfileOpen(true); setAuthStep('register'); }}
                className="bg-white text-black px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-500"
              >
                Join Now
              </motion.button>
            )}
          </div>
        </motion.div>
      </nav>

      {/* --- 2. HERO --- */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-[18vw] md:text-[10vw] font-black italic tracking-tighter leading-[0.85] text-ethereal mb-14 uppercase">
          Imkon <br /> <span className="text-blue-600">Sizda.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-blue-600 px-14 py-6 rounded-full font-black text-[12px] uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all">
            <Link href="/online2">Vakansiyalar</Link> 
          </button>
          <button className="bg-white/5 border border-white/10 px-14 py-6 rounded-full font-black text-[12px] uppercase tracking-widest backdrop-blur-xl hover:bg-white/10 transition-all">
            <a href="https://t.me/mirfayz_roziyev">Bog'lanish</a>
          </button>
        </div>
      </motion.section>

      {/* --- 3. STATS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ v: "1.5k+", l: "A'zolar" }, { v: "400+", l: "Kompaniyalar" }, { v: "24/7", l: "Support" }, { v: "99%", l: "Ishonch" }].map((s, i) => (
            <div key={i} className="bento-card p-12 text-center bg-white/[0.01] hover:bg-white/[0.03]">
              <div className="text-4xl font-black italic mb-3 tracking-tighter">{s.v}</div>
              <div className="text-[10px] font-black uppercase opacity-30 tracking-[0.2em]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. BLOG --- */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-20">Oxirgi Maqolalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bento-card group cursor-pointer overflow-hidden">
              <div className="h-72 overflow-hidden">
                <img src={post.img} className="w-full h-full object-cover blog-img-hover" alt={post.title} />
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-black italic uppercase group-hover:text-blue-500 transition-all leading-tight">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. PRICING --- */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase mb-10 tracking-tighter">Obuna</h2>
          <div className="inline-flex p-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            <button onClick={() => setBillingCycle('monthly')} className={`px-10 py-4 rounded-full text-[10px] font-black uppercase transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 shadow-xl' : 'opacity-40 hover:opacity-100'}`}>Oylik</button>
            <button onClick={() => setBillingCycle('yearly')} className={`px-10 py-4 rounded-full text-[10px] font-black uppercase transition-all ${billingCycle === 'yearly' ? 'bg-blue-600 shadow-xl' : 'opacity-40 hover:opacity-100'}`}>Yillik</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`bento-card p-12 flex flex-col justify-between min-h-[620px] ${plan.popular ? 'border-blue-500/50 shadow-[0_0_50px_rgba(0,122,255,0.15)] scale-105 z-10' : ''}`}>
              <div>
                <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-12 block">{plan.name}</span>
                <div className="text-7xl font-black italic tracking-tighter mb-4">{billingCycle === 'monthly' ? plan.monthly : plan.yearly}</div>
                <p className="text-[10px] font-bold opacity-30 uppercase mb-12">UZS / {billingCycle === 'monthly' ? 'Oy' : 'Yil'}</p>
                <ul className="space-y-5 opacity-80 text-[13px] font-bold italic">
                  {plan.features.map((f, i) => <li key={i} className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-500" /> {f}</li>)}
                </ul>
              </div>
              <button onClick={() => setIsPaymentOpen(true)} className="w-full py-6 rounded-2xl font-black text-[11px] uppercase bg-blue-600 mt-12 hover:shadow-2xl hover:brightness-110 transition-all">Tanlash</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProfileOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
            <motion.div initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} className="bento-card w-full max-w-md p-12 relative border-white/20 z-20 shadow-2xl">
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-8 right-8 text-xl opacity-40 hover:opacity-100">✕</button>

              {authStep === 'register' && (
                <div className="space-y-10">
                  <h3 className="text-4xl font-black italic uppercase text-center tracking-tighter">Join Ishbor</h3>
                  <form onSubmit={handleAuthSubmit} className="space-y-5">
                    <input type="text" placeholder="TO'LIQ ISM" className="ios-input-u uppercase font-black" required onChange={(e) => setUser({...user, name: e.target.value})} />
                    <input type="email" placeholder="EMAIL" className="ios-input-u font-black" required onChange={(e) => setUser({...user, email: e.target.value})} />
                    <input type="password" placeholder="PASSWORD" className="ios-input-u font-black" required />
                    <button type="submit" className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[11px] uppercase mt-6 shadow-xl shadow-blue-500/20">Hisob yaratish</button>
                  </form>
                  <p className="text-center text-[10px] font-bold opacity-40 uppercase">Oldin kirganmisiz? <button onClick={() => setAuthStep('login')} className="text-blue-500 ml-2">Kirish</button></p>
                </div>
              )}

              {authStep === 'login' && (
                <div className="space-y-10">
                  <h3 className="text-4xl font-black italic uppercase text-center tracking-tighter">Xush kelibsiz</h3>
                  <form onSubmit={handleAuthSubmit} className="space-y-5">
                    <input type="email" placeholder="EMAIL" className="ios-input-u font-black" required />
                    <input type="password" placeholder="PASSWORD" className="ios-input-u font-black" required />
                    <button type="submit" className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[11px] uppercase mt-6 shadow-xl shadow-blue-500/20">Tizimga kirish</button>
                  </form>
                  <p className="text-center text-[10px] font-bold opacity-40 uppercase">Yangimisiz? <button onClick={() => setAuthStep('register')} className="text-blue-500 ml-2">Ro'yxatdan o'tish</button></p>
                </div>
              )}

              {authStep === 'profile' && (
                <div className="space-y-10 text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px] mx-auto shadow-2xl">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-black italic uppercase">
                      {user.name ? user.name.slice(0, 1) : "U"}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">{user.name || "Foydalanuvchi"}</h3>
                  <div className="space-y-4 pt-6">
                    <button className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl text-[10px] font-black uppercase hover:bg-white/10 transition-all">Profil sozlamalari</button>
                    <button onClick={handleLogout} className="w-full bg-red-500/10 border border-red-500/20 py-5 rounded-2xl text-[10px] font-black uppercase text-red-500 hover:bg-red-500/20 transition-all">Chiqish</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {isPaymentOpen && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPaymentOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bento-card w-full max-w-md p-12 relative z-20 border-white/20 shadow-2xl">
              <button onClick={() => setIsPaymentOpen(false)} className="absolute top-8 right-8 text-xl opacity-40">✕</button>
              <h3 className="text-4xl font-black italic uppercase text-center mb-12 tracking-tighter">To'lov</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("To'lov muvaffaqiyatli!"); setIsPaymentOpen(false); }}>
                <input type="text" placeholder="KARTA RAQAMI" className="ios-input-u text-center tracking-[0.3em] font-black" maxLength={16} required />
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="MM/YY" className="ios-input-u text-center font-black" maxLength={5} required />
                  <input type="text" placeholder="CVV" className="ios-input-u text-center font-black" maxLength={3} required />
                </div>
                <button className="w-full bg-blue-600 py-7 rounded-[2rem] font-black text-[12px] uppercase tracking-widest mt-8 shadow-2xl shadow-blue-500/40 hover:brightness-110 transition-all">Tasdiqlash</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-32 text-center opacity-30 text-[11px] font-black tracking-[0.5em] uppercase">
        ISHBOR GLOBAL SYSTEMS • 2026
      </footer>
    </div>
  );
}