import React from 'react';
import { Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative bg-[#111622]/90 border border-white/10 hover:border-cyan-500/50 rounded-2xl p-6 space-y-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between">
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          <div className="flex items-center space-x-2">
            {project.liveUrl && (
              <span className="flex items-center space-x-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live</span>
              </span>
            )}
            {project.featured && (
              <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </span>
            )}
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-amber-400 font-medium">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Highlight Slices */}
        <div className="space-y-1.5 pt-2">
          {project.keyHighlights.slice(0, 2).map((hl, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
              <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
              <span className="line-clamp-1">{hl}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-white/10">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-gray-300 text-[11px] font-mono border border-white/10">
              #{t}
            </span>
          ))}
        </div>

        {/* Action Buttons: Live Website & Architecture Modal */}
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/35 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-bold transition-all shadow-sm shadow-cyan-500/10 cursor-pointer"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={() => onOpenModal(project)}
            className={`${project.liveUrl ? 'flex-1' : 'w-full'} flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold transition-all group-hover:bg-cyan-500/10 cursor-pointer`}
          >
            <span>Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
