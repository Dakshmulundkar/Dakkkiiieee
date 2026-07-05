'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

interface HoverMaskEffectProps {
  children: React.ReactNode;
  revealChildren?: React.ReactNode; // Optional: Different content to show in the spotlight
  circleRadius?: number;
  accentColor?: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
}

export default function HoverMaskEffect({
  children,
  revealChildren,
  circleRadius = 160,
  accentColor = "#38bdf8",
  textColor = "#000000",
  disabled: manualDisabled,
  className,
}: HoverMaskEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskLayerRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(manualDisabled ?? false);

  useEffect(() => {
    if (manualDisabled !== undefined) return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsDisabled(isTouch);
  }, [manualDisabled]);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current || !maskLayerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const maskStyle = `radial-gradient(circle ${circleRadius}px at ${x}px ${y}px, black 100%, transparent 100%)`;

    maskLayerRef.current.style.webkitMaskImage = maskStyle;
    maskLayerRef.current.style.maskImage = maskStyle;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDisabled) return;
    updatePosition(e.clientX, e.clientY);
  };

  const onMouseLeave = () => {
    if (isDisabled || !maskLayerRef.current) return;
    maskLayerRef.current.style.opacity = '0';
  };

  useEffect(() => {
    if (isDisabled) return;

    let rafId: number | null = null;
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const padding = 100;

        if (
          e.clientX >= rect.left - padding &&
          e.clientX <= rect.right + padding &&
          e.clientY >= rect.top - padding &&
          e.clientY <= rect.bottom + padding
        ) {
          updatePosition(e.clientX, e.clientY);
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isDisabled, circleRadius]);

  const onMouseEnter = (e: React.MouseEvent) => {
    if (isDisabled || !maskLayerRef.current) return;
    maskLayerRef.current.style.opacity = '1';
    updatePosition(e.clientX, e.clientY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "relative group/mask",
        !isDisabled && "cursor-none",
        className
      )}
    >
      {/* Base Layer */}
      <div className="relative z-10 w-full pointer-events-none">
        {children}
      </div>

      {/* Reveal Layer */}
      {!isDisabled && (
        <div
          ref={maskLayerRef}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 select-none overflow-hidden"
          style={{
            background: accentColor,
            color: textColor,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            willChange: 'mask-image, -webkit-mask-image',
          }}
        >
          <div className="w-full h-full [&_*]:!text-inherit [&_*]:!bg-none [&_*]:!opacity-100 [&_*]:![-webkit-text-fill-color:currentColor] [&_*]:!fill-current">
            {revealChildren || children}
          </div>
        </div>
      )}
    </div>
  );
}
