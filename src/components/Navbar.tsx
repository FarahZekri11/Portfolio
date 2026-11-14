import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollY } from '../hooks/useScrollY';
import { personal } from '../data/personal';

const navItems = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted]       = useState(false);
  const activeSection               = useActiveSection();
  const scrollY                     = useScrollY();
  const scrolled                    = scrollY > 50;

  useEffect(() => { setMounted(true); }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${scrolled
            ? 'border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'border-b border-transparent'
          }
        `}
        style={scrolled ? { background: 'rgba(5,5,14,0.88)', backdropFilter: 'blur(20px) saturate(160%)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-[62px] flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#hero"
            onClick={e => { e.preventDefault(); go('#hero'); }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-1.5 font-mono text-sm font-semibold text-slate-100 select-none"
          >
            <span className="text-violet-400 text-base">{'<'}</span>
            <span>{personal.firstName}</span>
            <span className="text-violet-400">.</span>
            <span>{personal.lastName}</span>
            <span className="text-violet-400 text-base">{'/>'}</span>
          </motion.a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ label, href }) => {
              const id = href.slice(1);
              const active = activeSection === id;
              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={e => { e.preventDefault(); go(href); }}
                  whileHover={{ y: -1 }}
                  className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200"
                  style={{ color: active ? '#c4b5fd' : '#64748b' }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* ── Download CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personal.cvPath}
              download
              whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(124,58,237,0.45)' }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}
            >
              <Download size={13} />
              Download CV
            </motion.a>
          </div>

          {/* ── Hamburger ── */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ paddingTop: 62 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(5,5,14,0.96)', backdropFilter: 'blur(24px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 px-6 py-6 flex flex-col gap-1"
            >
              {navItems.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={e => { e.preventDefault(); go(href); }}
                  className="py-3 px-4 rounded-xl text-lg font-medium text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                href={personal.cvPath}
                download
                className="mt-4 flex items-center gap-2 py-3 px-4 rounded-xl text-base font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
