import { useRef, memo, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  target?: string;
  style?: React.CSSProperties;
}

const MagneticButton = memo(function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  download,
  target,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const rotateX = useTransform(springY, [-20, 20], [5, -5]);
  const rotateY = useTransform(springX, [-20, 20], [-5, 5]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }, [strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, download, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : { type: 'button' as const };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, rotateX, rotateY, perspective: 800, ...style }}
      className="inline-block"
    >
      <Component
        className={cn(
          'relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm',
          'overflow-hidden transition-all duration-300',
          'border border-border-subtle hover:border-border-accent',
          className
        )}
        onClick={onClick}
        {...linkProps}
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Component>
    </motion.div>
  );
});

export default MagneticButton;
