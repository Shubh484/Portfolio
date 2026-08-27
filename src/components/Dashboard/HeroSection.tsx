import React from 'react';
import { Terminal, Download, ArrowRight, Code, Cpu, Database } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

interface HeroSectionProps {
  onToggleCLI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onToggleCLI }) => {
  return (
    <section id="about" className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Open to Worldwide Remote & Full-time Engineering Roles</span>
        </div>

        {/* Hero Headline */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building High-Performance <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
              Web Apps & AI Systems
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            Hi, I'm <strong className="text-amber-400 font-semibold">{personalDetails.name}</strong>, a Frontend Developer specialized in React.js, Next.js, Redux, Vue.js, TypeScript, and Generative AI architectures (RAG & VectorDB). I craft scalable enterprise web applications, trading platforms, and AI knowledge assistants.
          </p>
        </div>

        {/* Core Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {['React.js', 'Next.js', 'Redux', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'GenAI / RAG', 'VectorDB'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono font-semibold hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onToggleCLI}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-cyan-500/40 text-cyan-300 font-mono font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/10 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Launch CLI Terminal</span>
          </button>

          <a
            href={personalDetails.resumePdfUrl}
            download="Shubh_Singh_Resume.pdf"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-[#111622]/90 border border-cyan-500/20 backdrop-blur-md space-y-1.5">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Code className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Current Role</span>
            </div>
            <div className="text-white font-bold text-sm">Frontend Developer</div>
            <div className="text-amber-400 text-xs font-semibold">@ CarWyapar (Remote)</div>
          </div>

          <div className="p-4 rounded-xl bg-[#111622]/90 border border-cyan-500/20 backdrop-blur-md space-y-1.5">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">AI Specialization</span>
            </div>
            <div className="text-white font-bold text-sm">RAG & Vector Search</div>
            <div className="text-cyan-300 text-xs">LLM Agents & Context Retrieval</div>
          </div>

          <div className="p-4 rounded-xl bg-[#111622]/90 border border-cyan-500/20 backdrop-blur-md space-y-1.5">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Database className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Education</span>
            </div>
            <div className="text-white font-bold text-sm">B.Tech (CS & IT)</div>
            <div className="text-emerald-400 text-xs font-semibold">Dronacharya Group of Institutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};
