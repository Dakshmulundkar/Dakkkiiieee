import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/data/personal';
import { FiSearch, FiDownload, FiArrowRight, FiCommand } from 'react-icons/fi';

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType | any;
  action: () => void;
  category: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const commands: CommandItem[] = [
    ...NAV_ITEMS.map((item) => ({
      id: item.href,
      label: `Go to ${item.label}`,
      icon: FiArrowRight,
      action: () => {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      },
      category: 'Navigation',
    })),
    {
      id: 'resume',
      label: 'Download Resume',
      icon: FiDownload,
      action: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Daksh_Mulundkar_CV.pdf';
        link.click();
        setIsOpen(false);
      },
      category: 'Actions',
    },
    {
      id: 'top',
      label: 'Scroll to Top',
      icon: FiArrowRight,
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      },
      category: 'Navigation',
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch('');
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Palette */}
          <motion.div
            className="fixed top-[20%] left-1/2 z-[201] w-full max-w-lg -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15, 15, 35, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(40px)',
            }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border-subtle">
              <FiSearch className="w-4 h-4 text-text-muted flex-shrink-0" />
              <input
                autoFocus
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder-text-muted outline-none font-sans"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd className="px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-text-muted bg-bg-glass rounded border border-border-subtle font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-text-muted">No results found.</p>
              ) : (
                filtered.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-glass transition-colors"
                  >
                    <cmd.icon className="w-4 h-4 text-text-muted" />
                    <span>{cmd.label}</span>
                    <span className="ml-auto text-xs text-text-muted">{cmd.category}</span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-border-subtle flex items-center gap-4 text-[10px] text-text-muted">
              <span className="flex items-center gap-1">
                <FiCommand className="w-3 h-3" /> + K to toggle
              </span>
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
