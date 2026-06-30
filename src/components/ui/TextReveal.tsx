import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  splitBy?: 'word' | 'char' | 'line';
  stagger?: number;
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  as: Component = 'p',
  splitBy = 'word',
  stagger = 0.03,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const elements = splitBy === 'char'
    ? children.split('')
    : splitBy === 'line'
      ? children.split('\n')
      : children.split(' ');

  return (
    <Component ref={ref as any} className={`overflow-hidden ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '110%', opacity: 0, rotateX: -40 }}
          animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : undefined}
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ perspective: '500px' }}
        >
          {el}
          {splitBy === 'word' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  );
}
