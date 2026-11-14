import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, CheckCircle2, Star, Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { achievements } from '../data/achievements';

export function Achievements() {
  if (achievements.length === 0) return null;

  const [featuredAward, ...certifications] = achievements;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const awardImages = featuredAward?.images ?? [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => {
    if (lightboxIndex !== null && awardImages.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + awardImages.length) % awardImages.length);
    }
  };
  const nextPhoto = () => {
    if (lightboxIndex !== null && awardImages.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % awardImages.length);
    }
  };

  return (
    <section
      id="achievements"
      className="section-wrapper relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(9,9,26,0.4) 0%, #05050e 100%)' }}
    >
      {/* Gold/Violet glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)' }}
      />

      <div className="section-inner relative z-10">
        <SectionTitle
          eyebrow="05 — Honors & Certifications"
          title="Achievements & Certifications"
          subtitle="Honors, competition awards, and certified professional curricula."
          center
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Featured Award: 1st Prize Bal des Projets */}
          {featuredAward && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-9 rounded-3xl border overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(9,9,26,0.92) 65%)',
                borderColor: 'rgba(245,158,11,0.3)',
              }}
            >
              {/* Top rainbow line */}
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, #fcd34d, #f59e0b, transparent)' }}
              />

              {/* Star particles */}
              {[...Array(6)].map((_, k) => (
                <motion.div
                  key={k}
                  animate={{ y: [0, -8, 0], opacity: [0.3, 0.75, 0.3] }}
                  transition={{ duration: 2 + k * 0.4, repeat: Infinity, delay: k * 0.3 }}
                  className="absolute text-amber-400/25 text-xs pointer-events-none"
                  style={{ top: `${12 + k * 14}%`, right: `${4 + k * 5}%` }}
                >
                  <Star size={11} fill="currentColor" />
                </motion.div>
              ))}

              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                {/* Trophy icon */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl border"
                    style={{ background: 'rgba(245,158,11,0.14)', borderColor: 'rgba(245,158,11,0.35)' }}
                  >
                    🏆
                  </div>
                  <div className="absolute -inset-1 rounded-2xl animate-pulse-ring border border-amber-400/25" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-amber-500/30 bg-amber-500/10 text-amber-300">
                      <Trophy size={13} className="text-amber-400" />
                      {featuredAward.badge ?? '1st Prize Award'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{featuredAward.year}</span>
                    <span className="text-xs font-mono text-slate-500">·</span>
                    <span className="text-xs font-mono text-violet-300">{featuredAward.organization}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-gradient-gold mb-2">
                    {featuredAward.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredAward.description}
                  </p>
                </div>
              </div>

              {/* 4 Photos Gallery for 1st Prize Bal des Projets */}
              {awardImages.length > 0 && (
                <div className="pt-6 border-t border-white/8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-amber-300/90">
                      <Camera size={14} className="text-amber-400" />
                      <span>Photos officielles de la cérémonie</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      Cliquez pour agrandir
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {awardImages.map((img, idx) => (
                      <motion.button
                        key={idx}
                        type="button"
                        onClick={() => openLightbox(idx)}
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/thumb relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 bg-black/40 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover object-center group-hover/thumb:scale-108 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/thumb:opacity-40 transition-opacity" />

                          {/* Hover badge */}
                          <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                            <Maximize2 size={13} />
                          </div>

                          {/* Caption */}
                          <div className="absolute bottom-0 inset-x-0 p-2.5">
                            <p className="text-[11px] text-slate-200 font-medium leading-tight line-clamp-2">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Other Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl border border-white/8 hover:border-violet-500/35 overflow-hidden transition-all duration-300 flex flex-col justify-between"
                style={{ background: 'rgba(9,9,26,0.85)' }}
              >
                {/* Top glow sweep */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
                />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border border-white/10 group-hover:border-violet-500/30 transition-colors"
                      style={{ background: 'rgba(124,58,237,0.1)' }}
                    >
                      {cert.icon}
                    </div>
                    {cert.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border border-violet-500/25 bg-violet-500/10 text-violet-300">
                        {cert.badge.includes('Progress') ? (
                          <Sparkles size={11} className="text-amber-400 animate-spin-slow" />
                        ) : (
                          <CheckCircle2 size={11} className="text-emerald-400" />
                        )}
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-slate-100 font-bold text-base leading-snug group-hover:text-violet-200 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                    <span className="text-violet-400">{cert.organization}</span>
                    <span>·</span>
                    <span>{cert.year}</span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Award size={12} className="text-violet-400" /> Verified Credential
                  </span>
                  <span className="text-violet-400/80">Active</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && awardImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-w-2xl w-full max-h-[92vh] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
                <img
                  src={awardImages[lightboxIndex].url}
                  alt={awardImages[lightboxIndex].caption}
                  className="w-full max-h-[72vh] object-contain mx-auto"
                />

                {/* Left Arrow */}
                {awardImages.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevPhoto();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 backdrop-blur-sm border border-white/10 transition-colors"
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {/* Right Arrow */}
                {awardImages.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextPhoto();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 backdrop-blur-sm border border-white/10 transition-colors"
                    aria-label="Photo suivante"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Caption Bar */}
              <div className="mt-3 text-center px-4">
                <p className="text-sm font-medium text-slate-200">
                  {awardImages[lightboxIndex].caption}
                </p>
                <p className="text-xs font-mono text-amber-400/80 mt-1">
                  Photo {lightboxIndex + 1} / {awardImages.length} · 1er Prix Bal des Projets 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
