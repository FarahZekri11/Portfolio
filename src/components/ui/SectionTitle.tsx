import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      <span className="label-text mb-3 block">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-50 leading-tight mb-4">
        {title}
      </h2>
      {!center && <div className="section-divider" />}
      {subtitle && (
        <p className={`mt-5 text-slate-400 text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ── Reusable card wrapper ─────────────────────────────────── */
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
}

export function Card({ children, className = '', hover = true, glowOnHover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        rounded-2xl border border-white/7 transition-all duration-300
        ${hover ? 'hover:border-violet-500/35 cursor-default' : ''}
        ${glowOnHover ? 'hover:shadow-[0_0_40px_rgba(124,58,237,0.18)]' : ''}
        ${className}
      `}
      style={{ background: 'rgba(9,9,26,0.7)' }}
    >
      {children}
    </motion.div>
  );
}
