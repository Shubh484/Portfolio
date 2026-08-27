import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projects } from '../../data/resumeData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'trading' | 'cms'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & RAG Assistants' },
    { id: 'trading', label: 'FinTech & Trading' },
    { id: 'cms', label: 'Enterprise CMS' },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
            <FolderGit2 className="w-4 h-4 text-amber-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Highlighted Projects</h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Real-world enterprise applications built with modern frontend architectures, GenAI RAG, Next.js, Redux, and Vue.js.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111622] border border-white/10 rounded-xl w-fit font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as 'all' | 'ai' | 'trading' | 'cms')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={(proj) => setActiveModalProject(proj)}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
