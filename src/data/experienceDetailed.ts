import type { Experience } from '@/types';

export interface DetailedExperience extends Experience {
  motivation?: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  techStack?: string[];
  lessons?: string[];
  features?: string[];
}

export const DETAILED_EXPERIENCES: DetailedExperience[] = [
  {
    id: 'pipelinexr',
    title: 'PipelineXR',
    organizer: 'College Major Project',
    date: 'July 2026',
    repo: 'https://github.com/Dakshmulundkar/PipelineXR',
    motivation: 'Engineering pipelines often lack real-time visibility and automated security validation across distributed environments.',
    problem: 'Fragmentation in CI/CD workflows leads to security gaps and slow deployment cycles.',
    solution: 'A production-grade XR pipeline integration focusing on security, observability, and real-time telemetry.',
    techStack: ['Node.js', 'React', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    outcomes: [
      'Implemented real-time telemetry for distributed workloads.',
      'Achieved zero-trust security validation across the deployment lifecycle.',
      'Reduced deployment latency by 40% through optimized caching strategies.'
    ],
    lessons: [
      'Mastered distributed systems observability.',
      'Learned production-level security auditing in CI/CD.',
      'Improved understanding of high-scale resource orchestration.'
    ]
  },
  {
    id: 'cloudhelm',
    title: 'CloudHelm',
    organizer: 'LOOP Hackathon 2026',
    date: 'March 2026',
    repo: 'https://github.com/Dakshmulundkar/CloudHelm',
    motivation: 'Managing multi-cloud resources often involves switching between multiple complex dashboards.',
    problem: 'Cloud resource fragmentation causes operational overhead and visibility issues.',
    solution: 'A unified cloud monitoring and orchestration platform designed for speed and simplicity.',
    techStack: ['React', 'Python', 'AWS SDK', 'Azure SDK', 'Terraform'],
    outcomes: [
      'Developed a unified interface for Multi-Cloud management.',
      'Automated resource cleanup workflows.',
      'Integrated real-time cost analysis and optimization alerts.'
    ],
    lessons: [
      'Deepened knowledge of Cloud Provider APIs.',
      'Learned Infrastructure-as-Code (IaC) principles.',
      'Improved cross-platform UI synchronization.'
    ]
  },
  {
    id: 'auditx',
    title: 'AuditX (1st Place Winner)',
    organizer: 'HackWins 2026',
    date: 'Jan 2026',
    repo: 'https://github.com/Dakshmulundkar/Auditx',
    motivation: 'Digital banking fraud is increasing rapidly, while underserved communities struggle with financial accessibility.',
    problem: 'Existing banking apps lack proactive intelligence and are often inaccessible to non-technical users.',
    solution: 'An AI-powered financial security platform focusing on fraud detection and financial inclusion.',
    techStack: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'Flask'],
    outcomes: [
      'Won First Place at HackWins 2026.',
      'Developed real-time SMS fraud detection using localized AI models.',
      'Integrated multilingual voice assistance for better financial inclusion.'
    ],
    lessons: [
      'Learned mobile-first AI integration.',
      'Mastered rapid MVP development under high pressure.',
      'Understood the importance of inclusive UX design.'
    ]
  },
  {
    id: 'secureflow',
    title: 'SecureFlow',
    organizer: 'OpsStorm 2026',
    date: 'Jan 2026',
    repo: 'https://github.com/Dakshmulundkar/SecureFlow',
    motivation: 'Developers need a centralized view of pipeline health, security posture, and infrastructure metrics.',
    problem: 'Fragmented DevOps workflows make failure diagnosis and security monitoring difficult.',
    solution: 'A comprehensive DevOps Security Analytics dashboard for full SDLC visibility.',
    techStack: ['React', 'D3.js', 'GitHub Actions', 'Docker', 'Trivy'],
    outcomes: [
      'Centralized security scanning and pipeline statistics.',
      'Visualized build success rates and deployment frequencies.',
      'Integrated vulnerability reporting from multiple sources.'
    ],
    lessons: [
      'Transitioned into DevOps engineering and observability.',
      'Mastered Git-ops and pipeline automation.',
      'Improved understanding of security-first development.'
    ]
  },
  {
    id: 'forgetmenot',
    title: 'ForgetMeNot',
    organizer: 'Personal AI Project',
    date: 'Late 2025',
    repo: 'https://github.com/Dakshmulundkar/ForgetMeNot',
    motivation: 'Dementia patients struggle to recognize familiar people and remember contextual information in real-time.',
    problem: 'Existing solutions are reactive rather than proactive assistants.',
    solution: 'A multimodal AI dementia care assistant using face recognition and speech processing.',
    techStack: ['React', 'Python', 'WebRTC', 'OpenCV', 'Whisper', 'FaceNet'],
    outcomes: [
      'Developed real-time face recognition and speaker identification.',
      'Implemented contextual memory retrieval based on conversation history.',
      'Designed a scalable microservice architecture for AI inference.'
    ],
    lessons: [
      'Learned multimodal AI system design.',
      'Mastered real-time audio/video streaming via WebRTC.',
      'Understood how distributed AI models communicate.'
    ]
  },
  {
    id: 'disastersense',
    title: 'DisasterSense',
    organizer: 'HackCelestial 2.0',
    date: 'Sept 2025',
    repo: 'https://github.com/Dakshmulundkar/DisasterSense',
    motivation: 'Emergency response systems are often fragmented and communication is slow during natural disasters.',
    problem: 'Predictions are difficult to access and resource allocation is slow.',
    solution: 'A unified disaster management platform connecting governments, NGOs, and citizens.',
    techStack: ['React', 'Python', 'PyTorch', 'Flask', 'MongoDB'],
    outcomes: [
      'Implemented AI-powered disaster prediction and computer vision reporting.',
      'Centralized emergency alerts and resource coordination.',
      'Developed a government-facing command dashboard.'
    ],
    lessons: [
      'Learned image classification for emergency monitoring.',
      'Improved large-scale system planning.',
      'Mastered AI integration into full-stack workflows.'
    ]
  },
  {
    id: 'socialvoyage',
    title: 'Social Voyage',
    organizer: 'College Mini Project',
    date: 'Early 2025',
    repo: 'https://github.com/Dakshmulundkar/SocialVoyage',
    motivation: 'Traditional social platforms focus on existing friends rather than matching users by travel compatibility.',
    problem: 'Finding trustworthy travel companions for solo trips is difficult.',
    solution: 'A travel matchmaking platform using recommendation algorithms.',
    techStack: ['Flask', 'HTML', 'CSS', 'JS', 'MongoDB'],
    outcomes: [
      'My first major full-stack application.',
      'Implemented Jaccard Similarity matching for travel recommendations.',
      'Developed a responsive UI for profile and group management.'
    ],
    lessons: [
      'Learned the foundations of REST APIs and MongoDB CRUD.',
      'Understood recommendation engine basics.',
      'Realized a passion for full-stack build-cycles.'
    ]
  }
];
