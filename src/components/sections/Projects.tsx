import { useRef } from 'react';
import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';
import { useIsMobile } from '@/hooks/useMediaQuery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useGSAP(() => {
    if (isMobile || !horizontalRef.current || !containerRef.current) return;

    const totalWidth = horizontalRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const xDist = totalWidth - windowWidth;

    gsap.to(horizontalRef.current, {
      x: -xDist,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${xDist}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (PROJECTS.length),
          duration: { min: 0.2, max: 0.6 },
          delay: 0.05,
          ease: "power2.inOut"
        },
        invalidateOnRefresh: true,
      }
    });
  }, { dependencies: [isMobile], scope: containerRef });

  if (isMobile) {
    return (
      <section id="projects" className="py-24 bg-bg-primary snap-y snap-mandatory overflow-y-auto">
        <div className="px-8 mb-16">
          <SectionHeading title="Projects" subtitle="LAB_RESULTS" align="left" />
        </div>
        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="w-full h-auto flex flex-col items-center snap-center mb-12">
               <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="relative bg-bg-primary overflow-hidden"
    >
      <div className="bg-bg-primary">
        <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
          {/* Background Visual Branding — Submerged Geometry */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
             <span className="text-[25vw] font-bold select-none tracking-tighter uppercase whitespace-nowrap">Core Architect</span>
          </div>

          <div className="relative z-10 w-full">
             <div 
               ref={horizontalRef}
               className="flex whitespace-nowrap"
             >
               {/* Dynamic Heading Slide */}
               <div className="w-screen flex-shrink-0 flex items-center justify-center">
                  <SectionHeading title="Projects" subtitle="LAB_RESULTS" align="center" />
               </div>

               {PROJECTS.map((project, i) => (
                 <div key={project.id} className="w-screen flex-shrink-0 flex items-center justify-center">
                    <ProjectCard project={project} index={i} />
                 </div>
               ))}
             </div>
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
      </div>
    </section>
  );
}
