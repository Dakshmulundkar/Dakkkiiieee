import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'pipelinexr',
    title: 'PipelineXR',
    category: 'DevSecOps Platform',
    description: 'A flagship DevSecOps observability platform providing real-time GitHub Actions monitoring, DORA metrics, security scanning, and automated reporting.',
    image: 'https://i.postimg.cc/xTfpSgz7/Screenshot-2026-06-30-212801.png',
    tech: ['React', 'Node.js', 'Docker', 'GitHub Actions', 'Socket.IO', 'Snyk', 'Trivy'],
    github: 'https://github.com/Dakshmulundkar/PipelineXR',
    live: 'https://pipelinexr2.netlify.app/',
    featured: true,
    caseStudy: {
      problem: "Traditional CI/CD pipelines often lack real-time visibility into security vulnerabilities and DORA metrics, leading to delayed remediations and inefficient delivery cycles.",
      solution: "Developed an observability layer that hooks into GitHub Actions to provide instantaneous feedback on build health, security posture, and team performance metrics.",
      architecture: "Event-driven architecture using Socket.IO for real-time updates, integrated with Snyk/Trivy via specialized Docker containers for parallelized scanning.",
      challenges: [
        "Managing high-frequency WebSocket events from multiple concurrent workflows without performance degradation.",
        "Abstracting complex security report JSONs into actionable executive summaries."
      ],
      outcome: "Successfully reduced mean-time-to-repair (MTTR) by providing developers with pre-commit security insights and 360-degree pipeline visibility."
    }
  },
  {
    id: 'ai-kyc',
    title: 'AI KYC Platform',
    category: 'FinTech + AI',
    description: 'Intelligent verification system supporting Aadhaar/PAN OCR, face recognition, liveness detection, and AES-256 secure document handling.',
    image: '/projects/ai-kyc.webp',
    tech: ['Python', 'Flask', 'React', 'OpenCV', 'Face Recognition', 'AES-256'],
    github: 'https://github.com/Dakshmulundkar/KYC-verification-ap.git',
    featured: true,
    caseStudy: {
      problem: "Manual KYC verification is slow, prone to human error, and vulnerable to identity fraud through static photo spoofs.",
      solution: "Implemented an AI-first verification pipeline that combines OCR for data extraction and deep-learning based liveness detection to ensure physical presence.",
      architecture: "Hybrid compute model with Flask microservices handling heavy AI inference while React manages the user session and secure document upload state.",
      challenges: [
        "Optimizing face recognition accuracy across diverse lighting conditions and low-quality mobile cameras.",
        "Ensuring end-to-end data privacy using AES-256 encryption for documents in transit and at rest."
      ],
      outcome: "Engineered a system capable of verifying identities in under 60 seconds with 99.2% accuracy in controlled liveness tests."
    }
  },
  {
    id: 'stans',
    title: 'STANS',
    category: 'Graph Algorithms + DevOps',
    description: 'Smart Traffic-Aware Navigation System using graph algorithms for optimal routing. Containerized with multi-stage Docker builds and deployed via Nginx.',
    image: '/projects/stans.webp',
    tech: ['Python', 'Docker', 'Nginx', 'GitHub Actions', 'GHCR', 'Graph Theory'],
    github: 'https://github.com/Dakshmulundkar/STANS',
    featured: true,
    caseStudy: {
      problem: "Standard navigation often fails to account for dynamic blockades and real-time traffic flux in complex urban grids.",
      solution: "Built a custom routing engine based on Dijkstra's algorithm with weighted edges that adjust dynamically based on incoming traffic telemetry.",
      architecture: "Production-ready container architecture using multi-stage Docker builds to minimize surface area, served behind an Nginx reverse proxy.",
      challenges: [
        "Implementing real-time weight updates on the graph without re-calculating the entire network path.",
        "Configuring zero-downtime deployments using GitHub Actions and GHCR."
      ],
      outcome: "A highly resilient navigation microservice that can be scaled horizontally to handle thousands of concurrent routing requests."
    }
  },
  {
    id: 'auditx',
    title: 'AuditX',
    category: 'FinTech + Security',
    achievement: '🥇 First Place Winner',
    description: 'AI-powered financial security platform for fraud detection, instant loan analysis, and multilingual banking accessibility.',
    image: '/projects/auditx.webp',
    tech: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'Flask'],
    github: 'https://github.com/Dakshmulundkar/Auditx',
    featured: false,
    caseStudy: {
      problem: "Digital banking users often face rising fraud risks and complex loan approval processes with little proactive intelligence from their apps.",
      solution: "Engineered a financial companion that uses behavior analysis for fraud prevention and AI-driven logic for instantaneous loan eligibility.",
      architecture: "Modular mobile architecture using Expo for cross-platform delivery and Firebase for real-time secure data synchronization.",
      challenges: [
        "Implementing robust fraud pattern recognition on mobile device performance budgets.",
        "Developing multilingual voice-assisted workflows for financial inclusion."
      ],
      outcome: "Awarded 1st Place at HackWins 2026 for its practical application of AI in accessible financial security."
    }
  },
  {
    id: 'forgetmennot',
    title: 'ForgetMeNot',
    category: 'Healthcare AI',
    description: 'Multimodal AI dementia care assistant utilizing face recognition and speech processing for real-time memory support.',
    image: '/projects/forgetmenot.webp',
    tech: ['React', 'TypeScript', 'WebRTC', 'Python', 'FaceNet', 'Whisper'],
    github: 'https://github.com/Dakshmulundkar/ForgetMeNot',
    featured: false,
    caseStudy: {
      problem: "Dementia patients struggle with recognizing loved ones and recalling conversation context, leading to social anxiety and loss of independence.",
      solution: "Created a cognitive assistance system that continuously observes surroundings and provides subtle, real-time contextual reminders.",
      architecture: "Distributed microservices architecture separating face recognition (MTCNN/FaceNet) from speech processing (Whisper) for high throughput.",
      challenges: [
        "Managing WebRTC audio/video synchronization with low latency to provide real-time assistance.",
        "Scaling face recognition to work across multiple family members simultaneously."
      ],
      outcome: "A production-grade AI system that demonstrates the transition from app building to designing complex intelligent systems."
    }
  },
  {
    id: 'secureflow',
    title: 'SecureFlow',
    category: 'DevOps Observability',
    description: 'Comprehensive DevOps Security Analytics Dashboard for centralized pipeline visibility and infrastructure health monitoring.',
    image: '/projects/secureflow.webp',
    tech: ['Next.js', 'Tailwind CSS', 'GitHub Actions', 'Security Scanning'],
    github: 'https://github.com/Dakshmulundkar/SecureFlow',
    featured: false,
    caseStudy: {
      problem: "Engineering teams are often fragmented across multiple monitoring tools, lacking a single pane of glass for security and deployment health.",
      solution: "Developed an observability layer that aggregates data from CI/CD pipelines, container scanners, and test suites into a unified view.",
      architecture: "Event-driven dashboard aggregating metadata from GitHub APIs and automated security report JSONs.",
      challenges: [
        "Unifying disparate data schemas from multiple security and deployment platforms.",
        "Designing real-time status tracking for large-scale enterprise workflows."
      ],
      outcome: "Provided engineering teams with actionable DORA metrics and a 360-degree view of their software delivery lifecycle."
    }
  },
  {
    id: 'social-voyage',
    title: 'Social Voyage',
    category: 'Full-Stack Matching',
    description: 'Travel matchmaking platform using Jaccard Similarity algorithms to connect travelers with shared destination preferences.',
    image: '/projects/social-voyage.webp',
    tech: ['Flask', 'MongoDB', 'JavaScript', 'Similarity Algorithms'],
    github: 'https://github.com/Dakshmulundkar/SocialVoyage',
    featured: false,
    caseStudy: {
      problem: "Solo travelers struggle to find trustworthy companions with compatible interests, as existing apps focus mostly on bookings.",
      solution: "Built a recommendation engine based on destination preferences and travel styles rather than mutual social groups.",
      architecture: "Classic full-stack Flask architecture with MongoDB for flexible user travel preference storage and Jaccard-based scoring.",
      challenges: [
        "Designing an efficient matching algorithm for semi-structured preference data.",
        "Managing session state and real-time requests without heavy infrastructure."
      ],
      outcome: "Successfully prototyped a matching system that laid the foundation for more complex Recommendation Systems in later work."
    }
  },
  {
    id: 'disaster-mgmt',
    title: 'Disaster Management',
    category: 'Artificial Intelligence',
    description: 'AI prediction and emergency management platform using Computer Vision (PyTorch) to classify disasters and support multilingual reporting.',
    image: '/projects/disaster.webp',
    tech: ['PyTorch', 'Computer Vision', 'React', 'Tailwind CSS', 'Leaflet'],
    github: 'https://github.com/Dakshmulundkar/DisasterSense.git',
    featured: true,
    caseStudy: {
      problem: "Delayed disaster response is often caused by fragmented reporting and slow manual classification of emergency footage.",
      solution: "Leveraged pre-trained Computer Vision models to automatically classify disaster types from user-uploaded images, prioritizing critical alerts.",
      architecture: "Real-time reporting engine combined with a geospatial dashboard for emergency responders to visualize hotspots dynamically.",
      challenges: [
        "Training a robust classification model capable of distinguishing between similar disaster scenes (e.g., flash flood vs. simple heavy rain).",
        "Integrating multilingual support for ground reporting in diverse geographic regions."
      ],
      outcome: "Prototyped a scalable platform that reduces disaster classification time from minutes to milliseconds, enabling faster first-responder dispatch."
    }
  }
];
