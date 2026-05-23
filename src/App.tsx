import React, { useState } from 'react';
import { Portfolio } from './pages/Portfolio';
import { Illustrations } from './pages/Illustrations';
import { About } from './pages/About';
import { NavMenu, PageId } from './components/NavMenu';
import { ScrollToTop } from './components/ScrollToTop';
export function App() {
  const [page, setPage] = useState<PageId>('work');
  return <div className="relative">
      <NavMenu current={page} onNavigate={setPage} />

      {page === 'work' && <Portfolio />}
      {page === 'illustrations' && <Illustrations />}
      {page === 'about' && <About />}

      <ScrollToTop />

      {/* Full-viewport ink frame */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 border-[3px] border-ink z-30" />
    </div>;
}