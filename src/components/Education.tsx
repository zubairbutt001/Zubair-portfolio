import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface EducationProps {
  data: EducationItem[];
}

export default function Education({ data }: EducationProps) {
  return (
    <section className="py-24 px-8 bg-luxury-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
             <h3 className="text-brand-gold font-medium uppercase tracking-[0.3em] text-xs mb-4">Academic Background</h3>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {data.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-white/40" />
                </div>
                <div>
                  <p className="text-xs text-brand-gold font-medium mb-1 tracking-widest uppercase italic">{item.year}</p>
                  <h4 className="text-lg font-semibold mb-1">{item.degree}</h4>
                  <p className="text-sm text-white/40 font-medium">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
