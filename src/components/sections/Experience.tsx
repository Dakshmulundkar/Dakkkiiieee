import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCES } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { FiBriefcase, FiAward, FiStar } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

export default function Experience() {
  const isMobile = useIsMobile();

  return (
    <section id="experience" className="py-24 md:py-[160px] relative overflow-hidden bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Career Logic" subtitle="Experience Pipeline" align={isMobile ? "left" : "center"} />

        <div className={cn(
          "relative mt-16 md:mt-32 space-y-12 md:space-y-[128px]",
          isMobile && "ml-4 pl-8 border-l border-white/5"
        )}>
          {/* Central Timeline Vector (Desktop) */}
          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500/0 via-sky-500/30 to-sky-500/0" />
          )}

          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
      {/* Precision Timeline Node */}
      <div className={cn(
        "absolute w-[6px] h-[6px] rounded-full bg-sky-400 z-20 transition-all duration-1000 shadow-[0_0_15px_rgba(56,189,248,0.5)]",
        isMobile ? "-left-[35px] top-10" : "left-1/2 -translate-x-1/2",
        isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )} />

      {/* Experience Payload — Luxury Card */}
      <div className={cn(
        "w-full md:w-[45%] transition-all duration-1000",
        !isMobile && (isEven ? "md:mr-auto" : "md:ml-auto"),
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}>
        <div className={cn(
          "rounded-[24px] border border-white/5 bg-bg-card hover:bg-bg-card/60 backdrop-blur-xl transition-all duration-700 group",
          isMobile ? "p-6" : "p-12"
        )}>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
               <div className="space-y-2">
                  <h3 className="text-xl md:text-3xl font-bold editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{exp.role}</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-sky-400 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">{exp.company}</p>
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="text-white/30 text-[8px] md:text-[9px] font-mono uppercase tracking-widest">{exp.type}</span>
                  </div>
               </div>
               <span className="text-text-muted text-[8px] md:text-[10px] font-mono uppercase tracking-widest bg-white/[0.03] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5 w-fit">{exp.period}</span>
            </div>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
               {exp.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 bg-white/[0.02] border border-white/5 pl-2 pr-3 md:pr-4 py-1 md:py-1.5 rounded-full">
                     <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-sky-500/40" />
                     <span className="text-[8px] md:text-[10px] font-mono text-text-muted uppercase tracking-wider">
                        {achievement}
                     </span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Vertical Text (Desktop Decoration) */}
      {!isMobile && (
        <div className={cn(
          "absolute hidden lg:block text-[10px] font-mono text-white/5 uppercase tracking-[1em] whitespace-nowrap -rotate-90 select-none",
          isEven ? "left-[52%] translate-x-12" : "right-[52%] -translate-x-12"
        )}>
          Sequence_{index + 1}
        </div>
      )}
    </div>
  );
}
