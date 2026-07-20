// ============================================================
// SINGLE SOURCE OF TRUTH — All portfolio data lives here.
// Update this file to reflect any resume changes.
// ============================================================

// ---- PERSONAL INFO ----
export const personalInfo = {
  name: "J Abhiram Reddy",
  shortName: "Abhiram",
  role: "Software Development Engineer",
  location: "Hyderabad, Telangana, India",
  email: "jabhiramreddy.work@gmail.com",
  phone: "+91-9390712822",
  summary:
    "Software engineer with 2.5+ years building and operating production systems. First engineer at a healthcare-data startup, owning the API, AWS infrastructure, and HIPAA-compliant data pipelines end to end. Depth in TypeScript/Node.js, Python, AWS, and distributed system design.",
  typewriterRoles: [
    "Software Development Engineer",
    "Backend Systems Architect",
    "AWS Infrastructure Engineer",
    "Full-Stack Developer",
    "Problem Solver",
  ],
  resumePdf: "/J Abhiram Reddy Resume.pdf",
};

// ---- SOCIAL LINKS ----
export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/j-abhiram-reddy",
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/jabhiramreddy-code",
    icon: "github",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    url: "https://leetcode.com/J_Abhiram_reddy/",
    icon: "leetcode",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/jabhiramrrun3",
    icon: "twitter",
  },
];

// ---- EXPERIENCE ----
export const experience = [
  {
    id: "vectorsoft",
    role: "Software Development Engineer",
    company: "Vectorsoft",
    companyUrl: "",
    location: "Hyderabad, India",
    period: "Feb 2024 — Present",
    type: "Full-time",
    isCurrent: true,
    bullets: [
      "Joined as the inaugural engineer — owned end-to-end software architecture, responsive frontend applications, backend API development, cloud setup, and release engineering from initial prototype to first production customers.",
      "Architected and shipped the responsive, high-performance customer-facing web application using Next.js (SSR / SSG) and React, optimizing Core Web Vitals, SEO, and client-side rendering while integrating seamlessly with backend microservices via REST APIs and WebSockets.",
      "Designed a multi-tenant microservices architecture with asynchronous event-driven message queues to guarantee data consistency and isolation across tenants.",
      "Built HL7 FHIR healthcare data ingestion pipelines, centralizing patient records across disparate provider systems to enable real-time population health analytics.",
      "Architected the platform to meet strict HIPAA compliance standards — implementing AES-256 encryption at rest and in transit, automated audit logging, PHI de-identification, and fine-grained RBAC with MFA.",
      "Engineered a high-performance cache-aside caching layer for session metadata and frequent lookups, cutting primary database load by 50% and maintaining sub-100ms API latency under peak traffic.",
      "Built and operated high-availability AWS cloud infrastructure with container orchestration, infrastructure-as-code, and automated CI/CD pipelines achieving 99.9% uptime with zero-downtime releases.",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    companyUrl: "",
    location: "Remote",
    period: "Sep 2023 — Jan 2024",
    type: "Freelance",
    isCurrent: false,
    bullets: [
      "Architected and deployed scalable backend services and responsive client web interfaces for an AI-driven education platform serving a global active user base.",
      "Implemented intelligent rate-limiting and session-caching mechanisms to shield primary databases during high-concurrency traffic bursts.",
      "Managed product development end-to-end — from wireframes to cloud production deployment — while reducing monthly AWS infrastructure expenditure by 20% through right-sizing and resource optimization.",
    ],
  },
];

// ---- SKILLS ----
export const skillCategories = [
  {
    id: "languages",
    label: "Programming Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend & UI",
    icon: "layout",
    skills: ["Next.js (SSR / SSG)", "React", "Responsive Web Design", "Core Web Vitals & Performance", "HTML5 / CSS3", "State Management"],
  },
  {
    id: "frameworks",
    label: "Backend & Frameworks",
    icon: "layers",
    skills: ["Node.js", "Elysia (Bun)", "Express.js", "FastAPI", "Flask"],
  },
  {
    id: "databases",
    label: "Databases & Caching",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS ECS & EC2", "AWS S3 & CloudFront", "Route 53 & ALB", "Docker", "SST (IaC)", "CI/CD Pipelines", "Linux Administration"],
  },
  {
    id: "domain",
    label: "Architecture & Security",
    icon: "shield",
    skills: ["RESTful APIs", "WebSockets", "Microservices", "Event-Driven Architecture", "HL7 FHIR", "HIPAA Compliance", "RBAC & MFA"],
  },
];

// ---- PROJECTS ----
// Only showcase work that directly backs up your resume.
// Add real projects here as you build them.
export const projects = [
  // ---- COMING SOON — proving resume claims ----
  {
    id: "healthcare-dashboard",
    name: "Real-Time Healthcare Dashboard",
    description:
      "Multi-tenant healthcare dashboard with WebSocket live feeds, RBAC, Redis caching, and HIPAA-compliant data handling — directly mirroring the Vectorsoft production stack.",
    tags: ["TypeScript", "Elysia/Bun", "WebSockets", "Redis", "PostgreSQL", "HIPAA"],
    liveUrl: "",
    githubUrl: "",
    type: "fullstack",
    featured: true,
    isComingSoon: true,
  },
  {
    id: "url-shortener",
    name: "URL Shortener + Analytics API",
    description:
      "High-throughput URL shortener with Redis cache-aside (sub-100ms p99), click analytics dashboard, Docker deployment, and PostgreSQL persistence.",
    tags: ["Node.js", "Redis", "PostgreSQL", "Docker", "REST API"],
    liveUrl: "",
    githubUrl: "",
    type: "backend",
    featured: true,
    isComingSoon: true,
  },
  {
    id: "multi-tenant-api",
    name: "Multi-Tenant REST API Boilerplate",
    description:
      "Production-ready multi-tenant API with JWT + Auth0 RBAC, PostgreSQL row-level security, rate limiting, audit logging, and Docker Compose local dev — open source.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Auth0", "Docker"],
    liveUrl: "",
    githubUrl: "",
    type: "backend",
    featured: true,
    isComingSoon: true,
  },
];

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    id: "codekaze-1st",
    title: "1st of 400+ — CodeKaze 2023",
    description:
      "Ranked 1st among 400+ participants in the college-wide CodeKaze coding competition conducted by Coding Ninjas. Cleared all rounds and claimed the top prize.",
    icon: "trophy",
    year: "2023",
    color: "gold",
  },
  {
    id: "leetcode-streak",
    title: "200-Day LeetCode Streak",
    description:
      "Sustained a 200-consecutive-day problem-solving streak on LeetCode, demonstrating consistent algorithmic thinking and discipline.",
    icon: "streak",
    year: "Ongoing",
    color: "cyan",
    link: "https://leetcode.com/J_Abhiram_reddy/",
  },
  {
    id: "hackerrank-stars",
    title: "HackerRank 5-Star Gold",
    description:
      "Earned 5-star (gold) rating in '30 Days of Code' and Java, plus certified in Basic Java and SQL. Demonstrates breadth of language proficiency.",
    icon: "star",
    year: "2022-23",
    color: "purple",
    link: "https://www.hackerrank.com/profile/jabhiramrrun3",
  },
  {
    id: "codekaze-2022",
    title: "3rd in College — CodeKaze 2022",
    description:
      "Ranked 3rd college-wide in CodeKaze 2022 and received a cash reward. Followed up with the top rank in 2023.",
    icon: "medal",
    year: "2022",
    color: "orange",
  },
];

// ---- EDUCATION ----
export const education = [
  {
    id: "vjit",
    institution: "Vidya Jyothi Institute of Technology",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology in Computer Science",
    cgpa: "7.99",
    period: "Aug 2019 — Aug 2023",
  },
];

// ---- NAV LINKS ----
export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
