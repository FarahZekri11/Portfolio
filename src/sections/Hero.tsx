import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Download, ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { personal } from '../data/personal';

/* ── Typing animation ─────────────────────────────────────── */
function TypedText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="animate-blink text-violet-400 ml-0.5">|</span>
    </span>
  );
}

/* ── Animated mesh grid ───────────────────────────────────── */
function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Node = { x: number; y: number; vx: number; vy: number };
    const nodes: Node[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const CONNECT_DIST = 160;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        // Node dot
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139,92,246,0.35)';
        ctx.fill();

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}

/* ── Floating code card ───────────────────────────────────── */
function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
      className="hidden xl:block absolute right-[6%] top-[30%]"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-64 rounded-2xl overflow-hidden shadow-2xl border border-white/8"
        style={{ background: 'rgba(9,9,26,0.9)', backdropFilter: 'blur(20px)' }}
      >
        {/* Window bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-auto text-[10px] font-mono text-slate-500">farah.ts</span>
        </div>
        {/* Code */}
        <div className="p-4 text-[11px] font-mono leading-6 space-y-0.5">
          <p><span className="text-violet-400">const</span> <span className="text-sky-300">engineer</span> <span className="text-slate-400">=</span> {'{'}</p>
          <p className="pl-4"><span className="text-emerald-400">name</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Farah Zekri"</span><span className="text-slate-400">,</span></p>
          <p className="pl-4"><span className="text-emerald-400">role</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Full-Stack & DevOps"</span><span className="text-slate-400">,</span></p>
          <p className="pl-4"><span className="text-emerald-400">degree</span><span className="text-slate-400">:</span> <span className="text-amber-300">"ESPRIT 3rd Year"</span><span className="text-slate-400">,</span></p>
          <p className="pl-4"><span className="text-emerald-400">seeking</span><span className="text-slate-400">:</span> <span className="text-amber-300">"6-mo PFE"</span><span className="text-slate-400">,</span></p>
          <p className="pl-4"><span className="text-emerald-400">award</span><span className="text-slate-400">:</span> <span className="text-amber-300">"🏆 1st Prize"</span><span className="text-slate-400">,</span></p>
          <p className="pl-4"><span className="text-emerald-400">open</span><span className="text-slate-400">:</span> <span className="text-violet-400">true</span></p>
          <p><span className="text-slate-400">{'}'}</span></p>
        </div>
        {/* Status bar */}
        <div className="px-4 py-2 border-t border-white/5 flex items-center gap-2" style={{ background: 'rgba(124,58,237,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400">open to PFE internship</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Stats counter ─────────────────────────────────────── */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-black text-gradient leading-none">{value}</p>
      <p className="text-xs text-slate-500 mt-1 font-mono">{label}</p>
    </div>
  );
}

/* ── Profile photo with rings ─────────────────────────────── */
function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative flex-shrink-0 mb-8"
    >
      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-3 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 55%, rgba(139,92,246,0.7) 75%, rgba(56,189,248,0.5) 85%, transparent 95%)',
        }}
      />
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-1.5 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, transparent 70%, rgba(56,189,248,0.4) 85%, transparent 95%)',
        }}
      />
      {/* Photo */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-glow-violet">
        <img
          src="/profile.jpg"
          alt={`${personal.name} — Software Engineering Student`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.style.display = 'none';
            const fb = document.createElement('div');
            fb.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-600/30 to-sky-600/30 text-5xl font-black text-violet-300';
            fb.textContent = 'FZ';
            t.parentElement?.appendChild(fb);
          }}
        />
        {/* Overlay shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent" />
      </div>

      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-pulse-ring" />
    </motion.div>
  );
}

/* ── Main Hero ─────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const roles = [
    'Full-Stack & Microservices',
    'DevOps & Cloud Engineer',
    'AI/ML & Applied Systems',
    '.NET 8 & C# Developer',
  ];

  const stats = [
    { value: '2', label: 'Engineering Internships' },
    { value: '4+', label: 'Major Projects' },
    { value: '🏆 1st', label: 'Bal des Projets Prize' },
    { value: 'AWS', label: 'Certified Academy' },
  ];

  const techPills = ['Spring Boot 3', '.NET 8 / C#', 'NestJS', 'Angular 17', 'Docker & K8s', 'AWS & Azure', 'FastAPI & AI'];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%), #05050e' }}
    >
      {/* Animated mesh */}
      <MeshBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-100" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-900/80 pointer-events-none" />

      {/* Floating code card */}
      <CodeCard />

      {/* Parallax content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full flex flex-col items-center px-6 pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Photo */}
          <ProfilePhoto />

          {/* Status badge */}
          <motion.div variants={up} className="mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium px-4 py-1.5 rounded-full border"
              style={{ background: 'rgba(124,58,237,0.1)', borderColor: 'rgba(124,58,237,0.3)', color: '#c4b5fd' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Seeking 6-Month PFE Internship (2027) · Tunis, Tunisia
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={up} className="mb-3">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9] select-none">
              <span className="block text-slate-100">Farah</span>
              <span className="block text-gradient">Zekri</span>
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.div variants={up} className="mb-6 h-9 flex items-center">
            <p className="text-xl md:text-2xl font-semibold text-slate-300">
              <TypedText words={roles} />
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={up} className="mb-8 max-w-xl">
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              3rd-year Software Engineering student at <span className="text-violet-300 font-semibold">ESPRIT</span>, crafting
              scalable microservices, cloud-native DevOps pipelines & applied AI systems.
              {' '}<span className="text-slate-200 font-medium">Award-winner</span> — ESPRIT Bal des Projets 2026.
            </p>
          </motion.div>

          {/* Tech pills */}
          <motion.div variants={up} className="mb-8 flex flex-wrap justify-center gap-2">
            {techPills.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="pill-muted cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={up} className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}
            >
              View Projects <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, borderColor: 'rgba(139,92,246,0.6)', backgroundColor: 'rgba(139,92,246,0.08)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-slate-200 border border-white/10 transition-all duration-300"
            >
              <Mail size={16} className="text-violet-400" />
              Get in Touch
            </motion.button>

            <motion.a
              href={personal.cvPath}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors duration-200"
            >
              <Download size={15} />
              CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={up} className="flex items-center gap-3 mb-10">
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-violet-400 border border-white/8 hover:border-violet-500/40 hover:bg-violet-500/8 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div variants={up}>
            <div className="flex items-center gap-8 px-8 py-4 rounded-2xl border border-white/6"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              {stats.map((s, i) => (
                <div key={s.label}>
                  {i > 0 && <div className="absolute h-6 w-px bg-white/8 -ml-4" />}
                  <StatItem {...s} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-2xs font-mono text-slate-600 tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
