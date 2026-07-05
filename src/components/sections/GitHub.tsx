import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { FiGithub, FiActivity, FiStar, FiExternalLink, FiTerminal } from 'react-icons/fi';

export default function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const username = "Dakshmulundkar";

  return (
    <section id="github" ref={ref} className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
            <SectionHeading title="Open Source" subtitle="Neural Pulse" align="left" />
            <div className="flex items-center gap-6 pb-2">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Commits</span>
                    <span className="text-sm font-bold text-white tracking-tighter">248</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Repos</span>
                    <span className="text-sm font-bold text-white tracking-tighter">33</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* LEFT: THE HEATMAP */}
          <div className="lg:flex-1 w-full p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center justify-between mb-6 px-1">
               <div className="flex items-center gap-2">
                  <FiTerminal className="w-4 h-4 text-sky-400" />
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] font-bold">Contribution_Logic</span>
               </div>
               <div className="flex items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                  <div className="flex gap-1.5 items-center">
                    <span>Low</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white/5"/>
                        <div className="w-2 h-2 bg-red-950/60"/>
                        <div className="w-2 h-2 bg-red-700/80"/>
                        <div className="w-2 h-2 bg-red-500"/>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-black/20 rounded-2xl p-8 border border-white/5 flex items-center justify-center">
                <img 
                  src={`https://ghchart.rshah.org/38bdf8/${username}`} 
                  alt={`${username}'s Github Chart`}
                  className="w-full opacity-40 group-hover:opacity-100 transition-all duration-700 invert brightness-125 grayscale group-hover:grayscale-0 scale-[0.99] group-hover:scale-100"
                />
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-widest animate-pulse font-bold">● Telemetry_Listening_Active</span>
                <a 
                    href={`https://github.com/${username}`}
                    target="_blank"
                    className="text-[9px] font-mono text-white/40 hover:text-sky-400 transition-colors uppercase tracking-[0.2em] font-bold"
                >
                    Access_Global_Index <FiExternalLink className="inline ml-1 w-3 h-3" />
                </a>
            </div>
          </div>

          {/* RIGHT: COMPACT REPOS WITH DESCRIPTION */}
          <div className="lg:w-[400px] flex flex-col gap-3">
             {[
               { name: 'Fortis-CI', lang: 'TS', desc: 'Self-hosted deployment observability platform powered by Neo4j. Tracks pipelines as a graph.' },
               { name: 'STANS', lang: 'GO', desc: 'Graph-based navigation service.' },
               { name: 'PipelineXR', lang: 'TS', desc: 'Enterprise observability and orchestration.' }
             ].map((repo, i) => (
                <a 
                  key={i} 
                  href={`https://github.com/${username}/${repo.name}`}
                  target="_blank"
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-sky-500/10 hover:border-sky-500/20 transition-all group"
                >
                   <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                         <FiGithub className="w-3.5 h-3.5 text-white/20 group-hover:text-sky-400" />
                         <span className="text-[12px] font-bold text-white uppercase tracking-tight">{repo.name}</span>
                      </div>
                      <span className="text-[8px] font-mono text-sky-400/40 border border-sky-400/20 px-2 py-0.5 rounded uppercase">{repo.lang}</span>
                   </div>
                   <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2 pr-4">{repo.desc}</p>
                </a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
