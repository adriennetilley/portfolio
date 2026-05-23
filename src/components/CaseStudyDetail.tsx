import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from './CaseStudyTabs';
import { PasswordGate } from './PasswordGate';
interface CaseStudyDetailProps {
  study: CaseStudy;
  isUnlocked: boolean;
  onUnlock: (id: string) => void;
}
export function CaseStudyDetail({
  study,
  isUnlocked,
  onUnlock
}: CaseStudyDetailProps) {
  const isLocked = Boolean(study.password) && !isUnlocked;
  const images = study.images ?? [
  {
    label: 'Image 1'
  },
  {
    label: 'Image 2'
  }];

  return (
    <motion.div
      key={study.id}
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -15
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
      className="mt-10 space-y-10">
      
      {isLocked ?
      <PasswordGate
        password={study.password as string}
        title={study.title}
        heading={study.lockedHeading}
        onUnlock={() => onUnlock(study.id)} /> :


      <>
          {/* Overview Section */}
          <section>
            <h3 className="text-2xl md:text-3xl mb-3 text-ink font-semibold">
              Overview
            </h3>
            <div className="text-xs leading-relaxed max-w-2xl text-ink">
              {study.overview[0] && <p className="mb-3">{study.overview[0]}</p>}
              {study.overview.length > 1 &&
            <ul className="space-y-2 mt-3">
                  {study.overview.slice(1).map((item, index) =>
              <li key={index} className="flex gap-2">
                      <span className="text-ink shrink-0 text-sm leading-none font-bold">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
              )}
                </ul>
            }
            </div>
          </section>

          {/* My Role Section */}
          <section>
            <h3 className="text-2xl md:text-3xl mb-3 text-ink font-semibold">
              My Role
            </h3>
            <div className="text-xs leading-relaxed max-w-2xl text-ink space-y-3">
              {study.role.map((paragraph, index) =>
            <p key={index}>{paragraph}</p>
            )}
            </div>
          </section>

          {/* Images — real screenshots if imageUrl is provided, otherwise dark placeholder */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {images.map((img, i) =>
          <figure key={i} className="relative">
                <div
              className="absolute inset-0 bg-ink translate-x-[8px] translate-y-[8px]"
              aria-hidden="true" />
            
                {img.imageUrl ?
            <div className="relative border-[2.5px] border-ink bg-white aspect-[4/3] overflow-hidden">
                    <img
                src={img.imageUrl}
                alt={img.label}
                className="w-full h-full object-cover"
                loading="lazy" />
              
                  </div> :

            <div className="relative bg-ink text-white border-[2.5px] border-ink aspect-[4/3] flex items-center justify-center text-[11px] uppercase tracking-wide font-medium px-4 text-center">
                    {img.label}
                  </div>
            }
              </figure>
          )}
          </section>
        </>
      }
    </motion.div>);

}