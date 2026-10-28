import { ContrastAuditItem, SkillGroup } from '../types/portfolio';
import makerDeskImg from '../assets/images/video_frame_maker_desk_1793208452562.jpg';
import brightCourtyardImg from '../assets/images/video_frame_bright_courtyard_1793208452559.jpg';

export const RESUME_PDF_PATH = '/assets/resume/Bhumika_Shukla_UX_Resume.pdf';

export const VIDEO_FRAME_ASSETS = {
  makerDesk: makerDeskImg,
  brightCourtyard: brightCourtyardImg,
};

export const PROFILE_INFO = {
  name: 'Bhumika Shukla',
  institution: 'Chouksey Engineering College',
  degree: 'B.Tech, Computer Science and Engineering',
  graduation: 'Expected May 2028',
  cgpa: '9.1 / 10.0',
  coursework:
    'Human-Computer Interaction, Software Engineering, Web Development, Data Structures and Algorithms',
  location: 'Bilaspur, Chhattisgarh, India',
  phone: '+91-9039737715',
  email: 'beforebhumika@gmail.com',
  linkedin: 'https://linkedin.com/in/bhumika-shukla',
  github: 'https://github.com/newbhumika',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'UX Design',
    appliedItems: [
      'User flows',
      'Wireframing',
      'Interaction design',
      'Prototyping',
      'Information architecture',
      'Usability testing',
    ],
  },
  {
    category: 'Research',
    appliedItems: [
      'User interviews',
      'Qualitative synthesis',
      'Pain-point analysis',
      'Usability evaluation',
    ],
    learningItems: [
      'Large-sample longitudinal diary studies',
      'Instrumented quantitative A/B experimentation',
    ],
    note: 'Applied across 2-round moderated usability testing (n = 6); continuing to expand research depth.',
  },
  {
    category: 'Accessibility',
    appliedItems: [
      'Contrast evaluation',
      'Touch-target sizing',
      'Caption readability',
      'Screen-reader labeling',
      'Inclusive interaction patterns',
    ],
  },
  {
    category: 'Visual & Interaction Design',
    appliedItems: [
      'Typography',
      'Layout',
      'Visual hierarchy',
      'Responsive design',
      'Reusable components',
      'Interaction states',
      'Motion prototyping',
    ],
  },
  {
    category: 'Tools & Technical',
    appliedItems: [
      'Figma',
      'FigJam',
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Git',
      'GitHub',
    ],
    note: 'Used directly to build interactive prototypes, document 12-state handoff specs, and collaborate with engineers.',
  },
];

export const CONTRAST_AUDIT_DATA: ContrastAuditItem[] = [
  {
    element: 'Standard Caption Text on Dark Window (82% alpha)',
    foreground: '#FFFFFF',
    background: '#121212 (composite over bright daylight frame #F2EFE9)',
    measuredRatio: '15.4 : 1',
    wcagTarget: '≥ 4.5 : 1 (AA) / ≥ 7.0 : 1 (AAA)',
    status: 'Checked — Passes AAA',
    notes: 'Composite background luminance tested directly against sunlit limestone highlight.',
  },
  {
    element: 'High-Contrast Preset (Yellow on Solid Near-Black)',
    foreground: '#FFD600',
    background: '#0A0A0A',
    measuredRatio: '14.1 : 1',
    wcagTarget: '≥ 7.0 : 1 (AAA)',
    status: 'Checked — Passes AAA',
    notes: 'Designed for bright outdoor glare and low-vision readability.',
  },
  {
    element: 'Active Control Accent Badge / Focus Ring',
    foreground: '#FFFFFF',
    background: '#C8102E',
    measuredRatio: '5.89 : 1',
    wcagTarget: '≥ 4.5 : 1 (AA Text & UI)',
    status: 'Checked — Passes AA',
    notes: 'Darkened from pure #FF0000 (3.99:1) so white labels pass AA without relying on color alone.',
  },
  {
    element: 'Quick-Sheet Secondary Metadata Label',
    foreground: '#52514E',
    background: '#FFFFFF',
    measuredRatio: '7.82 : 1',
    wcagTarget: '≥ 4.5 : 1 (AA)',
    status: 'Checked — Passes AAA',
    notes: 'Ensures secondary language and track labels remain crisp at 13px.',
  },
  {
    element: 'Unbacked White Subtitle Over Bright Video Frame (Baseline Problem)',
    foreground: '#FFFFFF',
    background: '#F2EFE9 (sunlit architectural frame)',
    measuredRatio: '1.14 : 1',
    wcagTarget: '≥ 4.5 : 1 (AA)',
    status: 'Baseline Failure Reference',
    notes: 'Demonstrates why drop-shadow-only captions become illegible without quick access to window opacity.',
  },
];

export const ACHIEVEMENTS_LIST = [
  {
    title: 'Google Big Code 2026, Finalist',
    context: 'Competitive algorithmic problem-solving finalist recognition (2026)',
  },
  {
    title: 'Winner, Amity University Inter-College Hackathon (100+ teams)',
    context: '1st place among 100+ competing teams — end-to-end problem framing, UI flow, and working build',
  },
  {
    title: 'LeetCode Guardian',
    context: 'Top-tier competitive rating in data structures and algorithmic complexity analysis',
  },
  {
    title: 'Codeforces Expert',
    context: 'Consistent rated performance in timed algorithmic contests',
  },
];
