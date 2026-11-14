import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { education } from '../data/education';

export function Education() {
  return (
    <section
      id="education"
      className="section-wrapper relative"
      style={{ background: 'linear-gradient(180deg, #05050e 0%, rgba(9,9,26,0.4) 100%)' }}
    >
      <div className="section-inner">
        <SectionTitle eyebrow="04 — Background" title="Education" />

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(9,9,26,0.85)',
                borderColor: edu.current ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
              }}
            >
              {/* Glow for current */}
              {edu.current && (
                <div className="absolute -top-px inset-x-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), rgba(56,189,248,0.4), transparent)' }} />
              )}

              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: edu.current ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
                    borderColor: edu.current ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.08)',
                  }}>
                  <GraduationCap size={20} className={edu.current ? 'text-violet-400' : 'text-slate-500'} />
                </div>
                {edu.current && (
                  <span className="pill-violet text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-slate-100 font-bold text-base leading-tight mb-1">{edu.degree}</h3>
              <p className="text-violet-400 font-medium text-sm mb-4">{edu.institution}</p>

              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Calendar size={11} />
                  <span className="font-mono">{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <MapPin size={11} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                {edu.details.map((d, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <BookOpen size={12} className="text-violet-400/60 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-400 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
