import React, { useState } from 'react';
import { Terminal, Monitor, Download, Palette, Volume2, VolumeX, Menu, X } from 'lucide-react';
import type { ViewMode, ThemeMode } from '../../types';
import { themes, personalDetails } from '../../data/resumeData';
import { audioSynth } from '../Common/AudioEffects';

interface NavbarProps {
  viewMode: ViewMode;
  currentTheme: ThemeMode;
  onToggleViewMode: () => void;
  onChangeTheme: (theme: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  currentTheme,
  onToggleViewMode,
  onChangeTheme,
}) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0b0f17]/80 border-b border-cyan-500/20 shadow-lg shadow-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand logo & status */}
        <a href="#" className="flex items-center space-x-2 text-cyan-400 font-mono font-bold text-lg hover:text-cyan-300 transition-colors">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <span>Shubh<span className="text-amber-400">.dev</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Toggles */}
        <div className="flex items-center space-x-3">
          {/* CLI / GUI View Toggle */}
          <button
            onClick={onToggleViewMode}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition-all shadow-sm shadow-cyan-500/20 cursor-pointer"
          >
            {viewMode === 'cli' ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span>GUI Mode</span>
              </>
            ) : (
              <>
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI Mode</span>
              </>
            )}
          </button>

          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              title="Change Theme"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors cursor-pointer"
            >
              <Palette className="w-4 h-4 text-amber-400" />
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#121824] border border-cyan-500/30 rounded-xl shadow-xl py-1 z-50 font-mono text-xs">
                <div className="px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider border-b border-white/10 font-bold">
                  Select Palette
                </div>
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onChangeTheme(t.id);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-cyan-500/20 flex items-center justify-between transition-colors ${
                      currentTheme === t.id ? 'text-cyan-400 font-bold bg-cyan-500/10' : 'text-gray-300'
                    }`}
                  >
                    <span>{t.name}</span>
                    {currentTheme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mute/Unmute audio button */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors hidden sm:block cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Resume Download CTA */}
          <a
            href={personalDetails.resumePdfUrl}
            download="Shubh_Singh_Resume.pdf"
            className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f17] border-b border-cyan-500/20 px-4 py-3 space-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href={personalDetails.resumePdfUrl}
              download="Shubh_Singh_Resume.pdf"
              className="flex items-center justify-center space-x-2 w-full py-2 bg-amber-500 text-black font-bold rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
