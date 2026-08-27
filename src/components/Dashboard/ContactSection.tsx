import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from '../Common/Icons';
import { personalDetails } from '../../data/resumeData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
          <Mail className="w-4 h-4 text-amber-400" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Let's Build Something Exceptional</h2>
        <p className="text-gray-400 text-sm max-w-xl">
          Interested in discussing a frontend engineering role, GenAI agent integration, or trading platform architecture? Get in touch!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          {/* Email card */}
          <div className="p-5 bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl backdrop-blur-xl flex items-center justify-between transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email Address</div>
                <a href={`mailto:${personalDetails.email}`} className="text-white font-bold text-sm hover:text-cyan-300 transition-colors">
                  {personalDetails.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalDetails.email, 'email')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono flex items-center space-x-1 transition-colors cursor-pointer"
            >
              {copiedField === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone card */}
          <div className="p-5 bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl backdrop-blur-xl flex items-center justify-between transition-all">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Phone / WhatsApp</div>
                <a href={`tel:${personalDetails.phone}`} className="text-white font-bold text-sm hover:text-cyan-300 transition-colors">
                  {personalDetails.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalDetails.phone, 'phone')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono flex items-center space-x-1 transition-colors cursor-pointer"
            >
              {copiedField === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl backdrop-blur-xl flex items-center space-x-3 transition-all hover:scale-102"
            >
              <GithubIcon className="w-5 h-5 text-gray-300" />
              <div className="font-mono text-xs">
                <div className="font-bold text-white">GitHub</div>
                <div className="text-gray-400 text-[10px]">@Shubh484</div>
              </div>
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#111622]/90 border border-white/10 hover:border-cyan-500/40 rounded-2xl backdrop-blur-xl flex items-center space-x-3 transition-all hover:scale-102"
            >
              <LinkedinIcon className="w-5 h-5 text-cyan-400" />
              <div className="font-mono text-xs">
                <div className="font-bold text-white">LinkedIn</div>
                <div className="text-gray-400 text-[10px]">Shubh Singh</div>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSubmitMessage} className="bg-[#111622]/90 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-xl">
          <div className="font-mono text-sm font-bold text-white border-b border-white/10 pb-3 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Send Direct Message</span>
          </div>

          {submitted ? (
            <div className="p-6 text-center space-y-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-mono text-xs animate-fadeIn">
              <div className="text-sm font-bold">Message Transmitted Successfully!</div>
              <p className="text-gray-300">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="space-y-1 font-mono text-xs">
                <label className="text-gray-400">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1 font-mono text-xs">
                <label className="text-gray-400">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1 font-mono text-xs">
                <label className="text-gray-400">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold text-xs font-mono transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
