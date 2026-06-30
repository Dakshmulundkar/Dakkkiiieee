import type { NavItem, Stat, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Public Projects', value: 30, suffix: '+' },
  { label: 'Contributions', value: 252, suffix: '+' },
  { label: 'Freelance Clients', value: 2, suffix: '' },
  { label: 'Certifications', value: 4, suffix: '' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Dakshmulundkar', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daksh-m-2780a3356', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:bydaksh2806@gmail.com', icon: 'mail' },
];

export const PERSONAL_INFO = {
  name: 'Daksh Mulundkar',
  title: 'Software Engineer | Full-Stack Developer | Cloud & AI Enthusiast',
  location: 'Mumbai, Maharashtra, India',
  email: 'bydaksh2806@gmail.com',
  phone: '+91 7208677382',
  university: 'University of Mumbai',
  degree: 'Bachelor of Engineering in Computer Engineering',
  graduation: '2027',
};

export const HERO_TITLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'Cloud & AI Enthusiast',
];

export const ABOUT_TEXT = {
  intro: "I am a Computer Engineering student passionate about building production-quality software rather than just academic projects.",
  journey: "I enjoy designing scalable applications, modern UI/UX, backend systems, cloud infrastructure, DevOps workflows, and AI-powered solutions. My goal is to become a Software Engineer at top-tier product-based companies.",
  education: "Currently pursuing a Bachelor of Engineering in Computer Engineering at the University of Mumbai, expected graduation 2027.",
  passion: "I value clean architecture, maintainable code, modern UI, automation, and excellent developer experience. I am committed to continuous learning and engineering excellence.",
};
