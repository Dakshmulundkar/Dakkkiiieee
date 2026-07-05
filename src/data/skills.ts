import type { Skill } from '@/types';

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', icon: 'SiPython', color: '#3776AB' },
  { name: 'JavaScript', category: 'Languages', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'Java', category: 'Languages', icon: 'SiJava', color: '#ED8B00' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
  { name: 'React Native', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', color: '#888888' },
  { name: 'Flask', category: 'Backend', icon: 'SiFlask', color: '#FFFFFF' },
  { name: 'FastAPI', category: 'Backend', icon: 'SiFastapi', color: '#05998B' },
  { name: 'REST APIs', category: 'Backend', icon: 'SiBlueprint', color: '#FF6C37' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb', color: '#47A248' },
  { name: 'Firebase', category: 'Databases', icon: 'SiFirebase', color: '#FFCA28' },

  // Cloud
  { name: 'AWS SDK', category: 'Cloud', icon: 'SiAmazonwebservices', color: '#FF9900' },
  { name: 'Cloudflare', category: 'Cloud', icon: 'SiCloudflare', color: '#F38020' },
  { name: 'Docker', category: 'Cloud', icon: 'SiDocker', color: '#2496ED' },
  { name: 'GitHub Actions', category: 'Cloud', icon: 'SiGithubactions', color: '#2088FF' },
  { name: 'Render', category: 'Cloud', icon: 'SiRender', color: '#FFFFFF' },
  { name: 'Vercel', category: 'Cloud', icon: 'SiVercel', color: '#FFFFFF' },

  // DevOps
  { name: 'Docker', category: 'DevOps', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Traefik', category: 'DevOps', icon: 'SiTraefik', color: '#24A1C1' },
  { name: 'Nginx', category: 'DevOps', icon: 'SiNginx', color: '#009639' },
  { name: 'Dokploy', category: 'DevOps', icon: 'SiDocker', color: '#2496ED' }, 
  { name: 'CI/CD', category: 'DevOps', icon: 'SiGithubactions', color: '#2088FF' },
  { name: 'GitHub Actions', category: 'DevOps', icon: 'SiGithubactions', color: '#2088FF' },
  { name: 'GitHub Container Registry', category: 'DevOps', icon: 'SiGithub', color: '#FFFFFF' },

  // Security
  { name: 'Trivy', category: 'Security', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Snyk', category: 'Security', icon: 'SiSnyk', color: '#4C4A73' },

  // Developer Tools
  { name: 'Git', category: 'Developer Tools', icon: 'SiGit', color: '#F05032' },
  { name: 'GitHub', category: 'Developer Tools', icon: 'SiGithub', color: '#FFFFFF' },
  { name: 'GitHub Copilot', category: 'Developer Tools', icon: 'SiGithubcopilot', color: '#FFFFFF' },
  { name: 'CodeRabbit', category: 'Developer Tools', icon: 'SiCoderabbit', color: '#FFFFFF' },
  { name: 'Postman', category: 'Developer Tools', icon: 'SiPostman', color: '#FF6C37' },
  { name: 'VS Code', category: 'Developer Tools', icon: 'SiVisualstudiocode', color: '#007ACC' },
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
