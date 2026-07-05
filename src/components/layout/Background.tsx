import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden grain" style={{ zIndex: 0 }}>
      {/* Slate Glow Top Right */}
      <motion.div
        className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.03) 0%, transparent 80%)',
          filter: 'blur(100px)',
        }}
        animate={!window.matchMedia('(pointer: coarse)').matches ? {
          x: [0, -20, 10, 0],
          y: [0, 20, -10, 0],
        } : {}}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Deep Emerald Glow Bottom Left */}
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[900px] h-[900px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.02) 0%, transparent 80%)',
          filter: 'blur(120px)',
        }}
        animate={!window.matchMedia('(pointer: coarse)').matches ? {
          x: [0, 30, -15, 0],
          y: [0, -30, 20, 0],
        } : {}}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Arctic Cyan Center Pulse - Simplified for Performance */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.15] hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.02) 0%, transparent 70%)',
          filter: 'blur(150px)',
        }}
      />
    </div>
  );
}
