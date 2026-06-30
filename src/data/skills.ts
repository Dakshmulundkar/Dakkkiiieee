import type { Skill } from '@/types';

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Java', category: 'Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Firebase', category: 'Databases' },

  // Cloud
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'GitHub Actions', category: 'Cloud' },
  { name: 'Render', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Cloudflare Pages', category: 'Cloud' },

  // DevOps
  { name: 'Docker', category: 'DevOps' },
  { name: 'CI/CD', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'GitHub Container Registry', category: 'DevOps' },
  { name: 'Nginx', category: 'DevOps' },

  // Security
  { name: 'Trivy', category: 'Security' },
  { name: 'Snyk', category: 'Security' },

  // Developer Tools
  { name: 'Git', category: 'Developer Tools' },
  { name: 'GitHub', category: 'Developer Tools' },
  { name: 'GitHub Copilot', category: 'Developer Tools' },
  { name: 'CodeRabbit', category: 'Developer Tools' },
  { name: 'Postman', category: 'Developer Tools' },
  { name: 'VS Code', category: 'Developer Tools' },
];

export const SKILL_CATEGORIES = [
  { name: 'Languages' as const, color: '#3178c6', description: 'Core System Logic' },
  { name: 'Frontend' as const, color: '#61dafb', description: 'Interactive Interfaces' },
  { name: 'Backend' as const, color: '#339933', description: 'Server Architectures' },
  { name: 'Databases' as const, color: '#336791', description: 'Scalable Persistence' },
  { name: 'Cloud' as const, color: '#ff9900', description: 'Global Infrastructure' },
  { name: 'DevOps' as const, color: '#2496ed', description: 'Automation & Resilience' },
  { name: 'Security' as const, color: '#e0234e', description: 'Reliability & Protection' },
  { name: 'Developer Tools' as const, color: '#007acc', description: 'Efficiency & Workspace' },
];
