import React from 'react';
import { X, CheckCircle2, Cpu, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../Common/Icons';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0f1420] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden space-y-6 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#131a29]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Live</span>
                </span>
              )}
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Case Study</span>
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-amber-400 text-sm font-medium">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 font-sans text-gray-300 text-sm leading-relaxed">
          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Project Overview & Architecture</span>
            </h4>
            <p className="p-4 bg-white/5 rounded-xl border border-white/10 text-gray-200">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Technical Milestones & Impact</span>
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>Technologies & Tools Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 border-t border-white/10 bg-[#131a29] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono transition-colors cursor-pointer"
          >
            Close Modal
          </button>

          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform ({project.liveUrl.replace('https://', '')})</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
