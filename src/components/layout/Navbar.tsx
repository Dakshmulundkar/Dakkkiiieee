import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/personal';
import { FiCommand, FiExternalLink } from 'react-icons/fi';
import { usePageTransition } from '@/context/TransitionContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const { playTransition } = usePageTransition();
  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 300);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Track active section
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (isHome) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home first, then scroll
        playTransition('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
      }
    } else {
      // Route-based navigation with panel transition
      playTransition(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[500] transition-all duration-700',
          isScrolled ? 'pt-8' : 'pt-12'
        )}
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="max-w-container mx-auto">
          <div
            className={cn(
              'flex items-center justify-between rounded-[32px] px-10 py-5 transition-all duration-700',
              isScrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/5 shadow-premium' : 'bg-transparent'
            )}
          >
            {/* Professional Brand Logo */}
            <motion.button
              className="relative z-10 text-xl font-bold tracking-tighter editorial-text uppercase cursor-pointer bg-transparent border-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('/')}
            >
              Daksh.M
            </motion.button>

            {/* Systems Navigation — Minimalist Mono */}
            <div className="hidden md:flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-6 py-2.5 text-[10px] uppercase font-mono tracking-[0.3em] transition-all duration-500 rounded-full',
                    activeSection === item.href
                      ? 'text-white'
                      : 'text-text-muted hover:text-text-secondary'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-full"
                      layoutId="activeNav"
                      transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/projects')}
                className={cn(
                  'relative px-6 py-2.5 text-[10px] uppercase font-mono tracking-[0.3em] transition-all duration-500 rounded-full',
                  location.pathname === '/projects' ? 'text-white' : 'text-text-muted hover:text-white'
                )}
              >
                <span className="relative z-10 flex items-center gap-2">Projects <FiExternalLink className="w-3 h-3" /></span>
                {location.pathname === '/projects' && (
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-full"
                    layoutId="activeNav"
                    transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                  />
                )}
              </button>
            </div>

            {/* Utility Interaction Layer */}
            <div className="hidden md:flex items-center gap-10">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500/60 animate-pulse" />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.4em]">Online</span>
               </div>
               
               <div className="flex items-center gap-4 border-l border-white/10 pl-10">
                  <button
                    onClick={() => {
                      const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
                      window.dispatchEvent(event);
                    }}
                    className="text-text-muted hover:text-white transition-colors"
                    aria-label="Search Command"
                  >
                    <FiCommand className="w-4 h-4" />
                  </button>
               </div>
            </div>

            {/* Minimalist Mobile Trigger */}
            <button
              className="md:hidden relative z-10 flex flex-col gap-2 group w-8 h-8 items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <div className={cn("w-6 h-[1.5px] bg-white transition-all duration-700", isMobileMenuOpen && "rotate-45 translate-y-[3.5px]")} />
              <div className={cn("w-6 h-[1.5px] bg-white transition-all duration-700", isMobileMenuOpen && "-rotate-45 -translate-y-[3.5px]")} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ background: 'rgba(5, 5, 16, 0.95)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-3xl font-semibold text-text-primary hover:text-sky-400 transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('/projects')}
                className="text-3xl font-semibold text-text-primary hover:text-sky-400 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4 }}
              >
                All Projects
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
