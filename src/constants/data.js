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
    "Software Development Engineer with around 3 years of experience building and operating production systems. Founding engineer at a healthcare-data startup, owning Next.js/React web applications, backend APIs, AWS infrastructure, and healthcare data pipelines end to end. Currently evaluating AI-generated code at Outlier.",
  typewriterRoles: [
    "Software Development Engineer",
    "AI Trainer & LLM Evaluator",
    "Full-Stack Engineer",
    "AWS Infrastructure Engineer",
  ],
  resumePdf: "/J_Abhiram_Reddy_Resume.pdf",
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
    id: "outlier",
    role: "AI Trainer & LLM Evaluator - Coding",
    company: "Outlier | Independent Contractor",
    companyUrl: "",
    location: "Remote",
    period: "Jun 2026 — Present",
    type: "Independent Contractor",
    isCurrent: true,
    bullets: [
      "Evaluate AI-generated code for correctness, instruction adherence, and edge-case handling.",
      "Compare model responses and document technical errors, logical inconsistencies, and solution quality.",
      "Provide structured technical feedback to support improvements in model-generated programming solutions.",
    ],
  },
  {
    id: "curertech",
    role: "Software Development Engineer",
    company: "Vectorsoft",
    companyUrl: "",
    location: "Hyderabad, India",
    period: "Feb 2024 — Aug 2026",
    type: "Full-time",
    isCurrent: false,
    bullets: [
      "Founding engineer - owned end-to-end software architecture, frontend applications, backend APIs, AWS infrastructure, and production deployments.",
      "Architected and shipped the responsive, high-performance customer-facing web application in Next.js (SSR / SSG) and React, optimizing Core Web Vitals and SEO while integrating via REST APIs and WebSockets.",
      "Designed a multi-tenant microservices architecture with asynchronous, event-driven message queues to support data consistency across services.",
      "Designed and implemented the migration from AWS HealthLake and DynamoDB to MongoDB, reducing read/write latency while maintaining a FHIR-aligned data model to simplify future migrations to FHIR-based systems.",
      "Architected platform security to support HIPAA requirements: TLS encryption in transit, AES-256 encryption at rest, automated audit logging, PHI de-identification, and RBAC with MFA via Auth0/Okta.",
      "Engineered a Redis cache-aside layer for session metadata and hot lookups, cutting primary database load by 50% and holding API latency under 100ms through peak traffic.",
      "Built and operated AWS infrastructure (ECS, ALB, EC2, S3, CloudFront, Route 53), using Docker for containerization, SST for infrastructure as code, and CI/CD pipelines for automated deployments.",
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
      "Built and deployed the backend for openstudyai.com, an AI-driven education platform, on a Python/Flask and AWS stack serving a global user base.",
      "Implemented rate limiting and session caching with Redis to keep read-heavy traffic off the primary database.",
      "Ran the product end to end, from wireframes to production deployment, and cut monthly AWS spend by 20% through right-sizing and resource cleanup.",
    ],
  },
];

// ---- SKILLS ----
export const skillCategories = [
  {
    id: "ai",
    label: "AI Code Evaluation",
    icon: "code",
    skills: ["AI Code Evaluation", "Instruction Adherence", "Edge-Case Analysis", "Model Response Comparison", "Structured Technical Feedback"],
  },
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
    skills: ["Next.js (SSR / SSG)", "React", "Responsive Web Design", "Core Web Vitals", "HTML5 / CSS3", "State Management"],
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
    skills: ["AWS ECS & EC2", "AWS S3 & CloudFront", "Route 53 & ALB", "AWS HealthLake", "Docker", "SST (IaC)", "CI/CD", "Linux"],
  },
  {
    id: "domain",
    label: "Architecture & Security",
    icon: "shield",
    skills: ["REST APIs", "WebSockets", "Microservices", "Event-Driven Architecture", "Auth0 / Okta", "RBAC", "MFA", "TLS", "AES-256", "HL7 FHIR", "HIPAA"],
  },
];

// ---- PROJECTS ----
// The updated resume lists no standalone projects to showcase.
export const projects = [];

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    id: "codekaze-1st",
    title: "1st of 400+ — CodeKaze 2023",
    description:
      "Ranked 1st among 400+ participants in the college-wide CodeKaze coding competition (2023).",
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
    year: "",
    color: "cyan",
    link: "https://leetcode.com/J_Abhiram_reddy/",
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
