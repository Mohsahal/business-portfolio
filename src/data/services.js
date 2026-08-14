export const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    icon: "language",
    shortDescription: "High-performance, accessible, and resilient web applications built on modern JavaScript frameworks. We engineer digital experiences that prioritize speed, SEO, and seamless user interaction across all devices.",
    fullDescription: "At INFOB, we engineer world-class web applications designed to perform at scale. By leveraging cutting-edge architectures like Next.js, React, and GraphQL with edge delivery networks, we guarantee sub-second load times, superior lighthouse scores, and enterprise-grade resilience.",
    tags: ["Single Page Applications", "E-commerce Platforms", "Progressive Web Apps"],
    capabilities: [
      "Headless CMS and Composable Architectures",
      "Real-time Data Visualization and Dashboards",
      "API First & Microservices Architecture",
      "Accessible (WCAG 2.1 AA) and Responsive Design",
      "Core Web Vitals Optimization and Edge Caching"
    ],
    deliverables: [
      "Custom Frontend Application in React / Next.js",
      "Scalable API Integration Layer",
      "Automated CI/CD Deployment Pipeline",
      "Comprehensive Technical Documentation"
    ]
  },
  {
    id: "mobile-development",
    number: "02",
    title: "Mobile Applications",
    icon: "smartphone",
    shortDescription: "Native and cross-platform mobile solutions designed for engagement. We build robust iOS and Android applications that deliver native-like performance and intuitive interfaces.",
    fullDescription: "From early-stage MVPs to complex enterprise mobile ecosystems, INFOB builds polished, highly-performant mobile applications. We utilize Swift, Kotlin, and React Native to build fluid mobile journeys with offline-first sync and biometric security.",
    tags: ["iOS Native (Swift)", "Android Native (Kotlin)", "React Native & Flutter"],
    capabilities: [
      "Cross-platform Single Codebase with React Native & Flutter",
      "High-performance Native Swift and Kotlin Modules",
      "Biometric Authentication & Secure Storage",
      "Offline-first Sync Engines and Push Notifications",
      "App Store & Google Play Deployment Automation"
    ],
    deliverables: [
      "Production-ready iOS and Android Applications",
      "App Store and Google Play Publishing Support",
      "Backend Push & Analytics Integration",
      "Component Design System for Mobile"
    ]
  },
  {
    id: "ai-solutions",
    number: "03",
    title: "AI & Automation",
    icon: "smart_toy",
    shortDescription: "Intelligent systems that augment human capabilities. We integrate custom AI agents, WhatsApp automation, and machine learning models to streamline your customer interactions and internal workflows.",
    fullDescription: "We empower enterprises to harness modern Artificial Intelligence. From intelligent WhatsApp automation workflows and voice agents to domain-specific Large Language Model (LLM) implementations, INFOB turns manual processes into 24/7 autonomous operations.",
    tags: ["WhatsApp Automation", "AI Chatbots & Voice Agents", "Workflow Automation"],
    capabilities: [
        "Intelligent WhatsApp & Omnichannel Automation",
        "Autonomous AI Customer Support Agents",
        "Custom LLM Fine-Tuning & Retrieval-Augmented Generation (RAG)",
        "Intelligent Document Processing & OCR Pipelines",
        "Voice AI & Conversational Interfaces"
    ],
    deliverables: [
        "End-to-end WhatsApp Automation Workflows",
        "Tailored AI/ML Pipeline and Microservices",
        "Admin Control Panel with Observability & Guardrails",
        "API Endpoints for Easy System Integration"
    ]
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    icon: "code_blocks",
    shortDescription: "Bespoke enterprise applications tailored to your exact operational requirements. We eschew off-the-shelf limitations to engineer software architectures that evolve with your business model.",
    fullDescription: "Off-the-shelf software rarely fits complex business models. We build purpose-engineered software platforms from scratch, aligning database models, permission structures, and business logic directly with your strategic workflows.",
    tags: ["Enterprise Resource Planning", "CRM Integration", "Legacy System Modernization"],
    capabilities: [
      "Bespoke ERP & CRM Solutions",
      "Multi-tenant SaaS Architecture",
      "Complex Financial and Inventory Engines",
      "Legacy Codebase Refactoring & Migration",
      "Role-based Access Control (RBAC) & Audit Logging"
    ],
    deliverables: [
      "Fully Custom Software Platform with Source Code",
      "Database Schema, Migrations, and Backup Strategies",
      "Comprehensive REST / GraphQL APIs",
      "Staff Training & Architecture Handover"
    ]
  },
  {
    id: "cloud-devops",
    number: "05",
    title: "Cloud & DevOps",
    icon: "cloud",
    shortDescription: "Scalable infrastructure and continuous delivery pipelines. We optimize cloud environments for performance, cost-efficiency, and reliability, ensuring rapid deployment cycles.",
    fullDescription: "Build resilient foundations that scale effortlessly. INFOB designs cloud-native infrastructures using Terraform, Docker, and Kubernetes across AWS, Google Cloud, and Azure, eliminating downtime and slashing operational costs.",
    tags: ["Cloud Migration (AWS, Azure, GCP)", "CI/CD Implementation", "Infrastructure as Code"],
    capabilities: [
      "Automated Multi-stage CI/CD Pipelines (GitHub Actions / GitLab)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes & Container Orchestration",
      "Cloud Cost Optimization & FinOps",
      "Disaster Recovery, High Availability & Auto-scaling"
    ],
    deliverables: [
      "Production Cloud Architecture on AWS / GCP / Azure",
      "Automated Infrastructure as Code Repository",
      "Monitoring, Alerting, & Centralized Logging Suite",
      "DevOps Runbook and SLA Documentation"
    ]
  },
  {
    id: "cybersecurity",
    number: "06",
    title: "Cybersecurity",
    icon: "security",
    shortDescription: "Proactive defense strategies and robust security architectures. We protect your digital assets through comprehensive audits, threat modeling, and implementation of zero-trust frameworks.",
    fullDescription: "Security is non-negotiable. Our security engineers conduct rigorous penetration tests, implement zero-trust access controls, and prepare systems for enterprise compliance standards including SOC 2, HIPAA, and GDPR.",
    tags: ["Penetration Testing", "Compliance Audits (SOC2, GDPR)", "Threat Intelligence"],
    capabilities: [
      "Full-stack Application Security Audits & Pentesting",
      "Zero-Trust Network Architecture Implementation",
      "SOC 2, ISO 27001 & GDPR Compliance Readiness",
      "Real-time Threat Monitoring & Incident Response Planning",
      "Data Encryption at Rest and in Transit"
    ],
    deliverables: [
      "Detailed Vulnerability Assessment Report",
      "Remediation Code & Architecture Patching",
      "Security Policy Framework & Compliance Documentation",
      "Continuous Monitoring Setup"
    ]
  }
];

export const processTimeline = [
  {
    step: "01",
    title: "Discover",
    description: "Deep-dive analysis of operational challenges, tech stack audit, and market opportunities."
  },
  {
    step: "02",
    title: "Strategize",
    description: "Architecting the technical roadmap, resource allocation, and measurable milestone definitions."
  },
  {
    step: "03",
    title: "Design",
    description: "Prototyping UX/UI, wireframing user journeys, and defining scalable system architecture."
  },
  {
    step: "04",
    title: "Build",
    description: "Agile development cycles with continuous integration, unit testing, and weekly milestone demos."
  },
  {
    step: "05",
    title: "Launch",
    description: "Rigorous QA, penetration testing, automated deployment, and 24/7 performance telemetry."
  },
  {
    step: "06",
    title: "Grow",
    description: "Post-launch iteration, data-driven scaling, feature expansion, and ongoing infrastructure optimization."
  }
];
