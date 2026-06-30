import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/data/certifications';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiAward, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="max-w-container mx-auto">
        <SectionHeading title="Certified Expertise" subtitle="Academic & Professional Validation" align="center" />

        <div className="mt-24 flex flex-col gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-12 lg:p-16 bg-bg-primary hover:bg-white/[0.01] transition-all duration-500"
            >
              {/* Badge Overlay */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-sky-500/0 group-hover:bg-sky-500/100 transition-all duration-700" />

              <div className="flex items-center gap-12">
                 <div className="flex-shrink-0 w-16 h-16 rounded-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all duration-500">
                    <FiAward className="w-6 h-6 text-text-muted group-hover:text-sky-400 transition-colors" />
                 </div>
                 
                 <div className="space-y-2">
                    <div className="flex items-center gap-3">
                       <h4 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {cert.title}
                       </h4>
                       <FiCheckCircle className="w-4 h-4 text-sky-500/40 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <p className="text-sm font-mono text-text-muted uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
                 </div>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-12">
                 <div className="hidden lg:flex flex-col items-end">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Status</span>
                    <span className="text-xs text-sky-400 font-mono mt-1">Verified_Credential</span>
                 </div>
                 
                 {cert.credentialUrl && (
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.03] border border-white/5 text-[10px] uppercase font-mono tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View ID <FiArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
