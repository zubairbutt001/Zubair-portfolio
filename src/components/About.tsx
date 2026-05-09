import { motion } from "motion/react";
import { User, MapPin, Navigation, Linkedin, Award, BookOpen } from "lucide-react";
import profileImg from "../assets/images/profile.jpg";

interface AboutProps {
  data: string;
}

export default function About({ data }: AboutProps) {
  const competencies = [
    "Office Administration & Operations", "HR Generalist", "Purchasing & Inventory Control",
    "Public Relations", "Freezone Authority Coordination", "Data & Document Management",
    "Project Management", "Problem-Solving", "Sales & Marketing Strategies",
    "Team Leadership", "People Management", "Microsoft Office Suite",
    "Eclaimlink", "EMR Systems", "Vendor Negotiation", "Visa Processing",
    "Recruitment & Onboarding", "Financial Records Management"
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 mb-20">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">01 / About</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.85] uppercase">
            <span className="block mb-2">Professional</span>
            <span className="text-white/20 block mix-blend-overlay">Anatomy</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Image Card */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -2, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 aspect-[3/4] relative group hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              <img 
                src={profileImg} 
                alt="Zubair Ibrahim" 
                className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:brightness-105" 
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                <motion.div
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Zubair Ibrahim</h3>
                  <p className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest mb-3">Office Admin / HR / PRO</p>
                  <div className="flex items-center space-x-2 text-zinc-300 text-xs">
                    <MapPin size={12} className="group-hover:text-cyan-400 transition-colors" />
                    <span>Dubai, UAE</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Info Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111] border border-white/5 hover:border-white/20 hover:shadow-[0_0_35px_rgba(255,255,255,0.1)] transition-all duration-700 rounded-[2rem] p-8 lg:p-10 flex-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-6 relative z-10">Professional Summary</h4>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-400 relative z-10">
              <p className="group-hover:text-zinc-300 transition-colors">
                Detail-oriented <strong className="text-white">Office Administrator and Purchase Inventory Controller</strong> with over <strong className="text-cyan-400">4 years of experience</strong> in the Marketing agency and medical facility industry and <strong className="text-cyan-400">7+ years in sales & marketing</strong>.
              </p>
              <p>
                Strong ability to manage <strong className="text-white">administrative & HR processes</strong>, purchasing operations, and inventory control while ensuring compliance with regulations. Adept at problem-solving, teamwork, and data management.
              </p>
              <p>
                Proficient in <span className="text-purple-400">EMR Systems</span> and financial applications, with hands-on expertise in UAE Freezone (IFZA) & Mainland Authority dealings.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-[#111] border border-white/5 hover:border-white/20 hover:shadow-[0_0_35px_rgba(255,255,255,0.1)] transition-all duration-700 rounded-[2rem] p-8 lg:p-10 flex-1 relative overflow-hidden group"
          >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-cyan-500/10 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/20 transition-all duration-700 shrink-0">
                    <User size={16} className="text-cyan-400 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div>
                    <h5 className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 mb-1 group-hover:text-cyan-500/70 transition-colors duration-700">Nationality</h5>
                    <p className="text-sm font-bold text-white">Pakistani</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-pink-500/10 flex items-center justify-center border border-white/10 group-hover:border-pink-500/20 transition-all duration-700 shrink-0">
                    <MapPin size={16} className="text-pink-400 group-hover:scale-110 transition-transform duration-700" />
                   </div>
                  <div>
                    <h5 className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 mb-1 group-hover:text-pink-500/70 transition-colors duration-700">Location</h5>
                    <p className="text-sm font-bold text-white">Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-purple-500/10 flex items-center justify-center border border-white/10 group-hover:border-purple-500/20 transition-all duration-700 shrink-0">
                    <Navigation size={16} className="text-purple-400 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div>
                    <h5 className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 mb-1 group-hover:text-purple-500/70 transition-colors duration-700">Driving License</h5>
                    <p className="text-sm font-bold text-white">UAE Valid</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-cyan-500/10 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/20 transition-all duration-700 shrink-0">
                    <Linkedin size={16} className="text-cyan-400 group-hover:scale-110 transition-transform duration-700" />
                   </div>
                  <div>
                    <h5 className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 mb-1 group-hover:text-cyan-500/70 transition-colors duration-700">LinkedIn</h5>
                    <a href="https://www.linkedin.com/in/zubair-ibrahim-746405155" target="_blank" rel="noreferrer" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] hover:underline underline-offset-4 decoration-cyan-400/50">View Profile</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {[
            { value: "12+", label: "Years In Workforce", color: "text-cyan-400" },
            { value: "4+", label: "Years in Admin & HR", color: "text-purple-400" },
            { value: "5", label: "Companies Served", color: "text-pink-400" },
            { value: "7+", label: "Years in Sales & Marketing", color: "text-cyan-400" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center group hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500"
            >
              <div className={`text-4xl lg:text-5xl font-bold mb-4 ${stat.color}`}>{stat.value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500 max-w-[120px] mx-auto leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="space-y-8 pt-8">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] uppercase font-mono font-bold tracking-[0.5em] text-cyan-400/60 whitespace-nowrap">Core_Competencies</span>
            <div className="h-[1px] flex-1 bg-white/10" />
            <div className="w-2 h-2 border border-white/20 rotate-45" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {competencies.map((comp, i) => (
              <motion.div
                key={comp}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden transition-all duration-500 flex items-center justify-between cursor-default"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <span className="relative z-10 text-xs font-semibold text-zinc-400 group-hover:text-cyan-50 transition-colors duration-300 leading-snug pr-4">
                  {comp}
                </span>

                {/* Arrow icon that appears on hover */}
                <div className="relative z-10 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                
                {/* Decorative subtle lines */}
                <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
                  <div className="absolute top-0 left-4 w-px h-2 bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-500" />
                  <div className="absolute top-4 left-0 w-2 h-px bg-white/10 group-hover:bg-cyan-500/30 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          
          {/* Education */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-purple-400">Education & Certifications</h4>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, backgroundColor: "rgba(17, 17, 17, 0.8)", borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 25px rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#111] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col justify-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center space-x-4 mb-2 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                    <BookOpen size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500">Master of Human Resource Management (MHRM)</h5>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">Lincoln University Collage</p>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-blue-400 ml-14 relative z-10 group-hover:tracking-widest transition-all duration-500 text-left">2026</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
                whileHover={{ x: 5, backgroundColor: "rgba(17, 17, 17, 0.8)", borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 25px rgba(255,255,255,0.1)" }}
                className="bg-[#111] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col justify-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center space-x-4 mb-2 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                    <BookOpen size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-500">Bachelor of Business Administration (BBA)</h5>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">Swiss School of Management</p>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-cyan-400 ml-14 relative z-10 group-hover:tracking-widest transition-all duration-500 text-left">2022</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
                whileHover={{ x: 5, backgroundColor: "rgba(17, 17, 17, 0.8)", borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 25px rgba(255,255,255,0.1)" }}
                className="bg-[#111] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col justify-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center space-x-4 mb-2 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-500">
                    <Award size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-400 transition-all duration-500">Medical Coding Certification</h5>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">Skyline Education Service, Dubai</p>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-purple-400 ml-14 relative z-10 group-hover:tracking-widest transition-all duration-500 text-left">2020</p>
              </motion.div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6">
             <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-pink-400">Languages</h4>
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111] border border-white/5 rounded-2xl p-8 lg:p-10 space-y-10 h-full flex flex-col justify-center group hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-500"
              >
                {[
                  { name: "Urdu", level: "Native", p: 100 },
                  { name: "English", level: "Fluent", p: 90 },
                  { name: "Punjabi", level: "Conversational", p: 60 }
                ].map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs font-bold mb-3">
                      <span className="text-white">{lang.name}</span>
                      <span className="text-zinc-500">{lang.level}</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.p}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500" 
                      />
                    </div>
                  </div>
                ))}
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
