import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMediaQuery';

// Loader is purely time-based — no asset waiting, no Promise chains.
// Assets are preloaded in parallel but NEVER block the progress bar.
// The bar always completes in a predictable time window.

const TOTAL_DURATION_MS = 2800; // How long 0→100 takes
const EXIT_DELAY_MS = 300;      // Pause at 100 before fade starts
const FADE_DURATION_MOBILE = 600;
const FADE_DURATION_DESKTOP = 900;

// Kick off asset preloads in the background — fire and forget
function prefetchAssets() {
  const urls = [
    '/projects/ai-kyc.webp',
    '/projects/stans.webp',
    '/projects/disaster.webp',
    '/badges/aws-academy-graduate-cloud-foundations-training-bad.webp',
    '/badges/aws-academy-graduate-cloud-architecting-training-badge.webp',
    '/badges/aws-academy-graduate-data-engineering-training-badg.webp',
  ];
  urls.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

export default function LoadingScreen() {
  const isMobile = useIsMobile();
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('site-loaded') === 'true';
    }
    return false;
  });
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    // Fire asset preloads in background — doesn't affect loading bar
    prefetchAssets();

    const startTime = performance.now();
    let rafId: number;

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const ratio = Math.min(elapsed / TOTAL_DURATION_MS, 1);

      // Ease-out curve so bar decelerates near the end (looks natural)
      const eased = 1 - Math.pow(1 - ratio, 3);
      const next = Math.round(eased * 100);

      setProgress(next);

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick);
      }
      // ratio === 1 means we hit 100 — useEffect below handles the exit
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [isComplete]);

  // Trigger exit once progress reaches 100
  useEffect(() => {
    if (progress >= 100 && !isComplete && !isExiting) {
      const fadeDuration = isMobile ? FADE_DURATION_MOBILE : FADE_DURATION_DESKTOP;

      const exitTimer = setTimeout(() => setIsExiting(true), EXIT_DELAY_MS);
      const completeTimer = setTimeout(() => {
        sessionStorage.setItem('site-loaded', 'true');
        setIsComplete(true);
      }, EXIT_DELAY_MS + fadeDuration);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, isMobile, isComplete, isExiting]);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-bg-primary overflow-hidden grain"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{
          duration: (isMobile ? FADE_DURATION_MOBILE : FADE_DURATION_DESKTOP) / 1000,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Progress bar */}
        <div
          className="absolute top-0 left-0 h-[1.5px] bg-sky-400/50"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />

        <div className="relative max-w-xl w-full px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
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
    </AnimatePresence>
  );
}
