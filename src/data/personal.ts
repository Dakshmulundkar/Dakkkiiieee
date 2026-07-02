import type { NavItem, Stat, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Technical Evolution', value: 6, suffix: 'y+' },
  { label: 'System Efficiency', value: 30, suffix: '%' },
  { label: 'Core Deployments', value: 10, suffix: '+' },
  { label: 'Engineering Year', value: 4, suffix: 'th' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Dakshmulundkar', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daksh-m-2780a3356', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:bydaksh2806@gmail.com', icon: 'mail' },
];

export const PERSONAL_INFO = {
  name: 'Daksh Mulundkar',
  title: 'Computer Engineer | Final Year | Optimization Lead',
  location: 'Mumbai, Maharashtra, India',
  email: 'bydaksh2806@gmail.com',
  phone: '+91 7208677382',
  university: 'A.P. Shah Institute of Technology (APSIT)',
  degree: 'Bachelor of Engineering in Computer Science',
  graduation: '2025',
};

export const HERO_TITLES = [
  'Computer Engineer',
  'Final Year @ APSIT',
  'Optimization Specialist',
];

export const ABOUT_TEXT = {
  intro: "Based in Mumbai, I am a Final Year Computer Science student at A.P. Shah Institute of Technology (APSIT) with a focus on engineering high-performance digital logic.",
  journey: "My technical path started with a curiosity for systems, leading to my first major project, Zayra, during my first year. Since then, I have evolved into an Engineering Lead, managing team deployments and achieving verified 30% increases in system efficiency.",
  education: "Currently completing my final year of Bachelor of Engineering at APSIT (University of Mumbai), specializing in scalable architecture and full-stack system optimization.",
  mission: "I specialize in transforming complex academic and business requirements into production-grade execution, prioritizing clean code and high-impact performance workflows.",
};
