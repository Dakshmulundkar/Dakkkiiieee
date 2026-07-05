import { lazy, Suspense, useState, useCallback } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Background from '@/components/layout/Background';
import LoadingScreen from '@/components/layout/LoadingScreen';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CommandPalette from '@/components/ui/CommandPalette';

// These lazy() calls fire immediately when this module loads — chunks start
// downloading in the background while the loader is running, not after it exits.
const Hero         = lazy(() => import('@/components/sections/Hero'));
const About        = lazy(() => import('@/components/sections/About'));
const Projects     = lazy(() => import('@/components/sections/Projects'));
const Experience   = lazy(() => import('@/components/sections/Experience'));
const Skills       = lazy(() => import('@/components/sections/Skills'));
const GitHub       = lazy(() => import('@/components/sections/GitHub'));
const Certifications = lazy(() => import('@/components/sections/Certifications'));
const Contact      = lazy(() => import('@/components/sections/Contact'));

const alreadyLoaded = typeof window !== 'undefined' &&
  sessionStorage.getItem('site-loaded') === 'true';

export default function Home() {
  useSmoothScroll();

  // Returning visitors skip the loader — content mounts immediately.
  // New visitors: content mounts when LoadingScreen calls onComplete,
  // which happens ~40% into the fade-out so content is ready the instant
  // the overlay fully disappears.
  const [siteReady, setSiteReady] = useState(alreadyLoaded);

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem('site-loaded', 'true');
    setSiteReady(true);
  }, []);

  return (
    <main className="relative bg-bg-primary text-text-primary selection:bg-accent-purple/30">
      {/* Loader only shown on first visit */}
      {!alreadyLoaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <CustomCursor />
      <Background />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      {siteReady && (
        <Suspense fallback={null}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <GitHub />
          <Certifications />
          <Contact />
        </Suspense>
      )}

      <Footer />
      <div className="noise-overlay" />
    </main>
  );
}
