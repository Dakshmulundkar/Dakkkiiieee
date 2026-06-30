import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_TITLES } from '@/data/personal';
import MagneticButton from '@/components/ui/MagneticButton';
import { FiArrowDown, FiExternalLink, FiDownload } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/useMediaQuery';

const Scene = lazy(() => import('@/components/three/Scene'));
const GlassSphere = lazy(() => import('@/components/three/GlassSphere'));
const ParticleField = lazy(() => import('@/components/three/ParticleField'));

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Three.js Background — Centered & Soft */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-30">
          <Suspense fallback={null}>
            <Scene camera={{ position: [0, 0, 7], fov: 45 }}>
              <GlassSphere />
            </Scene>
          </Suspense>
        </div>
      )}

      {/* Content — Perfectly Centered & Spaced */}
      <div className="relative z-10 max-w-container px-8 flex flex-col items-center text-center">
        {/* Editorial Overline */}
        <motion.div
           className="flex flex-col items-center gap-6 mb-16"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-sky-400 font-bold">
            Systems Architect
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-sky-500/50 to-transparent" />
        </motion.div>

        {/* Name — Dominant Hierarchy */}
        <div className="space-y-12">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-bold tracking-tight leading-[0.85] editorial-text"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            Daksh Mulundkar
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed"
          >
            Engineering robust, high-performance digital systems for the AI-first world. Specializing in architecture that scales.
          </motion.p>
        </div>

        {/* CTA Buttons — Generously Spaced */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <MagneticButton
            className="bg-white text-bg-primary border-none px-12 py-6 hover:bg-sky-50 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Work
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            download
            className="bg-transparent text-text-primary border-white/10 hover:border-white/30 px-12 py-6 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all"
          >
            Curriculum Vitae
          </MagneticButton>
        </motion.div>

        {/* Bottom Metadata — Subtle & Spaced */}
        <motion.div 
          className="mt-32 flex flex-wrap items-center justify-center gap-16 opacity-30 pt-16 border-t border-white/5 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 2 }}
        >
          {[
            { label: 'Year', val: '2026' },
            { label: 'Specialty', val: 'Full-Stack' },
            { label: 'Role', val: 'Architect' },
            { label: 'Based', val: 'Mumbai' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 items-center">
              <span className="text-[9px] uppercase tracking-widest font-mono">{stat.label}</span>
              <span className="text-xs font-semibold">{stat.val}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Ambient Noise class in Home */}
    </section>
  );
}
