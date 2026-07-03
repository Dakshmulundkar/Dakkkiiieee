import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCES } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="pt-32 pb-[200px] relative bg-bg-primary overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 relative">
        <SectionHeading 
          title="Engineering Journey" 
          subtitle="Timeline_Schematic" 
          align="center" 
        />

        <div ref={containerRef} className="relative mt-8 md:mt-12">
          {/* Central Diagram Line (Persistent Growth) */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500 via-sky-500/50 to-transparent origin-top z-0"
          />

          <div className="space-y-20 md:space-y-24">
            {EXPERIENCES.map((exp, index) => (
              <TimelineEntry key={exp.id} exp={exp} index={index} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ exp, index, isMobile }: { exp: any; index: number; isMobile: boolean }) {
  const isEven = index % 2 === 0;
  
  const content = (
    <>
      {/* Node Point (Pulsing Synapse - RESTORED) */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 z-20 top-1/2 -translate-y-1/2 cursor-pointer">
        <div className="absolute inset-0 rounded-full bg-sky-400 blur-[1px] opacity-20 animate-pulse" />
        <div className="relative w-full h-full rounded-full bg-bg-primary border border-sky-400/50 flex items-center justify-center group-hover:border-sky-400 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        </div>
      </div>

      {/* Empty space for opposite side on desktop */}
      {!isMobile && <div className="md:w-1/2" />}

      {/* Horizontal Bridge Line (Circuit Connector) */}
      {!isMobile && (
        <motion.div 
          variants={{
            initial: { width: 0, opacity: 0 },
            animate: { width: 64, opacity: 1 }
          }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className={cn(
            "absolute top-1/2 left-1/2 h-[1px] bg-sky-500/20 group-hover:bg-sky-500/40 transition-colors",
            isEven ? "origin-left" : "origin-right -translate-x-full"
          )}
        />
      )}

      {/* Content Container */}
      <div className={cn(
        "w-full md:w-1/2 pl-12 md:pl-0",
        !isMobile && (isEven ? "md:pl-16 text-left" : "md:pr-16 text-right")
      )}>
         <motion.div 
           variants={{
             initial: { x: isEven ? -10 : 10, opacity: 0 },
             animate: { x: 0, opacity: 1 }
           }}
           transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
           className="flex flex-col gap-0.5"
         >
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-0.5">
               {exp.date}
            </span>
            <div className="relative inline-block cursor-pointer">
                <h3 className="text-base md:text-lg font-semibold text-white leading-tight tracking-tight group-hover:text-sky-400 transition-colors duration-500">
                    {exp.title}
                </h3>
            </div>
            <span className="text-[10px] font-mono text-sky-400/30 uppercase tracking-[0.2em] mt-0.5 italic">
               {exp.organizer}
            </span>
         </motion.div>
      </div>
    </>
  );

  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full group"
    >
      {exp.repo ? (
        <a 
          href={exp.repo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn(
            "flex items-center w-full relative no-underline outline-none transition-all duration-300",
            !isMobile && (isEven ? "md:flex-row" : "md:flex-row-reverse")
          )}
        >
          {content}
        </a>
      ) : (
        <div className={cn(
          "flex items-center w-full relative",
          !isMobile && (isEven ? "md:flex-row" : "md:flex-row-reverse")
        )}>
          {content}
        </div>
      )}
    </motion.div>
  );
}
