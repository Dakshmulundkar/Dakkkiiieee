import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/data/certifications';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiAward } from 'react-icons/fi';

export default function Certifications() {
  const activeCertifications = CERTIFICATIONS.filter(c => c.badge);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto px-8">
        <SectionHeading title="Certifications" subtitle="Professional Validation" align="left" />

        <div className="mt-16 flex flex-wrap gap-12 items-center">
          {activeCertifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/[0.01] border border-white/5 p-4 flex items-center justify-center transition-all group-hover:bg-white/[0.02] group-hover:border-white/20">
                <img 
                  src={cert.badge} 
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all" 
                />
              </div>
              
              {/* Subtle Label Indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                <p className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em]">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

