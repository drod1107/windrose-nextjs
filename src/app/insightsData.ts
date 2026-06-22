// File: src/app/insightsData.ts
// Insights/blog content, kept as typed data (dependency-free, type-safe).
// Written for GEO/AI-search query fan-out: each post FRONT-LOADS a direct
// answer, uses clear headings, and ends with a CTA. Layer A (educational/pitch)
// only — no proprietary rubric or finished policy text (see redesign plan §6).

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface Insight {
  slug: string;
  title: string;
  description: string;
  /** Front-loaded answer — the first thing readers (and AI) see. */
  answer: string;
  date: string; // ISO
  readMins: number;
  blocks: Block[];
}

export const insights: Insight[] = [
  {
    slug: 'does-my-district-need-an-ai-policy',
    title: 'Does my district need an AI policy?',
    description:
      'Yes — in 2026 nearly every U.S. district needs a written AI policy. Here is why, what is driving it, and how to start without overwhelming your team.',
    answer:
      'Yes. If students or staff in your district can access AI tools — and they can — your district needs a written AI acceptable use policy. In 2026, over half of U.S. states guide or require district-level AI policy, and a policy is now the baseline for protecting students, supporting teachers, and limiting liability.',
    date: '2026-06-10',
    readMins: 4,
    blocks: [
      { type: 'h2', text: 'Why this became urgent in 2026' },
      {
        type: 'p',
        text: 'More than 100 state bills affecting K-12 AI use were introduced in 2026, and a majority of states have issued guidance or mandates for district AI policy. The expectation has shifted from "nice to have" to "where is yours?"',
      },
      {
        type: 'p',
        text: 'Meanwhile, students are already using AI for schoolwork whether or not a policy exists. Without clear rules, every classroom improvises its own — which is confusing for students and exhausting for teachers.',
      },
      { type: 'h2', text: 'What a policy actually protects' },
      {
        type: 'ul',
        items: [
          'Students — from unsafe content, data exposure, and over-reliance on AI.',
          'Teachers — by giving them clear, consistent rules to point to.',
          'The district — by demonstrating reasonable, documented oversight.',
        ],
      },
      { type: 'h2', text: 'A policy alone is not enough' },
      {
        type: 'p',
        text: 'The most common mistake is treating AI policy as a binder exercise — a list of rules and punishments that no one reads. A rule students will inevitably break is not protection. Real safety comes from pairing policy with teacher training and student AI literacy, so the rules are understood and lived.',
      },
      { type: 'h2', text: 'How to start' },
      {
        type: 'p',
        text: 'Begin with where you already are. Most districts have a model policy draft (for example, from their state school boards association). The fastest path is to enhance that draft with an educational philosophy, lightweight curriculum, and an incident plan — not to start from scratch. That is exactly the work Windrose & Company does with K-12 districts.',
      },
    ],
  },
  {
    slug: 'what-to-include-in-a-k12-ai-acceptable-use-policy',
    title: 'What should a K-12 AI acceptable use policy include?',
    description:
      'A strong K-12 AI acceptable use policy covers philosophy, definitions, student and staff expectations, data privacy, a reporting process, and approved tools. Here is the checklist.',
    answer:
      'A strong K-12 AI acceptable use policy includes seven things: a stated educational philosophy, clear definitions, expectations for students and staff, academic-honesty rules, data-privacy protections, a non-punitive reporting process, and a list of approved tools. The best policies manage AI as a tool to teach — not just a threat to ban.',
    date: '2026-06-14',
    readMins: 5,
    blocks: [
      { type: 'h2', text: 'The seven components' },
      {
        type: 'ul',
        items: [
          'Philosophy: a short statement of why and how your district embraces AI responsibly — not just rules.',
          'Definitions: plain-language explanations of AI and generative AI, plus what authorized vs. unauthorized use means.',
          'Student expectations: academic honesty, attribution, and when AI is and is not allowed.',
          'Staff expectations: how teachers authorize AI use and model good practice.',
          'Data privacy: never entering personal or sensitive information into AI tools.',
          'A reporting process: a safe, non-punitive way for students to flag concerning AI output.',
          'Approved tools: a vetted, maintained list rather than a free-for-all.',
        ],
      },
      { type: 'h2', text: 'Why philosophy comes first' },
      {
        type: 'p',
        text: 'Policies that lead with restrictions read as fear. A short philosophy — recognizing AI as a transformative tool students must learn to use safely and ethically — reframes the whole document around learning. Boards can stand behind it, and teachers can teach from it.',
      },
      { type: 'h2', text: 'The part most policies get wrong' },
      {
        type: 'p',
        text: 'Most drafts link any AI misuse straight to the discipline code. That teaches students to hide mistakes instead of reporting them. A non-punitive reporting channel — we call it a "Safety Huddle" — surfaces problems early and turns them into shared learning, which is what actually keeps a school safer.',
      },
      { type: 'h2', text: 'Make it real' },
      {
        type: 'p',
        text: 'A policy is only as good as the training and literacy around it. If you want a board-ready policy built on these principles — customized to your district and paired with staff PD and a student program — book a discovery call with Windrose & Company.',
      },
    ],
  },
  {
    slug: 'how-to-train-teachers-on-ai',
    title: 'How to train teachers on AI without overwhelming them',
    description:
      'Effective teacher AI training is practical, short, and classroom-focused: position teachers as facilitators, give concrete strategies, and build confidence — not fear.',
    answer:
      'The best way to train teachers on AI is to keep it practical and classroom-focused: position teachers as facilitators rather than enforcers, give them a handful of concrete strategies they can use Monday morning, and build confidence instead of piling on theory. A single well-designed on-site workshop can move an entire staff forward.',
    date: '2026-06-18',
    readMins: 4,
    blocks: [
      { type: 'h2', text: 'Start with mindset, not tools' },
      {
        type: 'p',
        text: 'Many teachers feel AI is something to police. Reframing their role from enforcer to facilitator lowers anxiety immediately — the job is not to catch AI use, it is to guide students toward using it well.',
      },
      { type: 'h2', text: 'Teach the few things that matter most' },
      {
        type: 'ul',
        items: [
          'What AI is — and why it "hallucinates" and gets things confidently wrong.',
          'How to spot AI-generated work and AI fakes.',
          'How to design assignments that are resilient to misuse.',
          'How to respond when an AI incident happens in class.',
        ],
      },
      { type: 'h2', text: 'Keep it short and concrete' },
      {
        type: 'p',
        text: 'Long, abstract PD does not stick. A focused, on-site session with real classroom scenarios and a simple playbook gives teachers something they can actually use — and the confidence to use it.',
      },
      { type: 'h2', text: 'Bring it to your staff' },
      {
        type: 'p',
        text: 'Windrose & Company delivers on-site AI professional development for K-12 staff as part of a full safety program. Book a discovery call to see what a workshop could look like for your district.',
      },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
