export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: string;
    challenges: string[];
    outcome: string;
  };
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory = 
  | 'Languages' 
  | 'Frontend' 
  | 'Backend' 
  | 'Databases' 
  | 'Cloud' 
  | 'DevOps' 
  | 'Security' 
  | 'Developer Tools';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'work' | 'freelance' | 'hackathon';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
