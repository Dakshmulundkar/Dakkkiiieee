import type { Experience } from '@/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Client Collaborations',
    period: '2025 – 2026',
    description: 'Developed full-stack applications and designed REST APIs for multiple clients. Managed the complete software lifecycle from initial design to production deployment.',
    achievements: [
      'Successfully delivered products for 2 freelance clients',
      'Designed and implemented scalable backend services',
      'Managed cloud deployments and production environments',
      'Worked directly with clients to translate requirements into engineering solutions',
    ],
    type: 'freelance',
  },
  {
    id: 'hackathon',
    role: 'Hackathon Participant',
    company: 'Code the Cloud (CCD) Hackathon',
    period: '2025',
    description: 'Participated in the Code the Cloud Hackathon, collaborating on cloud-native solutions and engineering challenges.',
    achievements: [
      'Collaborated on rapid prototyping of cloud services',
      'Implemented automated CI/CD pipelines during the event',
      'Enhanced engineering focus under high-pressure environments',
    ],
    type: 'hackathon',
  },
];
