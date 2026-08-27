import React, { useState, useEffect, useRef } from 'react';
import { TerminalHeader } from './TerminalHeader';
import { OutputRow } from './OutputRow';
import { MatrixRain } from './MatrixRain';
import { audioSynth } from '../Common/AudioEffects';
import type { ThemeMode, ViewMode, CommandHistoryItem } from '../../types';

interface TerminalProps {
  currentTheme: ThemeMode;
  viewMode: ViewMode;
  onToggleViewMode: () => void;
  onChangeTheme: (theme: ThemeMode) => void;
}

export const Terminal: React.FC<TerminalProps> = ({
  currentTheme,
  viewMode,
  onToggleViewMode,
  onChangeTheme,
}) => {
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistoryIndex, setCommandHistoryIndex] = useState<number>(-1);
  const [previousCmds, setPreviousCmds] = useState<string[]>([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoTyping, setIsAutoTyping] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of terminal content
  const scrollToBottom = () => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, inputVal]);

  // Execute a command inside the terminal
  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    audioSynth.playEnterSound();

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase() === 'matrix') {
      setMatrixActive((prev) => !prev);
      const newItem: CommandHistoryItem = {
        id: Date.now().toString(),
        command: trimmed,
        outputType: 'custom',
        content: <div className="text-xs font-mono text-emerald-400">Matrix Rain animation toggled!</div>,
        timestamp: new Date().toLocaleTimeString(),
      };
      setHistory((prev) => [...prev, newItem]);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase().startsWith('theme')) {
      const parts = trimmed.split(' ');
      if (parts[1]) {
        const selected = parts[1].toLowerCase() as ThemeMode;
        if (['retro', 'matrix', 'dracula', 'cyberpunk', 'monokai'].includes(selected)) {
          onChangeTheme(selected);
          const newItem: CommandHistoryItem = {
            id: Date.now().toString(),
            command: trimmed,
            outputType: 'custom',
            content: <div className="text-xs font-mono text-cyan-300">Theme updated to: {selected.toUpperCase()}</div>,
            timestamp: new Date().toLocaleTimeString(),
          };
          setHistory((prev) => [...prev, newItem]);
          setInputVal('');
          return;
        }
      }
    }

    if (trimmed.toLowerCase() === 'gui') {
      onToggleViewMode();
      return;
    }

    const newItem: CommandHistoryItem = {
      id: Date.now().toString(),
      command: trimmed,
      outputType: 'custom',
      content: <OutputRow command={trimmed} onRunCommand={executeCommand} />,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [...prev, newItem]);
    setPreviousCmds((prev) => [trimmed, ...prev]);
    setCommandHistoryIndex(-1);
    setInputVal('');
  };

  // Auto-typing initial intro tour
  useEffect(() => {
    let isCancelled = false;

    const runAutoTour = async () => {
      const tourCmds = ['about', 'skills', 'projects'];
      
      // Welcome banner first
      setHistory([
        {
          id: 'welcome',
          command: 'system-init',
          outputType: 'system',
          content: (
            <div className="space-y-2 font-mono text-xs text-cyan-300 border-b border-cyan-500/20 pb-3">
              <div className="text-amber-400 font-bold text-sm">
                WELCOME TO SHUBH SINGH'S INTERACTIVE DEVELOPER TERMINAL [v2.5.0]
              </div>
              <div>Frontend Developer | React, Next.js, Redux, Vue.js, GenAI & Agentic Systems</div>
              <div className="text-gray-400">
                Type <span className="text-amber-400 font-bold">'help'</span> to view commands or click <span className="text-cyan-400 font-bold">'GUI View'</span> for the visual dashboard.
              </div>
            </div>
          ),
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);

      await new Promise((res) => setTimeout(res, 600));

      for (const cmd of tourCmds) {
        if (isCancelled) break;
        executeCommand(cmd);
        await new Promise((res) => setTimeout(res, 800));
      }

      setIsAutoTyping(false);
    };

    runAutoTour();

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    audioSynth.playKeyClick();

    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (previousCmds.length > 0) {
        const nextIndex = Math.min(commandHistoryIndex + 1, previousCmds.length - 1);
        setCommandHistoryIndex(nextIndex);
        setInputVal(previousCmds[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistoryIndex > 0) {
        const prevIndex = commandHistoryIndex - 1;
        setCommandHistoryIndex(prevIndex);
        setInputVal(previousCmds[prevIndex] || '');
      } else if (commandHistoryIndex === 0) {
        setCommandHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const suggestions = ['help', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'theme', 'matrix', 'gui', 'download', 'clear'];
      const match = suggestions.find((s) => s.startsWith(inputVal.trim()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const toggleSound = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="relative min-h-[85vh] w-full max-w-5xl mx-auto flex flex-col my-4 px-2 sm:px-4">
      {matrixActive && <MatrixRain opacity={0.25} />}

      <div className="relative z-10 flex-1 flex flex-col bg-[#0b0f17]/95 rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden backdrop-blur-xl">
        <TerminalHeader
          currentTheme={currentTheme}
          viewMode={viewMode}
          isMuted={isMuted}
          matrixActive={matrixActive}
          onToggleViewMode={onToggleViewMode}
          onToggleSound={toggleSound}
          onToggleMatrix={() => setMatrixActive(!matrixActive)}
          onRunQuickCommand={executeCommand}
        />

        {/* Main Terminal Output Stream */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm max-h-[70vh] min-h-[450px] scrollbar-thin scrollbar-thumb-cyan-500/30"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5 animate-fadeIn">
              {item.outputType !== 'system' && (
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-emerald-400 font-bold">shubh@dev-terminal</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-amber-400 font-bold">$ {item.command}</span>
                </div>
              )}
              <div className="pl-0 sm:pl-2">{item.content}</div>
            </div>
          ))}

          {/* Interactive Command Prompt Line */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm pt-2">
            <span className="text-emerald-400 font-bold shrink-0">shubh@dev-terminal</span>
            <span className="text-gray-500 shrink-0">:</span>
            <span className="text-cyan-400 font-bold shrink-0">~</span>
            <span className="text-amber-400 font-bold shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isAutoTyping}
              placeholder={isAutoTyping ? 'Initializing terminal walkthrough...' : 'Type command (e.g. help, skills, projects, gui)...'}
              className="flex-1 bg-transparent border-none outline-none text-cyan-200 font-mono text-xs sm:text-sm focus:ring-0 placeholder:text-gray-600"
              autoFocus
            />
          </div>

          <div ref={terminalBottomRef} />
        </div>
      </div>
    </div>
  );
};
