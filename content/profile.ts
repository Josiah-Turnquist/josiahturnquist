export const profile = {
  name: 'Josiah Turnquist',
  title: 'Technical Project Manager',
  /** The one-sentence positioning statement. */
  pitch:
    'A technical project manager who ships the code too, equally at home in a stakeholder room and a merge conflict.',
  location: 'San Diego, California',
  email: 'josiahturnq@gmail.com',
  site: 'https://josiahturnquist.com',
  /**
   * Intentionally not rendered anywhere public. Announcing a job search on a
   * site your current employer can read is a bad trade. Wire it back into the
   * hero if that changes.
   */
  availability: 'Open to new roles',
  socials: {
    github: 'https://github.com/Josiah-Turnquist',
    linkedin: 'https://www.linkedin.com/in/jturnq/',
    instagram: 'https://www.instagram.com/josiah_obadiah',
  },
  /**
   * Rendered as the About section. Each string is a paragraph. The voice is
   * the point: concrete and personal, no filler sentences about lessons
   * learned. Geared toward product manager roles.
   */
  about: [
    'I got into software at twelve by trying to make a video game. I spent the next several years rebuilding Pac-Man and Pong before graduating to sprawling RuneScape knock-offs. I never really stopped; the games just turned into products.',
    'Today I am the Technical Project Manager at Barefoot Solutions, where I own delivery end to end for six client products at a time: the PRDs, the roadmaps, budgets from $50K to $1M, and the client relationship, which means being the number they dial when something goes wrong.',
    'Recent work includes Compass AI, our self-hosted AI platform for regulated industries, and steering a fintech platform through FINRA approval. Before that came software for fire departments, COVID-era concert streaming, and biomedical tracking for an AI company in Australia.',
    'I have watched teams fall apart because nobody set the culture. It gets set by whoever is leading, deliberately or by default, so I set it deliberately: clear ownership, tight feedback loops, and a team that likes the work and each other. That kind of team keeps its people and ships on time.',
    'The titles I care about most are husband, father, and teacher. The hours left over go to bespoke leatherworking.',
  ],
  /**
   * The hero marquee: the tools I actually run a product with, product and
   * delivery side first, engineering stack last. Icons are monochrome SVGs in
   * `public/stack/` (Simple Icons / Devicon), recolored via CSS mask.
   */
  favoriteStack: [
    { name: 'Claude Cowork', icon: '/stack/claude.svg' },
    { name: 'Figma', icon: '/stack/figma.svg' },
    { name: 'Jira', icon: '/stack/jira.svg' },
    { name: 'Notion', icon: '/stack/notion.svg' },
    { name: 'Google Analytics 4', icon: '/stack/googleanalytics.svg' },
    { name: 'Claude Code', icon: '/stack/claude.svg' },
    { name: 'TypeScript', icon: '/stack/typescript.svg' },
    { name: 'React & Next.js', icon: '/stack/react.svg' },
    { name: 'React Native / Expo', icon: '/stack/expo.svg' },
    { name: 'Neon Postgres', icon: '/stack/neon.svg' },
    { name: 'Railway', icon: '/stack/railway.svg' },
    { name: 'AWS', icon: '/stack/aws.svg' },
  ],
  /** Grouped for the résumé and for machine readers. */
  skills: {
    // Same register as the tool chips below: one crisp discipline per tag.
    'Product & Delivery': [
      'Scoping',
      'Estimation',
      'Roadmapping',
      'Stakeholder management',
      'Product strategy',
      'QA',
      'Public speaking',
    ],
    // Backed by shipped work: Lectern's AI council, Tidewater's vision
    // pipeline, and an agent-first daily workflow.
    'Generative AI': [
      'Agentic workflows',
      'Claude Code & Cowork',
      'Prompt engineering',
      'Structured output',
      'AI feature scoping',
    ],
    Engineering: [
      'TypeScript',
      'React',
      'Next.js',
      'React Native / Expo',
      'Node.js',
      'Vue.js',
      'three.js',
      'C/C++',
      'Dart / Flutter',
    ],
    'Platform & Data': [
      'AWS',
      'Postgres / Neon',
      'Drizzle',
      'Railway',
      'Netlify',
      'MySQL',
      'Google Analytics 4',
    ],
  },
  education: [
    {
      institution: 'UC San Diego',
      url: 'https://ucsd.edu/',
      degree: 'B.S.',
      area: 'Economics',
      start: '2020',
      end: '2022',
    },
    {
      institution: 'Diablo Valley College',
      url: 'https://www.dvc.edu/',
      degree: 'A.S.',
      area: 'Computer Science',
      start: '2018',
      end: '2020',
      note: '4.0 GPA. Founded the college-funded COMSC tutoring department and served as an Instructional Assistant, a role normally reserved for candidates holding a master’s degree.',
    },
    {
      institution: 'Diablo Valley College',
      url: 'https://www.dvc.edu/',
      degree: 'A.S.-T',
      area: 'Mathematics',
      start: '2017',
      end: '2020',
      note: '3.8 GPA.',
    },
    {
      institution: 'Diablo Valley College',
      url: 'https://www.dvc.edu/',
      degree: 'A.A.-T',
      area: 'Speech Communication & Rhetoric',
      start: '2018',
      end: '2020',
      note: '4.0 GPA. Competed on the Speech & Debate team, placing 1st and 2nd against UC Berkeley, SF State, and other UCs.',
    },
  ],
} as const;
