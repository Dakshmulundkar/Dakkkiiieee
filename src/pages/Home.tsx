import { lazy, Suspense } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Background from '@/components/layout/Background';
import LoadingScreen from '@/components/layout/LoadingScreen';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CommandPalette from '@/components/ui/CommandPalette';

// Critical above-the-fold section — loaded first, not lazy
import Hero from '@/components/sections/Hero';

// Below-fold sections — lazy loaded after hero is painted
const About = lazy(() => import('@/components/sections/About'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const GitHub = lazy(() => import('@/components/sections/GitHub'));
const Certifications = lazy(() => import('@/components/sections/Certifications'));
const Contact = lazy(() => import('@/components/sections/Contact'));

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative bg-bg-primary text-text-primary selection:bg-accent-purple/30">
      <LoadingScreen />
      <CustomCursor />
      <Background />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      {/* Hero renders immediately — no Suspense boundary */}
      <Hero />

      {/* Below-fold sections load progressively after hero */}
      <Suspense fallback={null}>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <GitHub />
        <Certifications />
        <Contact />
      </Suspense>

      <Footer />
      <div className="noise-overlay" />
    </main>
  );
}
