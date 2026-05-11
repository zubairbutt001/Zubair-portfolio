import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={false}
      animate={{
        y: scrolled ? -8 : 0,
        width: scrolled ? "90%" : "95%",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0.4)",
        boxShadow: scrolled ? "0 20px 40px -15px rgba(0,0,0,0.7)" : "0 0px 0px rgba(0,0,0,0)",
        paddingTop: scrolled ? "0.85rem" : "1.25rem",
        paddingBottom: scrolled ? "0.85rem" : "1.25rem",
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        willChange: 'transform, width, background-color, padding',
        top: scrolled ? "1.5rem" : "1.5rem" 
      }}
      className="fixed left-1/2 -translate-x-1/2 max-w-7xl z-50 px-8 flex justify-between items-center backdrop-blur-md border border-white/5 rounded-full"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center space-x-4"
      >
        <div className="flex flex-col">
          <motion.span 
            animate={{ scale: scrolled ? 0.9 : 1 }}
            className="text-white text-lg font-bold tracking-[-0.05em] leading-none uppercase italic origin-left"
          >
            Z.Ibrahim
          </motion.span>
        </div>
      </motion.div>

      <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1">

        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 text-zinc-400 hover:text-white transition-all duration-300 text-[10px] uppercase tracking-[0.3em] font-bold relative group"
          >
            <span className="relative z-10">{item.name}</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full transition-colors duration-300" />
            <motion.div 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-4 transition-all duration-300"
            />
          </motion.a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <motion.a
          href="/cv.pdf"
          download
          whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: scrolled ? 0.9 : 1,
            paddingLeft: scrolled ? "1.25rem" : "1.5rem",
            paddingRight: scrolled ? "1.25rem" : "1.5rem",
          }}
          className="hidden sm:flex py-2 border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-[0.3em] bg-white/5 transition-all"
        >
          Download CV
        </motion.a>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute top-full left-0 w-full mt-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between py-6 border-b border-white/5 last:border-0"
            >
              <span className="text-3xl font-bold tracking-tighter text-white uppercase italic group-hover:text-cyan-400 transition-colors">
                {item.name}
              </span>
              <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-cyan-400/50 transition-all duration-300" />
            </motion.a>
          ))}
          
          <div className="pt-6">

             <a href="/cv.pdf" download className="w-full py-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-center text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] block">
               Download CV
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
