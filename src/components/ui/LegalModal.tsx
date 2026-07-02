import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'audit';
}

const CONTENT = {
  privacy: {
    title: "Privacy Protocol",
    body: "This portfolio respects your digital footprint. No tracking cookies are used, and no personal data is collected without your explicit consent via the contact form. All system logs are transient and used solely for performance monitoring."
  },
  terms: {
    title: "Legal Terms",
    body: "All architectural designs, code snippets, and visual assets are the intellectual property of Daksh Mulundkar unless otherwise stated. Unauthorized reproduction or commercial use is strictly prohibited under standard copyright laws."
  },
  audit: {
    title: "System Audit Logs",
    body: "Network Status: Verified. Content integrity: 100%. Site last deployment: July 2026. This environment is built using React, Vite, and Framer Motion, utilizing hardware acceleration for visual rendering."
  }
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = CONTENT[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-bg-secondary border border-white/10 rounded-[32px] p-10 shadow-2xl overflow-hidden mt-16"
          >
            {/* Visual Header */}
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">{type}_Registry</span>
               </div>
               <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white">
                  <FiX className="w-5 h-5" />
               </button>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
               {content.title}
            </h2>
            
            <p className="text-text-secondary leading-relaxed font-light text-base mb-8">
               {content.body}
            </p>

            <div className="pt-8 border-t border-white/5 flex justify-between items-center">
               <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">© Daksh Mulundkar</span>
               <button 
                 onClick={onClose}
                 className="px-6 py-2 bg-white text-black text-[10px] font-mono uppercase tracking-widest rounded-full font-bold hover:bg-sky-50 transition-colors"
               >
                  Close
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
