import { ContactInfo, ExperienceItem, SkillCategory, EducationItem, CertificationItem } from './types';

export const CONTACT: ContactInfo = {
  phone: "+91 7004057752",
  email: "abhishek773945@gmail.com",
  linkedin: "https://www.linkedin.com/in/1512-abhishek-anand",
  location: "Gurugram, Haryana, India"
};

export const SUMMARY = `Results-driven Software Engineering Lead with 5+ years of accelerated expertise in designing, modernizing, and scaling enterprise-wide Digital Contact Center solutions. Proven track record in driving digital transformation using CCaaS and Generative AI to deliver seamless, high-quality employee support experiences. Adept at defining strategic direction, managing cross-functional stakeholder relationships, and overseeing implementation of new systems.`;

export const SKILLS: SkillCategory[] = [
  {
    title: "Core AI & Conversational",
    skills: ["Dialogflow CX/ES", "Generative AI", "Conversational AI", "Vertex AI", "CCAI", "Retrieval-Augmented Generation (RAG)", "Vector DB", "OpenAI"]
  },
  {
    title: "Cloud & Data",
    skills: ["Google Cloud Platform (GCP)", "BigQuery", "Google Data Studio", "AWS"]
  },
  {
    title: "Development & Tools",
    skills: ["Node.js (Basic)", "Web Development", "Data Analysis", "Figma", "Draw.io"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "Software Engineering Lead",
    period: "February 2025 - Present",
    duration: "Current",
    location: "Gurugram, India",
    description: [
      "Spearheaded enterprise contact center modernization by leading the strategic migration of a legacy Azure virtual agent platform to the modern Dialogflow CX CCaaS framework.",
      "Provided operational leadership and coaching to a dedicated technical team, managing the development lifecycle and promoting a culture of service excellence.",
      "Defined end-to-end employee support experience and conceptualized complex conversational flows using GenAI/Vertex AI, increasing First Contact Resolution (FCR) for 4+ complex user journeys.",
      "Collaborated with product owners to identify emerging digital needs and deliver highly scalable contact center solutions."
    ]
  },
  {
    company: "Quantiphi",
    role: "Senior Conversational AI Engineer",
    period: "April 2024 - February 2025",
    duration: "11 months",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed and managed Dialogflow agents for finance and retail sectors, optimizing intents, entities, responses, and flows.",
      "Collaborated with client stakeholders to gather requirements and present solution designs.",
      "Integrated Google Cloud Functions for databases, CRM platforms, and audio buckets for data processing.",
      "Developed a multilingual Gen AI-enabled bot using Dialogflow CX, enhancing customer interactions."
    ]
  },
  {
    company: "Accenture",
    role: "Senior Software Analyst",
    period: "September 2020 - April 2024",
    duration: "3 years 8 months",
    location: "Gurugram, Haryana, India",
    description: [
      "Built all agents for Pre-Built Component of Dialogflow CX. Developed agents for finance and retail sectors.",
      "Connected agents to cloud functions, databases, CRM platforms, and APIs for seamless data access.",
      "Leveraged Generative AI to design and develop bots addressing diverse retail industry needs.",
      "Designed interactive dashboards for real-time bug tracking and resource allocation.",
      "Created internal tools (Resource Utilisation and Device Tracker) to optimize resource management."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Narula Institute Of Technology, Kolkata",
    degree: "B.Tech: Computer Science & Engineering",
    year: "2016 - 2020"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Google Cloud Certified Associate Cloud Engineer", issuer: "Google" },
  { name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services" },
  { name: "Integrate Vertex AI Search and Conversation into Voice and Chat Apps", issuer: "Google Skills" },
  { name: "Microsoft Copilot for Productivity", issuer: "Microsoft/LinkedIn" },
  { name: "Build deterministic VA enhanced with data stores", issuer: "Google" }
];
