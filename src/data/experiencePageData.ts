export interface ExperienceItem {
  id: string;
  name: string;
  category: string;
  organizer: string;
  date: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
  isAwarded?: boolean;
}

export interface HackathonEntry {
  name: string;
  organizer: string;
  date: string;
  project: string;
  tech: string[];
  result: 'Winner' | 'Participant';
}

export const TIMELINE_DATA: ExperienceItem[] = [
  {
    id: 'social-voyage',
    name: 'Social Voyage',
    category: 'College Mini Project',
    organizer: 'A. P. Shah Institute of Technology',
    date: 'Early 2025',
    description: 'A travel matchmaking platform using Jaccard Similarity algorithms to connect solo travelers based on shared preferences and destinations.',
    technologies: ['Flask', 'MongoDB', 'Jaccard Similarity', 'HTML/CSS/JS'],
    repo: 'https://github.com/Dakshmulundkar/SocialVoyage',
  },
  {
    id: 'phantom-pay',
    name: 'Phantom Pay',
    category: 'National Hackathon',
    organizer: 'GDG Cloud Mumbai × GDG on Campuses',
    date: 'June 2025',
    description: 'AI-powered fraud detection platform designed to identify ghost employees by analyzing payroll records and attendance logs using Gemini AI.',
    technologies: ['React', 'Python', 'Gemini AI', 'Flask'],
    repo: 'https://github.com/Dakshmulundkar/Phantom-pay',
  },
  {
    id: 'disaster-sense',
    name: 'DisasterSense',
    category: 'National Hackathon',
    organizer: 'Pillai College',
    date: 'September 2025',
    description: 'Comprehensive disaster management ecosystem integrating AI predictions and Computer Vision Crowd-Reporting to assist emergency response teams.',
    technologies: ['React', 'PyTorch', 'Flask', 'MongoDB'],
    repo: 'https://github.com/Dakshmulundkar/DisasterSense',
  },
  {
    id: 'attendance-analysis',
    name: 'Attendance Analysis System',
    category: 'National Hackathon',
    organizer: 'CSA × GDG × Coder\'s Club',
    date: 'October 2025',
    description: 'Automated handwritten attendance processing system utilizing OCR and generative AI to identify defaulters and generate academic analytics.',
    technologies: ['Python', 'OCR', 'Gemini AI', 'Pandas'],
    repo: 'https://github.com/Dakshmulundkar/Attendance_Anomaly_Detection',
  },
  {
    id: 'auditx',
    name: 'AuditX',
    category: 'National Hackathon',
    organizer: 'GDG On Campus APSIT',
    date: 'January 2026',
    description: 'Multi-module financial security platform with AI fraud detection, instant loan eligibility, and multilingual assistance. Won First Place.',
    technologies: ['React Native', 'Firebase', 'Gemini AI', 'Expo'],
    repo: 'https://github.com/Dakshmulundkar/Auditx',
    isAwarded: true,
  },
  {
    id: 'secure-flow',
    name: 'SecureFlow',
    category: 'DevOps Hackathon',
    organizer: 'DevOps Club APSIT',
    date: 'January 2026',
    description: 'DevOps Security Analytics dashboard visualizing CI/CD pipeline health, infrastructure metrics, and vulnerability scan reports.',
    technologies: ['React', 'Docker', 'GitHub Actions', 'Trivy'],
    repo: 'https://github.com/Dakshmulundkar/SecureFlow',
  },
  {
    id: 'sentinel-pay',
    name: 'Sentinel Pay',
    category: 'National Hackathon',
    organizer: 'VIT Mumbai',
    date: 'January 2026',
    description: 'FinTech security application focusing on secure transaction authentication and financial anomaly detection using machine learning.',
    technologies: ['Python', 'ML', 'React Native', 'FastAPI'],
    repo: 'https://github.com/Dakshmulundkar/Sentinal-Pay',
  },
  {
    id: 'banking-kyc',
    name: 'Universal Banking KYC Verification System',
    category: 'National Hackathon',
    organizer: 'TCET ACM × MPSTME ACM',
    date: 'March 2026',
    description: 'Unified banking KYC system designed for rapid verification and secure identity management across financial institutions.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
    repo: 'https://github.com/Dakshmulundkar/KYC-verification-ap',
  },
  {
    id: 'cloud-helm',
    name: 'CloudHelm',
    category: 'National Hackathon',
    organizer: 'Bharati Vidyapeeth College of Engineering',
    date: 'March 2026',
    description: 'Multi-cloud orchestration and monitoring platform for centralized visibility and automated resource optimization.',
    technologies: ['React', 'AWS SDK', 'Terraform', 'Python'],
    repo: 'https://github.com/Dakshmulundkar/CloudHelm',
    demo: 'https://cloudhelm.netlify.app',
  },
  {
    id: 'pipeline-xr',
    name: 'PipelineXR',
    category: 'College Major Project',
    organizer: 'A. P. Shah Institute of Technology',
    date: 'July 2026',
    description: 'Production-grade engineering pipeline focusing on security, real-time observability, and automated telemetry in XR environments.',
    technologies: ['Node.js', 'React', 'Kubernetes', 'K8s', 'Prometheus'],
    repo: 'https://github.com/Dakshmulundkar/PipelineXR',
    demo: 'https://pipelinexr2.netlify.app',
  },
];

export const HACKATHON_DATA: HackathonEntry[] = [
  {
    name: 'Code The Cloud (CCD)',
    organizer: 'GDG Cloud Mumbai × GDG on Campuses',
    date: 'June 2025',
    project: 'Phantom Pay',
    tech: ['React', 'Gemini AI', 'Flask'],
    result: 'Participant',
  },
  {
    name: 'HackCelestial 2.0',
    organizer: 'Pillai College',
    date: 'September 2025',
    project: 'DisasterSense',
    tech: ['React', 'PyTorch', 'MongoDB'],
    result: 'Participant',
  },
  {
    name: 'HackNova 2025',
    organizer: 'CSA × GDG × Coder\'s Club',
    date: 'October 2025',
    project: 'Attendance Analysis System',
    tech: ['Python', 'OCR', 'Gemini AI'],
    result: 'Participant',
  },
  {
    name: 'HackWins 2026',
    organizer: 'GDG On Campus APSIT',
    date: 'January 2026',
    project: 'AuditX',
    tech: ['React Native', 'Firebase', 'Gemini AI'],
    result: 'Winner',
  },
  {
    name: 'OpsStorm 2026',
    organizer: 'DevOps Club APSIT',
    date: 'January 2026',
    project: 'SecureFlow',
    tech: ['React', 'Docker', 'Trivy'],
    result: 'Participant',
  },
  {
    name: 'Code-A-Thon (ALGORHYTHM 2026)',
    organizer: 'VIT Mumbai',
    date: 'January 2026',
    project: 'Sentinel Pay',
    tech: ['React Native', 'FastAPI'],
    result: 'Participant',
  },
  {
    name: 'InnovGenius',
    organizer: 'TCET ACM × MPSTME ACM',
    date: 'March 2026',
    project: 'Universal Banking KYC',
    tech: ['Node.js', 'PostgreSQL', 'WebRTC'],
    result: 'Participant',
  },
  {
    name: 'LOOP 2026',
    organizer: 'Bharati Vidyapeeth College of Engineering',
    date: 'March 2026',
    project: 'CloudHelm',
    tech: ['React', 'Terraform', 'AWS'],
    result: 'Participant',
  },
];

export const ACADEMIC_PROJECTS = [
  {
    id: 'social-voyage',
    name: 'Social Voyage',
    category: 'Mini Project',
    institution: 'A. P. Shah Institute of Technology',
    duration: '6 Months',
    description: 'My first full-stack application built during college. Focused on matching compatible travelers through travel preferences.',
    technologies: ['Flask', 'MongoDB', 'Jaccard Similarity'],
    repo: 'https://github.com/Dakshmulundkar/SocialVoyage',
  },
  {
    id: 'pipeline-xr',
    name: 'PipelineXR',
    category: 'Major Project',
    institution: 'A. P. Shah Institute of Technology',
    duration: '1 Year',
    description: 'Flagship engineering major project focusing on security and observability for XR development pipelines.',
    technologies: ['Node.js', 'Kubernetes', 'Prometheus', 'React', 'Docker'],
    repo: 'https://github.com/Dakshmulundkar/PipelineXR',
    demo: 'https://pipelinexr2.netlify.app',
  },
];

export const SKILL_GROWTH = [
  { year: '2025', skill: 'Full Stack Development' },
  { year: '2025', skill: 'Artificial Intelligence' },
  { year: '2025', skill: 'Computer Vision' },
  { year: '2025', skill: 'Cloud Computing' },
  { year: '2026', skill: 'DevOps' },
  { year: '2026', skill: 'Platform Engineering' },
  { year: '2026', skill: 'DevSecOps' },
];

export const ACHIEVEMENTS = [
  { label: 'HackWins 2026 Winner', icon: 'Award' },
  { label: '8+ Hackathons participated', icon: 'Zap' },
  { label: '30+ Institutional Projects', icon: 'Layers' },
  { label: '252+ Contributions', icon: 'Github' },
  { label: '2 Freelance Clients', icon: 'Code' },
  { label: 'Final Major Project', icon: 'Terminal' },
];
