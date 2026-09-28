import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../../data/resumeData';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Education</h2>
      </div>

      <div className="bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all shadow-lg hover:shadow-cyan-500/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white leading-tight">{education.degree}</h3>
            <p className="text-amber-400 font-semibold text-sm">{education.institution}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {education.cgpa && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA: {education.cgpa}</span>
              </span>
            )}
            <div className="flex items-center space-x-1.5 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
              <Calendar className="w-3.5 h-3.5" />
              <span>{education.period}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm pt-2">
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
