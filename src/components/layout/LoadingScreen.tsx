import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setIsExiting(true), 400);
      const exitTimer = setTimeout(() => setIsComplete(true), 1200);
      return () => {
        clearTimeout(timer);
        clearTimeout(exitTimer);
      };
    }
  }, [progress]);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-bg-primary overflow-hidden grain"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top Edge Hairline Progress */}
          <motion.div 
            className="absolute top-0 left-0 h-[1.5px] bg-sky-400/30"
            style={{ width: `${progress}%`, transition: 'width 0.6s cubic-bezier(0.19, 1, 0.22, 1)' }}
          />

          <div className="relative max-w-xl w-full px-12 text-center">
             <motion.div
               initial={{ opacity: 0, y: 12 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
               className="space-y-8"
             >
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight editorial-text uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.15em' }}>
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
                >
                  {Math.round(progress)}
                </motion.span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
