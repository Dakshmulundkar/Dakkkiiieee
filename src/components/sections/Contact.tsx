import { useRef, lazy, Suspense, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { FiMail, FiLinkedin, FiTwitter, FiGithub, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const Scene = lazy(() => import('@/components/three/Scene'));
const WireframeGlobe = lazy(() => import('@/components/three/WireframeGlobe'));
import { useIsMobile } from '@/hooks/useMediaQuery';

const CONTACT_LINKS = [
  { label: 'Email', icon: FiMail, href: 'mailto:bydaksh2806@gmail.com' },
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/daksh-m-2780a3356' },
  { label: 'Twitter', icon: FiTwitter, href: 'https://x.com/daksh_m06' },
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/Dakshmulundkar' },
];

export default function Contact() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto px-8 relative z-10">
        <SectionHeading title="Connect" subtitle="Direct Channel" align="left" />

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
             {/* Left — Brand Connection Meta */}
             <div className="lg:col-span-5 space-y-12">
               <div className="space-y-6">
                  <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5">
                     <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                     <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-sky-400 font-bold">Open for Proposals</span>
                  </div>
                  <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.2]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Architecting the next generation of digital infrastructure.
                  </h3>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CONTACT_LINKS.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.href} 
                      target="_blank" 
                      className="group flex items-center gap-5 p-6 rounded-[24px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
                    >
                       <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                          <link.icon className="w-4 h-4 text-text-muted group-hover:text-sky-400 transition-colors" />
                       </div>
                       <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-text-muted group-hover:text-white transition-colors">{link.label}</span>
                    </a>
                  ))}
               </div>
             </div>

             {/* Right — Boutique Contact Terminal — Precision Interior */}
             <div className="lg:col-span-6 lg:ml-auto p-0 rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl relative w-full overflow-hidden flex flex-col">
                {/* Terminal Control Header */}
                <div className="w-full bg-white/5 px-6 py-3 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">Communication_Channel.v6</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-widest">Live</span>
                   </div>
                </div>

                <div className="p-8 md:p-10 relative">
                   {/* Background Matrix Grid Decoration */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                   
                   <form 
                     name="contact"
                     method="POST"
                     data-netlify="true"
                     className="space-y-8 relative z-10"
                   >
                     <input type="hidden" name="form-name" value="contact" />
                     
                     <div className="space-y-8">
                       <div className="group space-y-3">
                         <div className="flex items-center gap-3">
                            <span className="text-sky-400 font-mono text-xs opacity-40 group-focus-within:opacity-100 transition-opacity">{">"}</span>
                            <label className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/30 group-focus-within:text-sky-400 transition-colors">Client_Identity</label>
                         </div>
                         <input 
                           name="name"
                           type="text" 
                           required
                           placeholder="[ ENTER_NAME_PROTOCOL ]"
                           className="w-full bg-transparent border-b border-white/10 pb-3 text-xs focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-white/5 uppercase tracking-[0.3em] outline-none font-mono"
                         />
                       </div>
                       
                       <div className="group space-y-3">
                         <div className="flex items-center gap-3">
                            <span className="text-sky-400 font-mono text-xs opacity-40 group-focus-within:opacity-100 transition-opacity">{">"}</span>
                            <label className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/30 group-focus-within:text-sky-400 transition-colors">Return_Address</label>
                         </div>
                         <input 
                           name="email"
                           type="email" 
                           required
                           placeholder="[ ADDRESS@DOMAIN.COM ]"
                           className="w-full bg-transparent border-b border-white/10 pb-3 text-xs focus:outline-none focus:border-sky-500/50 transition-all placeholder:text-white/5 uppercase tracking-[0.3em] outline-none font-mono"
                         />
                       </div>
                     </div>

                     <div className="group space-y-3">
                        <div className="flex items-center gap-3">
                           <span className="text-sky-400 font-mono text-xs opacity-40 group-focus-within:opacity-100 transition-opacity">{">"}</span>
                           <label className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/30 group-focus-within:text-sky-400 transition-colors">Transmission_Data</label>
                        </div>
                        <textarea 
                           name="message"
                           required
                           rows={3}
                           placeholder="[ AWAITING_INPUT_COMMANDS... ]"
                           className="w-full bg-transparent border-b border-white/10 pb-3 text-xs focus:outline-none focus:border-sky-500/50 transition-all resize-none placeholder:text-white/5 uppercase tracking-[0.3em] leading-relaxed outline-none font-mono"
                        />
                     </div>

                     <MagneticButton className="w-full py-5 bg-white text-bg-primary border-none rounded-xl font-bold uppercase tracking-[0.5em] text-[9px] shadow-lg hover:bg-sky-400 hover:text-white transition-all flex items-center justify-center gap-4 group mt-6">
                       EXECUTE_TRANSMISSION
                       <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </MagneticButton>
                   </form>
                </div>
             </div>
          </div>
        </div>

        {/* Closing Semantic Footer */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center gap-12">
           <div className="flex flex-col items-center gap-4 opacity-10">
              <span className="text-[9px] font-mono uppercase tracking-[1em] translate-x-[0.5em]">Daksh Mulundkar</span>
              <span className="text-[8px] font-mono uppercase tracking-[0.6em] translate-x-[0.3em]">Engineering For Scalability — © 2026</span>
           </div>
           
           {!isMobile && (
             <div className="relative w-24 h-24 opacity-20 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
                <Suspense fallback={null}>
                  <Scene camera={{ position: [0, 0, 5], fov: 40 }}>
                     <WireframeGlobe />
                  </Scene>
                </Suspense>
                <div className="absolute inset-0 bg-transparent cursor-default" />
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
