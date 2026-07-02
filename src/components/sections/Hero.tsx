import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_TITLES } from '@/data/personal';
import MagneticButton from '@/components/ui/MagneticButton';
import { FiArrowDown, FiExternalLink, FiDownload } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/useMediaQuery';
import HoverMaskEffect from '@/components/HoverMaskEffect';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-bg-primary"
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
            Computer Engineer
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-sky-500/50 to-transparent" />
        </motion.div>

        {/* Name — Dominant Hierarchy */}
        <HoverMaskEffect 
          circleRadius={200} 
          accentColor="#38bdf8" 
          textColor="#000000"
          className="w-full px-8"
          revealChildren={
            <div className="py-10 flex flex-col items-center space-y-12 w-full">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-bold tracking-tight leading-[0.85] whitespace-nowrap"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Daksh Mulundkar
              </h1>
              
              <div className="w-fit mx-auto text-left">
                <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] font-mono leading-relaxed">
                  I Question Fragile architecture
                </p>
              </div>
            </div>
          }
        >
          <div className="py-10 flex flex-col items-center space-y-12 w-full">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-bold tracking-tight leading-[0.85] editorial-text whitespace-nowrap"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            >
              Daksh Mulundkar
            </motion.h1>
            
            <div className="w-fit mx-auto text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="text-xl md:text-2xl text-text-secondary font-mono tracking-[0.2em] uppercase leading-relaxed"
              >
                I BUILD RELIABLE SYSTEM
              </motion.p>
            </div>
          </div>
        </HoverMaskEffect>

        {/* CTA Buttons — Generously Spaced */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <MagneticButton
            className="bg-white text-bg-primary border-none px-12 py-6 hover:bg-sky-50 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Projects
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            download="Daksh-Mulundkar-Resume.pdf"
            className="bg-transparent text-text-primary border-white/10 hover:border-white/30 px-12 py-6 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all"
          >
            Resume
          </MagneticButton>
        </motion.div>
      </div>

      {/* Background Ambient Noise class in Home */}
    </section>
  );
}
