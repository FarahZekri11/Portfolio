import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { skillCategories } from '../data/skills';

const icons: Record<string, string> = {
  languages: '{ }',
  frontend:  '</>',
  backend:   '⚙️',
  devops:    '🐳',
  cloud:     '☁️',
  messaging: '📡',
  databases: '🗄️',
  ai:        '🤖',
  architecture: '🏛️',
  testing:   '🧪',
  tools:     '🛠️',
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-wrapper relative"
      style={{ background: 'linear-gradient(180deg, rgba(9,9,26,0.6) 0%, #05050e 100%)' }}
    >
      {/* Accent glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

      <div className="section-inner relative z-10">
        <SectionTitle
          eyebrow="01 — Expertise"
          title="Technical Skills"
          subtitle="From backend microservices and cloud infrastructure to frontend interfaces and ML models."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative p-5 rounded-2xl border border-white/6 overflow-hidden cursor-default transition-all duration-300 hover:border-violet-500/35"
              style={{ background: 'rgba(9,9,26,0.8)' }}
            >
              {/* Hover background sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base border border-white/8 group-hover:border-violet-500/30 transition-colors"
                  style={{ background: 'rgba(124,58,237,0.1)' }}>
                  {icons[cat.id] ?? '◆'}
                </div>
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-violet-200 transition-colors">
                  {cat.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    className="pill-muted text-[10px] hover:text-violet-300 hover:border-violet-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
