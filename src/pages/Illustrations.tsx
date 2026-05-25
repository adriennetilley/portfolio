import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { PortfolioLogo } from '../components/PortfolioLogo';
import { ILLUSTRATIONS } from '../data/illustrations';
export function Illustrations() {
  return (
    <div className="min-h-screen bg-white text-ink pb-16">
      <div className="max-w-6xl mx-auto pl-6 pr-6 md:pl-2.5 md:pr-12 py-10 md:py-14 flex flex-col md:flex-row gap-0 md:gap-2.5">
        <aside className="hidden md:block flex-shrink-0 md:sticky md:top-2.5 md:self-start">
          <PortfolioLogo />
        </aside>

        <main className="flex-1 min-w-0">
          <header className="mb-10 md:mb-14">
            <p className="text-[11px] tracking-wide uppercase mb-3 text-ink/70 font-medium">
              Adrienne Tilley — Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl text-ink font-bold">
              Illustrations
            </h1>
            <p className="mt-4 text-xs max-w-xl text-ink/80 leading-relaxed">
              A selection of digital art created in Procreate and vector
              illustration created in Adobe Illustrator — including editorial
              work, podcast artwork, branding, and label design.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ILLUSTRATIONS.map((piece, i) =>
            <motion.figure
              key={piece.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.04
              }}
              className="relative group">
              
                {/* Offset shadow */}
                <div
                className="absolute inset-0 bg-ink translate-x-[6px] translate-y-[6px] transition-transform duration-200 group-hover:translate-x-[10px] group-hover:translate-y-[10px]"
                aria-hidden="true" />
              
                {/* Card */}
                <div className="relative border-[2.5px] border-ink bg-white">
                  {piece.imageUrl ?
                <div
                  className={`${piece.aspect} overflow-hidden border-b-[2.5px] border-ink bg-white`}>
                  
                      <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-full object-cover"
                    loading="lazy" />
                  
                    </div> :

                <div
                  className={`${piece.bg ?? 'bg-ink'} ${piece.aspect} flex items-center justify-center text-white font-bold text-2xl tracking-wide border-b-[2.5px] border-ink overflow-hidden`}>
                  
                      <span className="opacity-95 px-4 text-center">
                        {piece.glyph}
                      </span>
                    </div>
                }

                  <figcaption className="p-3">
                    <div className="text-sm font-bold text-ink leading-tight">
                      {piece.title}
                    </div>
                    <div className="text-[11px] text-ink/60 mt-0.5">
                      {piece.caption}
                    </div>
                  </figcaption>
                </div>
              </motion.figure>
            )}
          </div>
        </main>
      </div>
    </div>);

}