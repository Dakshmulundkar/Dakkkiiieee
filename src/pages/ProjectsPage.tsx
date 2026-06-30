import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import ProjectCaseStudyCard from '@/components/sections/ProjectCaseStudyCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Background from '@/components/layout/Background';
import { FiGrid, FiList, FiArrowLeft, FiGithub } from 'react-icons/fi';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'editorial' | 'grid'>('editorial');
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-bg-primary text-text-primary min-h-screen">
      <CustomCursor />
      <Background />
      <Navbar />

      {/* View Toggle / Header */}
      <div className="fixed top-40 right-12 z-[601] flex items-center gap-4">
         <div className="flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-premium">
            <button 
               onClick={() => setViewMode('editorial')}
               className={cn(
                  "p-3 rounded-full transition-all duration-500",
                  viewMode === 'editorial' ? "bg-white text-black" : "text-white/40 hover:text-white"
               )}
            >
               <FiList className="w-4 h-4" />
            </button>
            <button 
               onClick={() => setViewMode('grid')}
               className={cn(
                  "p-3 rounded-full transition-all duration-500",
                  viewMode === 'grid' ? "bg-white text-black" : "text-white/40 hover:text-white"
               )}
            >
               <FiGrid className="w-4 h-4" />
            </button>
         </div>
      </div>

      <AnimatePresence mode="wait">
         {viewMode === 'editorial' ? (
            <motion.div 
               key="editorial"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="flex flex-col"
            >
               <div className="pt-56 px-12 md:px-24">
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                     The Vault.
                  </h1>
                  <p className="text-text-secondary mt-8 max-w-xl text-lg font-light leading-relaxed">
                     A selection of my architectural responses to complex engineering challenges. Scrolls vertically for a deep dive into each case study.
                  </p>
               </div>
               
               <div className="flex flex-col divide-y divide-white/5 mt-20">
                  {PROJECTS.map((project, index) => (
                     <ProjectCaseStudyCard key={project.id} project={project} index={index} />
                  ))}
               </div>
            </motion.div>
         ) : (
            <motion.div 
               key="grid"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="pt-[25vh] pb-40 max-w-6xl mx-auto px-12"
            >
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECTS.map((project, index) => (
                     <motion.a 
                        key={project.id}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative aspect-[3/2] rounded-[24px] overflow-hidden border border-white/5 bg-bg-secondary cursor-pointer shadow-lg block"
                     >
                        <div 
                           className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                           style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                           <div className="flex flex-col items-center gap-4">
                              <FiGithub className="w-10 h-10 text-white" />
                              <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Open Repository</span>
                           </div>
                        </div>
                        <div className="absolute bottom-10 left-10 right-10 group-hover:opacity-0 transition-opacity duration-300">
                           <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 mb-2 block">{project.category}</span>
                           <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.title}</h3>
                        </div>
                     </motion.a>
                  ))}
               </div>
            </motion.div>
         )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
