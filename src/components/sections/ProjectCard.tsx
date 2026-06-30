import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '@/types';
import MagneticButton from '@/components/ui/MagneticButton';
import TiltCard from '@/components/ui/TiltCard';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-[100vw] h-screen flex-shrink-0 flex items-center justify-center px-8 md:px-24 lg:px-40 relative overflow-hidden">
      {/* Editorial Decorative Background Number - Massive for subtle texture */}
      <span className="absolute top-[10%] right-[10%] text-[30rem] font-bold text-white/[0.01] select-none pointer-events-none font-display leading-none">
        0{index + 1}
      </span>

      <div className={cn(
        "w-full max-w-container flex flex-col md:flex-row items-center gap-20 lg:gap-32",
        !isEven && "md:flex-row-reverse"
      )}>
        {/* Project Visual Showcase — Using Tilt for Premium Interaction */}
        <motion.div 
          className="w-full md:w-[60%] relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <TiltCard className="rounded-[40px] overflow-hidden border border-white/10 shadow-premium group">
            <div className="aspect-[16/10] relative overflow-hidden">
               {/* Real Image Tag for better compatibility and performance */}
               <img 
                 src={project.image} 
                 alt={project.title}
                 className={cn(
                    "absolute inset-0 w-full h-full transition-transform duration-[2000ms] ease-[0.19, 1, 0.22, 1] group-hover:scale-110",
                    project.id === 'pipelinexr' ? "object-cover scale-100" : "object-cover"
                 )}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
               
               {/* Floating Interaction Indicator */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                  <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl scale-90 group-hover:scale-100 transition-transform duration-700">
                     <FiExternalLink className="text-white w-8 h-8" />
                  </div>
               </div>
            </div>
          </TiltCard>
          
          {/* Decorative Floating Tech Badge */}
          <div className={cn(
             "absolute -bottom-6 z-10 px-6 py-3 bg-black/40 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl",
             isEven ? "-right-6" : "-left-6"
          )}>
             <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">{project.category}</span>
          </div>
        </motion.div>

        {/* Project Technical Details */}
        <div className="w-full md:w-[40%] flex flex-col items-start gap-12">
          <div className="space-y-8">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="w-12 h-[1px] bg-sky-500/50" />
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 font-bold">
                Feature_Protocol_0{index + 1}
              </span>
            </motion.div>
            
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {project.title}
            </h3>
            
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-mono text-white/60 uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-10">
            {project.github && (
              <MagneticButton href={project.github} target="_blank" className="bg-transparent border-white/10 hover:border-white/30 px-10 py-5 rounded-full transition-all">
                <FiGithub className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Source</span>
              </MagneticButton>
            )}
            {project.live && (
              <MagneticButton 
                href={project.live} 
                target="_blank" 
                className="bg-white text-bg-primary hover:bg-sky-400 hover:text-white border-none px-12 py-5 rounded-full shadow-premium hover:shadow-hover transition-all"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold">Launch Project</span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
