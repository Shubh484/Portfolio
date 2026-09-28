import type { PersonalDetails, Experience, Project, Education, SkillCategory, ThemeConfig } from '../types';

export const personalDetails: PersonalDetails = {
  name: "Shubh Singh",
  title: "AI Full Stack Developer | RAG, LLM Agents & Scalable Systems",
  phone: "+91 8551846918",
  email: "Shubhsingh8767@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubh-singh-3a2988211/",
  github: "https://github.com/Shubh484",
  location: "Uttar Pradesh, India (Open to Remote Worldwide)",
  summary: "AI Full Stack Developer with hands-on experience building end-to-end, scalable web applications and intelligent AI-driven systems using React.js, Next.js, Node.js, Express.js, TypeScript, Python, and Vector Databases. Expert in rapidly scaffolding, building, and deploying complex software by leveraging AI IDEs (Cursor), AI coding agents, and automated workflows. Adept at designing RAG architectures, prompt engineering, and integrating RESTful APIs to deliver high-performance, enterprise-grade digital solutions.",
  resumePdfUrl: "/resume.pdf"
};

export const experiences: Experience[] = [
  {
    id: "kutaj-tech-ai-fullstack",
    company: "Kutaj Tech",
    role: "AI Full Stack Developer",
    location: "Uttar Pradesh, India",
    period: "February 2025 – Present",
    isRemote: true,
    highlights: [
      "Engineered responsive full-stack modules and features using React.js, Next.js, Vue.js, TypeScript, and Node.js, adhering to clean code and scalable architecture standards.",
      "Accelerated feature delivery timelines by leveraging AI IDEs (Cursor) and AI agents for rapid code generation, automated refactoring, component scaffolding, and complex debugging.",
      "Architected state management using Redux and Pinia, optimizing data fetching patterns and UI rendering speeds across enterprise applications.",
      "Designed and integrated secure RESTful APIs for real-time authentication, user permissions, payment processing, and core business workflows.",
      "Collaborated across product and backend teams to ensure seamless full-stack integration and high-performance production readiness."
    ],
    technologies: ["React.js", "Next.js", "Vue.js", "TypeScript", "Node.js", "Redux", "Pinia", "REST APIs", "Cursor IDE", "AI Agents"]
  },
  {
    id: "kutaj-tech-frontend-intern",
    company: "Kutaj Tech",
    role: "Frontend Developer Intern",
    location: "Uttar Pradesh, India",
    period: "August 2024 – January 2025",
    isRemote: true,
    highlights: [
      "Developed interactive frontend interfaces for web applications using React.js, Next.js, Nuxt.js, TypeScript, and Tailwind CSS.",
      "Built reusable UI component libraries and standardized scalable frontend templates to improve code maintainability across teams.",
      "Utilized AI-assisted coding tools to fast-track bug resolution, cross-browser compatibility testing, and performance tuning."
    ],
    technologies: ["React.js", "Next.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "AI Coding Tools", "Git"]
  }
];

export const projects: Project[] = [
  {
    id: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    subtitle: "LLMs, RAG, VectorDB & Agentic Workflows",
    category: "ai",
    shortDescription: "Intelligent retrieval system leveraging LLMs and RAG to query complex multi-format datasets with semantic search and autonomous agentic workflows.",
    fullDescription: "Architected an intelligent retrieval system leveraging LLMs and Retrieval-Augmented Generation (RAG) to query complex multi-format datasets seamlessly. Implemented a Vector Database with semantic search capabilities, achieving context injection and rapid, highly accurate document retrieval. Designed autonomous agentic workflows to handle multi-step reasoning, user prompt decomposition, and continuous output refinement.",
    tags: ["GenAI", "LLMs", "RAG", "VectorDB", "Agentic Workflows", "TypeScript", "React"],
    techStack: ["React.js", "TypeScript", "LLMs", "RAG Architecture", "Pinecone/Chroma VectorDB", "Agentic Workflows", "Tailwind CSS"],
    keyHighlights: [
      "Architected an intelligent retrieval system leveraging LLMs and Retrieval-Augmented Generation (RAG) to query complex multi-format datasets seamlessly.",
      "Implemented a Vector Database with semantic search capabilities, achieving context injection and rapid, highly accurate document retrieval.",
      "Designed autonomous agentic workflows to handle multi-step reasoning, user prompt decomposition, and continuous output refinement.",
      "Built a clean, responsive web interface in TypeScript and React.js to deliver real-time streaming AI responses and contextual source citations."
    ],
    githubUrl: "https://github.com/Shubh484",
    featured: true
  },
  {
    id: "velocityx",
    title: "VelocityX Trading Platform",
    subtitle: "Algorithmic Trading & Multi-Broker Connectivity",
    category: "trading",
    shortDescription: "High-performance trading platform connecting brokerage accounts to execute multi-strategy algorithmic trades with live market updates.",
    fullDescription: "Developed key full-stack modules for a real-time trading platform that connects brokerage accounts and executes multi-strategy algorithmic trades. Architected scalable frontend components with Next.js and Redux, optimizing state synchronization and reducing UI latency. Integrated broker trading APIs for account connectivity, order lifecycle management, and live market data updates.",
    tags: ["React.js", "Next.js", "Redux", "TypeScript", "REST APIs", "FinTech"],
    techStack: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Broker REST APIs", "Tailwind CSS"],
    keyHighlights: [
      "Developed key full-stack modules for a real-time trading platform connecting brokerage accounts and executing multi-strategy algorithmic trades.",
      "Architected scalable frontend components with Next.js and Redux, optimizing state synchronization and reducing UI latency.",
      "Integrated broker trading APIs for account connectivity, order lifecycle management, and live market data updates."
    ],
    liveUrl: "https://velocityx.co.in",
    githubUrl: "https://github.com/Shubh484",
    featured: true
  },
  {
    id: "carwyapar-cms",
    title: "CarWyapar CMS",
    subtitle: "Role-Based Admin & Dealer Marketplace CMS",
    category: "cms",
    shortDescription: "Role-based Admin & Dealer CMS powering a high-traffic vehicle marketplace platform with real-time data sync and transaction tracking.",
    fullDescription: "Built a role-based Admin & Dealer CMS powering a high-traffic vehicle marketplace platform. Engineered reusable dashboard widgets and administrative controls with optimized state management using Pinia. Integrated secure RESTful endpoints enabling real-time data synchronization and transaction tracking.",
    tags: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "Tailwind CSS", "REST APIs"],
    techStack: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "Tailwind CSS", "REST APIs"],
    keyHighlights: [
      "Built a role-based Admin & Dealer CMS powering a high-traffic vehicle marketplace platform.",
      "Engineered reusable dashboard widgets and administrative controls with optimized state management using Pinia.",
      "Integrated secure RESTful endpoints enabling real-time data synchronization and transaction tracking."
    ],
    liveUrl: "https://carwyapar.com",
    githubUrl: "https://github.com/Shubh484",
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM Stack",
    iconName: "Bot",
    skills: [
      { name: "RAG Architecture", level: 92, highlight: true },
      { name: "Vector Databases (Pinecone / Chroma)", level: 88, highlight: true },
      { name: "Agentic Workflows", level: 90, highlight: true },
      { name: "Prompt Engineering", level: 95, highlight: true },
      { name: "LLM Integration", level: 92, highlight: true },
      { name: "Vector Search & Embeddings", level: 88 }
    ]
  },
  {
    title: "AI-Assisted Development",
    iconName: "Cpu",
    skills: [
      { name: "Cursor IDE", level: 98, highlight: true },
      { name: "AI Coding Agents", level: 95, highlight: true },
      { name: "GitHub Copilot", level: 92 },
      { name: "Automated Scaffolding & Debugging", level: 95, highlight: true },
      { name: "Rapid Prototyping", level: 94 }
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 96, highlight: true },
      { name: "Next.js", level: 92, highlight: true },
      { name: "TypeScript", level: 95, highlight: true },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Redux / Redux Toolkit", level: 90 },
      { name: "Tailwind CSS", level: 95, highlight: true },
      { name: "Vue.js & Nuxt.js", level: 86 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    title: "Backend & Databases",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 88, highlight: true },
      { name: "Express.js", level: 86 },
      { name: "Python", level: 84, highlight: true },
      { name: "REST APIs Integration", level: 96, highlight: true },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 84 },
      { name: "GraphQL", level: 78 }
    ]
  },
  {
    title: "Tools, DevOps & Practices",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 95, highlight: true },
      { name: "Docker", level: 80 },
      { name: "Postman", level: 92 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Agile & Scrum", level: 90 }
    ]
  }
];

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and IT",
  institution: "Dronacharya Group of Institutions",
  location: "Uttar Pradesh, India",
  period: "November 2020 – June 2024",
  cgpa: "7.4 CGPA"
};

export const themes: Record<string, ThemeConfig> = {
  retro: {
    id: 'retro',
    name: 'Amber CRT',
    bgClass: 'bg-[#0f0e0a] text-[#ffb000]',
    textClass: 'text-[#ffb000]',
    promptClass: 'text-[#ffcf56]',
    accentClass: 'bg-[#ffb000] text-black',
    cardBg: 'bg-[#181610]/90 border-[#3d3419]',
    borderColor: 'border-[#ffb000]/30',
    glowColor: 'rgba(255, 176, 0, 0.15)'
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix Green',
    bgClass: 'bg-[#050b05] text-[#00ff66]',
    textClass: 'text-[#00ff66]',
    promptClass: 'text-[#66ff99]',
    accentClass: 'bg-[#00ff66] text-black',
    cardBg: 'bg-[#0a180a]/90 border-[#14421d]',
    borderColor: 'border-[#00ff66]/30',
    glowColor: 'rgba(0, 255, 102, 0.15)'
  },
  dracula: {
    id: 'dracula',
    name: 'Dracula Purple',
    bgClass: 'bg-[#1e1e2e] text-[#cdd6f4]',
    textClass: 'text-[#cdd6f4]',
    promptClass: 'text-[#cba6f7]',
    accentClass: 'bg-[#cba6f7] text-[#11111b]',
    cardBg: 'bg-[#181825]/90 border-[#313244]',
    borderColor: 'border-[#cba6f7]/30',
    glowColor: 'rgba(203, 166, 247, 0.15)'
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyber Neon',
    bgClass: 'bg-[#090d16] text-[#00f0ff]',
    textClass: 'text-[#00f0ff]',
    promptClass: 'text-[#ff007f]',
    accentClass: 'bg-[#ff007f] text-white',
    cardBg: 'bg-[#0f172a]/90 border-[#1e293b]',
    borderColor: 'border-[#00f0ff]/30',
    glowColor: 'rgba(0, 240, 255, 0.18)'
  },
  monokai: {
    id: 'monokai',
    name: 'Monokai Pro',
    bgClass: 'bg-[#272822] text-[#f8f8f2]',
    textClass: 'text-[#f8f8f2]',
    promptClass: 'text-[#a6e22e]',
    accentClass: 'bg-[#fd971f] text-black',
    cardBg: 'bg-[#1e1f1c]/90 border-[#3e3d32]',
    borderColor: 'border-[#a6e22e]/30',
    glowColor: 'rgba(166, 226, 46, 0.15)'
  }
};
