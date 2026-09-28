import React from 'react';
import { Cpu, Code2, Layout, Bot, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../../data/resumeData';

export const SkillsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Bot': return <Bot className="w-4 h-4 text-emerald-400" />;
      case 'Server': return <Server className="w-4 h-4 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-pink-400" />;
      default: return <Wrench className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
          <Cpu className="w-4 h-4 text-amber-400" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Skills & Technical Stack</h2>
        <p className="text-gray-400 text-sm max-w-xl">
          Comprehensive technical stack across AI & LLM engineering, AI-assisted development (Cursor), modern frontend, backend architectures, and DevOps practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 space-y-4 backdrop-blur-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                {getIcon(category.iconName)}
              </div>
              <h3 className="font-bold text-white text-base font-mono">{category.title}</h3>
            </div>

            <div className="space-y-3 pt-1">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className={skill.highlight ? "text-cyan-300 font-bold" : "text-gray-300"}>
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-[10px]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-cyan-400 to-amber-400'
                          : 'bg-cyan-500/70'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
