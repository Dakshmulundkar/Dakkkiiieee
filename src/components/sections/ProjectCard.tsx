import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '@/types';
import MagneticButton from '@/components/ui/MagneticButton';
import TiltCard from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yNumber = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={cardRef} className={cn(
      "w-full flex-shrink-0 flex items-center justify-center relative overflow-hidden",
      isMobile ? "py-12 px-6" : "w-[100vw] h-screen px-8 md:px-24 lg:px-40"
    )}>
      {/* Editorial Decorative Background Number - Massive for subtle texture */}
      {!isMobile && (
        <motion.span 
          style={{ y: yNumber }}
          className="absolute top-[10%] right-[10%] text-[30rem] font-bold text-white/[0.01] select-none pointer-events-none font-display leading-none"
        >
          0{index + 1}
        </motion.span>
      )}

      <div className={cn(
        "w-full max-w-container grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 whitespace-normal",
        !isEven && "lg:direction-reverse"
      )}>
        {/* Project Visual Showcase */}
        <motion.div 
          className={cn(
            "w-full lg:col-span-7 relative",
            !isEven ? "lg:order-2" : "lg:order-1"
          )}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <TiltCard className="rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-premium group">
            <div className="aspect-video relative overflow-hidden">
               <motion.img 
                 style={{ y: isMobile ? 0 : yImage }}
                 src={project.image} 
                 alt={project.title}
                 className={cn(
                    "absolute -top-[10%] left-0 w-full h-[120%] object-cover transition-transform duration-[2000ms] ease-[0.19, 1, 0.22, 1] group-hover:scale-105",
                    project.id === 'pipelinexr' ? "scale-100" : "scale-105"
                 )}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          </TiltCard>
          
          <div className={cn(
             "absolute -bottom-4 z-10 px-5 py-2.5 bg-black/60 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl",
             isEven ? "-right-4" : "-left-4"
          )}>
             <span className="text-[9px] font-mono text-sky-400 font-bold uppercase tracking-widest">{project.category}</span>
          </div>
        </motion.div>

        {/* Project Technical Details */}
        <div className={cn(
          "w-full lg:col-span-5 flex flex-col items-start gap-8",
          !isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-10"
        )}>
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-8 h-[1px] bg-sky-500/50" />
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold">
                Project_{index + 1}
              </span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-tight break-words" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {project.title}
            </h3>
            
            <p className="text-base md:text-lg text-text-secondary max-w-sm md:max-w-md lg:max-w-[400px] leading-relaxed font-light break-words">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span 
                key={t} 
                className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[8px] font-mono text-white/50 uppercase tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-6">
            {project.github && (
              <MagneticButton href={project.github} target="_blank" className="bg-transparent border-white/10 hover:border-white/20 px-8 py-4 rounded-full transition-all">
                <FiGithub className="w-4 h-4" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono">Code</span>
              </MagneticButton>
            )}
            {project.live && (
              <MagneticButton 
                href={project.live} 
                target="_blank" 
                className="bg-white text-bg-primary hover:bg-sky-400 hover:text-white border-none px-10 py-4 rounded-full shadow-premium transition-all"
              >
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono font-bold">Live Portal</span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
