import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/data/certifications';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiAward, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto">
        <SectionHeading title="Certifications" subtitle="Professional Validation" align="left" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-sky-500/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                 <div className="w-10 h-10 rounded-xl bg-sky-500/5 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-black transition-all">
                    <FiAward className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">{cert.title}</h4>
                    <p className="text-[9px] font-mono text-text-muted mt-1 uppercase tracking-widest">{cert.issuer}</p>
                 </div>
              </div>
              
              {cert.credentialUrl && (
                 <a href={cert.credentialUrl} target="_blank" className="p-2 text-white/20 hover:text-white transition-colors">
                    <FiArrowUpRight className="w-4 h-4" />
                 </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
