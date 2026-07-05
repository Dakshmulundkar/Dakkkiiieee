import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface TransitionContextType {
  timeline: gsap.core.Timeline | null;
  setTimeline: (tl: gsap.core.Timeline) => void;
  playTransition: (path: string) => void;
  isAnimating: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  timeline: null,
  setTimeline: () => {},
  playTransition: () => {},
  isAnimating: false,
});

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const playTransition = useCallback((path: string) => {
    // Don't re-trigger if already animating or on the same path
    if (isAnimating) return;
    if (window.location.pathname === path) return;

    setIsAnimating(true);

    if (timeline) {
      timeline.restart();

      // Navigate at the midpoint when panels fully cover the screen
      setTimeout(() => {
        navigate(path);
        window.scrollTo(0, 0);
      }, 500);

      // Mark animation complete after full cycle
      setTimeout(() => {
        setIsAnimating(false);
      }, 1100);
    } else {
      // Fallback if timeline not ready
      navigate(path);
      window.scrollTo(0, 0);
      setIsAnimating(false);
    }
  }, [timeline, navigate, isAnimating]);

  return (
    <TransitionContext.Provider value={useMemo(() => ({ timeline, setTimeline, playTransition, isAnimating }), [timeline, setTimeline, playTransition, isAnimating])}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a TransitionProvider');
  }
  return context;
}
