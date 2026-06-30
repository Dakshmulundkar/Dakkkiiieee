import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden grain" style={{ zIndex: 0 }}>
      {/* Slate Glow Top Right */}
      <motion.div
        className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 80%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Deep Emerald Glow Bottom Left */}
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, transparent 80%)',
          filter: 'blur(150px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Arctic Cyan Center Pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.02) 0%, transparent 70%)',
          filter: 'blur(200px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Film Grain Class is applied to the wrapper */}
    </div>
  );
}
