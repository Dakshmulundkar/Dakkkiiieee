import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiServer, FiAward, FiAlertCircle } from 'react-icons/fi';
import type { Project } from '@/types';
import MagneticButton from '@/components/ui/MagneticButton';
import TiltCard from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';

interface ProjectCaseStudyCardProps {
  project: Project;
  index: number;
}

const ProjectCaseStudyCard = memo(function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  // We keep the index for the background number, but remove the alternating layout logic
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-40 relative py-20 border-b border-white/5 bg-bg-primary overflow-hidden">
      {/* Editorial Background Number */}
      <span className="absolute top-[5%] right-[5%] text-[20rem] font-bold text-white/[0.01] select-none pointer-events-none font-display leading-none">
        0{index + 1}
      </span>

      <div className={cn(
        "w-full max-w-container flex flex-col gap-10",
        "md:grid md:grid-cols-12 md:items-start md:gap-x-16"
      )}>
        {/* Visual + Result Column (ALWAYS LEFT) */}
        <motion.div 
          className="w-full md:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <TiltCard className="rounded-[40px] overflow-hidden border border-white/5 shadow-premium shimmer">
             <div className="aspect-[16/10] relative group">
                {/* Clickable Image Layer */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0 cursor-pointer overflow-hidden"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60" />
                </a>
                
                {/* Interactive UI Overlays */}
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between pointer-events-none z-10">
                   <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {project.title}
                   </h3>
                   <div className="flex gap-3 pointer-events-auto">
                      {project.github && (
                        <MagneticButton href={project.github} target="_blank" className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-black flex items-center justify-center backdrop-blur-xl transition-all">
                          <FiGithub className="w-5 h-5" />
                        </MagneticButton>
                      )}
                      {project.live && (
                        <MagneticButton href={project.live} target="_blank" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-premium hover:scale-110 transition-all">
                          <FiExternalLink className="w-5 h-5" />
                        </MagneticButton>
                      )}
                   </div>
                </div>
             </div>
          </TiltCard>

          {/* Outcome Result */}
          {project.caseStudy && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-left items-start">
               <div className="flex items-center gap-3 text-sky-500">
                  <FiAward className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-mono tracking-[0.4em] font-bold">Achieved Outcome</span>
               </div>
               <p className="text-[13px] text-text-primary/80 font-mono leading-relaxed">
                  {project.caseStudy.outcome}
               </p>
            </div>
          )}
        </motion.div>

        {/* Narrative Details Column (ALWAYS RIGHT) */}
        <div className="w-full md:col-span-5 flex flex-col gap-8 text-left items-start">
          {/* Depth/Description */}
          <div className="space-y-4 w-full">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-[0.5em]">Intellectual Depth</span>
                <div className="h-[1px] flex-1 bg-white/10" />
             </div>
             <p className="text-base text-text-primary leading-relaxed font-light">
                {project.description}
             </p>
          </div>

          <div className="flex flex-col gap-8 w-full text-left items-start">
             {project.caseStudy && (
                <>
                   {/* Problem Statement */}
                   <div className="space-y-2 w-full">
                      <div className="flex items-center gap-3 text-white/30">
                         <FiAlertCircle className="w-3.5 h-3.5" />
                         <span className="text-[8px] uppercase font-mono tracking-widest">Problem</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                         {project.caseStudy.problem}
                      </p>
                   </div>

                   {/* Architecture */}
                   <div className="space-y-3 pt-4 border-t border-white/5 w-full">
                      <div className="flex items-center gap-3 text-white/30">
                         <FiCpu className="w-3.5 h-3.5" />
                         <span className="text-[8px] uppercase font-mono tracking-widest">Architecture</span>
                      </div>
                      <p className="text-[12px] text-text-primary/90 leading-relaxed font-medium">
                         {project.caseStudy.architecture}
                      </p>
                   </div>

                   {/* Tech Core */}
                   <div className="space-y-4 w-full">
                      <div className="flex items-center gap-3 text-white/30">
                         <FiServer className="w-3.5 h-3.5" />
                         <span className="text-[8px] uppercase font-mono tracking-widest">Tech Core</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {project.tech.map(t => (
                            <span key={t} className="text-[8px] font-mono px-3 py-1 bg-white/[0.04] rounded-full border border-white/5 uppercase tracking-widest text-white/40">
                               {t}
                            </span>
                         ))}
                      </div>
                   </div>
                </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectCaseStudyCard;
