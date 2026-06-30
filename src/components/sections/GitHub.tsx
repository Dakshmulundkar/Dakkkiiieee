import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiGithub, FiGitBranch, FiActivity, FiExternalLink, FiClock } from 'react-icons/fi';

const highlightedRepos = [
  { name: 'PipelineXR', desc: 'DevSecOps Observability Platform', stars: 24, language: 'TypeScript' },
  { name: 'AI-KYC', desc: 'Secure Identity Verification Engine', stars: 12, language: 'Python' },
  { name: 'STANS', desc: 'Graph-based Navigation Service', stars: 8, language: 'Go' },
];

export default function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="github" ref={ref} className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="max-w-container mx-auto">
        <SectionHeading title="Open Source" subtitle="GitHub Contributions" align="center" />

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Activity Monitor */}
          <div className="lg:col-span-8 space-y-6">
             <div className="p-10 rounded-[32px] border border-white/5 bg-white/[0.01] relative overflow-hidden group">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                         <FiActivity className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                         <h4 className="font-bold text-white uppercase tracking-widest text-xs">Live Contribution Pipeline</h4>
                         <p className="text-[10px] text-text-muted font-mono mt-1">Status: Active_Listener_Synced</p>
                      </div>
                   </div>
                   <span className="text-[10px] font-mono text-sky-400 animate-pulse">● LIVE_TELEMETRY</span>
                </div>

                <div className="grid grid-cols-7 md:grid-cols-12 lg:grid-cols-52 gap-1.5 h-32 px-2">
                   {Array.from({ length: 52 * 7 }).map((_, i) => {
                      const level = Math.floor(Math.random() * 4);
                      return (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: (i % 52) * 0.005 }}
                            className="w-full h-full rounded-[1px] relative group/cell"
                            style={{ 
                               backgroundColor: level === 0 ? 'rgba(255,255,255,0.02)' : 
                                               level === 1 ? 'rgba(56,189,248,0.15)' :
                                               level === 2 ? 'rgba(56,189,248,0.3)' :
                                               'rgba(56,189,248,0.8)'
                            }}
                         >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[9px] font-mono rounded opacity-0 group-hover/cell:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                               May 12: 4 Commits
                            </div>
                         </motion.div>
                      );
                   })}
                </div>

                <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-8">
                   <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                         <span className="text-2xl font-bold editorial-text">442</span>
                         <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest mt-1">Total_Commits_YTD</span>
                      </div>
                      <div className="w-px h-8 bg-white/5" />
                      <div className="flex flex-col">
                         <span className="text-2xl font-bold editorial-text">98%</span>
                         <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest mt-1">PR_Approval_Rate</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                      Legend <div className="flex gap-1 ml-2"><div className="w-2 h-2 bg-white/5"/><div className="w-2 h-2 bg-sky-500/20"/><div className="w-2 h-2 bg-sky-500/50"/><div className="w-2 h-2 bg-sky-500"/></div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[32px] border border-white/5 bg-white/[0.01]">
                   <h5 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mb-6">Featured_Repos</h5>
                   <div className="space-y-4">
                      {highlightedRepos.map(repo => (
                         <div key={repo.name} className="flex items-center justify-between group cursor-pointer">
                            <div>
                               <p className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">{repo.name}</p>
                               <p className="text-[10px] text-text-muted mt-1">{repo.desc}</p>
                            </div>
                            <FiExternalLink className="w-3 h-3 text-white/20 group-hover:text-white transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                         </div>
                      ))}
                   </div>
                </div>
                <div className="p-8 rounded-[32px] border border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                   <div className="w-12 h-12 rounded-full border border-sky-500/20 flex items-center justify-center mb-4">
                      <FiGitBranch className="w-5 h-5 text-sky-400" />
                   </div>
                   <p className="text-xs font-mono text-white uppercase tracking-[0.3em]">Pull_Requests: 142</p>
                   <p className="text-[10px] text-text-muted mt-2">Active contributor across 12 unique repositories.</p>
                </div>
             </div>
          </div>

          {/* User Profile Card */}
          <div className="lg:col-span-4 h-full">
             <div className="p-10 rounded-[32px] border border-white/5 bg-white/[0.01] h-full flex flex-col justify-between">
                <div>
                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] mb-8">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                         <FiGithub className="w-10 h-10 text-white" />
                      </div>
                   </div>
                   <h4 className="text-3xl font-bold editorial-text leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Daksh_M</h4>
                   <p className="text-[10px] font-mono text-sky-400 mt-2 uppercase tracking-[0.4em]">Engine_Lead v4.0</p>
                   
                   <div className="mt-12 space-y-6">
                      <div className="flex items-center gap-4">
                         <FiClock className="w-4 h-4 text-white/20" />
                         <span className="text-[11px] text-text-muted font-mono">Last Commit: 2 Hours Ago</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <FiActivity className="w-4 h-4 text-white/20" />
                         <span className="text-[11px] text-text-muted font-mono">Current Alpha: PipelineXR</span>
                      </div>
                   </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/5">
                   <a 
                     href="https://github.com/Dakshmulundkar" 
                     target="_blank" 
                     className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-sky-400 hover:text-white transition-all duration-500 font-bold"
                   >
                      Access_Profile <FiGithub className="w-3.5 h-3.5" />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
