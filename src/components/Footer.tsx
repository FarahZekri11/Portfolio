import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 px-6" style={{ background: '#05050e' }}>
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(14,165,233,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#hero" className="font-mono text-sm text-slate-400 hover:text-slate-100 transition-colors">
            <span className="text-violet-400">{'<'}</span>
            {personal.firstName}
            <span className="text-violet-400">.</span>
            {personal.lastName}
            <span className="text-violet-400">{'/>'}</span>
          </a>

          {/* Credits */}
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {year} {personal.name}
            <span className="text-slate-700">·</span>
            Built with <Heart size={11} className="text-violet-500 fill-violet-500" /> in Tunis
          </p>

          {/* Right: socials + back to top */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="text-slate-600 hover:text-violet-400 transition-colors duration-200"
              >
                <Icon size={17} />
              </motion.a>
            ))}

            <div className="w-px h-4 bg-white/8 mx-1" />

            <motion.button
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="text-slate-600 hover:text-violet-400 transition-colors"
            >
              <ArrowUp size={17} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
