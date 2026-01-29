import { PersonalInfo, Education, ExperienceItem, Skill, Achievement, Project } from '@/types';

export const personalInfo: PersonalInfo = {
    name: "J Abhiram Reddy",
    title: "Software Developer | Full-Stack Engineer",
    location: "Hyderabad, Telangana, India",
    phone: "+91-9390712822",
    email: "jabhiramreddy.work@gmail.com",
    linkedin: "https://linkedin.com/in/j-abhiram-reddy",
    github: "https://github.com/ABHIRAM41",
    leetcode: "https://leetcode.com/J_Abhiram_reddy/",
};

export const education: Education[] = [
    {
        institution: "Vidya Jyothi Institute of Technology",
        location: "Hyderabad, India",
        degree: "Bachelor of Technology",
        field: "Computer Science",
        score: "CGPA: 7.99",
        startDate: "Aug. 2019",
        endDate: "Aug. 2023",
    },
    {
        institution: "Narayana Junior College",
        location: "Hyderabad, India",
        degree: "Intermediate",
        field: "Mathematics, Physics, Chemistry (M.P.C)",
        score: "90.1%",
        startDate: "2017",
        endDate: "2019",
    },
];

export const experience: ExperienceItem[] = [
    {
        company: "Vectorsoft",
        role: "Software Developer (Founding Team / Architect)",
        location: "Hyderabad, India",
        startDate: "Aug. 2024",
        endDate: "Present",
        highlights: [
            "Acted as the primary architect for both frontend and backend systems, designing a modular microservices ready structure using Elysia (Bun) and Next.js that improved development velocity by 40%",
            "Engineered the complete AWS infrastructure (EC2, S3, CloudFront, Route53), implementing Docker containerization and PM2 orchestration to achieve 99.9% uptime",
            "Developed a shared UI component library and custom React hooks, achieving ~60% code reuse across different modules",
            "Integrated AWS Bedrock for intelligent OCR workflows, automating complex document processing and reducing manual operational overhead by 75%",
            "Architected scalable MongoDB schemas and indexing strategies that reduced API response times by 65%",
            "Implemented enterprise-grade security protocols using Auth0/Okta, including MFA and RBAC",
            "Optimized frontend rendering pipeline using Next.js (SSR/ISR), resulting in 30% increase in Lighthouse performance scores",
            "Architected an integrated system for the full Claim Lifecycle, reducing manual claim processing time by 75%",
            "Functioned as the first engineer at a high-growth startup, scaling the system from 0 to production-ready in 8 months",
        ],
    },
    {
        company: "Self-Employed",
        role: "Freelance Full-Stack Developer",
        location: "Remote",
        startDate: "Jan. 2024",
        endDate: "Sep. 2024",
        highlights: [
            "Designed and launched openstudyai.com, an AI-driven educational platform, architecting a highly scalable Flask/React stack on AWS",
            "Managed the full product lifecycle, from initial UI/UX wireframing to production deployment and cost-optimization of AWS resources, reducing monthly spend by 20%",
        ],
    },
];

export const skills: Skill[] = [
    {
        category: "Programming Languages",
        items: ["C", "Java", "JavaScript", "TypeScript", "Python"],
    },
    {
        category: "Core Concepts",
        items: ["OOP", "Data Structures & Algorithms", "System Design", "Problem Solving"],
    },
    {
        category: "Backend Development",
        items: ["Node.js", "Elysia (Bun)", "Express.js", "REST APIs", "WebSocket", "Distributed Systems"],
    },
    {
        category: "Cloud & Infrastructure",
        items: ["AWS (EC2, S3, CloudFront, Cognito, Route53, Bedrock)", "Auth0/Okta", "Docker", "PM2", "Git"],
    },
    {
        category: "Frontend Development",
        items: ["Next.js", "React.js", "Tailwind CSS", "Tauri", "HTML", "CSS"],
    },
    {
        category: "Databases",
        items: ["MongoDB", "DynamoDB", "MySQL", "PostgreSQL"],
    },
];

export const achievements: Achievement[] = [
    {
        category: "Competitive Programming",
        title: "LeetCode Excellence",
        organization: "LeetCode",
        period: "2022 - Present",
        highlights: [
            "200-day streak demonstrating consistency",
            "Peak rating of 1554",
            "Strong problem-solving ability",
        ],
    },
    {
        category: "Competitive Programming",
        title: "HackerRank Certifications",
        organization: "HackerRank",
        period: "2022 - Present",
        highlights: [
            "5-star in Java & 30 Days of Code",
            "3-star in Problem Solving",
            "Certified in Java Programming and SQL Database Management",
        ],
    },
    {
        category: "Competitive Programming",
        title: "CodeKaze Competition",
        organization: "Coding Ninjas",
        period: "2023",
        highlights: [
            "Ranked 1st college-wide among 400+ participants",
        ],
    },
    {
        category: "Leadership",
        title: "Technical Events & Hackathons",
        organization: "Various",
        period: "2022 - 2023",
        highlights: [
            "Organized and led technical events at college fest",
            "Mentored peers in coding and project execution",
            "Advanced to Round 2 in Codigo Coding Competition",
        ],
    },
];

export const projects: Project[] = [
    {
        title: "OpenStudyAI",
        description: "AI-driven educational platform built with Flask/React stack on AWS, supporting a growing global user base",
        technologies: ["Flask", "React", "AWS", "Python", "AI/ML"],
        link: "https://openstudyai.com",
    },
    {
        title: "Vectorsoft Insurance Platform",
        description: "Full-stack insurance claim lifecycle management system with automated validation and real-time eligibility search",
        technologies: ["Next.js", "Elysia (Bun)", "MongoDB", "AWS", "Docker"],
    },
];
