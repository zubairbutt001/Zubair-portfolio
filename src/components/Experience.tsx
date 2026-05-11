import { motion } from "motion/react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface ExperienceProps {
  data: ExperienceItem[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-40 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-6">
          <div>
            <h2 className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
              Career Journey
            </h2>
            <h3 className="text-6xl font-display font-medium tracking-tighter text-white lg:text-white uppercase">
              Professional <br />
              <span className="text-white/20 mix-blend-overlay">Milestones</span>
            </h3>
          </div>
          <div className="h-[1px] bg-white/10 flex-1 mx-12 hidden lg:block mb-4"></div>
          <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-4">02 — Experience</p>
        </div>

        <div className="space-y-12">
          {data.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] border border-white/5 rounded-3xl p-10 lg:p-14 relative group overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              style={{ willChange: 'transform, opacity, border-color' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                <div className="lg:col-span-4">
                  <span className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.3em] block mb-4 italic group-hover:text-cyan-400 transition-colors duration-500">{item.period}</span>
                  <h4 className="text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-500">
                    {item.role}
                  </h4>
                  <p className="text-zinc-500 mt-3 uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-zinc-400 transition-colors duration-300">
                    {item.company}
                  </p>
                </div>
                
                <div className="lg:col-span-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {item.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0.8, x: 0 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-4 items-start text-zinc-400 text-sm leading-relaxed font-light cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/30 mt-1.5 shrink-0 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-500" />
                        <span className="group-hover:text-zinc-300 transition-colors duration-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
