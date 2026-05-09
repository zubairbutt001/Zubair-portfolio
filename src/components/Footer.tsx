import { motion } from "motion/react";

interface FooterProps {
  name: string;
  linkedin: string;
}

export default function Footer({ name, linkedin }: FooterProps) {
  return (
    <footer className="py-20 px-8 relative z-10 border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="space-y-6">
          <div className="text-white text-3xl font-bold tracking-tighter">
            {name.split(' ').map((n, i) => (
              <span key={i} className={i === 1 ? "text-white/20 italic ml-2" : ""}>{n}</span>
            ))}
          </div>
          <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] font-bold">made by zubair</p>
        </div>

        <div className="flex gap-12 text-zinc-500">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2 font-bold">Follow</p>
            <div className="flex space-x-6">
              <a 
                href={`https://${linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-all duration-300 underline underline-offset-8 decoration-white/5 hover:decoration-cyan-400/50 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-800 font-black">
          © {new Date().getFullYear()} — Reserved
        </div>
      </div>
    </footer>
  );
}
