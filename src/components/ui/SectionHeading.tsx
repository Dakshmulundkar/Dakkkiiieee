import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  return (
    <div 
      className={cn(
        "mb-20 md:mb-32 flex flex-col gap-8",
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="flex flex-col gap-6"
      >
        <div className={cn(
          "flex items-center gap-4",
          align === 'center' && "justify-center"
        )}>
          <div className="w-8 h-[1px] bg-sky-500/40" />
          <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-sky-400 font-bold">
            {subtitle}
          </span>
        </div>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight editorial-text"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {title}
        </h2>
      </motion.div>

      {/* Architectural Accent Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          "h-[1px] w-24 bg-gradient-to-r from-sky-500/20 to-transparent",
          align === 'center' && "mx-auto bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"
        )}
      />
    </div>
  );
}
