import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Trophy, Users, Calendar, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { projects } from '../data/projects';
import type { Project } from '../types';

/* ── Project Modal ─────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState<string | null>(
    project.images && project.images.length > 0 ? project.images[0] : (project.image || null)
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(2,2,10,0.9)', backdropFilter: 'blur(20px)' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
          style={{ background: 'rgba(9,9,26,0.98)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top gradient bar */}
          <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(14,165,233,0.4), transparent)' }} />

          {/* Header */}
          <div className="p-6 pb-0">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex-1">
                {project.award && (
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={13} className="text-amber-400" />
                    <span className="text-xs font-medium text-amber-300">{project.award}</span>
                  </div>
                )}
                <h2 className="text-xl font-bold text-slate-50 mb-1">{project.title}</h2>
                <p className="text-sm text-violet-400">{project.subtitle}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/8 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-white/6">
              <span className="pill-muted">
                <Calendar size={11} /> {project.year}
              </span>
              <span className="pill-muted">
                <Users size={11} /> {project.type === 'team' ? `Team · ${project.teamSize}` : project.type === 'internship' ? 'Internship' : 'Solo'}
              </span>
              <span className="pill-violet">{project.organization}</span>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 pb-6 space-y-6">
            {/* Image Gallery */}
            {project.images && project.images.length > 0 && activeImage && (
              <div>
                <p className="label-text mb-3">Captures & Visuels</p>
                <div className="space-y-3">
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                    <img
                      src={activeImage}
                      alt={`${project.title} capture`}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImage(img)}
                          className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                            activeImage === img
                              ? 'border-violet-400 ring-2 ring-violet-500/30 scale-105'
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`miniature ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Role */}
            <div>
              <p className="label-text mb-2">My Role</p>
              <p className="text-sm text-slate-300">{project.role}</p>
            </div>

            {/* Description */}
            <div>
              <p className="label-text mb-2">Overview</p>
              <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">{project.detailedDescription}</p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <p className="label-text mb-3">Key Metrics</p>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map(m => (
                    <div key={m.label} className="p-3 rounded-xl text-center border border-violet-500/20"
                      style={{ background: 'rgba(124,58,237,0.07)' }}>
                      <p className="text-violet-300 font-bold text-sm">{m.value}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <p className="label-text mb-3">Highlights</p>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <ChevronRight size={14} className="text-violet-400 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <p className="label-text mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map(t => (
                  <span key={t} className="pill-violet text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex gap-3 pt-1">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 border border-white/10 hover:border-violet-500/40 hover:text-violet-300 transition-all">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Project Card ──────────────────────────────────────────── */
const typeLabel: Record<string, string> = { team: 'Team', solo: 'Solo', internship: 'Internship' };
const typePill:  Record<string, string> = {
  team:       'bg-violet-500/10 border-violet-500/25 text-violet-300',
  solo:       'bg-sky-500/10 border-sky-500/25 text-sky-300',
  internship: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      onClick={onClick}
      className="group relative flex flex-col p-6 rounded-2xl border border-white/7 hover:border-violet-500/40 overflow-hidden cursor-pointer transition-all duration-300"
      style={{ background: 'rgba(9,9,26,0.85)' }}
    >
      {/* Top glow sweep */}
      <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), transparent)' }} />

      {/* Corner hover glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />

      {/* Optional image preview thumbnail */}
      {project.image && (
        <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden border border-white/6 bg-black/30">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Award */}
      {project.award && (
        <div className="flex items-center gap-1.5 mb-3">
          <Trophy size={12} className="text-amber-400" />
          <span className="text-[10px] font-semibold text-amber-300 tracking-wide">{project.award}</span>
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-100 font-bold text-base leading-snug group-hover:text-violet-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 text-xs mt-1 font-mono">{project.organization} · {project.year}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${typePill[project.type]}`}>
            {typeLabel[project.type]}
          </span>
          {project.teamSize && (
            <span className="flex items-center gap-1 text-[10px] text-slate-600 font-mono">
              <Users size={10} /> {project.teamSize}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{project.description}</p>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 4).map(t => (
          <span key={t} className="pill-muted text-[10px]">{t}</span>
        ))}
        {project.technologies.length > 4 && (
          <span className="pill-muted text-[10px]">+{project.technologies.length - 4}</span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-[10px] font-mono text-slate-600">{project.highlights.length} key points</span>
        <motion.span
          className="flex items-center gap-1 text-xs text-violet-400 font-medium group-hover:gap-2 transition-all"
          whileHover={{ x: 2 }}
        >
          View details <ArrowUpRight size={13} />
        </motion.span>
      </div>
    </motion.article>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll]   = useState(false);

  const featured = projects.filter(p => p.featured);
  const others   = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="section-wrapper relative"
      style={{ background: 'linear-gradient(180deg, #05050e 0%, rgba(9,9,26,0.5) 100%)' }}
    >
      {/* Glow orb */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }} />

      <div className="section-inner relative z-10">
        <SectionTitle
          eyebrow="02 — Work"
          title="Projects"
          subtitle="Selected projects — from award-winning AI platforms to production deployments."
        />

        {/* Featured */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-5 mb-6"
        >
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </motion.div>

        {/* Others */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden mb-6"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid md:grid-cols-3 gap-5 pt-1"
              >
                {others.map(p => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        {others.length > 0 && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(v => !v)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-slate-400 border border-white/8 hover:border-violet-500/35 hover:text-violet-300 hover:bg-violet-500/5 transition-all"
            >
              {showAll ? 'Show less' : `Show ${others.length} more`}
              <ChevronRight size={15} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </motion.button>
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
