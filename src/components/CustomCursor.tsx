/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor({ isHovering }: { isHovering: boolean | string }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Main Dot */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
        }}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer Ring */}
      <motion.div
        animate={{
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          backgroundColor: typeof isHovering === 'string' ? '#ccff00' : 'rgba(204, 255, 0, 0.05)',
          borderColor: isHovering ? '#ccff00' : 'rgba(204, 255, 0, 0.3)',
        }}
        style={{
          left: springX,
          top: springY,
        }}
        className="fixed border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        {typeof isHovering === 'string' && (
          <span className="text-[10px] font-bold text-black uppercase tracking-tight">
            {isHovering}
          </span>
        )}
      </motion.div>
    </div>
  );
}
