/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ language }: { language: 'zh' | 'en' }) {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 10) + 2;
      if (count >= 100) {
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 800);
      } else {
        setPercent(count);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-dark-bg z-[10000] flex flex-col justify-between p-8 md:p-16"
        >
          <div className="flex justify-between items-center">
            <span className="font-display font-bold text-lg tracking-wider text-zinc-100">QI.DESIGN</span>
            <span className="text-xs text-zinc-500 tracking-widest uppercase">Portfolio 2026 v3.0</span>
          </div>

          <div className="my-auto">
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-7xl font-display font-extrabold uppercase leading-tight text-zinc-100"
              >
                {language === 'zh' ? '欢迎来到张琦的个人作品网站' : "WELCOME TO ZHANG QI'S PORTFOLIO"}
              </motion.h1>
            </div>
            <div className="h-[1px] w-full bg-zinc-800 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                className="absolute top-0 left-0 h-full bg-accent"
              />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-sm text-zinc-500">
              {language === 'zh' ? '张琦 个人设计美学架构' : 'Designed by Zhang Qi'}
            </span>
            <div className="font-display text-4xl md:text-6xl font-bold text-accent">
              {percent}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
