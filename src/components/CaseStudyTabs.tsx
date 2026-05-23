import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  overview: string[];
  role: string[];
  images?: {
    label: string;
    imageUrl?: string;
  }[];
  password?: string;
  lockedHeading?: string;
}
interface CaseStudyTabsProps {
  studies: CaseStudy[];
  activeId: string;
  onChange: (id: string) => void;
}
export function CaseStudyTabs({
  studies,
  activeId,
  onChange
}: CaseStudyTabsProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl mb-4 text-ink font-semibold">Case Studies</h2>

      {/* Mobile: dropdown (below md) */}
      <div className="md:hidden">
        <CaseStudyDropdown
          studies={studies}
          activeId={activeId}
          onChange={onChange} />
        
      </div>

      {/* Desktop: horizontal tabs (md and up).
             items-stretch + h-full on the card makes every tab match the
             height of the tallest title, so longer titles never get clipped. */}
      <div role="tablist" className="hidden md:flex pb-4 gap-3 items-stretch">
        {studies.map((study) => {
          const isActive = activeId === study.id;
          return (
            <button
              key={study.id}
              onClick={() => onChange(study.id)}
              role="tab"
              aria-selected={isActive}
              className="relative flex-1 min-w-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-white group flex">
              
              {isActive &&
              <motion.div
                layoutId="active-tab-shadow"
                className="absolute top-2 left-2 w-full h-full bg-ink z-0"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.5
                }} />

              }

              <div
                className={`relative z-10 border-[2.5px] border-ink bg-white px-4 py-3 min-h-[90px] w-full flex flex-col justify-between gap-3 transition-colors duration-200 ${isActive ? '' : 'group-hover:bg-ink/5'}`}>
                
                <div className="font-medium tracking-wide uppercase text-ink/60 text-[10px]">
                  {study.category}
                </div>
                <div className="text-base lg:text-lg leading-tight text-ink font-bold break-words">
                  {study.title}
                </div>
              </div>
            </button>);

        })}
      </div>
    </div>);

}
/* ---------- Mobile dropdown ---------- */
interface DropdownProps {
  studies: CaseStudy[];
  activeId: string;
  onChange: (id: string) => void;
}
function CaseStudyDropdown({ studies, activeId, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = studies.find((s) => s.id === activeId) || studies[0];
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);
  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full text-left border-[2.5px] border-ink bg-white px-3 py-2 flex items-center justify-between gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
        
        <div className="min-w-0">
          <div className="text-[10px] font-medium tracking-wide uppercase text-ink/60 truncate">
            {active.category}
          </div>
          <div className="text-ink truncate text-base font-bold">
            {active.title}
          </div>
        </div>
        <motion.div
          animate={{
            rotate: open ? 180 : 0
          }}
          transition={{
            duration: 0.2
          }}>
          
          <ChevronDownIcon className="w-4 h-4 shrink-0" strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open &&
        <motion.ul
          role="listbox"
          initial={{
            opacity: 0,
            y: -8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -8
          }}
          transition={{
            duration: 0.15
          }}
          className="absolute z-30 mt-2 left-0 right-0 border-[2.5px] border-ink bg-white shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
          
            {studies.map((s, idx) => {
            const isActive = s.id === activeId;
            return (
              <li key={s.id} role="option" aria-selected={isActive}>
                  <button
                  type="button"
                  onClick={() => {
                    onChange(s.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 ${idx !== studies.length - 1 ? 'border-b-2 border-ink/15' : ''} ${isActive ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-ink/5'}`}>
                  
                    <div
                    className={`text-[10px] font-medium tracking-wide uppercase ${isActive ? 'text-white/70' : 'text-ink/60'}`}>
                    
                      {s.category}
                    </div>
                    <div className="text-base leading-tight font-bold">
                      {s.title}
                    </div>
                  </button>
                </li>);

          })}
          </motion.ul>
        }
      </AnimatePresence>
    </div>);

}