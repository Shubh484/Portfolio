import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Award, CheckCircle2, ChevronRight, Download } from 'lucide-react';
import { GithubIcon } from '../Common/Icons';
import { personalDetails, experiences, projects, skillCategories, education } from '../../data/resumeData';

interface OutputRowProps {
  command: string;
  onRunCommand: (cmd: string) => void;
}

export const OutputRow: React.FC<OutputRowProps> = ({ command, onRunCommand }) => {
  const cleanCmd = command.trim().toLowerCase();

  if (cleanCmd === 'help') {
    return (
      <div className="space-y-3 font-mono text-sm">
        <div className="text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
          AVAILABLE COMMANDS & UTILITIES:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <div><span className="text-amber-400 font-bold">about</span> <span className="text-gray-400">- Career overview & summary</span></div>
          <div><span className="text-amber-400 font-bold">skills</span> <span className="text-gray-400">- Tech stack breakdown</span></div>
          <div><span className="text-amber-400 font-bold">projects</span> <span className="text-gray-400">- Featured projects & case studies</span></div>
          <div><span className="text-amber-400 font-bold">experience</span> <span className="text-gray-400">- Work history at Kutaj Tech</span></div>
          <div><span className="text-amber-400 font-bold">education</span> <span className="text-gray-400">- Academic degree & credentials</span></div>
          <div><span className="text-amber-400 font-bold">contact</span> <span className="text-gray-400">- Email, Phone, Social links</span></div>
          <div><span className="text-amber-400 font-bold">theme &lt;name&gt;</span> <span className="text-gray-400">- Switch theme (retro|matrix|dracula|cyberpunk|monokai)</span></div>
          <div><span className="text-amber-400 font-bold">matrix</span> <span className="text-gray-400">- Toggle matrix rain animation</span></div>
          <div><span className="text-amber-400 font-bold">gui</span> <span className="text-gray-400">- Switch to visual GUI Dashboard view</span></div>
          <div><span className="text-amber-400 font-bold">download</span> <span className="text-gray-400">- Download official resume PDF</span></div>
          <div><span className="text-amber-400 font-bold">clear</span> <span className="text-gray-400">- Clear terminal screen</span></div>
        </div>
        <div className="text-xs text-gray-400 italic pt-1">
          Tip: You can click command pills above or type commands directly into the prompt.
        </div>
      </div>
    );
  }

  if (cleanCmd === 'about' || cleanCmd === 'cat about.txt' || cleanCmd === 'whoami') {
    return (
      <div className="space-y-3 font-mono text-sm">
        <div className="flex items-center space-x-2 text-cyan-400 font-bold">
          <ChevronRight className="w-4 h-4" />
          <span>{personalDetails.name} — {personalDetails.title}</span>
        </div>
        <div className="p-3 bg-white/5 rounded border border-white/10 text-gray-300 text-xs leading-relaxed">
          {personalDetails.summary}
        </div>
        <div className="flex flex-wrap gap-3 text-xs pt-1">
          <div className="flex items-center space-x-1.5 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{personalDetails.location}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-300">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{personalDetails.email}</span>
          </div>
        </div>
      </div>
    );
  }

  if (cleanCmd === 'skills' || cleanCmd === 'skp-md-viewer skills.md') {
    return (
      <div className="space-y-4 font-mono text-xs">
        <div className="text-cyan-400 font-bold text-sm border-b border-cyan-500/20 pb-1">
          TECHNICAL SKILLS & COMPETENCIES:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-3 bg-white/5 rounded border border-white/10 space-y-2">
              <div className="font-bold text-amber-400 uppercase tracking-wide text-[11px]">
                {cat.title}
              </div>
              <div className="space-y-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between">
                    <span className={skill.highlight ? "text-cyan-300 font-semibold" : "text-gray-300"}>
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 w-6 text-right">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cleanCmd === 'projects' || cleanCmd === 'skp-md-viewer personal-projects.md') {
    return (
      <div className="space-y-4 font-mono text-xs">
        <div className="text-cyan-400 font-bold text-sm border-b border-cyan-500/20 pb-1">
          FEATURED PROJECTS & ARCHITECTURE CASE STUDIES:
        </div>
        <div className="space-y-3">
          {projects.map((proj) => (
            <div key={proj.id} className="p-3.5 bg-white/5 rounded border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-400 font-bold text-sm">{proj.title}</span>
                  <span className="text-gray-400 text-xs">({proj.subtitle})</span>
                </div>
                <div className="flex items-center space-x-2">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 flex items-center space-x-1"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span>{proj.liveUrl.replace('https://', '')}</span>
                    </a>
                  )}
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 w-fit">
                    {proj.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">{proj.fullDescription}</p>
              <div className="space-y-1 pt-1">
                <span className="text-gray-400 text-[11px] font-semibold">Key Highlights:</span>
                {proj.keyHighlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-1.5 text-gray-300 text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map((t, tIdx) => (
                  <span key={tIdx} className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 text-[10px]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cleanCmd === 'experience' || cleanCmd === 'cat experience.txt') {
    return (
      <div className="space-y-4 font-mono text-xs">
        <div className="text-cyan-400 font-bold text-sm border-b border-cyan-500/20 pb-1">
          WORK EXPERIENCE & CAREER HISTORY:
        </div>
        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="p-3.5 bg-white/5 rounded border border-white/10 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-amber-400 font-bold text-sm">{exp.role}</span>
                  <span className="text-cyan-300 font-semibold ml-2">@ {exp.company}</span>
                </div>
                <span className="text-gray-400 text-xs">{exp.period}</span>
              </div>
              <ul className="space-y-1.5 pt-1 text-gray-300 text-xs">
                {exp.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cleanCmd === 'education' || cleanCmd === 'cat education.txt') {
    return (
      <div className="space-y-3 font-mono text-xs">
        <div className="text-cyan-400 font-bold text-sm border-b border-cyan-500/20 pb-1">
          ACADEMIC QUALIFICATIONS:
        </div>
        <div className="p-3.5 bg-white/5 rounded border border-white/10 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-amber-400 font-bold text-sm">{education.degree}</span>
            <div className="flex items-center space-x-2">
              {education.cgpa && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                  CGPA: {education.cgpa}
                </span>
              )}
              <span className="text-gray-400 text-xs">{education.period}</span>
            </div>
          </div>
          <div className="text-cyan-300 font-semibold">{education.institution} — {education.location}</div>
        </div>
      </div>
    );
  }

  if (cleanCmd === 'contact' || cleanCmd === 'skp-md-viewer contact-me.md') {
    return (
      <div className="space-y-3 font-mono text-xs">
        <div className="text-cyan-400 font-bold text-sm border-b border-cyan-500/20 pb-1">
          GET IN TOUCH:
        </div>
        <div className="p-3.5 bg-white/5 rounded border border-white/10 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            <a
              href={`mailto:${personalDetails.email}`}
              className="flex items-center space-x-2 p-2 rounded bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-cyan-300 transition-all"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">{personalDetails.email}</span>
            </a>

            <a
              href={`tel:${personalDetails.phone}`}
              className="flex items-center space-x-2 p-2 rounded bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-cyan-300 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{personalDetails.phone}</span>
            </a>

            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 p-2 rounded bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-cyan-300 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-amber-400 shrink-0" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 p-2 rounded bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-cyan-300 transition-all"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (cleanCmd === 'download' || cleanCmd === 'resume') {
    return (
      <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded font-mono text-xs flex items-center justify-between gap-2 text-cyan-300">
        <span>Official Resume (PDF) ready for download.</span>
        <a
          href={personalDetails.resumePdfUrl}
          download="Shubh_Singh_Resume.pdf"
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-colors shadow-sm cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF</span>
        </a>
      </div>
    );
  }

  return (
    <div className="font-mono text-xs text-red-400">
      zsh: command not found: {command}. Type <button onClick={() => onRunCommand('help')} className="underline font-bold text-amber-400 cursor-pointer">help</button> to see available commands.
    </div>
  );
};
