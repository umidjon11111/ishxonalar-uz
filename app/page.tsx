"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Link from "next/link";

// --- iOS 26 KOSMIK DIZAYN TIZIMI ---
const advancedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;600;800&display=swap');
  
  :root { 
    --ios-blue: #007AFF; 
    --ios-red: #FF3B30;
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
    backdrop-filter: blur(50px) saturate(210%) brightness(1.1);
    -webkit-backdrop-filter: blur(50px) saturate(210%) brightness(1.1);
  }

  .bento-card {
    background: var(--glass);
    border: 1px solid var(--border);
    border-radius: 3.5rem;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
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

  .nav-segmented {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    padding: 4px;
    display: flex;
    border: 1px solid var(--border);
  }

  .segmented-btn {
    padding: 8px 24px;
    border-radius: 1.2rem;
    font-[800] text-[9px] uppercase tracking-widest transition-all;
  }

  .segmented-btn.active {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }

  .blog-img-hover {
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .bento-card:hover .blog-img-hover {
    transform: scale(1.1) rotate(1deg);
  }
`;

export default function IshborUltimatePlatform() {
  const [activeSegment, setActiveSegment] = useState("online");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.85]);

  const plans = [
    {
      id: 1,
      name: "Starter",
      monthly: "15 000",
      yearly: "140 000",
      features: ["3 ta e'lon", "7 kunlik faollik"],
    },
    {
      id: 2,
      name: "Business",
      monthly: "45 000",
      yearly: "440 000",
      popular: true,
      features: ["Cheksiz e'lon", "AI Mentor", "Hub Access"],
    },
    {
      id: 3,
      name: "Enterprise",
      monthly: "99 000",
      yearly: "950 000",
      features: ["Shaxsiy HR", "VIP Status", "Unlimited Hub"],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      cat: "AI",
      title: "O'zbekistonda Ish Qidirishning Kelajagi",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      cat: "OFFICE",
      title: "Nega Bizning Hublar Boshqacha?",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      cat: "GROWTH",
      title: "Senior Dasturchi Bo'lish Yo'li",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: advancedStyles }} />
      <div className="mesh-bg" />

      {/* --- 1. NAVBAR --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-6xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bento-card ios-26-blur px-8 py-4 flex justify-between items-center border-white/10 shadow-2xl"
        >
          <Link
            href="/"
            className="text-2xl font-black italic tracking-tighter"
          >
            ISHBOR<span className="text-blue-500">.</span>
          </Link>

          <div className="nav-segmented">
            <button
              onClick={() => setActiveSegment("online")}
              className={`segmented-btn ${activeSegment === "online" ? "active text-blue-500" : "opacity-40"}`}
            >
              Online
            </button>
            <button
              onClick={() => setActiveSegment("offline")}
              className={`segmented-btn ${activeSegment === "offline" ? "active text-red-500" : "opacity-40"}`}
            >
              Offline Hub
            </button>
          </div>

          <div className="hidden lg:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
            <a href="#blog" className="hover:opacity-100 transition-all">
              Blog
            </a>
            <a href="#pricing" className="hover:opacity-100 transition-all">
              Pricing
            </a>
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-full text-[9px] font-black uppercase hover:invert transition-all">
            Profil
          </button>
        </motion.div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-500 font-black text-[10px] tracking-[1.5em] uppercase mb-10"
        >
          Next-Gen Interface
        </motion.span>
        <h1 className="text-[12vw] md:text-[10vw] font-black italic tracking-tighter leading-[0.8] text-ethereal mb-12">
          IMKONIYAT <br /> <span className="text-blue-600">SIZDA.</span>
        </h1>
        <div className="flex gap-6">
          <Link
            href="/online2"
            className="bg-blue-600 px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/30"
          >
            Ish qidirish
          </Link>
          <Link
            href="/offline"
            className="bento-card px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10"
          >
            Bizning Hublar
          </Link>
        </div>
      </motion.section>

      {/* --- 3. LIVE STATS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "1,200+", l: "Vakansiyalar" },
            { v: "24/7", l: "Hub Access" },
            { v: "0.2s", l: "AI Match" },
            { v: "98%", l: "Success Rate" },
          ].map((s, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={i}
              className="bento-card p-10 text-center border-white/5"
            >
              <div className="text-4xl font-black italic mb-2 tracking-tighter">
                {s.v}
              </div>
              <div className="text-[8px] font-black uppercase opacity-30 tracking-widest">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. BENTO GRID (XIZMATLAR) --- */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="bento-card md:col-span-8 p-16 flex flex-col justify-end bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10">
              <h3 className="text-4xl font-black italic uppercase mb-4">
                Global Ecosystem
              </h3>
              <p className="opacity-60 text-sm max-w-sm italic leading-relaxed">
                Biz nafaqat ish beramiz, balki professional o'sishingiz uchun
                ekotizim yaratamiz.
              </p>
            </div>
          </div>
          <div className="bento-card md:col-span-4 p-12 bg-blue-600/10 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h3 className="text-xl font-black italic uppercase">AI Matching</h3>
            <p className="text-[9px] font-bold opacity-40 uppercase tracking-widest mt-4">
              Sizga mos ishlar avtomatik tanlanadi
            </p>
          </div>
        </div>
      </section>

      {/* --- 5. BLOG SECTION (YANGI) --- */}
      <section
        id="blog"
        className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5"
      >
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">
              Blog
            </h2>
            <p className="text-blue-500 font-bold uppercase text-[9px] tracking-widest mt-2">
              So'nggi yangiliklar va maqolalar
            </p>
          </div>
          <button className="text-[9px] font-black uppercase border-b border-white/20 pb-2 hover:border-blue-500 transition-all">
            Barchasi
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bento-card flex flex-col h-full group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={post.img}
                  alt=""
                  className="w-full h-full object-cover blog-img-hover"
                />
                <span className="absolute top-6 left-6 bg-black/50 ios-26-blur px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                  {post.cat}
                </span>
              </div>
              <div className="p-10 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-black italic tracking-tighter mb-10 leading-tight group-hover:text-blue-500 transition-all">
                  {post.title}
                </h3>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase opacity-30">
                    Read More
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. PRICING SECTION (3 TA REJA) --- */}
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5"
      >
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-10">
            Obuna Rejalari
          </h2>
          <div className="inline-flex p-1.5 bg-white/5 rounded-full border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${billingCycle === "monthly" ? "bg-blue-600" : "opacity-30"}`}
            >
              Oylik
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${billingCycle === "yearly" ? "bg-blue-600" : "opacity-30"}`}
            >
              Yillik -20%
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bento-card p-14 flex flex-col justify-between min-h-[580px] ${plan.popular ? "border-blue-500/50 shadow-2xl scale-105 z-10" : ""}`}
            >
              <div>
                <h4 className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-10">
                  {plan.name}
                </h4>
                <div className="text-6xl font-black italic tracking-tighter mb-4">
                  {billingCycle === "monthly" ? plan.monthly : plan.yearly}
                </div>
                <p className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-12">
                  UZS / {billingCycle === "monthly" ? "Oy" : "Yil"}
                </p>
                <ul className="space-y-5">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-[11px] font-bold opacity-60 flex items-center gap-3"
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPlan(plan);
                  setIsPaymentOpen(true);
                }}
                className={`w-full py-5 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all ${plan.popular ? "bg-blue-600" : "bg-white/5 hover:bg-white/10"}`}
              >
                Sotib olish
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. FOOTER --- */}
      <footer className="py-32 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black italic tracking-tighter opacity-20 mb-10">
            ISHBOR GLOBAL SYSTEMS
          </h2>
          <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-20">
            <span>Telegram</span> <span>Instagram</span> <span>LinkedIn</span>
          </div>
          <div className="text-[15vw] font-black opacity-[0.02] select-none tracking-tighter leading-none italic">
            THE FUTURE IS NOW
          </div>
        </div>
      </footer>

      {/* --- PAYMENT MODAL --- */}
      <AnimatePresence>
        {isPaymentOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bento-card w-full max-w-md p-14 relative"
            >
              <button
                onClick={() => setIsPaymentOpen(false)}
                className="absolute top-10 right-10 opacity-30 hover:opacity-100"
              >
                ✕
              </button>
              <h3 className="text-3xl font-black italic uppercase text-center mb-10">
                Checkout
              </h3>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("To'lov muvaffaqiyatli!");
                  setIsPaymentOpen(false);
                }}
              >
                <input
                  type="text"
                  placeholder="CARD NUMBER"
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-center font-black tracking-widest outline-none focus:border-blue-500"
                  maxLength={16}
                />
                <button className="w-full bg-blue-600 py-6 rounded-3xl font-black text-[10px] uppercase tracking-widest mt-6 shadow-xl">
                  Confirm {selectedPlan?.name}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
