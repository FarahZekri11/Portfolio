import type { PersonalInfo, Language, SoftSkill, Interest } from '../types';

export const personal: PersonalInfo = {
  name: 'Farah Zekri',
  firstName: 'Farah',
  lastName: 'Zekri',
  title: 'Software Engineering Student',
  tagline: 'Full-Stack, DevOps, AI/ML & .NET Developer',
  bio: "Third-year Software Engineering student at ESPRIT with two engineering internships and an award-winning AI marketplace project. Experienced in full-stack development (Spring Boot, .NET 8, Node.js, NestJS, Angular), DevOps (Docker, Kubernetes, Jenkins, Azure) and applied Machine Learning. Seeking a 6-month end-of-studies internship (PFE) in full-stack, DevOps or AI engineering.",
  email: 'Zekri.farah@esprit.tn',
  phone: '+216 22 353 251',
  location: 'Tunis, Tunisia',
  github: 'https://github.com/FarahZekri11',
  linkedin: 'https://linkedin.com/in/farah-zekri-957b4a276',
  cvPath: '/documents/cv.pdf',
};

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'B2' },
  { name: 'English', level: 'B2' },
];

export const softSkills: SoftSkill[] = [
  { label: 'Technical Leadership' },
  { label: 'Teamwork' },
  { label: 'Autonomy & Rigor' },
  { label: 'Problem Solving' },
  { label: 'Scrum / Agile' },
];

export const interests: Interest[] = [
  { label: 'Full-Stack Development', icon: '⚡' },
  { label: 'Software Architecture & Microservices', icon: '🏗️' },
  { label: 'DevOps & Cloud Computing', icon: '☁️' },
  { label: 'Applied Machine Learning & AI', icon: '🤖' },
];
