/**
 * Illustrations
 * --------------
 * Each entry renders as a card on the Illustrations page.
 *
 * Two ways to display an illustration:
 *   1. With a real image (preferred):
 *        imageUrl: 'https://...'
 *
 *   2. As a styled colored placeholder (fallback when imageUrl is empty):
 *        bg:      tailwind background class, e.g. 'bg-[#4A3A55]'
 *        glyph:   short text or emoji shown centered in the card
 *
 * Always required:
 *   title    - card title shown under the artwork
 *   caption  - small caption shown under the title
 *   aspect   - tailwind aspect-ratio class, e.g. 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]'
 */

export interface Illustration {
  title: string;
  caption: string;
  /** Tailwind aspect-ratio class, e.g. 'aspect-[4/3]' */
  aspect: string;
  /** Real image URL — when present, the card displays this image */
  imageUrl?: string;
  /** Fallback placeholder background (Tailwind class) used when imageUrl is missing */
  bg?: string;
  /** Fallback placeholder glyph / short text */
  glyph?: string;
}

export const ILLUSTRATIONS: Illustration[] = [
{
  title: 'Cloud Dragon',
  caption: 'Procreate · Personal illustration',
  bg: 'bg-[#4A3A55]',
  aspect: 'aspect-[3/4]',
  glyph: '🐉'
},
{
  title: 'GM Bus',
  caption: 'Logo / branding / layout · GM Bus',
  bg: 'bg-[#F4A734]',
  aspect: 'aspect-[4/3]',
  glyph: 'GM'
},
{
  title: 'Hands & Ether',
  caption: 'Vector illustration · Web3 editorial',
  bg: 'bg-ink',
  aspect: 'aspect-[4/3]',
  glyph: '◆'
},
{
  title: 'Peppa Van Drinkle',
  caption: 'Whiskey label · Whiskey Pioneers',
  bg: 'bg-[#C4453A]',
  aspect: 'aspect-[3/4]',
  glyph: 'WHISKEY'
},
{
  title: 'Moloch Mystics',
  caption: 'Podcast episode artwork',
  bg: 'bg-[#1C2440]',
  aspect: 'aspect-square',
  glyph: 'S03E14'
},
{
  title: 'Padawan DAO',
  caption: 'Podcast episode artwork',
  bg: 'bg-[#1C2440]',
  aspect: 'aspect-square',
  glyph: 'S03E13'
},
{
  title: 'Crypto City',
  caption: 'Editorial illustration · Web3 ecosystems',
  bg: 'bg-[#0A1E5C]',
  aspect: 'aspect-[4/3]',
  glyph: '◢◣'
},
{
  title: 'Whiteboard Universe',
  caption: 'Hand-drawn ideation series',
  bg: 'bg-[#F2EBD8]',
  aspect: 'aspect-[4/3]',
  glyph: '✦'
},
{
  title: 'Streets / Worn In',
  caption: 'Poster series · Personal',
  bg: 'bg-[#F2EBD8]',
  aspect: 'aspect-[3/4]',
  glyph: 'STILL HERE'
}];