import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { usePageTransition } from '@/context/TransitionContext';

export default function Transition() {
  const { setTimeline } = usePageTransition();
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [panelCount, setPanelCount] = useState(8);

  // Responsive panel count
  useEffect(() => {
    const updatePanelCount = () => {
      setPanelCount(window.innerWidth <= 768 ? 4 : 8);
    };
    updatePanelCount();
    window.addEventListener('resize', updatePanelCount);
    return () => window.removeEventListener('resize', updatePanelCount);
  }, []);

  // Build and register the GSAP timeline
  useLayoutEffect(() => {
    const panels = panelRefs.current.filter(Boolean);
    if (panels.length === 0) return;

    const tl = gsap.timeline({ paused: true });

    // STAGE 1: Panels expand (curtain closes)
    tl.set(overlayRef.current, { visibility: 'visible', opacity: 1 })
      .fromTo(
        panels,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.inOut',
          transformOrigin: 'bottom center',
        }
      )
      // STAGE 2: Hold (page swaps behind the panels)
      .to({}, { duration: 0.15 })
      // STAGE 3: Panels collapse (curtain opens, revealing new page)
      .to(panels, {
        scaleY: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power3.inOut',
        transformOrigin: 'top center',
      })
      // STAGE 4: Hide overlay
      .set(overlayRef.current, { visibility: 'hidden', opacity: 0 });

    setTimeline(tl);

    return () => {
      tl.kill();
    };
  }, [panelCount, setTimeline]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none flex"
      style={{ visibility: 'hidden', opacity: 0 }}
    >
      {Array.from({ length: panelCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) panelRefs.current[i] = el;
          }}
          className="flex-1 h-full origin-bottom"
          style={{
            backgroundColor: '#ffffff',
            transform: 'scaleY(0)',
          }}
        />
      ))}
    </div>
  );
}
