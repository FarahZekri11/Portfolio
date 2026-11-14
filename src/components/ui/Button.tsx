import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  className = '',
  icon,
  iconRight = false,
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900';

  const variants = {
    primary:
      'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:from-violet-500 hover:to-violet-400',
    secondary:
      'bg-transparent border border-white/10 text-text-primary hover:border-violet-500/50 hover:bg-violet-500/5',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  const content = (
    <>
      {!iconRight && icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
