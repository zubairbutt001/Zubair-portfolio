import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

interface ContactProps {
  data: {
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    { icon: Mail, label: "Email", value: data.email, href: `mailto:${data.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "zubair-ibrahim-746405155", href: `https://${data.linkedin}` },
    { icon: MapPin, label: "Location", value: data.location, href: "#" },
  ];

  return (
    <section id="contact" className="py-40 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 space-y-16">
            <div>
              <h2 className="text-brand-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-6">
                Inquiry
              </h2>
              <h3 className="text-7xl font-display font-medium tracking-tighter leading-[0.9] text-white">
                Initiate a <br />
                <span className="text-white/20 italic">Conversation.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col space-y-4 group p-6 rounded-2xl border border-transparent hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    <info.icon size={18} className="text-zinc-500 group-hover:text-luxury-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-1 group-hover:text-brand-accent/80 transition-colors">{info.label}</p>
                    <p className="text-lg font-bold tracking-tight text-zinc-300 group-hover:text-brand-accent transition-colors group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 glass-card p-12 lg:p-20 flex flex-col justify-between group overflow-hidden bg-white/[0.03]">
             <div className="space-y-8 relative z-10">
               <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-brand-accent rounded-full animate-ping" />
               </div>
               <p className="text-3xl font-light text-zinc-300 leading-tight italic">
                 "Professionalism is not just a standard, it's an unwavering commitment to operational perfection."
               </p>
             </div>

             <div className="pt-20 flex items-center justify-between border-t border-white/5 relative z-10">
                <div className="flex items-center space-x-4">
                   <div className="w-8 h-[1px] bg-brand-accent" />
                   <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-black tracking-widest leading-none">Dubai — HQ</p>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">GMT +4</div>
             </div>
             
             {/* Abstract pattern */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
