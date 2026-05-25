import React from 'react';
const WORDMARK_URL = "/port-background.png";

export function PortfolioLogo() {
  // Hidden on mobile, visible from md+
  return (
    <div className="hidden md:block select-none opacity-[0.35] w-40 lg:w-48 xl:w-56">
      <img src={WORDMARK_URL} alt="" className="w-full h-auto block" />
    </div>);

}