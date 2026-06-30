import { useRef, lazy, Suspense, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { FiMail, FiLinkedin, FiTwitter, FiGithub, FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const Scene = lazy(() => import('@/components/three/Scene'));
const WireframeGlobe = lazy(() => import('@/components/three/WireframeGlobe'));

const CONTACT_LINKS = [
  { label: 'Email', icon: FiMail, href: 'mailto:daksh@example.com' },
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/in/dakshmulundkar' },
  { label: 'Twitter', icon: FiTwitter, href: 'https://twitter.com/daksh_m' },
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/Dakshmulundkar' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent! (Simulation)');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto">
        <SectionHeading title="Connect" subtitle="Direct Channel" align="center" />

        <div className="mt-32 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-start">
             {/* Left — Brand Connection Meta */}
             <div className="lg:col-span-5 space-y-16">
               <div className="space-y-8">
                  <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5">
                     <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                     <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-sky-400 font-bold">Open for Proposals</span>
                  </div>
                  <h3 className="text-4xl font-bold editorial-text leading-[1.1]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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

             {/* Right — High-Prestige Contact Form */}
             <div className="lg:col-span-7 p-12 md:p-20 rounded-[48px] border border-white/5 bg-bg-card backdrop-blur-2xl relative shimmer">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group space-y-4">
                      <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 group-focus-within:text-sky-400 transition-colors pl-2">Subject Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="ENTITY NAME"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-white/5 uppercase tracking-widest"
                      />
                    </div>
                    <div className="group space-y-4">
                      <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 group-focus-within:text-sky-400 transition-colors pl-2">Digital Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="ENTITY@DOMAIN.COM"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-white/5 uppercase tracking-widest"
                      />
                    </div>
                  </div>

                  <div className="group space-y-4">
                     <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 group-focus-within:text-sky-400 transition-colors pl-2">Transmission Data</label>
                     <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        placeholder="INITIATING COMMUNICATION PROTOCOL..."
                        className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white/40 transition-all resize-none placeholder:text-white/5 uppercase tracking-widest leading-relaxed"
                     />
                  </div>

                  <MagneticButton className="w-full py-8 bg-white text-bg-primary border-none rounded-2xl font-bold uppercase tracking-[0.4em] text-[11px] shadow-premium hover:shadow-hover transition-all flex items-center justify-center gap-4">
                    Send Transmission
                    <FiArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </form>
             </div>
          </div>
        </div>

        {/* Closing Semantic Footer */}
        <div className="mt-48 pt-24 border-t border-white/5 flex flex-col items-center gap-12 pb-24">
           <div className="flex flex-col items-center gap-4 opacity-20">
              <span className="text-[10px] font-mono uppercase tracking-[1em] translate-x-[0.5em]">Daksh Mulundkar</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.6em] translate-x-[0.3em]">Engineering For Scalability — © 2026</span>
           </div>
           
           <div className="relative w-32 h-32 opacity-20 hover:opacity-50 transition-opacity duration-1000">
              <Suspense fallback={null}>
                <Scene camera={{ position: [0, 0, 5], fov: 40 }}>
                   <WireframeGlobe />
                </Scene>
              </Suspense>
              <div className="absolute inset-0 bg-transparent cursor-default" />
           </div>
        </div>
      </div>
    </section>
  );
}
