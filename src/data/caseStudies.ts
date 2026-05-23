/**
 * UX Case Studies
 * ----------------
 * Add or edit case studies here. Each study renders as a tab on the home page.
 *
 * Required fields:
 *   id            - unique slug (no spaces)
 *   category      - short label shown above the title in the tab
 *   title         - main case study title
 *   overview      - array of strings. First string = intro paragraph,
 *                   any following strings render as bulleted points.
 *   role          - array of paragraphs describing what you did
 *
 * Optional fields:
 *   images        - array of { label, imageUrl? }
 *                   - imageUrl: full URL to the screenshot (e.g. https://...)
 *                   - label:    caption / alt text. Shown as a placeholder
 *                               if imageUrl is missing.
 *   password      - if set, the case study is locked behind this password
 *   lockedHeading - heading shown above the password prompt (defaults to
 *                   "View Case Study")
 */

import type { CaseStudy } from '../components/CaseStudyTabs';

export const CASE_STUDIES: CaseStudy[] = [
{
  id: 'youth-sports',
  category: 'Youth Sports',
  title: 'Uniform Management',
  password: 'portfolio',
  lockedHeading: 'Youth Sports',
  overview: [
  'A comprehensive platform designed to streamline operations for youth sports leagues.',
  'Digitized the manual uniform ordering process, reducing errors by 40%.',
  'Created a centralized dashboard for coaches and parents to track order statuses in real-time.',
  'Integrated direct fulfillment workflows with local vendors to improve delivery times.'],

  role: [
  'Led end-to-end product design from initial user research to high-fidelity prototypes.',
  'Conducted user interviews with league organizers to identify pain points in their existing manual processes.',
  'Collaborated closely with engineering to ensure feasible implementation of the vendor integration features.'],

  images: [
  { label: 'Coach Dashboard — Order Overview' },
  { label: 'Parent Sizing Flow' }]

},
{
  id: 'patient-health',
  category: 'Patient Health',
  title: 'Clinical Trial Kanban',
  overview: [
  'Clinetic is a small startup that supports:',
  'Clinical Research studies to find matching patients via health data and the ability to see them on a board to manage their screening, contacting, and consenting to a study.',
  "Provide pharmaceutical companies visibility into progress of studies via Patient board data visualizations, which they normally don't have access to due to issues with HIPPA compliance.",
  'The ability to gain insights into the clinical data for study coordinators, including the ability to configure and create advanced data visualizations for key insights.'],

  role: [
  'Worked as the sole Senior UX Designer to support 8 developers (2 teams) with design of wireframes, final mockups, and documentation on upcoming features.',
  'Supported the business working with the Product Manager to understand and communicate the requirements into UI.',
  'Updated and maintained a Figma pattern library to maintain brand consistency.'],

  images: [
  { label: 'Patient Kanban Board' },
  { label: 'Study Coordinator Insights' }]

},
{
  id: 'crypto-platform',
  category: 'Crypto Platform',
  title: 'Fundraiser and DAO Creator',
  overview: [
  'A Web3 platform enabling communities to easily launch decentralized autonomous organizations (DAOs).',
  'Designed a simplified onboarding flow for users unfamiliar with crypto wallets.',
  'Created intuitive interfaces for proposing, voting on, and executing community initiatives.',
  'Built a transparent fundraising tracker that visualizes token distribution and treasury health.'],

  role: [
  'Established the core design system and visual language for the platform, balancing Web3 aesthetics with accessibility.',
  'Prototyped complex smart contract interactions into simple, understandable user flows.',
  'Conducted usability testing with both crypto-native and non-crypto users to refine the experience.'],

  images: [
  { label: 'DAO Creator — Step 1 of 4' },
  { label: 'Treasury & Voting Dashboard' }]

},
{
  id: 'college-admissions',
  category: 'College Admissions',
  title: 'Event Management',
  overview: [
  'An internal tool for university admissions staff to plan, execute, and track prospective student events.',
  'Replaced a fragmented system of spreadsheets with a unified event calendar and resource allocator.',
  'Implemented automated communication workflows for event registrants and attendees.',
  'Designed reporting dashboards to measure event ROI and attendance conversion rates.'],

  role: [
  'Partnered with admissions directors to map out the entire lifecycle of campus tours and open houses.',
  'Designed the responsive web application, focusing heavily on mobile usability for staff managing events on-the-go.',
  'Delivered comprehensive design specs and worked alongside frontend developers during implementation.'],

  images: [
  { label: 'Event Calendar — Staff View' },
  { label: 'Attendance Reporting' }]

}];