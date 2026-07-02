import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure it starts at 0
    scaleX.set(0);
  }, [scaleX]);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #38bdf8, #0ea5e9, #0284c7)',
      }}
    />
  );
}
