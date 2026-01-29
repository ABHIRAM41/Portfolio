// Type definitions for portfolio data

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
}

export interface Education {
    institution: string;
    location: string;
    degree: string;
    field: string;
    score: string;
    startDate: string;
    endDate: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Achievement {
    category: string;
    title: string;
    organization: string;
    period: string;
    highlights: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}
