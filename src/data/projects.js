export const projects = [
  {
    id: "nexora-learning-platform",
    title: "Nexora Learning Platform",
    category: "EdTech",
    stack: "MERN Stack",
    tags: ["EdTech", "MERN Stack", "WebRTC", "Redis"],
    colSpan: "md:col-span-12",
    imageHeight: "h-[614px]",
    image: "/images/nexora.jpg",
    alt: "A clean, modern user interface for an e-learning platform displayed on a high-end monitor.",
    shortDescription: "A comprehensive, scalable e-learning ecosystem built to support over 100,000 concurrent students with real-time video streaming and interactive assessments.",
    overview: "Nexus is an enterprise-scale education technology ecosystem built for global universities and training academies. The platform combines ultra-low latency interactive video streaming, automated grading pipelines, and unified student analytics in a cohesive interface.",
    client: "Nexus Global Education Consortium",
    duration: "6 Months",
    year: "2024",
    challenge: "The client was experiencing severe latency and crashes during peak examination periods with legacy software. The architecture needed to scale from 2,000 to over 100,000 concurrent active users without degradation, while guaranteeing 99.99% uptime during high-stakes assessments.",
    solution: "We re-architected the application from the ground up using React, Node.js microservices, Redis caching layers, and WebRTC video meshes distributed across edge CDN nodes. We introduced an asynchronous event-driven grading engine powered by RabbitMQ.",
    technologies: ["React.js", "Node.js", "MongoDB", "Redis", "WebRTC", "Docker", "AWS ECS", "Tailwind CSS"],
    results: [
      { metric: "100,000+", label: "Concurrent Students Supported" },
      { metric: "99.99%", label: "Uptime During Finals" },
      { metric: "450ms", label: "Average Page Load Time" },
      { metric: "40%", label: "Reduction in Cloud Costs" }
    ],
    architecture: [
      "Distributed edge nodes for localized WebRTC video routing",
      "Stateless microservices orchestrated on AWS ECS Fargate",
      "Multi-region MongoDB cluster with real-time read replicas",
      "Custom assessment security engine with automated anomaly detection"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
  {
    id: "ecommerce-live-demo",
    title: "E-Commerce Shopping",
    category: "Live Demo",
    stack: "React.js",
    tags: ["Live Demo", "E-commerce", "Shopping Cart", "React.js"],
    colSpan: "md:col-span-7",
    imageHeight: "h-[500px]",
    image: "/images/ecommerce.jpg",
    alt: "Live e-commerce shopping demo interface",
    shortDescription: "Experience our high-performance e-commerce architecture firsthand. A fully interactive storefront with functional cart, checkout flow, and localized currency.",
    overview: "This live demonstration showcases our enterprise-grade Next.js commerce architecture. You can browse products, add items to your cart, and proceed through a simulated headless checkout process in real-time.",
    client: "Interactive Demo",
    duration: "Live",
    year: "2026",
    challenge: "Demonstrating sub-second page loads and seamless cart synchronization without requiring clients to commit to a build.",
    solution: "Deployed a production-ready Next.js storefront using Mock Service Worker (MSW) to simulate real backend latency and payment processing.",
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "Stripe API (Test)"],
    results: [
      { metric: "100%", label: "Functional Flow" },
      { metric: "<100ms", label: "Cart Update Speed" },
      { metric: "Zero", label: "Page Reloads" },
      { metric: "Live", label: "Interactive Demo" }
    ],
    architecture: [
      "Client-side state management for instantaneous cart updates",
      "Simulated headless checkout integration",
      "Optimized edge-delivered product imagery"
    ],
    liveDemoUrl: "https://shoppingcart-mern-choi.onrender.com"
  },
  {
    id: "gym-live-demo",
    title: "Premium Gym Platform",
    category: "Live Demo",
    stack: "React/Node.js",
    tags: ["Live Demo", "Fitness", "Booking System", "React"],
    colSpan: "md:col-span-5",
    imageHeight: "h-[500px]",
    offset: "md:mt-24",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    alt: "Live premium gym platform demo interface showing class schedules.",
    shortDescription: "Interact with our high-conversion fitness platform. Features interactive class scheduling, membership management, and trainer profiles.",
    overview: "This live demonstration allows you to experience the member dashboard of our custom fitness portals. Test the booking flow, navigate through workout schedules, and try the membership upgrade system.",
    client: "Interactive Demo",
    duration: "Live",
    year: "2026",
    challenge: "Showcasing complex state management like calendar bookings and membership tiers in a safe, interactive environment.",
    solution: "Built a sandboxed React application that perfectly mirrors our production fitness UI, complete with mock payment flows and interactive scheduling.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Redux Toolkit", "Stripe (Simulated)"],
    results: [
      { metric: "100%", label: "Functional Flow" },
      { metric: "Real-time", label: "Class Scheduling" },
      { metric: "Mocked", label: "Payment Gateway" },
      { metric: "Live", label: "Interactive Demo" }
    ],
    architecture: [
      "Custom calendar component for class bookings",
      "Local storage for persisting mock user sessions",
      "Interactive membership tier comparison engine"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
  {
    id: "wander-travel-platform",
    title: "Wander Travel Platform",
    category: "Travel",
    stack: "React Native/Node",
    tags: ["Travel", "Mobile App", "React Native", "PostgreSQL"],
    colSpan: "md:col-span-6",
    imageHeight: "h-[500px]",
    image: "/images/wander-travel.jpg",
    alt: "Beautiful travel destination showing travel platform capability.",
    shortDescription: "A comprehensive booking and itinerary management system allowing travelers to plan multi-city trips in seconds.",
    overview: "Wander is a seamless travel planning app that aggregates flights, hotels, and local experiences into a unified, shareable itinerary.",
    client: "Wander Escapes",
    duration: "6 Months",
    year: "2025",
    challenge: "Travelers were frustrated juggling 5+ different apps to book and manage a single vacation.",
    solution: "We built a unified cross-platform mobile app using React Native, integrating 15+ third-party travel APIs for real-time booking and availability.",
    technologies: ["React Native", "Node.js", "Express", "PostgreSQL", "Stripe", "Mapbox"],
    results: [
      { metric: "2M+", label: "App Downloads" },
      { metric: "4.8", label: "App Store Rating" },
      { metric: "15+", label: "API Integrations" },
      { metric: "30%", label: "Increase in Bookings" }
    ],
    architecture: [
      "Cross-platform React Native architecture",
      "Aggregator microservices for real-time pricing",
      "Interactive map-based itinerary builder",
      "Offline caching for travel documents"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
  {
    id: "vitality-telehealth",
    title: "Vitality Telehealth",
    category: "Healthcare",
    stack: "Next.js/WebRTC",
    tags: ["Healthcare", "WebRTC", "HIPAA", "Next.js"],
    colSpan: "md:col-span-6",
    imageHeight: "h-[500px]",
    image: "/images/vitality-telehealth.jpg",
    alt: "Medical professional looking at a tablet showing healthcare app.",
    shortDescription: "A secure, HIPAA-compliant telehealth platform connecting patients with specialists via ultra-low latency video consultations.",
    overview: "Vitality brings the doctor's office to the patient's home, offering encrypted video calls, digital prescriptions, and integrated EHR management.",
    client: "Vitality Health Network",
    duration: "8 Months",
    year: "2025",
    challenge: "Traditional healthcare visits were inaccessible for remote patients, and existing video tools lacked crucial medical compliance (HIPAA).",
    solution: "Engineered a secure video consultation platform using WebRTC and end-to-end encryption, seamlessly integrating with legacy hospital EHR systems.",
    technologies: ["Next.js", "WebRTC", "Node.js", "PostgreSQL", "Redis", "Docker"],
    results: [
      { metric: "10k+", label: "Daily Consultations" },
      { metric: "100%", label: "HIPAA Compliant" },
      { metric: "< 200ms", label: "Video Latency" },
      { metric: "50%", label: "Reduced No-shows" }
    ],
    architecture: [
      "Peer-to-peer encrypted WebRTC video mesh",
      "Strict RBAC and audit logging for medical records",
      "HL7/FHIR integration for hospital synchronization",
      "Automated appointment scheduling and reminders"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
  {
    id: "business-management-platform",
    title: "SyncOps Workflow",
    category: "Enterprise",
    stack: "React/Node",
    tags: ["Enterprise", "React/Node", "PostgreSQL", "GraphQL"],
    colSpan: "md:col-span-12",
    imageHeight: "h-[500px]",
    image: "/images/syncops.jpg",
    alt: "Enterprise business management software interface focusing on workflow automation.",
    shortDescription: "A unified business management suite streamlining operations, finance, and human resources for Fortune 500 manufacturing firms.",
    overview: "SyncOps is a modular enterprise resource planning platform unifying supply chain management, workforce scheduling, vendor invoicing, and audit trails under a single pane of glass.",
    client: "SyncOps Industrial Technologies",
    duration: "7 Months",
    year: "2024",
    challenge: "Disparate legacy ERP software caused severe data silos, duplicate entries, and delayed financial closing cycles across 14 international production plants.",
    solution: "Engineered a composable enterprise web platform with React, GraphQL federation, and PostgreSQL with fine-grained role-based permission policies.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Prisma", "Redis", "AWS"],
    results: [
      { metric: "14 Plants", label: "Unified in Single Dashboard" },
      { metric: "18 Days -> 2 Days", label: "Month-End Closing Time" },
      { metric: "$1.4M", label: "Annual Operational Savings" },
      { metric: "100%", label: "Audit Compliance Rate" }
    ],
    architecture: [
      "Apollo GraphQL federation merging ERP, CRM and payroll subgraphs",
      "Row-level security policies in PostgreSQL ensuring strict multi-tenant access",
      "Real-time inventory synchronization across international warehouses",
      "Offline cache synchronization for plant-floor tablets"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
 
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
 
];
