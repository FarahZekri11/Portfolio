import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'accent2' | 'muted';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'muted', size = 'md' }: BadgeProps) {
  const variants = {
    accent: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    accent2: 'bg-sky-500/10 text-sky-300 border border-sky-500/20',
    muted: 'bg-white/5 text-text-secondary border border-white/8',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center rounded-full font-mono font-medium
        ${variants[variant]} ${sizes[size]}
        transition-colors duration-200
      `}
    >
      {children}
    </motion.span>
  );
}
