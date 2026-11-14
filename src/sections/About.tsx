import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { softSkills, interests, languages } from '../data/personal';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } },
};

const infoCards = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: '3rd Year @ ESPRIT',
    sub:   'Software Engineering (PFE 2027)',
    color: 'text-violet-400',
    bg:    'rgba(124,58,237,0.08)',
    border:'rgba(124,58,237,0.2)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tunis, Tunisia',
    sub:   'Open to on-site & remote',
    color: 'text-sky-400',
    bg:    'rgba(14,165,233,0.08)',
    border:'rgba(14,165,233,0.2)',
  },
  {
    icon: Code2,
    label: 'Specialty',
    value: 'Full-Stack · DevOps · AI',
    sub:   'Spring Boot · .NET 8 · NestJS · K8s',
    color: 'text-emerald-400',
    bg:    'rgba(16,185,129,0.08)',
    border:'rgba(16,185,129,0.2)',
  },
  {
    icon: Sparkles,
    label: 'Status',
    value: 'Seeking 6-Mo PFE',
    sub:   'Full-Stack / DevOps / AI',
    color: 'text-amber-400',
    bg:    'rgba(245,158,11,0.08)',
    border:'rgba(245,158,11,0.2)',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section-wrapper relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05050e 0%, rgba(9,9,26,0.6) 100%)' }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />

      <div className="section-inner relative z-10">
        <SectionTitle eyebrow="00 — About" title="Who I Am" />

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* ── Left text (3/5) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <motion.p variants={item} className="text-slate-300 text-lg leading-relaxed">
              I'm a third-year Software Engineering student at{' '}
              <span className="text-violet-300 font-semibold">ESPRIT</span> with two engineering internships
              and an award-winning AI marketplace project. I specialize in building distributed microservices,
              production-ready enterprise applications, and robust cloud-native architectures.
            </motion.p>

            <motion.p variants={item} className="text-slate-400 text-base leading-relaxed">
              My core technical stack includes{' '}
              <span className="text-slate-200 font-medium">Spring Boot 3</span>,{' '}
              <span className="text-slate-200 font-medium">.NET 8 / C#</span>,{' '}
              <span className="text-slate-200 font-medium">NestJS</span>,{' '}
              <span className="text-slate-200 font-medium">Node.js</span>, and{' '}
              <span className="text-slate-200 font-medium">Angular 17</span>. On the DevOps side, I design
              automated CI/CD pipelines and orchestrate containerized workloads with{' '}
              <span className="text-slate-200 font-medium">Docker</span>,{' '}
              <span className="text-slate-200 font-medium">Kubernetes</span>,{' '}
              <span className="text-slate-200 font-medium">Jenkins</span>, and{' '}
              <span className="text-slate-200 font-medium">GitHub Actions</span>, with observability via
              Grafana and Prometheus across Microsoft Azure and AWS.
            </motion.p>

            <motion.p variants={item} className="text-slate-400 text-base leading-relaxed">
              My flagship project <span className="text-violet-300 font-semibold">ESPRIT Market</span> — an
              AI-driven 9-module marketplace featuring XGBoost (93.6% price accuracy), Random Forest, and FAISS
              semantic recommendations — won{' '}
              <span className="text-amber-300 font-semibold">1st Prize</span> at
              ESPRIT Bal des Projets 2026. During my internships at{' '}
              <span className="text-slate-200 font-medium">VIA-Seven</span> and{' '}
              <span className="text-slate-200 font-medium">Telnet Holding</span>, I designed mission-critical
              applications (.NET 8 WPF MVVM attendance engine and multi-shop e-commerce platforms).
            </motion.p>

            <motion.p variants={item} className="text-slate-400 text-base leading-relaxed">
              I am actively seeking a{' '}
              <span className="text-violet-300 font-semibold">6-month end-of-studies internship (PFE)</span>{' '}
              in Full-Stack, DevOps, or AI Engineering starting early 2027.
            </motion.p>

            {/* Languages */}
            <motion.div variants={item} className="pt-2 space-y-3">
              <p className="label-text">Human Languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <span key={l.name} className="pill-muted">
                    {l.name}
                    <span className="text-violet-400 ml-1">· {l.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div variants={item} className="pt-1 space-y-3">
              <p className="label-text">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map(s => (
                  <span key={s.label} className="pill-muted">{s.label}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right cards (2/5) ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {infoCards.map(({ icon: Icon, label, value, sub, color, bg, border }) => (
              <motion.div
                key={label}
                variants={item}
                whileHover={{ x: 4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300"
                style={{ background: bg, borderColor: border }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 mb-0.5 uppercase tracking-wider">{label}</p>
                  <p className="text-slate-100 font-semibold text-sm">{value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Interests */}
            <motion.div
              variants={item}
              className="p-5 rounded-2xl border border-white/6"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <p className="label-text mb-4">Interests</p>
              <div className="space-y-2.5">
                {interests.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-lg leading-none">{icon}</span>
                    <span className="text-sm text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
