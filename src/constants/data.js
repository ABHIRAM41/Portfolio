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
    "Software engineer with 3 years building production applications, including LLM chatbots, voice assistants, and workflow automation. Founding engineer on CurerTech, owning AI services, Next.js/React frontend, backend APIs, and AWS infrastructure in a HIPAA-regulated environment.",
  typewriterRoles: [
    "Software Development Engineer",
    "AI Application Engineer",
    "LLM & RAG Developer",
    "Full-Stack Engineer",
    "AWS Infrastructure Engineer",
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
    id: "curertech",
    role: "Software Development Engineer",
    company: "Vectorsoft - CurerTech",
    companyUrl: "",
    location: "Hyderabad, India",
    period: "Feb 2024 — Present",
    type: "Full-time",
    isCurrent: true,
    bullets: [
      "Founding engineer on CurerTech, a multi-tenant healthcare platform - owned architecture, frontend, backend APIs, cloud setup, and releases from prototype to production.",
      "Built the platform's AI assistant: a self-serve RAG chatbot over product documentation, scoped to each tenant's configuration and deflecting 70% of support tickets.",
      "Added an ElevenLabs voice interface for hands-free product help and guided walkthroughs.",
      "Automated tenant provisioning, configuration, and data migration through event-driven services, cutting time to go live from months to 1-6 days and winning clients from competing platforms.",
      "Built a document data-extraction pipeline that turns unstructured clinical documents into validated HL7 FHIR records, removing manual data entry from onboarding and daily operations.",
      "Shipped the responsive customer-facing web application in Next.js (SSR / SSG) and React, optimizing Core Web Vitals and SEO.",
      "Integrated enterprise SSO with Auth0 and Okta using OAuth 2.0, JWT, RBAC, and MFA; met HIPAA requirements with AES-256 encryption, audit logging, and PHI de-identification.",
      "Built and operate AWS infrastructure with ECS, ALB, EC2, S3, CloudFront, Route 53, Docker, and SST at 99.9% uptime; Redis caching cut database load 50% and held latency under 100ms.",
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
      "Built and deployed the Python/Flask backend for openstudyai.com, an AI-driven education platform serving a global user base.",
      "Implemented the AI tutoring chatbot with prompt design, conversation context, streaming responses, and extraction of uploaded study material into structured topics.",
      "Ran the product end to end from wireframes to production; added Redis rate limiting and session caching, cutting monthly AWS spend by 20%.",
    ],
  },
];

// ---- SKILLS ----
export const skillCategories = [
  {
    id: "ai",
    label: "AI & Generative AI",
    icon: "code",
    skills: ["LLM Application Development", "Chatbots & Conversational AI", "ElevenLabs Voice Assistants", "RAG", "Prompt Engineering", "Embeddings & Vector Search", "Document Data Extraction"],
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
    skills: ["Next.js (SSR / SSG)", "React", "Responsive Web Design", "Core Web Vitals", "HTML5 / CSS3"],
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
    skills: ["AWS ECS & EC2", "AWS S3 & CloudFront", "Route 53 & ALB", "AWS HealthLake", "Docker", "SST (IaC)", "CI/CD", "GitHub", "Linux"],
  },
  {
    id: "domain",
    label: "Architecture & Security",
    icon: "shield",
    skills: ["REST APIs", "WebSockets", "Microservices", "Event-Driven Architecture", "SSO (Auth0 / Okta)", "OAuth 2.0", "JWT", "RBAC", "MFA", "HL7 FHIR", "HIPAA"],
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
