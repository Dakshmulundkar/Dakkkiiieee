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
  icon?: string;
  color?: string;
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
  title: string;
  organizer: string;
  date: string;
  repo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
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
