import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className, glowColor = '56, 189, 248', hover = true, style }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--glow-x', `${x}px`);
    cardRef.current.style.setProperty('--glow-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn('editorial-glass relative overflow-hidden rounded-2xl transition-all duration-700', className)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' } : undefined}
      style={style}
    >
      {/* Subtle border shine */}
      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
      
      {/* Dynamic Glow */}
      {hover && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, 0.04), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
