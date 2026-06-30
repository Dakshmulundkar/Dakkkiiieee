import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-bg-primary text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[12rem] font-black gradient-text leading-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        404
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-text-secondary text-xl max-w-md mx-auto mb-10"
      >
        The page you are looking for has drifted into deep space.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <MagneticButton href="/" className="bg-accent-purple text-white border-none px-8 py-4">
           <FiHome />
           <span>Return to Base</span>
        </MagneticButton>
      </motion.div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-30">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
