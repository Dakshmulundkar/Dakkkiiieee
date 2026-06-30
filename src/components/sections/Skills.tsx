import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, SKILLS } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto">
        <SectionHeading title="Technical Core" subtitle="Stack Architecture" align="left" />

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={cn(
                "group p-12 lg:p-16 bg-bg-primary hover:bg-white/[0.01] transition-all duration-700",
                "flex flex-col gap-12"
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-[0.3em]">Module_0{i + 1}</span>
                   <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3 className="text-3xl font-bold editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                   {category.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-md">
                   {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {SKILLS.filter(s => s.category === category.name).map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="relative group/skill"
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative z-10 block px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-text-secondary uppercase tracking-widest group-hover/skill:text-sky-400 group-hover/skill:border-sky-500/50 transition-all duration-500">
                      {skill.name}
                    </span>
                    <div className="absolute inset-0 bg-sky-500/10 blur-xl opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Competency Indicator */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-12 border-t border-white/5 pt-12">
           <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Learning_Protocol</span>
              <span className="text-sm font-medium text-text-muted">Currently deep diving into Rust Systems & Distributed Computing.</span>
           </div>
           
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                 <span className="text-2xl font-bold text-white leading-none">99.8%</span>
                 <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-sky-400/60 mt-2">Architecture_Uptime</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-end">
                 <span className="text-2xl font-bold text-white leading-none">12+</span>
                 <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-sky-400/60 mt-2">Core_Technologies</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
