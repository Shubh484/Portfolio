import React from 'react';
import { Terminal as TerminalIcon, Monitor, Sparkles, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import type { ThemeMode, ViewMode } from '../../types';

interface TerminalHeaderProps {
  currentTheme: ThemeMode;
  viewMode: ViewMode;
  isMuted: boolean;
  matrixActive: boolean;
  onToggleViewMode: () => void;
  onToggleSound: () => void;
  onToggleMatrix: () => void;
  onRunQuickCommand: (cmd: string) => void;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  currentTheme,
  viewMode,
  isMuted,
  matrixActive,
  onToggleViewMode,
  onToggleSound,
  onToggleMatrix,
  onRunQuickCommand,
}) => {
  const quickCommands = [
    { label: 'help', cmd: 'help' },
    { label: 'about', cmd: 'about' },
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'experience', cmd: 'experience' },
    { label: 'contact', cmd: 'contact' },
    { label: 'gui', cmd: 'gui' },
  ];

  return (
    <div className="bg-[#12161f]/95 border-b border-white/10 px-4 py-3 rounded-t-xl flex flex-col md:flex-row md:items-center justify-between gap-3 select-none backdrop-blur-md">
      {/* Left: Window controls & Terminal Title */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors shadow-sm shadow-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors shadow-sm shadow-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors shadow-sm shadow-emerald-500/50" />
        </div>

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

        <div className="flex items-center space-x-2 text-xs font-mono font-medium text-gray-300">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span>shubh@dev-terminal:~</span>
          <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <ShieldCheck className="w-2.5 h-2.5 mr-1" />
            zsh 5.9 [{currentTheme}]
          </span>
        </div>
      </div>

      {/* Center: Quick Command Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto py-1 no-scrollbar text-xs font-mono">
        <span className="text-[10px] uppercase tracking-wider text-gray-500 hidden lg:inline mr-1">Quick:</span>
        {quickCommands.map((item) => (
          <button
            key={item.cmd}
            onClick={() => onRunQuickCommand(item.cmd)}
            className="px-2 py-0.5 rounded text-[11px] bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            ${item.label}
          </button>
        ))}
      </div>

      {/* Right: Controls & Toggles */}
      <div className="flex items-center space-x-2 text-xs font-mono">
        <button
          onClick={onToggleMatrix}
          title="Toggle Matrix Rain Effect"
          className={`p-1.5 rounded border transition-all ${
            matrixActive
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-sm shadow-emerald-500/30'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onToggleSound}
          title={isMuted ? 'Unmute Typing Audio' : 'Mute Typing Audio'}
          className={`p-1.5 rounded border transition-all ${
            !isMuted
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200'
          }`}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={onToggleViewMode}
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 transition-all font-semibold shadow-sm shadow-cyan-500/20 cursor-pointer"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>{viewMode === 'cli' ? 'GUI View' : 'CLI View'}</span>
        </button>
      </div>
    </div>
  );
};
