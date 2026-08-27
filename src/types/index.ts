export type ViewMode = 'cli' | 'gui';

export type ThemeMode = 'retro' | 'matrix' | 'dracula' | 'cyberpunk' | 'monokai';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  bgClass: string;
  textClass: string;
  promptClass: string;
  accentClass: string;
  cardBg: string;
  borderColor: string;
  glowColor: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: 'ai' | 'trading' | 'cms';
  tags: string[];
  techStack: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isRemote: boolean;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface PersonalDetails {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
  resumePdfUrl: string;
}

export interface CommandHistoryItem {
  id: string;
  command: string;
  outputType: 'text' | 'custom' | 'error' | 'clear' | 'system';
  content?: string | React.ReactNode;
  timestamp: string;
}
