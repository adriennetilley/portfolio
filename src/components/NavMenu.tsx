import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export type PageId = 'work' | 'illustrations' | 'about';
interface NavMenuProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}
const ITEMS: {
  id: PageId;
  label: string;
  description: string;
}[] = [
{
  id: 'work',
  label: 'UX Case Studies',
  description: 'Product & UX work'
},
{
  id: 'illustrations',
  label: 'Illustrations',
  description: 'Drawings, branding, and visuals'
},
{
  id: 'about',
  label: 'About + Contact',
  description: 'Who I am, where to find me'
}];

export function NavMenu({ current, onNavigate }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-40 w-12 h-12 border-[2.5px] border-ink bg-white flex items-center justify-center hover:bg-ink hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
        
        <MenuIcon className="w-5 h-5" strokeWidth={2.5} />
      </button>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            key="backdrop"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.2
            }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-ink/40 z-40" />
          

            <motion.div
            key="panel"
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              bounce: 0.15,
              duration: 0.5
            }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:max-w-sm bg-white border-l-[2.5px] border-ink flex flex-col"
            role="dialog"
            aria-modal="true">
            
              <div className="flex items-center justify-between p-4 border-b-[2.5px] border-ink">
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-ink/60">
                  Menu
                </p>
                <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 border-[2.5px] border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                
                  <XIcon className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto">
                <ul>
                  {ITEMS.map((item, idx) => {
                  const isCurrent = item.id === current;
                  return (
                    <li
                      key={item.id}
                      className={
                      idx !== ITEMS.length - 1 ?
                      'border-b-[2.5px] border-ink' :
                      ''
                      }>
                      
                        <button
                        type="button"
                        onClick={() => {
                          onNavigate(item.id);
                          setOpen(false);
                        }}
                        className={`w-full text-left p-4 transition-colors flex items-center justify-between gap-3 ${isCurrent ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-ink/5'}`}>
                        
                          <div>
                            <div className="text-lg md:text-xl font-bold leading-tight">
                              {item.label}
                            </div>
                            <div
                            className={`text-xs mt-0.5 ${isCurrent ? 'text-white/70' : 'text-ink/60'}`}>
                            
                              {item.description}
                            </div>
                          </div>
                          {isCurrent &&
                        <span
                          className={`text-[10px] tracking-[0.2em] uppercase font-bold shrink-0 ${isCurrent ? 'text-white/80' : 'text-ink/60'}`}>
                          
                              Current
                            </span>
                        }
                        </button>
                      </li>);

                })}
                </ul>
              </nav>

              <div className="p-4 border-t-[2.5px] border-ink text-[10px] tracking-[0.2em] uppercase text-ink/60 font-medium">
                Adrienne Tilley © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}