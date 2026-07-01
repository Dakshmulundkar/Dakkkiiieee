import { useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, SKILLS } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const Scene = lazy(() => import('@/components/three/Scene'));
const TechOrbit = lazy(() => import('@/components/three/TechOrbit'));

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-container mx-auto relative z-10 px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Editorial Intro & 3D Element */}
          <div className="lg:w-1/3 sticky top-32">
            <SectionHeading title="Technical Core" subtitle="Stack Architecture" align="left" />
            <p className="text-text-secondary mt-8 text-lg font-light leading-relaxed max-w-sm">
              My technical foundation is built on the principles of scalability, performance, and type-safety. I architect systems that bridge the gap between high-level logic and low-level efficiency.
            </p>
            
            <div className="mt-12 w-full aspect-square relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center font-mono text-[10px] opacity-20">Loading_Visualizer...</div>}>
                    <Scene camera={{ position: [0, 0, 5], fov: 40 }}>
                        <TechOrbit />
                    </Scene>
                </Suspense>
            </div>
          </div>

          {/* Right Side: High-End Modular Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {SKILL_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                 className="group p-5 rounded-[24px] bg-white/[0.01] border border-white/5 hover:border-sky-500/20 hover:bg-white/[0.02] transition-all duration-500"
               >
                 <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                       <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-widest">M_{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                       {category.name}
                    </h3>
                 </div>
 
                 <div className="h-px w-full bg-white/5 group-hover:bg-sky-500/20 transition-all mb-2" />
                 
                 <p className="text-[10px] text-text-muted mb-2 leading-relaxed font-mono uppercase tracking-tight opacity-60">
                    {category.description}
                 </p>

                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === category.name).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-[9px] font-mono text-text-secondary uppercase tracking-widest group-hover:text-white group-hover:border-white/10 transition-all font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Competency Metric Strip */}
        <div className="mt-32 p-10 rounded-[40px] bg-white/[0.01] border border-white/5 flex flex-wrap items-center justify-between gap-10">
           <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">Internal_Logic_Uptime</span>
              </div>
              <p className="text-sm font-medium text-text-muted">Mastering Distributed Systems and Low-Level Performance Tuning.</p>
           </div>
           
           <div className="flex items-center gap-12">
              <div className="text-right">
                 <p className="text-4xl font-bold text-white editorial-text">99.8%</p>
                 <p className="text-[10px] font-mono text-sky-400/60 uppercase tracking-[0.3em] font-bold mt-2">Architecture</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-right">
                 <p className="text-4xl font-bold text-white editorial-text">12+</p>
                 <p className="text-[10px] font-mono text-sky-400/60 uppercase tracking-[0.3em] font-bold mt-2">Core Tech</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
