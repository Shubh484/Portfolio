import type { PersonalDetails, Experience, Project, Education, SkillCategory, ThemeConfig } from '../types';

export const personalDetails: PersonalDetails = {
  name: "Shubh Singh",
  title: "Frontend Developer | GenAI & Modern Web Engineering",
  phone: "+91 8551846918",
  email: "Shubhsingh8767@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubh-singh-3a2988211/",
  github: "https://github.com/Shubh484",
  location: "India (Available for Remote Work Worldwide)",
  summary: "Frontend Developer with hands-on experience building scalable, high-performance web applications using React.js, Next.js, Redux, TypeScript, JavaScript, Tailwind CSS, and modern frontend architectures. Experienced in developing trading platforms, CMS solutions, and enterprise-grade web applications with a strong focus on performance, maintainability, user experience, and AI agent integration.",
  resumePdfUrl: "/resume.pdf"
};

export const experiences: Experience[] = [
  {
    id: "carwyapar-frontend-dev",
    company: "CarWyapar",
    role: "Frontend Developer",
    location: "Remote",
    period: "February 2025 – Present",
    isRemote: true,
    highlights: [
      "Developed and maintained scalable frontend applications using React.js, Next.js, Vue.js, Nuxt.js, and TypeScript following modern frontend architecture principles.",
      "Implemented efficient state management using Redux and Pinia, crafting reusable responsive UI components with Tailwind CSS.",
      "Integrated multiple REST APIs for authentication, user management, financial transactions, and real-time business workflows.",
      "Collaborated closely with backend and product teams to deliver high-performance, production-ready enterprise features."
    ],
    technologies: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Redux", "Pinia", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "carwyapar-frontend-intern",
    company: "CarWyapar",
    role: "Frontend Developer Intern",
    location: "Remote",
    period: "August 2024 – January 2025",
    isRemote: true,
    highlights: [
      "Developed and maintained responsive web applications using React.js, Next.js, Vue.js, Nuxt.js, TypeScript, and Tailwind CSS.",
      "Built reusable UI component libraries and implemented scalable frontend engineering best practices.",
      "Optimized frontend asset bundle size and improved lighthouse performance metrics across core product landing pages."
    ],
    technologies: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Git"]
  }
];

export const projects: Project[] = [
  {
    id: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    subtitle: "LLMs, RAG, VectorDB & Agentic Workflow",
    category: "ai",
    shortDescription: "Intelligent knowledge retrieval assistant utilizing LLMs and RAG to query complex datasets with context-aware semantic search.",
    fullDescription: "Designed and developed an intelligent knowledge retrieval assistant utilizing Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to query complex datasets. Implemented a Vector Database with Vector Search capabilities to ensure rapid, highly relevant semantic information retrieval and context injection.",
    tags: ["GenAI", "LLMs", "RAG", "VectorDB", "React.js", "TypeScript", "Vector Search"],
    techStack: ["React.js", "TypeScript", "LLMs", "RAG Engine", "Vector Database", "Agentic Workflows", "Tailwind CSS"],
    keyHighlights: [
      "Designed RAG architecture with high-dimensional vector embeddings for context-aware prompt augmentation.",
      "Built an interactive chat interface featuring streaming markdown, source citations, and code syntax highlighting.",
      "Engineered vector retrieval strategies delivering sub-second response times across large domain knowledge bases."
    ],
    githubUrl: "https://github.com/Shubh484",
    featured: true
  },
  {
    id: "velocityx",
    title: "VelocityX",
    subtitle: "Multi-Broker Trading Platform",
    category: "trading",
    shortDescription: "High-performance trading platform enabling users to connect brokerage accounts and execute trades via automated & custom strategies.",
    fullDescription: "Developed and enhanced VelocityX, a trading platform enabling users to connect brokerage accounts and execute trades via multiple strategies. Built scalable frontend modules using Next.js and Redux with a focus on performance, scalability, and maintainability. Integrated broker and trading APIs to support account connectivity, strategy execution, and order management workflows.",
    tags: ["React.js", "Next.js", "Redux", "TypeScript", "REST APIs", "FinTech"],
    techStack: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "REST APIs", "Tailwind CSS"],
    keyHighlights: [
      "Architected Redux state slices for real-time market order updates and multi-account state tracking.",
      "Integrated secure multi-broker REST APIs for account pairing, order placement, and position tracking.",
      "Optimized order book UI rendering performance under high-frequency WebSocket state mutations."
    ],
    githubUrl: "https://github.com/Shubh484",
    featured: true
  },
  {
    id: "carwyapar-cms",
    title: "CarWyapar CMS",
    subtitle: "Role-Based Admin & Dealer CMS",
    category: "cms",
    shortDescription: "Comprehensive role-based Admin & Dealer CMS for a high-traffic automotive vehicle buying & selling marketplace.",
    fullDescription: "Developed a comprehensive role-based Admin & Dealer CMS for a highly-trafficked vehicle buying and selling platform. Built reusable dashboard components with optimized state management and scalable architecture. Integrated multiple REST APIs for real-time data updates and secure administrative operations.",
    tags: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "Tailwind CSS", "Automotive"],
    techStack: ["Vue.js", "Nuxt.js", "TypeScript", "Pinia", "Tailwind CSS", "REST APIs"],
    keyHighlights: [
      "Implemented granular Role-Based Access Control (RBAC) UI views for System Admins, Dealers, and Regional Managers.",
      "Built dynamic, customizable data tables supporting server-side filtering, column sorting, and CSV data export.",
      "Streamlined multi-step vehicle listing workflows, significantly speeding up listing verification cycles."
    ],
    githubUrl: "https://github.com/Shubh484",
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", level: 95, highlight: true },
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "C++", level: 85 },
      { name: "Python", level: 80 }
    ]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 90, highlight: true },
      { name: "Redux / Redux Toolkit", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Nuxt.js", level: 85 },
      { name: "Pinia", level: 85 },
      { name: "Tailwind CSS", level: 95, highlight: true },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    title: "Generative AI & Agentic Tools",
    iconName: "Bot",
    skills: [
      { name: "LLM Prompting & Tooling", level: 90, highlight: true },
      { name: "RAG Architecture", level: 88, highlight: true },
      { name: "Vector Databases & Search", level: 85, highlight: true },
      { name: "Agentic Workflows", level: 85 },
      { name: "AI IDEs (Cursor / Antigravity)", level: 95, highlight: true }
    ]
  },
  {
    title: "Backend & Databases",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs Integration", level: 95, highlight: true },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "Tools & Engineering Practices",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Antigravity AI", level: 92 },
      { name: "Agile & Scrum", level: 90 },
      { name: "CI/CD & Deployment", level: 82 }
    ]
  }
];

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science & Information Technology",
  institution: "Dronacharya Group of Institutions",
  location: "Uttar Pradesh, India",
  period: "November 2020 – June 2024"
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
