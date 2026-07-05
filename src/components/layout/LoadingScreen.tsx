import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface LoadingScreenProps {
  onComplete: () => void;
}

const FILL_DURATION_MS = 2200;
const HOLD_AT_100_MS = 250;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const isMobile = useIsMobile();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  // Remove the static HTML loader the instant React takes over — no flash
  useEffect(() => {
    const el = document.getElementById('static-loader');
    if (el) el.style.display = 'none';
  }, []);

  useEffect(() => {
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / FILL_DURATION_MS, 1);
      const p = Math.round(ease(t) * 100);
      setProgress(p);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (completedRef.current) return;
          completedRef.current = true;
          setExiting(true);

          const fadeDuration = isMobile ? 500 : 800;
          const mountDelay = Math.floor(fadeDuration * 0.4);
          setTimeout(onComplete, mountDelay);
        }, HOLD_AT_100_MS);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-bg-primary overflow-hidden grain"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: isMobile ? 0.5 : 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: exiting ? 'none' : 'all' }}
    >
      <div
        className="absolute top-0 left-0 h-[1.5px] bg-sky-400/50"
        style={{ width: `${progress}%`, transition: 'width 0.08s linear' }}
      />

      <div className="relative max-w-xl w-full px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-8"
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight editorial-text uppercase"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.15em' }}
          >
            Daksh Mulundkar
          </h2>

          <div className="flex items-center justify-center gap-8 opacity-40">
            <span className="text-[10px] font-mono uppercase tracking-[0.6em]">Systems</span>
            <div className="w-[1.5px] h-6 bg-white/10" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em]">Architecture</span>
          </div>
        </motion.div>

        <div className="mt-24">
          <motion.span
            className="block text-2xl font-mono text-white/20 tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {progress}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
