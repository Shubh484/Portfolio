import { useState } from 'react';
import { Navbar } from './components/Dashboard/Navbar';
import { Terminal } from './components/Terminal/Terminal';
import { HeroSection } from './components/Dashboard/HeroSection';
import { ExperienceTimeline } from './components/Dashboard/ExperienceTimeline';
import { ProjectsSection } from './components/Dashboard/ProjectsSection';
import { SkillsGrid } from './components/Dashboard/SkillsGrid';
import { EducationSection } from './components/Dashboard/EducationSection';
import { ContactSection } from './components/Dashboard/ContactSection';
import type { ViewMode, ThemeMode } from './types';
import { themes, personalDetails } from './data/resumeData';
import { Terminal as TerminalIcon } from 'lucide-react';

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('cli');
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('retro');

  const themeConfig = themes[currentTheme];

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'cli' ? 'gui' : 'cli'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${themeConfig.bgClass}`}>
      {/* Global Navbar */}
      <Navbar
        viewMode={viewMode}
        currentTheme={currentTheme}
        onToggleViewMode={handleToggleViewMode}
        onChangeTheme={setCurrentTheme}
      />

      {/* Main View Container */}
      <main className="relative">
        {viewMode === 'cli' ? (
          <div className="py-6 animate-fadeIn">
            <Terminal
              currentTheme={currentTheme}
              viewMode={viewMode}
              onToggleViewMode={handleToggleViewMode}
              onChangeTheme={setCurrentTheme}
            />
          </div>
        ) : (
          <div className="space-y-12 animate-fadeIn pb-16">
            <HeroSection onToggleCLI={() => setViewMode('cli')} />
            <ExperienceTimeline />
            <ProjectsSection />
            <SkillsGrid />
            <EducationSection />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-[#070a10]/90 font-mono text-xs text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode(viewMode === 'cli' ? 'gui' : 'cli')}
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Switch to {viewMode === 'cli' ? 'GUI' : 'CLI'}</span>
            </button>
            <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
