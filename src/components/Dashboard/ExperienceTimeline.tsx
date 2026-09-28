import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/resumeData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
          <Briefcase className="w-4 h-4 text-amber-400" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Work Experience</h2>
        <p className="text-gray-400 text-sm">
          Hands-on software engineering experience building scalable full-stack modules, AI-driven architectures, and high-performance web applications.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#0b0f17] border-2 border-cyan-400 group-hover:border-amber-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-amber-400" />
            </div>

            {/* Experience Card */}
            <div className="bg-[#111622]/90 border border-white/10 group-hover:border-cyan-500/40 rounded-xl p-5 sm:p-6 space-y-4 backdrop-blur-xl transition-all shadow-lg hover:shadow-cyan-500/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center space-x-2">
                    <span>{exp.role}</span>
                    <span className="text-amber-400 text-sm font-semibold">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{exp.location}</span>
                    </span>
                    {exp.isRemote && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Remote
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements / Bullet points */}
              <div className="space-y-2 text-sm text-gray-300">
                {exp.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Slices */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-mono border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
