import React from 'react';
export function PortfolioLogo() {
  return <div className="select-none">
      {/* Mobile: small 'A' badge */}
      <div className="md:hidden inline-flex items-center justify-center w-14 h-14 border-[3px] border-ink bg-cream font-display text-3xl leading-none">
        <span className="-mt-1">A</span>
      </div>

      {/* Desktop: vertical 'ADRIENNE' wordmark, modest size */}
      <div className="hidden md:flex flex-col items-center w-14 border-[3px] border-ink py-3 px-1 font-display uppercase">
        <div className="flex flex-col items-center leading-[0.85] text-[1.75rem] tracking-tight">
          {['A', 'D', 'R', 'I', 'E', 'N', 'N', 'E'].map((ch, i) => <span key={i} className="block">
              {ch}
            </span>)}
        </div>
        {/* hand-drawn-style divider */}
        <svg className="mt-3 w-8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M1 4 Q 8 1, 16 4 T 31 4" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <div className="mt-2 font-mono text-[8px] tracking-[0.25em] text-ink/70">
          TILLEY
        </div>
      </div>
    </div>;
}