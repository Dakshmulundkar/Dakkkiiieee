'use client';

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
    
    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (isHome) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        playTransition('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
      }
    } else {
      playTransition(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HOVER ZONE - Invisible detector to show navbar when cursor is at top */}
      <div 
        className="fixed top-0 left-0 right-0 h-4 z-[501] pointer-events-auto"
        onMouseEnter={() => setIsHidden(false)}
      />

      <motion.nav
        className={cn(
          'fixed inset-x-0 z-[500] px-4 md:px-0',
          isScrolled ? 'top-8' : 'top-12'
        )}
        initial={{ y: -150 }}
        animate={{ y: isHidden ? -150 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-container mx-auto">
          <div
            className={cn(
              'flex items-center justify-between rounded-[32px] px-8 py-4 transition-all duration-500',
              isScrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/5 shadow-premium' : 'bg-transparent'
            )}
            onMouseEnter={() => setIsHidden(false)}
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
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href === '#projects' ? '/projects' : item.href)}
                  className={cn(
                    'relative px-5 py-2 text-[10px] uppercase font-mono tracking-[0.3em] transition-all duration-300 rounded-full',
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
            </div>

            {/* Utility Interaction Layer */}
            <div className="hidden md:flex items-center gap-8">
               <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-[0.4em]">Live</span>
               </div>
               
               <button
                 onClick={() => {
                   const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
                   window.dispatchEvent(event);
                 }}
                 className="text-text-muted hover:text-white transition-colors border-l border-white/10 pl-8"
                 aria-label="Search Command"
               >
                 <FiCommand className="w-4 h-4" />
               </button>
            </div>

            {/* Minimalist Mobile Trigger */}
            <button
              className="md:hidden relative z-10 flex flex-col gap-2 group w-8 h-8 items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <div className={cn("w-6 h-[1.5px] bg-white transition-all duration-500", isMobileMenuOpen && "rotate-45 translate-y-[3.5px]")} />
              <div className={cn("w-6 h-[1.5px] bg-white transition-all duration-500", isMobileMenuOpen && "-rotate-45 -translate-y-[3.5px]")} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[600] flex items-center justify-center bg-bg-primary/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-4xl font-bold text-text-primary hover:text-sky-400"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
