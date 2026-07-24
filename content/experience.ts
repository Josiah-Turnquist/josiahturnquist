import type { Role } from './types';

/**
 * Ordered newest-first. Dates are `YYYY-MM` so they sort and serialise cleanly.
 *
 * Note: the previous site listed the Communication Tutor role as starting
 * "Feb 2028", a typo for 2018, corrected here.
 */
export const experience: Role[] = [
  {
    start: '2022-08',
    end: null,
    title: 'Technical Project Manager',
    org: 'Barefoot Solutions',
    url: 'https://www.barefootsolutions.com/',
    location: 'San Diego, CA',
    summary:
      'I own product delivery end to end for six client products at a time: PRDs, roadmaps, budgets from $50K to $1M, and the client relationship, across stakeholders, designers, engineers, and lawyers.',
    highlights: [
      'Shipped Compass AI, a self-hosted AI platform for regulated industries.',
      'Steered a fintech platform through FINRA approval.',
      'Stay hands-on across the stack, from QA to AWS infrastructure and analytics.',
    ],
    stack: ['AWS', 'Quality Assurance', 'Google Analytics 4', 'CSS', 'Public Speaking'],
    facets: ['Product & Delivery', 'Leadership', 'Engineering'],
  },
  {
    start: '2021-03',
    end: '2026-01',
    title: 'Café Manager & Founder',
    org: 'Grove Church',
    url: 'https://sdgrove.org/',
    location: 'San Diego, CA',
    summary:
      'Founded and ran the Grove Café: training, scheduling, sourcing, and upkeep. The volunteer team matches a typical Starbucks’ production rate inside a few hours each Sunday.',
    highlights: [
      'Built the operation from nothing: equipment, workflow, supply chain, and staffing.',
      'Trained and scheduled a rotating volunteer team for nearly five years.',
    ],
    stack: ['Leadership', 'Team Building', 'Operations', 'Food & Beverage'],
    facets: ['Leadership', 'Service'],
    volunteer: true,
  },
  {
    start: '2021-11',
    end: '2022-06',
    title: 'Fullstack Engineer',
    org: 'togetherAI',
    url: 'https://www.togetherai.com/',
    location: 'Remote, Australia',
    summary:
      'Integrated togetherAI with third-party health data providers so the platform could surface anomalies in children’s wellbeing.',
    highlights: [
      'Built data integrations against external biomedical health providers.',
      'Shipped across web and mobile on a distributed, cross-timezone team.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Tailwind', 'AWS', 'Mobile Development'],
    facets: ['Engineering'],
  },
  {
    start: '2021-02',
    end: '2021-06',
    title: 'Instructional Assistant',
    org: 'Diablo Valley College',
    url: 'https://www.dvc.edu/',
    location: 'Pleasant Hill, CA',
    summary:
      'Carried the full responsibilities of a campus computer science instructor, a position normally restricted to candidates who have already completed a master’s program.',
    stack: ['Lecturing', 'Teaching', 'Public Speaking', 'Curriculum'],
    facets: ['Teaching', 'Leadership'],
  },
  {
    start: '2021-02',
    end: '2021-06',
    title: 'Lead Computer Science Tutor',
    org: 'Diablo Valley College',
    url: 'https://www.dvc.edu/tutoring',
    location: 'Pleasant Hill, CA',
    summary:
      'Founder, hiring manager, and lead tutor of the college’s computer science tutoring department: a small team of the strongest student programmers on campus.',
    highlights: [
      'Pitched and launched the department; it became school-funded.',
      'Hired, trained, and managed the tutoring staff.',
    ],
    stack: ['Teaching', 'Hiring', 'Tutoring', 'Public Speaking'],
    facets: ['Teaching', 'Leadership', 'Engineering'],
  },
  {
    start: '2020-11',
    end: '2021-06',
    title: 'Lead Barista',
    org: 'Blue Bottle Coffee',
    url: 'https://bluebottlecoffee.com/',
    location: 'Bay Area, CA',
    summary:
      'The second most profitable café in the company, trained to handle hundreds of customers a day without letting either quality or the customer experience slip.',
    stack: ['Customer Service', 'Leadership', 'Food & Beverage'],
    facets: ['Service', 'Leadership'],
  },
  {
    start: '2020-05',
    end: '2021-01',
    title: 'Fullstack Engineering Intern',
    org: 'Fyresite',
    url: 'https://www.fyresite.com/',
    location: 'Phoenix, AZ',
    summary:
      'Built high-end products for clients across the U.S. at an agency partnered with names like GMG, awarded for “National Excellence” in 2021 and growing roughly 70% year over year.',
    stack: ['React', 'Flutter', 'Dart', 'MySQL', 'AWS', 'CSS'],
    facets: ['Engineering'],
  },
  {
    start: '2019-06',
    end: '2020-07',
    title: 'Program Instructor',
    org: 'Upward Bound',
    url: 'https://www.dvc.edu/enrollment/ets/trio.html',
    location: 'Pleasant Hill, CA',
    summary:
      'Sole instructor for federally-funded computer science classes serving underprivileged, first-generation college students. I hand-tailored every curriculum and mentored students closely throughout.',
    highlights: [
      'Designed the curriculum from scratch for each cohort.',
      'Taught high-school-aged students with no prior programming background.',
    ],
    stack: ['Lecturing', 'Curriculum Design', 'Teaching', 'Mentorship'],
    facets: ['Teaching', 'Leadership'],
  },
  {
    start: '2019-06',
    end: '2020-07',
    title: 'Mathematics Tutor',
    org: 'Upward Bound',
    url: 'https://www.dvc.edu/enrollment/ets/trio.html',
    location: 'Pleasant Hill, CA',
    summary:
      'Calculus tutor for first-generation college students through the same federally-funded TRIO program.',
    stack: ['Calculus', 'Tutoring', 'Teaching'],
    facets: ['Teaching', 'Service'],
  },
  {
    start: '2018-03',
    end: '2020-07',
    title: 'Club Founder & Coordinator',
    org: 'Cru',
    url: 'https://www.cru.org/',
    location: 'Pleasant Hill, CA',
    summary:
      'Founded and ran the largest Christian club on campus. As primary facilitator I led weekly Bible studies, hosted events, and welcomed new attendees every week.',
    stack: ['Leadership', 'Public Speaking', 'Event Planning', 'Teaching'],
    facets: ['Leadership', 'Service', 'Teaching'],
  },
  {
    start: '2018-02',
    end: '2020-08',
    title: 'Communication Tutor',
    org: 'Diablo Valley College',
    url: 'https://www.dvc.edu/',
    location: 'Pleasant Hill, CA',
    summary:
      'Selected from the top tier of the communication program to tutor the college’s world-competitive speech and debate team, alongside the general student body.',
    stack: ['Public Speaking', 'Debate', 'Tutoring', 'Communication'],
    facets: ['Teaching', 'Service'],
  },
  {
    start: '2015-07',
    end: '2020-07',
    title: 'Camp Counselor',
    org: 'Koinonia Conference Grounds',
    url: 'https://www.koinoniaconferencegrounds.org/',
    location: 'Watsonville, CA',
    summary:
      'A veteran counselor across five summers: leading Bible studies, guiding kids between events, and handling discipline with patience.',
    stack: ['Leadership', 'Mentorship', 'Public Speaking'],
    facets: ['Service', 'Leadership', 'Teaching'],
    volunteer: true,
  },
];
