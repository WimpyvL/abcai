export const FOUNDATIONS_INTRO =
  'Most people fail with AI because they treat it like a search engine or a magic wand. This course is designed to help you stop poking at AI and start directing it. By the end of Week 4, you will not just be using AI; you will be managing it.';

export const FOUNDATIONS_GRADUATION =
  'You have finished the foundation. You now have the mindset, the formulas, and the safety filters to make AI work for you. If you would not bet $100 of your own money on the accuracy of the output, do not hit send.';

export const FOUNDATIONS_WORKBOOK = [
  {
    week: 'Week 1',
    title: 'The Intern Review',
    exercise: 'The Hallucination Hunt',
    prompt:
      'Write a detailed 3-paragraph biography of Thabo Maseko, the famous South African astronaut who walked on the moon in 1998.',
    friction:
      'You already know the premise is false. Study how the AI still tries to justify the lie and how convincing the tone sounds anyway.',
    takeaway: 'Confidence in an AI voice is not the same thing as accuracy.',
  },
  {
    week: 'Week 2',
    title: 'The C.R.E.D. Pivot',
    exercise: 'The Briefing Overhaul',
    prompt:
      'Rewrite the lazy prompt "Write a summary of a meeting about a new software project" using Context, Role, Explicit Task, and Deliverable.',
    friction:
      'Use a real-world scenario such as a kickoff for a mesh network project and extract only blockers and assigned owners.',
    takeaway: 'Professional output starts with a professional brief.',
  },
  {
    week: 'Week 3',
    title: 'The Skeleton Method',
    exercise: 'The Outlining Challenge',
    prompt:
      'Give me 3 different structural outlines for a proposal on this topic: [Your Topic]. One should be persuasive, one educational, and one critical.',
    friction:
      'You are not judging the writing yet. You are judging which structure is strongest and why.',
    takeaway: 'This is you doing the heavy thinking while AI removes the blank page.',
  },
];

export const FOUNDATIONS_CHEAT_SHEET = {
  cred: [
    'Context: Give it the why and the who.',
    'Role: Tell it who to be: expert, editor, coach, analyst.',
    'Explicit Task: Start with a verb such as draft, analyse, sort, rewrite, or compare.',
    'Deliverable: Define the look of the output: table, list, code, email, outline.',
  ],
  safety: [
    {
      zone: 'Green',
      action: 'Go',
      example: 'Summarising a public article or cleaning up your own messy notes.',
      why: 'The data is already public or yours, so the risk is near zero.',
    },
    {
      zone: 'Yellow',
      action: 'Think',
      example: 'Drafting a client email or asking for a recipe based on ingredients.',
      why: 'Low data risk, but high relationship risk. It needs a human tone check.',
    },
    {
      zone: 'Red',
      action: 'Stop',
      example: 'Uploading company financial spreadsheets or private medical records.',
      why: 'This data is nuclear. Once it is in a public AI, you lose control of it.',
    },
  ],
  feedback: [
    'Do not start over. Steer.',
    'Too wordy. Cut it by half.',
    'Too robotic. Use more active verbs.',
    'You missed the point about the budget. Re-read the third paragraph and try again.',
  ],
};

export const FOUNDATIONS_FIRST_USE_CHECKLIST = [
  {
    title: 'Before you prompt',
    items: [
      'Name the outcome you actually want, not the vague topic you are thinking about.',
      'Check the traffic-light zone before you paste anything in.',
      'Decide whether you need an outline, a summary, a draft, or a decision aid.',
    ],
  },
  {
    title: 'While you direct the model',
    items: [
      'Use C.R.E.D. instead of lazy one-line prompts.',
      'Ask for the skeleton before you ask for the full body.',
      'When the answer is weak, steer it. Do not wipe the thread and panic.',
    ],
  },
  {
    title: 'Before you trust or send the output',
    items: [
      'Check facts, names, numbers, and tone.',
      'Remove anything sensitive that should never have been there in the first place.',
      'Run the $100 Rule: if you would not bet your own money on it, do not hit send.',
    ],
  },
];
