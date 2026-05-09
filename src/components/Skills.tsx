import { motion } from "motion/react";
import { useState } from "react";

interface SkillItem {
  name: string;
  percentage: number;
  category: string;
  color: string;
}

interface SkillsProps {
  data: SkillItem[];
  stats: {
    totalSkills: number;
    yearsActive: string;
    avgProficiency: string;
    domains: number;
  };
  languages: {
    name: string;
    level: string;
    percentage: number;
  }[];
}

const CATEGORIES = [
  { id: "ADM", label: "Administration & Operations", activeColor: "text-cyan-400", border: "border-cyan-400", glow: "shadow-[0_0_30px_rgba(34,211,238,0.15)]", hex: "#22d3ee" },
  { id: "HRM", label: "Human Resources", activeColor: "text-purple-400", border: "border-purple-400", glow: "shadow-[0_0_30px_rgba(192,132,252,0.15)]", hex: "#c084fc" },
  { id: "PRO", label: "Public Relations", activeColor: "text-pink-400", border: "border-pink-400", glow: "shadow-[0_0_30px_rgba(244,114,182,0.15)]", hex: "#f472b6" },
  { id: "TEC", label: "Technical Tools", activeColor: "text-blue-400", border: "border-blue-400", glow: "shadow-[0_0_30px_rgba(96,165,250,0.15)]", hex: "#60a5fa" },
  { id: "SLS", label: "Sales & Marketing", activeColor: "text-indigo-400", border: "border-indigo-400", glow: "shadow-[0_0_30px_rgba(129,140,248,0.15)]", hex: "#818cf8" }
];

export default function Skills({ data, stats, languages }: SkillsProps) {
  const [activeTab, setActiveTab] = useState("ADM");
  const activeCategory = CATEGORIES.find(c => c.id === activeTab)!;
  const activeSkills = data.filter(s => s.category === activeTab);

  // SVG Radar Dimensions
  const radarSize = 240;
  const center = radarSize / 2;
  const radius = radarSize * 0.35;
  const numPoints = activeSkills.length > 2 ? activeSkills.length : 5;
  
  // Create radar polygon path
  const getRadarPath = (scale: number = 1, fixedPoints?: number) => {
    const pointsCount = fixedPoints || numPoints;
    return Array.from({ length: pointsCount }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / pointsCount - Math.PI / 2;
      const dist = fixedPoints ? radius * scale : radius * ((activeSkills[i]?.percentage || 60) / 100) * scale;
      const x = center + Math.cos(angle) * dist;
      const y = center + Math.sin(angle) * dist;
      return `${x},${y}`;
    }).join(" ");
  };

  return (
    <section id="skills" className="py-24 px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.85]">
            Competency<br />
            <span className="text-white/20 mix-blend-overlay">Matrix</span>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.4em] leading-relaxed">
              Domain_Analysis_v.3.0 // {stats.domains} core domains.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Skills", value: stats.totalSkills, color: "text-cyan-400" },
            { label: "Years Active", value: stats.yearsActive, color: "text-purple-400" },
            { label: "Avg Proficiency", value: stats.avgProficiency, color: "text-pink-400" },
            { label: "Competency Domains", value: stats.domains, color: "text-cyan-400" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-500"
            >
              <div className={`text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeTab === category.id 
                  ? `${category.border} ${category.activeColor} bg-white/5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]` 
                  : 'border-white/10 text-zinc-600 hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              }`}
            >
              {category.id}
            </button>
          ))}
        </div>

        {/* Active Domain Spotlight */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 lg:items-center relative overflow-hidden transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] ${activeCategory.glow}`}
        >
          {/* Subtle colored background wash */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: `radial-gradient(circle at 80% 50%, ${activeCategory.hex}, transparent 60%)` }} />
          
          <div className="lg:w-3/5 space-y-8 z-10">
            <div>
              <div className={`text-[10px] uppercase font-bold tracking-[0.3em] ${activeCategory.activeColor} mb-2`}>
                {activeTab} — Module Active
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white mb-8">{activeCategory.label}</h3>
            </div>

            <div className="space-y-6">
              {activeSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2 font-bold">
                    <span className="text-zinc-300">{skill.name}</span>
                    <span className={activeCategory.activeColor}>{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full shadow-[0_0_10px_currentColor] ${activeCategory.activeColor} bg-current`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/5 flex justify-center items-center z-10 mt-8 lg:mt-0 relative">
             <div className="text-[8px] uppercase tracking-widest text-zinc-600 absolute bottom-0 left-1/2 -translate-x-1/2 font-bold">Skill Radar</div>
             <svg width={radarSize} height={radarSize} viewBox={`0 0 ${radarSize} ${radarSize}`} className="overflow-visible">
               {/* Radar Grid Lines */}
               {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                 <polygon 
                   key={i} 
                   points={getRadarPath(scale, 5)} 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="1" 
                   className="text-white/5" 
                 />
               ))}
               
               {/* Fixed Axes */}
               {Array.from({ length: 5 }).map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                  return <line 
                     key={i}
                     x1={center} y1={center} 
                     x2={center + Math.cos(angle) * (radius * 1)} 
                     y2={center + Math.sin(angle) * (radius * 1)} 
                     stroke="currentColor" 
                     className="text-white/10"
                  />
               })}

               {/* Data Polygon */}
               {activeSkills.length > 2 && (
                 <motion.polygon
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                   points={getRadarPath(1)}
                   fill={activeCategory.hex}
                   fillOpacity="0.1"
                   stroke={activeCategory.hex}
                   strokeWidth="2"
                   className="origin-center"
                   style={{ filter: `drop-shadow(0 0 8px ${activeCategory.hex}80)` }}
                 />
               )}
               {/* Radar dots */}
               {activeSkills.length > 2 && activeSkills.map((skill, i) => {
                  const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
                  const dist = radius * (skill.percentage / 100);
                  const x = center + Math.cos(angle) * dist;
                  const y = center + Math.sin(angle) * dist;
                  return (
                    <circle key={i} cx={x} cy={y} r="3" fill={activeCategory.hex} />
                  )
               })}
             </svg>
          </div>
        </motion.div>

        {/* Full Overview Grid */}
        <div className="pt-12">
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 mb-8">Full Competency Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-[#111] p-5 rounded-xl border border-white/5 group hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-zinc-300 pr-4">{skill.name}</span>
                  <span className={`text-[10px] font-bold bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}>
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} style={{ width: `${skill.percentage}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages section matching design */}
        <div className="bg-[#111] border border-white/5 rounded-3xl p-8 lg:p-10 mt-12 relative overflow-hidden hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-500">
           <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#f43f5e] mb-12">Language Proficiency</h4>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {languages.map(lang => (
                <div key={lang.name}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-bold text-white tracking-tight">{lang.name}</span>
                    <span className="text-[9px] uppercase tracking-widest text-[#f43f5e] font-bold">
                      {lang.level} — <span className="text-white">{lang.percentage}%</span>
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full relative">
                    <div 
                      className={`absolute top-0 bottom-0 left-0 bg-gradient-to-r ${lang.percentage === 100 ? 'from-[#0ea5e9] to-[#06b6d4]' : lang.percentage > 90 ? 'from-[#a855f7] to-[#d946ef]' : 'from-[#ec4899] to-[#f43f5e]'} rounded-full glow`}
                      style={{ width: `${lang.percentage}%`, boxShadow: '0 0 10px currentColor' }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full translate-x-1 shadow-[0_0_8px_currentColor]" />
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
