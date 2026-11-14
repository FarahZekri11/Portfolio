import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="section-wrapper relative"
      style={{ background: 'linear-gradient(180deg, rgba(9,9,26,0.5) 0%, #05050e 100%)' }}
    >
      {/* Left glow accent */}
      <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />

      <div className="section-inner relative z-10">
        <SectionTitle eyebrow="03 — Career" title="Professional Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-6 top-4 bottom-4 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0.05) 100%)' }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline node */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0" style={{ width: 12 }}>
                  <div className={`w-3 h-3 rounded-full border-2 mt-7 z-10 flex-shrink-0 ${
                    i === 0
                      ? 'border-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]'
                      : 'border-slate-600'
                  }`}
                    style={{ background: i === 0 ? 'rgba(124,58,237,0.4)' : '#09091a' }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex-1 group p-6 md:p-7 rounded-2xl border border-white/6 hover:border-violet-500/30 overflow-hidden transition-all duration-300"
                  style={{ background: 'rgba(9,9,26,0.85)' }}
                >
                  {/* Top glow line on hover */}
                  <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={13} className="text-violet-400" />
                        <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-slate-100 font-bold text-base leading-snug">{exp.title}</h3>
                      <p className="text-violet-400 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Calendar size={11} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      {exp.duration && (
                        <span className="text-[10px] font-mono text-slate-600 border border-white/8 rounded-full px-2 py-0.5">
                          {exp.duration}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight size={13} className="text-violet-400 mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map(t => (
                      <span key={t} className="pill-violet text-[10px]">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
