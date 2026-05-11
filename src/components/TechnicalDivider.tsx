import { motion } from "motion/react";

export default function TechnicalDivider() {
  return (
    <div className="relative w-full h-px py-12 flex items-center justify-center overflow-hidden">
      <div className="w-[90%] max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

