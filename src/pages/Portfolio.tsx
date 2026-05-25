import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PortfolioLogo } from '../components/PortfolioLogo';
import { CaseStudyTabs } from '../components/CaseStudyTabs';
import { CaseStudyDetail } from '../components/CaseStudyDetail';
import { CASE_STUDIES } from '../data/caseStudies';
export function Portfolio() {
  const [activeTabId, setActiveTabId] = useState<string>('patient-health');
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
  const activeStudy =
  CASE_STUDIES.find((s) => s.id === activeTabId) || CASE_STUDIES[1];
  const handleUnlock = (id: string) => {
    setUnlocked((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };
  return (
    <div className="min-h-screen bg-white text-ink selection:bg-ink selection:text-white pb-16">
      <div className="max-w-6xl mx-auto pl-6 pr-6 md:pl-2.5 md:pr-12 py-10 md:py-14 flex flex-col md:flex-row gap-0 md:gap-2.5 bg-white">
        {/* Left Column: decorative mark — hidden on mobile, sticky on desktop */}
        <aside className="hidden md:block flex-shrink-0 md:sticky md:top-2.5 md:self-start">
          <PortfolioLogo />
        </aside>

        {/* Right Column: Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <header className="mb-10 md:mb-14 pr-16">
            <p className="text-[11px] tracking-wide uppercase mb-3 text-ink/70 font-medium">
              Adrienne Tilley — Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl text-ink font-bold">
              UX, Product Design & Illustration
            </h1>
          </header>

          {/* Tabs */}
          <CaseStudyTabs
            studies={CASE_STUDIES}
            activeId={activeTabId}
            onChange={setActiveTabId} />
          

          {/* Content Area with Animation */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <CaseStudyDetail
                key={activeStudy.id}
                study={activeStudy}
                isUnlocked={unlocked.has(activeStudy.id)}
                onUnlock={handleUnlock} />
              
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>);

}