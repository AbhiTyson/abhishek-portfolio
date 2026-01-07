export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
}
