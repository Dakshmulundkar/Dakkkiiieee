import { SOCIAL_LINKS } from '@/data/personal';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import MagneticButton from '@/components/ui/MagneticButton';
import LegalModal from '@/components/ui/LegalModal';
import { useState } from 'react';

// Static map — defined outside component so it's never recreated on re-renders
const iconMap: Record<string, React.ElementType | any> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  mail: FiMail,
};

export default function Footer() {
  const isMobile = useIsMobile();
  // Combine related state to reduce setter calls
  const [legal, setLegal] = useState<{ open: boolean; type: 'privacy' | 'terms' | 'audit' }>({ open: false, type: 'privacy' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cn(
      "relative bg-bg-primary border-t border-white/5 overflow-hidden",
      isMobile ? "py-10 px-8" : "py-12 px-12 md:px-24"
    )}>
      {/* Editorial Decorative Watermark */}
      <div className="absolute -bottom-16 -left-10 text-[20vw] font-bold text-white/[0.005] select-none pointer-events-none font-display leading-none">
        MULUNDKAR
      </div>

      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
        {/* Brand Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/40">Network: Online</span>
             </div>
             <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
               Engineering future-proof <span className="text-text-muted text-lg font-light">digital ecosystems.</span>
             </h2>
          </div>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon] || FiGithub;
              return (
                 <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all transform hover:-translate-y-0.5"
                 >
                    <Icon className="w-3.5 h-3.5" />
                 </a>
              );
            })}
          </div>
        </div>

        {/* Industry Standard Metadata Columns */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">Navigation</span>
                <ul className="space-y-1.5">
                    {['About', 'Projects', 'Skills', 'OS'].map(item => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-muted hover:text-sky-400 transition-colors uppercase font-mono tracking-widest text-[10px]">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="space-y-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">Protocols</span>
                <ul className="space-y-1.5">
                    {[
                      { id: 'privacy', label: 'Privacy' },
                      { id: 'terms', label: 'Terms' },
                      { id: 'audit', label: 'Audit_Logs' }
                    ].map(item => (
                        <li key={item.id}>
                            <button 
                              onClick={() => setLegal({ open: true, type: item.id as any })}
                              className="text-sm text-text-muted hover:text-white transition-colors uppercase font-mono tracking-widest text-[9px] bg-transparent border-none p-0"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <LegalModal 
              isOpen={legal.open} 
              onClose={() => setLegal(l => ({ ...l, open: false }))} 
              type={legal.type} 
            />

            <div className="col-span-2 md:col-span-1 flex flex-col justify-end items-end gap-6">
                <button 
                  onClick={scrollToTop}
                  className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                >
                    <FiArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>

      {/* Corporate Technical Strip */}
      <div className="max-w-container mx-auto mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
         <div className="flex items-center gap-6 text-[9px] font-mono uppercase tracking-[0.3em] text-white/10">
            <span>© {new Date().getFullYear()} D.M. All Rights Reserved.</span>
            <span className="hidden md:block">/// Encrypted Production Payload</span>
         </div>
         
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/20">System_Status:</span>
                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Operational</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">Mumbai, IN</span>
         </div>
      </div>
    </footer>
  );
}
