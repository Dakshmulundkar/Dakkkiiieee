import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCES } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { FiBriefcase, FiAward, FiStar } from 'react-icons/fi';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="py-[160px] relative overflow-hidden bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Career Logic" subtitle="Experience Pipeline" align="center" />

        <div className="relative mt-32 space-y-[128px]">
          {/* Central Timeline Vector */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500/0 via-sky-500/30 to-sky-500/0 hidden md:block" />

          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center gap-16 lg:gap-24">
      {/* Precision Timeline Node */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-sky-400 z-20 hidden md:block transition-all duration-1000 shadow-[0_0_15px_rgba(56,189,248,0.5)]",
        isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )} />

      {/* Experience Payload — Luxury Card */}
      <div className={cn(
        "w-full md:w-[45%] transition-all duration-1000",
        isEven ? "md:mr-auto" : "md:ml-auto",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}>
        <div className="p-12 md:p-12 rounded-[24px] border border-white/5 bg-bg-card hover:bg-bg-card/60 backdrop-blur-xl transition-all duration-700 group">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{exp.role}</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-sky-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">{exp.company}</p>
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="text-white/30 text-[9px] font-mono uppercase tracking-widest">{exp.type}</span>
                  </div>
               </div>
               <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest bg-white/[0.03] px-4 py-2 rounded-full border border-white/5">{exp.period}</span>
            </div>

            <p className="text-text-secondary text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
               {exp.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 pl-2 pr-4 py-1.5 rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40" />
                     <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                        {achievement}
                     </span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Vertical Text (Desktop Decoration) */}
      <div className={cn(
        "absolute hidden lg:block text-[10px] font-mono text-white/5 uppercase tracking-[1em] whitespace-nowrap -rotate-90 select-none",
        isEven ? "left-[52%] translate-x-12" : "right-[52%] -translate-x-12"
      )}>
        Sequence_{index + 1}
      </div>
    </div>
  );
}
