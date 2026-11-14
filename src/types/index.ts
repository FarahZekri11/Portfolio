// ============================================================
// TYPE DEFINITIONS
// All content types for the portfolio data layer
// ============================================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  cvPath: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  role: string;
  type: 'team' | 'solo' | 'internship';
  teamSize?: number;
  organization: string;
  year: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  award?: string;
  metrics?: { label: string; value: string }[];
  image?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  details: string[];
  current: boolean;
}

export interface AchievementImage {
  url: string;
  caption: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
  badge?: string;
  image?: string;
  images?: AchievementImage[];
  teamImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SoftSkill {
  label: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Interest {
  label: string;
  icon: string;
}
