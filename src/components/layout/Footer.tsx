import { SOCIAL_LINKS } from '@/data/personal';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import MagneticButton from '@/components/ui/MagneticButton';

const iconMap: Record<string, React.ElementType | any> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  mail: FiMail,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-primary pt-32 pb-16 px-12 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Editorial Decorative Watermark */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-bold text-white/[0.01] select-none pointer-events-none font-display leading-none">
        MULUNDKAR
      </div>

      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        {/* Brand Information */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40">Status: Available for Collaboration</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
               Building the future <br />
               <span className="text-text-muted">one commit at a time.</span>
             </h2>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon] || FiGithub;
              return (
                 <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all transform hover:-translate-y-1"
                 >
                    <Icon className="w-4 h-4" />
                 </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links / Sitemap */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Navigation</span>
                <ul className="space-y-4">
                    {['About', 'Projects', 'Skills', 'Open Source'].map(item => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-secondary hover:text-sky-400 transition-colors uppercase font-mono tracking-widest text-[11px]">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="space-y-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Contact</span>
                <ul className="space-y-4">
                    {['bydaksh2806@gmail.com', '+91 7208677382'].map(item => (
                        <li key={item}>
                            <span className="text-sm text-text-secondary font-mono tracking-tighter block truncate">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col justify-end items-end">
                <button 
                  onClick={scrollToTop}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                >
                    <FiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>

      {/* Bottom Legal / Tech Info */}
      <div className="max-w-container mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
         <div className="flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
            <span>© {new Date().getFullYear()} D.M. Platform</span>
            <span className="hidden md:block">/// Lat: 19.0760 N / Long: 72.8777 E</span>
         </div>
         
         <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Engine: Core Production v6.1</span>
            <div className="w-12 h-[1px] bg-sky-500/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Verified SSL Production</span>
         </div>
      </div>
    </footer>
  );
}
