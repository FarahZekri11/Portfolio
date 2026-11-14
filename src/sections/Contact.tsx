import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { personal } from '../data/personal';

const links = [
  {
    icon: Mail, label: 'Email', value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-violet-400', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Github, label: 'GitHub', value: 'FarahZekri11',
    href: personal.github, target: '_blank',
    color: 'text-slate-300', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)',
  },
  {
    icon: Linkedin, label: 'LinkedIn', value: 'farah-zekri',
    href: personal.linkedin, target: '_blank',
    color: 'text-sky-400', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.2)',
  },
  {
    icon: Phone, label: 'Phone', value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g,'')}`,
    color: 'text-emerald-400', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)',
  },
];

export function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sent, setSent]       = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${s}&body=${b}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="section-wrapper relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(9,9,26,0.4) 0%, #05050e 100%)' }}
    >
      {/* Bottom center glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      <div className="section-inner relative z-10">
        <SectionTitle
          eyebrow="06 — Contact"
          title="Let's Connect"
          subtitle="Open to internship opportunities, collaborations, and interesting projects. Reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}
            className="space-y-5"
          >
            {/* Status card */}
            <div className="p-6 rounded-2xl border border-white/6" style={{ background: 'rgba(9,9,26,0.8)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <MessageCircle size={16} className="text-violet-400" />
                <h3 className="text-slate-100 font-semibold text-sm">Open to Opportunities</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Currently seeking a{' '}
                <span className="text-violet-300 font-medium">6-month end-of-studies internship (PFE)</span>{' '}
                in Full-Stack, DevOps, or AI Engineering. If you have an opportunity that matches my profile, I'd love to hear from you.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <MapPin size={12} className="text-violet-400" />
                <span>{personal.location} · Open to remote</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="grid grid-cols-2 gap-3">
              {links.map(({ icon: Icon, label, value, href, target, color, bg, border }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300"
                  style={{ background: bg, borderColor: border }}
                >
                  <Icon size={17} className={color} />
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 font-mono">{label}</p>
                    <p className="text-xs text-slate-300 font-medium truncate">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22,1,0.36,1] }}
          >
            <form
              onSubmit={submit}
              className="space-y-4 p-7 rounded-2xl border border-white/6"
              style={{ background: 'rgba(9,9,26,0.8)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Send size={15} className="text-violet-400" />
                <h3 className="text-slate-100 font-bold text-base">Send a Message</h3>
              </div>

              <div>
                <label htmlFor="contact-name" className="label-text mb-1.5 block">Your Name</label>
                <input id="contact-name" type="text" required placeholder="Jane Smith"
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="form-input" />
              </div>

              <div>
                <label htmlFor="contact-email" className="label-text mb-1.5 block">Email Address</label>
                <input id="contact-email" type="email" required placeholder="jane@company.com"
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="form-input" />
              </div>

              <div>
                <label htmlFor="contact-msg" className="label-text mb-1.5 block">Message</label>
                <textarea id="contact-msg" required rows={5} placeholder="Tell me about the opportunity..."
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="form-input resize-none" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(124,58,237,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}
              >
                <Send size={15} />
                {sent ? 'Opening email client...' : 'Send Message'}
              </motion.button>

              <p className="text-[11px] text-slate-600 text-center">
                Opens your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
