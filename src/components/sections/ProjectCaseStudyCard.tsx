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

export default function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-40 relative py-20 border-b border-white/5 bg-bg-primary overflow-hidden">
      {/* Editorial Background Number */}
      <span className="absolute top-[5%] right-[5%] text-[20rem] font-bold text-white/[0.01] select-none pointer-events-none font-display leading-none">
        0{index + 1}
      </span>

      <div className={cn(
        "w-full max-w-container flex flex-col gap-24 lg:gap-32",
        "md:grid md:grid-cols-12 md:items-start"
      )}>
        {/* Project Visual Showcase */}
        <motion.div 
          className={cn(
            "w-full md:col-span-7 relative",
            !isEven && "md:col-start-6"
          )}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <TiltCard className="rounded-[48px] overflow-hidden border border-white/5 shadow-premium shimmer">
             <div className="aspect-[16/10] relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-transform duration-[3000ms] ease-out group-hover:scale-110",
                    project.id === 'pipelinexr' ? "object-cover scale-100" : "object-cover"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                         <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">Technical Deep-Dive</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold tracking-tight editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                         {project.title}
                      </h3>
                   </div>
                   <div className="flex gap-4">
                      {project.github && (
                        <MagneticButton href={project.github} target="_blank" className="w-14 h-14 rounded-full border border-white/20 hover:bg-white hover:text-black flex items-center justify-center backdrop-blur-xl transition-all">
                          <FiGithub className="w-5 h-5" />
                        </MagneticButton>
                      )}
                      {project.live && (
                        <MagneticButton href={project.live} target="_blank" className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-premium hover:scale-110 transition-all">
                          <FiExternalLink className="w-5 h-5" />
                        </MagneticButton>
                      )}
                   </div>
                </div>
             </div>
          </TiltCard>
        </motion.div>

        {/* Project Case Study Details */}
        <div className={cn(
           "w-full md:col-span-5 flex flex-col gap-12",
           !isEven && "md:col-start-1 md:row-start-1"
        )}>
          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-[0.5em]">Intellectual Depth</span>
                <div className="h-[1px] flex-1 bg-white/10" />
             </div>
             <p className="text-lg text-text-secondary leading-relaxed font-light">
                {project.description}
             </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
             {project.caseStudy && (
                <>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/40">
                         <FiAlertCircle className="w-3.5 h-3.5" />
                         <span className="text-[9px] uppercase font-mono tracking-widest">Problem</span>
                      </div>
                      <p className="text-sm text-text-primary/90 font-medium leading-relaxed">
                         {project.caseStudy.problem}
                      </p>
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/40">
                         <FiCpu className="w-3.5 h-3.5" />
                         <span className="text-[9px] uppercase font-mono tracking-widest">Architecture</span>
                      </div>
                      <p className="text-sm text-text-primary/90 font-medium leading-relaxed italic border-l-2 border-sky-500/30 pl-4">
                         {project.caseStudy.architecture}
                      </p>
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                         <div className="flex items-center gap-3 text-white/40">
                            <FiServer className="w-3.5 h-3.5" />
                            <span className="text-[9px] uppercase font-mono tracking-widest">Tech Core</span>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 3).map(t => (
                               <span key={t} className="text-[9px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5">{t}</span>
                            ))}
                         </div>
                      </div>
                      <div className="space-y-3">
                         <div className="flex items-center gap-3 text-white/40">
                            <FiAward className="w-3.5 h-3.5" />
                            <span className="text-[9px] uppercase font-mono tracking-widest">Outcome</span>
                         </div>
                         <p className="text-[10px] text-sky-400 font-mono leading-tight">
                            {project.caseStudy.outcome}
                         </p>
                      </div>
                   </div>
                </>
             )}
          </div>
          
          <div className="pt-8 border-t border-white/5">
             <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[9px] font-mono text-text-muted uppercase tracking-widest">
                    {t}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
