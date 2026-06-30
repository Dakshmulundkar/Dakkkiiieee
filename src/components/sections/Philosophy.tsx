import { motion } from 'framer-motion';
import { FiCommand, FiShield, FiZap, FiLayout } from 'react-icons/fi';

export default function Philosophy() {
  const principles = [
    {
      icon: FiCommand,
      title: "Clean Architecture",
      desc: "Engineering for maintainability and scalability through decoupled systems and clear boundaries."
    },
    {
      icon: FiLayout,
      title: "Intuitive UX",
      desc: "Bridging the gap between complex backend logic and seamless, human-centric interfaces."
    },
    {
      icon: FiShield,
      title: "Reliability",
      desc: "Prioritizing security and performance through thorough testing and DevSecOps integration."
    },
    {
      icon: FiZap,
      title: "Automation",
      desc: "Optimizing the developer experience and production stability via robust CI/CD workflows."
    }
  ];

  return (
    <section id="philosophy" className="py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-sky-400 font-bold">Engineering Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight editorial-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Beyond Code: <br />The Architectural Protocol.
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed font-light max-w-xl"
            >
              "I enjoy building scalable, maintainable software with a focus on clean architecture, intuitive user experiences, and automation. I believe great software is reliable, performant, and designed with users in mind."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 transition-all">
                  <p.icon className="w-4 h-4 text-text-muted group-hover:text-sky-400" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.title}</h4>
                <p className="text-[11px] leading-relaxed text-text-muted group-hover:text-text-secondary transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
