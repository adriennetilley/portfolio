/**
 * About + Contact Page Content
 * -----------------------------
 * Edit copy, contact links, and skills here.
 *
 *  bio:           array of paragraphs (each string = one <p>)
 *  contactBlurb:  short paragraph shown inside the dark contact card
 *  contactLinks:  one object per link. `type` controls which icon is used:
 *                   'email'    → mail icon
 *                   'website'  → globe icon
 *                   'linkedin' → linkedin icon
 *  skills:        list of strings, each becomes a bordered chip
 */

export type ContactLinkType = 'email' | 'website' | 'linkedin';

export interface AboutContactLink {
  label: string;
  href: string;
  type: ContactLinkType;
}

export interface AboutContent {
  bio: string[];
  contactBlurb: string;
  contactLinks: AboutContactLink[];
  skills: string[];
}

export const ABOUT: AboutContent = {
  bio: [
  "I'm Adrienne Tilley — a senior UX & product designer and illustrator. I've spent the last decade designing software for startups in healthcare, education, sports, and web3, with a focus on turning complex, messy problems into interfaces that feel obvious to use.",
  'My background spans the full design surface: research, wireframes, prototyping, design systems, and the polished final mockups that ship. I tend to embed deeply with engineering teams — partnering closely with developers and product managers to make sure what we design actually gets built well.',
  "Outside of product work, I draw. Most of my illustration work lives at the intersection of editorial, branding, and hand-drawn personal projects — done in Procreate and Adobe Illustrator. It's where I keep my eye sharp and play with ideas that don't fit in a sprint."],

  contactBlurb:
  'Open to selective UX, product design, and illustration work. The fastest way to reach me is email.',
  contactLinks: [
  {
    label: 'hello@adrienne.fyi',
    href: 'mailto:hello@adrienne.fyi',
    type: 'email'
  },
  { label: 'adrienne.fyi', href: 'https://adrienne.fyi', type: 'website' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', type: 'linkedin' }],

  skills: [
  'UX Research',
  'Product Design',
  'Design Systems',
  'Wireframing & Prototyping',
  'Vector Illustration',
  'Procreate / Digital Art',
  'Branding & Identity',
  'Editorial Illustration',
  'Motion (light)']

};