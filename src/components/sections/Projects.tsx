import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';
import { usePageTransition } from '@/context/TransitionContext';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playTransition } = usePageTransition();
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(PROJECTS.length) * 100}%`]);

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="relative h-[500vh] bg-bg-primary"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Visual Branding — Submerged Geometry */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
           <span className="text-[25vw] font-bold select-none tracking-tighter uppercase whitespace-nowrap">Core Architect</span>
        </div>


        <div className="relative z-10 w-full">
           <motion.div 
             style={{ x }} 
             className="flex"
           >
             {/* Dynamic Heading Slide */}
             <div className="w-screen flex-shrink-0 flex items-center justify-center -translate-y-32">
                <SectionHeading title="Projects" subtitle="LAB_RESULTS" align="center" />
             </div>

             {PROJECTS.map((project, i) => (
               <ProjectCard key={project.id} project={project} index={i} />
             ))}
           </motion.div>
        </div>

        {/* Technical Footer — Navigation Analytics */}
        <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between z-20">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/10">Project_Registry</span>
              <div className="flex items-center gap-3">
                 {PROJECTS.map((_, i) => (
                   <div key={i} className={cn("w-1.5 h-1.5 rounded-full border border-white/5 transition-all duration-700")} />
                 ))}
              </div>
           </div>
           
           <div className="flex flex-col items-end gap-2 translate-y-1">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/10">System_Output_01</span>
           </div>
        </div>
      </div>
    </section>
  );
}
