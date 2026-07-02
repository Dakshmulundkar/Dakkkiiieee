import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const INTERESTS = [
  "Full-Stack Development",
  "Cloud Computing",
  "DevOps",
  "Artificial Intelligence"
];

const STATS_DATA = [
  { value: 30, label: "Projects Built", suffix: "+" },
  { value: 252, label: "GitHub Contributions", suffix: "+" },
  { value: 2, label: "Freelance Clients", suffix: "" },
  { value: 4, label: "AWS Certifications", suffix: "" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const ABOUT_TEXT = {
    intro: "Based in Mumbai, I am a Final Year Computer Science student at A.P. Shah Institute of Technology (APSIT) with a focus on engineering high-performance digital logic.",
  };

  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden bg-bg-primary">
      <div className="max-w-container mx-auto px-8 relative z-10">
        <SectionHeading title="About" subtitle="Entity_Bios" align="left" />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Portrait Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <motion.div 
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{ rotateX: useTransform(mouseY, (v) => -v), rotateY: useTransform(mouseX, (v) => v), transformStyle: "preserve-3d" }}
               className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.01] group shadow-xl"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Photo Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-mono text-[9px] uppercase tracking-[0.4em]">
                   [ Portrait_Image ]
                </div>

                <div className="absolute bottom-8 left-8">
                   <h4 className="text-xl font-bold text-white tracking-widest uppercase">D.MULUNDKAR</h4>
                   <p className="text-[10px] font-mono text-sky-400 uppercase tracking-widest mt-1 opacity-60">Computer Engineer</p>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-12">
             
             {/* Part 1: ME */}
             <div className="space-y-6">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.4em] font-bold">ME</span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                   From ideas to <br /> 
                   production-ready <span className="text-sky-400">software.</span>
                </h2>
                <div className="space-y-4 text-base text-text-secondary leading-relaxed font-light">
                   <p>
                      Hi, I'm Daksh, a Computer Engineering student specializing in building production-ready digital systems. Every project I build begins with a problem worth solving and ends with a product people can use. I enjoy transforming ideas into scalable, intuitive applications through thoughtful engineering—whether it's building AI-powered systems, cloud-native platforms, DevSecOps tools, or modern full-stack web experiences.
                   </p>
                   <p>
                      I believe great software balances functionality, performance, and user experience. That's why I'm constantly exploring new technologies, refining my skills, and building products that are not only technically sound but also enjoyable to use.
                   </p>
                </div>
             </div>

             {/* Part 2: INTERESTS */}
             <div className="space-y-4">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.4em] font-bold">INTERESTS</span>
                <div className="flex flex-wrap gap-2">
                   {INTERESTS.map((interest, i) => (
                      <motion.span
                        key={interest}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-sky-400 hover:border-sky-500/20 transition-all duration-300"
                      >
                         {interest}
                      </motion.span>
                   ))}
                </div>
             </div>

             {/* Part 3: TELEMETRY (Stats) */}
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5 font-mono">
                {STATS_DATA.map((stat, i) => (
                   <motion.div
                     key={stat.label}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="space-y-1"
                   >
                      <div className="text-xl font-bold text-white leading-none">
                         <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[7px] uppercase tracking-widest text-text-muted leading-tight">
                         {stat.label}
                      </div>
                   </motion.div>
                ))}
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
