import React from 'react';
import { Mail, Github, Instagram, Music2, Globe } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Mail, href: 'Mailto:tiothedreamver@gmail.com', label: 'Email' },
  { icon: Globe, href: 'https://behance.net/usernameanda', label: 'Behance' },
  { icon: Github, href: 'https://github.com/usernameanda', label: 'Github' },
  { icon: Instagram, href: 'https://instagram.com/usernameanda', label: 'Instagram' },
  { icon: Music2, href: 'https://tiktok.com/@usernameanda', label: 'TikTok' },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-lg font-bold tracking-tight">Adytio<span className="text-indigo-400">.</span></div>
            <p className="text-sm text-gray-400 mt-3 max-w-xs leading-relaxed">
              Graphic Designer & UI/UX Designer crafting impactful visual and digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Connect</h4>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center hover:border-indigo-500 hover:bg-indigo-600/10 transition-all"
                  aria-label={s.label}>
                  <s.icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Sofia Moreno. All rights reserved.</p>
          <p className="text-xs text-gray-700">Designed with precision & purpose</p>
        </div>
      </div>
    </footer>
  );
}