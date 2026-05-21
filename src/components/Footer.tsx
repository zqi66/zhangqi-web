/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  language: 'zh' | 'en';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-dark-bg px-6 md:px-16 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4">
          <span className="font-display font-black text-white text-lg tracking-wider">ZHANG QI</span>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 items-center text-zinc-400 font-mono text-[11px]">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-accent" /> 13971310172
          </span>
          <span className="flex items-center gap-2">
            <Mail size={12} className="text-accent" /> 935486376@qq.com
          </span>
        </div>
      </div>
    </footer>
  );
}
