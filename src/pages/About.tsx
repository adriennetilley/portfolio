import React from 'react';
import { MailIcon, LinkedinIcon, GlobeIcon } from 'lucide-react';
import { PortfolioLogo } from '../components/PortfolioLogo';
import { ABOUT, ContactLinkType } from '../data/about';
const ICON_FOR_TYPE: Record<ContactLinkType, React.ReactNode> = {
  email: <MailIcon className="w-3.5 h-3.5" strokeWidth={2.5} />,
  website: <GlobeIcon className="w-3.5 h-3.5" strokeWidth={2.5} />,
  linkedin: <LinkedinIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
};
export function About() {
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
              About + Contact
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-4 text-xs leading-relaxed text-ink max-w-2xl">
              {ABOUT.bio.map((paragraph, i) =>
              <p key={i}>{paragraph}</p>
              )}
            </div>

            {/* Contact */}
            <aside>
              <div className="relative">
                <div
                  className="absolute inset-0 bg-ink translate-x-[8px] translate-y-[8px]"
                  aria-hidden="true" />
                
                <div className="relative border-[2.5px] border-ink bg-ink text-white p-5">
                  <h2 className="text-lg font-bold mb-2">Get in touch</h2>
                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    {ABOUT.contactBlurb}
                  </p>
                  <ul className="space-y-2">
                    {ABOUT.contactLinks.map((link) =>
                    <ContactLink
                      key={link.label}
                      icon={ICON_FOR_TYPE[link.type]}
                      label={link.label}
                      href={link.href} />

                    )}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Skills grid */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What I do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ABOUT.skills.map((skill) =>
              <div
                key={skill}
                className="border-[2.5px] border-ink bg-white px-3 py-2 text-xs font-bold text-ink">
                
                  {skill}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>);

}
function ContactLink({
  icon,
  label,
  href




}: {icon: React.ReactNode;label: string;href: string;}) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-2.5 text-white hover:text-white/70 transition-colors"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        
        <span className="w-6 h-6 border-2 border-white/70 flex items-center justify-center group-hover:border-white">
          {icon}
        </span>
        <span className="text-xs font-medium">{label}</span>
      </a>
    </li>);

}