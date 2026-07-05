import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glare?: boolean;
}

export default function TiltCard({ children, className, tiltStrength = 10, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [tiltStrength, -tiltStrength]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltStrength, tiltStrength]), { damping: 20, stiffness: 150 });

  const glareX = useTransform(x, [0, 1], ['-50%', '150%']);
  const glareY = useTransform(y, [0, 1], ['-50%', '150%']);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      {/* Glare overlay */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.06) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
