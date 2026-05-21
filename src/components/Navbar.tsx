/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  language: 'zh' | 'en';
  setLanguage: (lang: 'zh' | 'en') => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function Navbar({ language, setLanguage, onHoverStart, onHoverEnd }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', zh: '精选项目', en: 'Work' },
    { href: '#about-me', zh: '关于我', en: 'About Me' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-16 ${
          isScrolled ? 'bg-dark-bg/85 backdrop-blur-md py-4 border-b border-zinc-900' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="font-display font-extrabold text-xl tracking-wider select-none"
          >
            QI ZHANG<span className="text-accent">.</span>
          </a>

          <div className="flex items-center space-x-8 md:space-x-12">
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest"
                >
                  {language === 'zh' ? link.zh : link.en}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-800 text-[10px] font-bold tracking-widest bg-zinc-900/50 hover:border-accent hover:text-accent transition-all duration-300"
              >
                {language === 'zh' ? 'EN' : '中文'}
              </button>

              <button
                className="md:hidden text-zinc-100 hover:text-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-zinc-300 hover:text-accent transition-colors"
              >
                {language === 'zh' ? link.zh.toUpperCase() : link.en.toUpperCase()}
              </a>
            ))}

            <button
              onClick={() => {
                setLanguage(language === 'zh' ? 'en' : 'zh');
                setIsMobileMenuOpen(false);
              }}
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-zinc-800 text-xs font-bold tracking-widest bg-zinc-900/80 hover:border-accent hover:text-accent transition-all"
            >
              <Globe size={16} className="mr-2" />
              {language === 'zh' ? 'SWITCH TO ENGLISH (EN)' : '切换至中文界面 (CN)'}
            </button>

            <div className="pt-8 flex flex-col items-center space-y-2 text-sm text-zinc-500">
                <span>13971310172</span>
                <span>935486376@qq.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
