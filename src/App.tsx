import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PORTFOLIO_DATA } from "./data/portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Atmosphere from "./components/Atmosphere";
import TechnicalDivider from "./components/TechnicalDivider";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.origin === window.location.origin) {
        e.preventDefault();
        const targetId = anchor.hash.replace("#", "");
        const elem = document.getElementById(targetId);
        
        if (elem) {
          window.scrollTo({
            top: elem.offsetTop - 80,
            behavior: "smooth",
          });
          
          // Update URL without jump if desired, or just leave it
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    window.addEventListener("click", handleAnchorClick);
    return () => window.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-luxury-black relative bg-[#050505] selection:text-white">
      <Atmosphere />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <TechnicalDivider />
          <About data={PORTFOLIO_DATA.summary} />
          <TechnicalDivider />
          <Experience data={PORTFOLIO_DATA.experience} />
          <TechnicalDivider />
          <Skills data={PORTFOLIO_DATA.skills} stats={PORTFOLIO_DATA.stats} languages={PORTFOLIO_DATA.languages} />
          <TechnicalDivider />
          <Contact data={PORTFOLIO_DATA.contact} />
        </main>

        <Footer name={PORTFOLIO_DATA.name} linkedin={PORTFOLIO_DATA.contact.linkedin} />
      </div>
    </div>
  );
}
