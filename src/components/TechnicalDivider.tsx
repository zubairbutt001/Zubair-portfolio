import { motion } from "motion/react";

export default function TechnicalDivider() {
  return (
    <div className="relative w-full h-px py-20 flex items-center justify-center overflow-hidden">
      {/* Central Line */}
      <div className="absolute inset-0 flex items-center justify-center px-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Blueprint Elements */}
      <div className="relative z-10 flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 border border-white/20 rotate-45" />
          <div className="w-8 h-[1px] bg-white/20" />
        </div>
        
        <div className="px-6 py-1 border border-white/10 rounded-full flex items-center space-x-3 bg-black/40 backdrop-blur-sm">
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-[1px] bg-cyan-500/30"
          />
          <span className="text-[7px] font-mono tracking-[0.5em] text-zinc-500 uppercase">Engineered_Transition</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-[1px] bg-white/20" />
          <div className="w-1.5 h-1.5 border border-white/20 rotate-45" />
        </div>
      </div>

      {/* Decorative Nodes at edges */}
      <div className="absolute left-0 w-32 h-32 border border-white/5 rounded-full -translate-x-1/2 opacity-30" />
      <div className="absolute right-0 w-32 h-32 border border-white/5 rounded-full translate-x-1/2 opacity-30" />
    </div>
  );
}
