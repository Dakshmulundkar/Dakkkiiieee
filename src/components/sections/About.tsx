import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlassCard from '@/components/ui/GlassCard';
import { STATS, ABOUT_TEXT } from '@/data/personal';
import { FiUser, FiBookOpen, FiTarget, FiHeart } from 'react-icons/fi';

const aboutBlocks = [
  { icon: FiUser, title: 'Who I Am', text: ABOUT_TEXT.intro },
  { icon: FiBookOpen, title: 'My Journey', text: ABOUT_TEXT.journey },
  { icon: FiTarget, title: 'Education', text: ABOUT_TEXT.education },
  { icon: FiHeart, title: 'My Passion', text: ABOUT_TEXT.passion },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-container mx-auto">
        <SectionHeading title="About Me" subtitle="Intentional Engineering" align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 mt-24">
          {/* Left Column — Portrait Treatment */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Portrait Frame — Deep Minimalist */}
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/5 bg-bg-secondary group shimmer">
              <div
                className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.1) 0%, rgba(5,5,5,1) 80%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-[12rem] font-bold opacity-5 editorial-text font-display">DM</span>
              </div>
              
              {/* Floating ID Tag — Precision Detail */}
              <div className="absolute top-8 left-8 px-6 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/5">
                 <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">Production Engineer</span>
              </div>
            </div>

            {/* Premium Stats Row */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {STATS.map((stat, i) => (
                <div key={i} className="p-10 rounded-[24px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl font-bold editorial-text"
                    label={stat.label}
                    labelClassName="text-[10px] uppercase tracking-[0.4em] text-text-muted font-mono mt-3"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-16">
            {aboutBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
                className="flex items-start gap-10 group"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/5 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all duration-500"
                >
                  <block.icon className="w-5 h-5 text-text-muted group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white/90" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {block.title}
                  </h3>
                  <p className="secondary-text">
                    {block.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
