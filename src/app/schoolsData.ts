// File: src/app/schoolsData.ts
// Content model for the flagship "AI Safety for Schools" offering.
// Kept as typed data (like ServicesData) so pages/components stay presentational.
// NOTE: This is Layer A "pitch" content only — names and outcomes of the
// frameworks, never the proprietary substance (see redesign plan §6).

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  outcome: string;
  points: string[];
}

export const pillars: Pillar[] = [
  {
    id: 'policy',
    title: 'Policy',
    tagline: 'A board-ready AI acceptable use policy',
    outcome: 'Your district adopts a clear, defensible AI policy — fast.',
    points: [
      'Custom AI Acceptable Use Policy written for K-8, not boilerplate',
      'Builds on your existing MSBA-style framework instead of replacing it',
      'A stated philosophy — not just rules — that boards can stand behind',
    ],
  },
  {
    id: 'people',
    title: 'People',
    tagline: 'Confident teachers, not reluctant enforcers',
    outcome: 'Every staff member knows what to do when AI shows up in class.',
    points: [
      'On-site professional development for all staff',
      'Practical classroom strategies, not abstract theory',
      'Teachers shift from policing AI to facilitating it',
    ],
  },
  {
    id: 'students',
    title: 'Students',
    tagline: 'AI literacy that actually sticks',
    outcome: 'Students learn to think critically about AI — and stay safe.',
    points: [
      'Age-appropriate assemblies for grades 3-8',
      'Digital citizenship, "hallucinations," and spotting AI fakes',
      'No student PII collected — ever',
    ],
  },
  {
    id: 'preparedness',
    title: 'Preparedness',
    tagline: 'A plan for when something goes wrong',
    outcome: 'Your staff can respond to AI incidents with a clear playbook.',
    points: [
      'AI Incident Response Playbook (deepfake bullying, academic integrity)',
      'Parent & community toolkit with ready-to-send communications',
      'A non-punitive reporting culture so problems surface early',
    ],
  },
];

export interface MatrixStage {
  level: string;
  title: string;
  summary: string;
}

// Public-facing teaser of the AI Safety Readiness Matrix. The names of the
// stages are part of the pitch; the populated rubric itself is gated (Layer B).
export const matrixStages: MatrixStage[] = [
  {
    level: '01',
    title: 'Awareness',
    summary:
      'Basic rules exist on paper. AI is treated as a risk to contain. Most districts start here.',
  },
  {
    level: '02',
    title: 'Application',
    summary:
      'Staff are trained, students are taught, and policy is lived day to day — not just filed.',
  },
  {
    level: '03',
    title: 'Advancement',
    summary:
      'A school-wide culture of responsible, effective AI use. Compliance has become culture.',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const schoolFaqs: Faq[] = [
  {
    q: 'We already have an MSBA policy. Why do we need you?',
    a: 'A model policy is a starting point focused on risk and discipline. We turn it into a living program — staff training, student literacy, an incident playbook, and a culture where AI is managed, not just forbidden. We enhance what you have rather than replace it.',
  },
  {
    q: 'Is our students’ data safe?',
    a: 'Yes. We collect no student personally identifiable information. Our entire model is built around student privacy, human oversight, and a non-punitive "Safety Huddle" reporting approach.',
  },
  {
    q: 'How long does it take?',
    a: 'A foundational program runs over a single semester: discovery, a customized policy, an on-site staff workshop, a student assembly, and the supporting playbooks and parent resources.',
  },
  {
    q: 'What does it cost?',
    a: 'Engagements are scoped to your district’s size and needs. Book a free discovery call and we’ll put together a proposal — no obligation.',
  },
];
