import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight, Mouse } from "lucide-react";
import React, { useState, useEffect } from "react";

import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const titles = ["HR Executive", "Public Relations Officer", "Operations Manager"];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.offsetTop ? elem.offsetTop - 80 : 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 md:px-8 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Column: Text & CTA */}
          <div className="space-y-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 font-bold">Available for opportunities</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tighter mb-4 uppercase">
                <span className="text-white block">Zubair</span>
                <span className="text-white/40 block mix-blend-overlay">Ibrahim</span>
              </h1>
              
              <div className="h-8 md:h-10 mb-6 relative overflow-hidden flex items-center space-x-3">
                <AnimatePresence mode="popLayout">
                  <motion.h2
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl md:text-2xl text-cyan-400/80 font-mono uppercase tracking-widest"
                  >
                    {titles[index]}
                  </motion.h2>
                </AnimatePresence>
                <div className="w-[1px] h-6 bg-white/10" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">v3.1.0</span>
              </div>
              
              <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed mb-10">
                Detail-oriented professional with <strong className="text-white">12+ years</strong> bridging operations, HR strategy, and public relations across Dubai's most dynamic industries.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a 
                  href="#experience"
                  onClick={(e) => handleSmoothScroll(e, "#experience")}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(34, 211, 238, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-8 py-3 border border-white/10 rounded-full text-[10px] font-bold text-white transition-all duration-300 flex items-center space-x-3 uppercase tracking-[0.3em] relative overflow-hidden group backdrop-blur-sm"
                >
                  <span className="relative z-10">Experience</span>
                  <ArrowRight size={12} className="relative z-10 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a 
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-8 py-3 border border-white/5 rounded-full text-[10px] font-bold text-zinc-400 transition-all duration-300 uppercase tracking-[0.3em] backdrop-blur-sm"
                >
                  Get_In_Touch
                </motion.a>
              </div>

              {/* Stats Row */}
              <div className="flex gap-8 md:gap-12">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">12+</div>
                  <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">5</div>
                  <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Industries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-1">UAE</div>
                  <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Based in Dubai</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Circular Image */}
          <div className="flex justify-center items-center relative z-10 hidden md:flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-[400px] h-[400px] group cursor-pointer"
            >
              {/* Concentric Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-cyan-500/20 scale-[1.15] opacity-50 group-hover:opacity-100 group-hover:border-cyan-500/40"
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-purple-500/20 scale-[1.05] opacity-50 group-hover:opacity-100 group-hover:border-purple-500/40"
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/5 scale-[0.95] group-hover:border-white/20"
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 z-10 bg-zinc-900 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Zubair Ibrahim"
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center space-x-2"
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.2)" }}
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[9px] text-white uppercase tracking-widest font-bold">Dubai, UAE</span>
              </motion.div>
              
              {/* Outer decorative dot */}
              <motion.div 
                className="absolute top-1/2 -right-8 w-3 h-3 rounded-full border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator & Cards Grid */}
        <div className="relative z-20 flex flex-col items-center mt-[-6rem]">
          <div className="flex flex-col items-center space-y-3 mb-10">
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-zinc-500">Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative flex justify-center text-cyan-400 group"
            >
              <Mouse size={28} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" strokeWidth={1.5} />
              <motion.div
                animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[8px] w-1 h-1.5 bg-cyan-400 rounded-full"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              { id: "01", title: "About Me", desc: "Professional summary, education & skills", href: "#about" },
              { id: "02", title: "Experience", desc: "Career timeline from 2013 to present", href: "#experience" },
              { id: "03", title: "Contact", desc: "Get in touch directly", href: "#contact" }
            ].map((card, i) => (
              <motion.a 
                key={card.id}
                href={card.href}
                onClick={(e) => handleSmoothScroll(e, card.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 group hover:border-white/30 transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <span className="text-[10px] font-bold text-cyan-400 tracking-widest">{card.id}</span>
                  <motion.div
                    initial={{ x: 0, opacity: 0.5 }}
                    whileHover={{ x: 4, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={14} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{card.title}</h3>
                <p className="text-xs text-zinc-500 relative z-10">{card.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
