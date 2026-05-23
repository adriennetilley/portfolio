import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300);
    };
    handler();
    window.addEventListener('scroll', handler, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <AnimatePresence>
      {visible && <motion.button key="scroll-top" type="button" onClick={handleClick} aria-label="Scroll to top" initial={{
      opacity: 0,
      y: 12
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 12
    }} transition={{
      duration: 0.2
    }} className="hidden md:flex fixed bottom-6 md:bottom-8 left-6 md:left-8 z-40 w-12 h-12 border-[2.5px] border-ink bg-white items-center justify-center hover:bg-ink hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
          <ArrowUpIcon className="w-6 h-6" strokeWidth={2.5} />
        </motion.button>}
    </AnimatePresence>;
}