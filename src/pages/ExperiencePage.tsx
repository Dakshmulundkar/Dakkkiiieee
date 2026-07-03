import { motion } from 'framer-motion';
import { 
  TIMELINE_DATA, 
  HACKATHON_DATA, 
  ACADEMIC_PROJECTS, 
  SKILL_GROWTH, 
  ACHIEVEMENTS 
} from '@/data/experiencePageData';
import { 
  FiArrowLeft, FiGithub, FiExternalLink, FiAward, FiLayers, 
  FiCode, FiZap, FiTerminal, FiDatabase, FiGrid, FiActivity, FiUsers, FiCpu, FiServer, FiGlobe, FiTarget 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { usePageTransition } from '@/context/TransitionContext';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const iconMap: Record<string, any> = {
  Award: FiAward,
  Zap: FiZap,
  Layers: FiLayers,
  Github: FiGithub,
  Code: FiCode,
  Terminal: FiTerminal,
};

export default function ExperiencePage() {
  const { playTransition } = usePageTransition();

  const handleBack = () => {
    playTransition('/');
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-sky-500/30 overflow-x-hidden font-sans text-sm">
      <Navbar />
      
      {/* Background Architectural Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTOR: AUTHORITATIVE_DOSSIER */}
        <section className="pt-38 pb-12 px-8">
          <div className="max-w-container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-white/5 pb-20">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3 text-sky-400 font-mono text-[9px] tracking-[0.5em] uppercase"
                >
                  <FiActivity className="animate-pulse" />
                  Engineering_Identity_Verified
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-bold tracking-tighter italic leading-[0.8]"
                >
                  Engineering <br /> <span className="text-white/40 not-italic">Journey</span>
                </motion.h1>
              </div>

              {/* High-Impact Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
                {[
                  { label: 'Victory', val: 'HackWins 2026', sub: 'Winner', highlight: true },
                  { label: 'Hackathons', val: '8+', sub: 'Participated' },
                  { label: 'Projects', val: '30+', sub: 'Institutional' },
                  { label: 'Activity', val: '252+', sub: 'Contributions' },
                  { label: 'Clients', val: '2', sub: 'Freelance' },
                  { label: 'Status', val: 'Final Major', sub: 'Project Active' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="space-y-1 group"
                  >
                    <p className="text-[8px] font-mono text-text-muted uppercase tracking-widest group-hover:text-sky-500 transition-colors uppercase">{stat.label}</p>
                    <p className={cn(
                      "text-2xl font-bold tracking-tighter",
                      stat.highlight ? "text-sky-400" : "text-white"
                    )}>{stat.val}</p>
                    <p className="text-[9px] font-mono text-text-muted uppercase italic opacity-50">{stat.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOG_SECTOR: DIGITAL_PULSE_THREAD */}
        <section className="pt-8 pb-16 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest font-bold">SEC_01</span>
              <div className="h-px w-20 bg-white/10" />
              <h2 className="text-[10px] font-mono uppercase tracking-[0.6em] text-text-muted">Chronological_Pulse_Thread</h2>
            </div>

            <div className="relative pl-8 md:pl-16 font-sans">
              <div className="absolute left-[3px] md:left-[5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500/50 via-white/10 to-transparent" />
              <div className="space-y-16">
                {TIMELINE_DATA.map((item, index) => (
                  <TimelineLogEntry key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVE_SECTOR: COMPETITIVE_HISTORY */}
        <section className="py-16 px-8 bg-black/[0.1]">
          <div className="max-w-container mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[9px] font-mono text-sky-500 uppercase tracking-widest font-bold">SEC_02</span>
              <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-text-muted">Competitive_History</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {HACKATHON_DATA.map((hack, i) => (
                <div key={i} className="p-8 bg-bg-primary hover:bg-white/[0.02] transition-colors group">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[8px] font-mono text-text-muted uppercase">{hack.date}</span>
                    {hack.result === 'Winner' && (
                        <FiAward className="w-5 h-5 text-sky-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">{hack.name}</h3>
                    <p className="text-[8px] font-mono text-text-muted uppercase tracking-tighter">{hack.organizer}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1">
                    {hack.tech.map((t: string) => (
                      <span key={t} className="px-1.5 py-0.5 bg-white/5 text-[7px] font-mono text-text-muted uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPOTLIGHT: ACADEMIC_CORE */}
        <section className="py-16 px-8 border-b border-white/5">
          <div className="max-w-container mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[9px] font-mono text-sky-500 uppercase tracking-widest font-bold">SEC_03</span>
              <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-text-muted">Institutional_Core</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {ACADEMIC_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-6 bg-bg-primary hover:bg-white/[0.01] transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-0.5 border border-white/10 text-[7px] font-mono text-sky-400 uppercase tracking-widest rounded">{proj.category}</span>
                    </div>
                    <h3 className="text-lg font-bold italic tracking-tighter uppercase">{proj.name}</h3>
                    <div className="flex flex-wrap gap-2 text-[8px] font-mono text-text-muted uppercase">
                      {proj.technologies.slice(0, 4).map((t: string) => <span key={t}>{t}</span>)}
                    </div>
                    <div className="flex gap-6 pt-2">
                      {proj.repo && (
                        <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-[0.3em] text-text-muted hover:text-white transition-colors">
                          <FiGithub className="w-3 h-3" /> REPO
                        </a>
                      )}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[8px] font-mono uppercase tracking-[0.3em] text-text-muted hover:text-white transition-colors">
                          <FiExternalLink className="w-3 h-3" /> LIVE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVOLUTION: CAPABILITY_INDEX - Icon-free Purist Grid */}
        <section className="py-24 px-8 bg-black/[0.1]">
          <div className="max-w-container mx-auto">
             <div className="flex items-center gap-4 mb-16">
               <span className="text-[9px] font-mono text-sky-500 uppercase tracking-widest font-bold">SEC_04</span>
               <h2 className="text-xs font-mono uppercase tracking-[0.6em] text-text-muted">Domain_Capability_Index</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
                {SKILL_GROWTH.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-baseline gap-6 group py-2 border-b border-white/[0.03] hover:border-sky-500/30 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-text-muted tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-sky-500 transition-all">{item.year}</span>
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-tight italic group-hover:text-white transition-colors">{item.skill}</h4>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* ACHIEVEMENTS: BADGE_STRIP - Pure Badges */}
        <section className="py-24 pb-40 px-8 border-t border-white/5">
           <div className="max-w-container mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-12 lg:gap-24">
                 {ACHIEVEMENTS.map((award, i) => {
                   const Icon = iconMap[award.icon] || FiAward;
                   return (
                     <div key={i} className="flex flex-col items-center gap-3">
                        <Icon className="w-5 h-5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] opacity-40 hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-text-muted">{award.label}</p>
                     </div>
                   );
                 })}
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TimelineLogEntry({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative group transition-all duration-500"
    >
      <div className="absolute left-[-32px] md:-left-[46px] top-[7px] w-[9px] h-[9px] rounded-full bg-bg-primary border border-sky-400/50 z-10 group-hover:border-sky-400 transition-colors">
        <div className="absolute inset-0 rounded-full bg-sky-400 blur-[2px] opacity-0 group-hover:opacity-60 transition-opacity" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">{item.date}</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tighter italic group-hover:text-sky-400 transition-all cursor-default">{item.name}</h3>
            {item.isAwarded && (
              <FiAward className="w-5 h-5 text-sky-500 animate-pulse drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            )}
          </div>
          <p className="text-[9px] font-mono text-text-muted uppercase tracking-widest opacity-60">{item.organizer}</p>
        </div>

        <div className="flex items-center gap-6 md:border-l border-white/5 md:pl-10 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
          <div className="flex flex-wrap gap-1.5 justify-start md:justify-end max-w-[280px]">
            {item.technologies.slice(0, 3).map((t: string) => (
              <span key={t} className="px-2 py-0.5 border border-white/10 text-[8px] font-mono text-text-muted uppercase italic">{t}</span>
            ))}
          </div>
          <div className="flex gap-4 ml-2">
            {item.repo && (
              <a href={item.repo} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><FiGithub className="w-4 h-4" /></a>
            )}
            {item.demo && (
              <a href={item.demo} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><FiExternalLink className="w-4 h-4" /></a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
