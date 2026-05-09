import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Tambahkan ini

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-semibold text-base tracking-tight text-gray-900">
          Adytio<span className="text-indigo-600">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium">
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')}
            className="text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300">
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-1 text-gray-700 focus:outline-none">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 px-6 pb-6 pt-2 space-y-3 overflow-hidden shadow-lg"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button 
                key={link.href} 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 font-medium"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollTo('#contact')}
              className="text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-full w-full mt-2 block text-center"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}