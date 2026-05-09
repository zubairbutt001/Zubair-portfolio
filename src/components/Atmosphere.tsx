import { motion } from "motion/react";

export default function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Cinematic Grain & Scanlines */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay contrast-150 pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />

      {/* 2. Global Blueprint System */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1" fill="cyan" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Connection Nodes and Measurement Marks */}
        <motion.g
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <line x1="10%" y1="20%" x2="40%" y2="20%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="10%" cy="20%" r="2" fill="white" />
          <circle cx="40%" cy="20%" r="2" fill="white" />
          
          <line x1="80%" y1="10%" x2="80%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          <rect x="79%" y="10%" width="2" height="2" fill="cyan" />
          
          <path d="M 20 20 L 40 20 L 40 40" fill="none" stroke="white" strokeWidth="0.5" transform="translate(100, 500)" />
        </motion.g>
      </svg>

      {/* 3. ZI Monogram Watermark */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Main Monogram - Perfectly Centered and Sized */}
          <div
            className="text-[22vw] font-bold tracking-[0.15em] text-white pointer-events-none select-none mix-blend-screen"
            style={{ fontWeight: 800, color: 'rgba(255, 255, 255, 0.08)' }}
          >
            ZI
          </div>
          
          {/* Subtle Glitch overlay for technical feel */}
          <motion.div
            animate={{ 
              opacity: [0, 0.5, 0, 0.2, 0],
              x: [0, -5, 5, -2, 0]
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
            className="absolute inset-0 flex items-center justify-center text-[22vw] font-bold tracking-[0.15em] text-cyan-500/10 pointer-events-none select-none mix-blend-screen"
          >
            ZI
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Cinematic Liquid/Silk Ribbons (Advanced SVG paths) */}
      <div className="absolute inset-0 z-[-5] pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-[0.15] mix-blend-screen" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Ribbon 1 */}
          <motion.path
            d="M-200,800 Q300,400 500,800 T1200,200"
            stroke="url(#ribbonGradient)"
            strokeWidth="100"
            fill="none"
            filter="url(#glow)"
            animate={{ 
              d: [
                "M-200,800 Q300,400 500,800 T1200,200",
                "M-200,600 Q400,800 600,400 T1200,500",
                "M-200,800 Q300,400 500,800 T1200,200"
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Ribbon 2 */}
          <motion.path
            d="M-500,200 Q200,600 800,200 T1500,800"
            stroke="url(#ribbonGradient)"
            strokeWidth="60"
            fill="none"
            filter="url(#glow)"
            animate={{ 
              d: [
                "M-500,200 Q200,600 800,200 T1500,800",
                "M-500,400 Q100,200 700,600 T1500,300",
                "M-500,200 Q200,600 800,200 T1500,800"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Ribbon 3 (Deep highlight) */}
          <motion.path
            d="M200,-200 Q600,500 200,1200"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
            animate={{ 
              pathLength: [0, 1, 0],
              pathOffset: [0, 0.5, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* 5. AI Terminal Micro Details */}
      <div className="absolute top-10 left-10 flex flex-col space-y-1 opacity-40 mix-blend-screen">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-white font-medium">System Active</span>
        </div>
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-500">User: Zubair</span>
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-500 underline decoration-cyan-500/30 underline-offset-4">Profile Verified</span>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-end space-y-1 opacity-40 mix-blend-screen text-right">
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-white font-medium">Portfolio_V2.6</span>
        <div className="flex items-center space-x-1">
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-500">Core_Engine: Active</span>
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "steps(1)" }}
            className="w-1 h-3 bg-cyan-400/50" 
          />
        </div>
      </div>
      
      {/* Blueprint Coordinate Marks */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-20 opacity-20 transform rotate-90">
         <span className="text-[7px] font-mono tracking-widest text-white">25.2048° N, 55.2708° E</span>
         <span className="text-[7px] font-mono tracking-widest text-white">REF_L_01</span>
      </div>

      <div className="absolute bottom-[20%] left-4 flex flex-col space-y-20 opacity-20 transform rotate-[-90deg]">
         <span className="text-[7px] font-mono tracking-widest text-white">MEASUREMENT_ID_098</span>
         <span className="text-[7px] font-mono tracking-widest text-white">AXIS_Y_ALIGNED</span>
      </div>
    </div>
  );
}
