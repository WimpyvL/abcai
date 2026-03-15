export interface SharedCourseLesson {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  format: string;
  content: string[];
  practice: string[];
}

export interface SharedCourseModule {
  slug: string;
  title: string;
  summary: string;
  lessons: SharedCourseLesson[];
}

export interface SharedCourse {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  audience: string;
  level: string;
  format: string;
  duration: string;
  pace: string;
  status: string;
  journeyProfile: 'beginner' | 'business' | 'builder';
  highlight: string;
  outcomes: string[];
  prerequisites: string[];
  includes: string[];
  forWho: string[];
  deliveryModes: string[];
  modules: SharedCourseModule[];
}

export interface SharedCourseDeliveryModel {
  title: string;
  summary: string;
  bestFor: string;
  includes: string[];
}

export const COURSE_DELIVERY_MODELS: SharedCourseDeliveryModel[] = [
  {
    title: 'Self-paced core courses',
    summary: 'Structured lessons, prompts, templates, and exercises that help individuals build capability without wandering through AI content for weeks.',
    bestFor: 'Individuals, freelancers, students, and teams that need a practical baseline first.',
    includes: ['Short lessons with clear outcomes', 'Downloadable worksheets and prompts', 'Simple implementation tasks after each module'],
  },
  {
    title: 'Live cohort intensives',
    summary: 'Time-boxed runs where people move through the same material together with live reviews, working sessions, and direct Q&A.',
    bestFor: 'Founders, operators, and working professionals who need momentum and accountability.',
    includes: ['Weekly live clinics', 'Real use-case reviews', 'Shared assignments and feedback loops'],
  },
  {
    title: 'Team rollout tracks',
    summary: 'Company-facing learning tracks adapted to role, workflow, and policy reality so the training turns into operating behaviour.',
    bestFor: 'Businesses that want adoption, not a one-off workshop that evaporates in a week.',
    includes: ['Role-specific examples', 'Internal prompt packs', 'Manager guidance and rollout support'],
  },
];

export const COURSE_CATALOG: SharedCourse[] = [
  {
    slug: 'ai-foundations-for-real-work',
    title: 'AI Foundations for Real Work',
    strapline: 'A plain-language course for people who want to use AI properly before they start buying tools or copying prompts off the internet.',
    summary: 'This is the practical starter course for understanding what AI actually is, what it is useful for, where it still fails, and how to get your first safe wins at work or in study.',
    audience: 'Beginners, professionals, students, and mixed teams starting from scratch.',
    level: 'Beginner',
    format: 'Self-paced core course with optional live Q&A',
    duration: '4 weeks',
    pace: '2 to 3 hours per week',
    status: 'Open for enquiry',
    journeyProfile: 'beginner',
    highlight: 'Best first course if AI still feels louder than its value.',
    outcomes: [
      'Explain the basics of AI in plain language without repeating internet fluff.',
      'Use AI for drafting, planning, summarising, and learning without overtrusting it.',
      'Write better prompts with context, constraints, and useful output formats.',
      'Choose a sane starter tool based on the task instead of the hype cycle.',
    ],
    prerequisites: [
      'No technical background required.',
      'Bring one real task you want help with so the course stays grounded.',
    ],
    includes: ['7 lessons', 'Prompt workbook', 'First-use checklist', 'Starter tool guide'],
    forWho: [
      'People who are new to AI and want a solid foundation.',
      'Teams that need shared basics before broader rollout.',
      'Students or freelancers trying to become more capable without getting lost.',
    ],
    deliveryModes: ['Self-paced access', 'Live cohort add-on', 'Team onboarding delivery'],
    modules: [
      {
        slug: 'week-1-breaking-the-magic-spell',
        title: 'Week 1: Breaking the "Magic" Spell',
        summary: 'From mystery to mastery. Stop treating AI like magic and start understanding what it is actually doing.',
        lessons: [
          {
            slug: 'auto-complete-reality',
            title: 'Lesson 1: The "Auto-Complete" Reality',
            summary: 'AI does not know things; it predicts them. That is why it can be useful and confidently wrong at the same time.',
            duration: '22 min',
            format: 'Lesson',
            content: [
              'AI does not "know" things in the way people think it does. It predicts the next likely word or pattern based on billions of examples it has already seen.',
              'When you ask AI for a fact, it is not looking the answer up in a book. It is painting a picture of what a good answer should sound like. That is why it can sound polished while still being wrong.',
              'The stickier language is this: AI is a mirror of information. It reflects what it has seen, but it does not understand what it is saying.',
            ],
            practice: [
              'Write one sentence on why confidence in an AI tone is not the same thing as accuracy.',
              'Name one work task where a fluent but wrong answer could damage trust or create risk.',
            ],
          },
          {
            slug: 'intern-framework',
            title: 'Lesson 2: The Intern Framework',
            summary: 'Stop treating AI like an oracle. Treat it like a brilliant but distracted intern who needs direction and review.',
            duration: '18 min',
            format: 'Lesson',
            content: [
              'The most useful mental model is not "genius machine." It is "brilliant but distracted intern." An intern can lift a lot of work, but only if the manager gives a real brief and checks the result.',
              'You would not ask a first-day intern to "Write the 2027 strategy." You would ask them to summarise the notes, extract the patterns, and give you a starting point.',
              'That is the shift this course wants from you: the AI does the heavy lifting; you do the heavy thinking.',
            ],
            practice: [
              'Pick one task you would happily give to a smart intern and one you would never delegate without supervision.',
              'Rewrite one of your AI requests so it sounds like a brief to a new team member, not a vague demand.',
            ],
          },
        ],
      },
      {
        slug: 'week-2-chatting-to-directing',
        title: 'Week 2: Moving from "Chatting" to "Directing"',
        summary: 'Build the bridge from idea to output by learning how to brief the model properly and iterate instead of restarting.',
        lessons: [
          {
            slug: 'cred-formula',
            title: 'Lesson 3: The C.R.E.D. Formula',
            summary: 'Vague instructions create noise. Professional output starts with a professional brief.',
            duration: '26 min',
            format: 'Workshop',
            content: [
              'C stands for Context: the background and the audience. If the model does not know who this is for or why it matters, it guesses.',
              'R stands for Role: tell it who to be. Coach, editor, analyst, project manager. This frames the style and angle of the response.',
              'E stands for Explicit Task and D stands for Deliverable. Start with a clear verb and define the shape of the answer: table, bullets, email, checklist, outline.',
            ],
            practice: [
              'Take a lazy prompt you use and rewrite it using Context, Role, Explicit Task, and Deliverable.',
              'Test the new prompt and compare the output quality against the old one.',
            ],
          },
          {
            slug: 'art-of-iteration',
            title: 'Lesson 4: The Art of Iteration',
            summary: 'Real work is a conversation. If the AI misses the mark, steer it instead of wiping the thread and starting again.',
            duration: '17 min',
            format: 'Exercise',
            content: [
              'Prompting is not a one-and-done event. It is a feedback loop. Good users do not restart every time the model misses. They redirect it.',
              'Say things like: "Good start, but make the tone 20% less formal," or "You missed the budget point. Re-read the third paragraph and try again." That is directing, not poking.',
              'The real skill is learning how to evaluate an output and then add the right friction to improve it.',
            ],
            practice: [
              'Run one prompt, then improve it through two rounds of steering instead of deleting the thread.',
              'Write down the most useful feedback phrase you used so it becomes part of your default workflow.',
            ],
          },
        ],
      },
      {
        slug: 'week-3-solving-real-world-friction',
        title: 'Week 3: Solving Real-World Friction',
        summary: 'Turn tools into time by using AI to remove noise, structure thinking, and get past blank-page paralysis.',
        lessons: [
          {
            slug: 'high-speed-synthesis',
            title: 'Lesson 5: High-Speed Synthesis',
            summary: 'The most common safe win is turning chaos into order so you can focus on the signals that matter.',
            duration: '24 min',
            format: 'Lesson',
            content: [
              'One of the best safe wins is asking AI to turn noise into structure. Long meeting notes, transcripts, rough research, scattered ideas, and messy drafts all become easier when the model filters them.',
              'A good example is pasting a messy 3,000-word meeting transcript and asking for a 10-point list of action items. The value is not brilliance. The value is speed plus order.',
              'Think of AI here as a filter. It helps remove the noise so you can work with the signal.',
            ],
            practice: [
              'Take one messy note set or transcript and ask AI to turn it into a clean list of actions and owners.',
              'Check what it missed and what it hallucinated before trusting the output.',
            ],
          },
          {
            slug: 'skeleton-method',
            title: 'Lesson 6: The "Skeleton" Method for Drafting',
            summary: 'Kill blank-page syndrome without handing over your voice. Let AI build the structure while you own the content.',
            duration: '20 min',
            format: 'Lesson',
            content: [
              'Do not ask AI to "write the whole essay" or "do the whole proposal." That is how people lose control of tone, insight, and judgement.',
              'Instead, ask for the structure first: a five-point outline, three proposal skeletons, or a list of strong sections you can fill in. The AI builds the skeleton; you add the skin.',
              'This keeps you in the driver’s seat while still getting speed. It removes blank-page syndrome without outsourcing the thinking.',
            ],
            practice: [
              'Ask AI for three different outlines for a topic you know well: one persuasive, one educational, and one critical.',
              'Choose the strongest skeleton and explain why it wins. That is your judgement doing the real work.',
            ],
          },
        ],
      },
      {
        slug: 'week-4-the-professional-gatekeeper',
        title: 'Week 4: The Professional Gatekeeper',
        summary: 'Protect your reputation and your data by knowing what is safe, what needs review, and what should never enter a public AI system.',
        lessons: [
          {
            slug: 'traffic-light-model',
            title: 'Lesson 7: The Traffic Light Model (Safe vs. Reckless)',
            summary: 'This is the line between a helpful tool and a career-ending mistake.',
            duration: '27 min',
            format: 'Gatekeeper lesson',
            content: [
              'Green zone work is low-risk and mostly public or personal: summarising a public news article, cleaning up your own rough notes, or drafting a workout plan. You still review it, but the downside is low.',
              'Yellow zone work can be useful, but it carries relationship or accuracy risk: drafting a client email, writing a polite no, or asking for ideas around a sensitive topic. A human tone and judgement check is non-negotiable.',
              'Red zone work is where you stop. Private contracts, company financial spreadsheets, private medical records, and trade-secret material should not be uploaded to public AI tools. Once sensitive data leaves your boundary, you lose control of it.',
              'The graduation rule for this course is the $100 Rule: if you would not bet $100 of your own money on the accuracy of the output, do not hit send.',
            ],
            practice: [
              'Take three real tasks from your week and sort them into Green, Yellow, or Red.',
              'Write one sentence describing the human review step you need for every Yellow task.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ai-for-small-business-operations',
    title: 'AI for Small Business Operations',
    strapline: 'A business-first course for owners and operators who need AI to reduce admin, sharpen output, and create actual ROI.',
    summary: 'This course focuses on repeated business work: support, sales admin, content, internal coordination, and process cleanup before automation. It is designed for people who need value, not software theatre.',
    audience: 'Business owners, operations leads, admins, marketing teams, and service businesses.',
    level: 'Intermediate',
    format: 'Guided course with live implementation clinic',
    duration: '3 weeks',
    pace: '3 hours per week',
    status: 'Open for enquiry',
    journeyProfile: 'business',
    highlight: 'Best for teams that want practical adoption without buying a random stack.',
    outcomes: [
      'Identify which business workflows are good AI targets and which should stay human-led.',
      'Create prompt systems for sales, support, admin, and internal communication.',
      'Choose tools with cleaner ROI logic and less subscription sprawl.',
      'Design one low-risk pilot workflow with clear quality checks and ownership.',
    ],
    prerequisites: [
      'You should already know the rough shape of your business workflows.',
      'Bring one repeated operational problem you want to improve.',
    ],
    includes: ['6 lessons', 'Workflow audit template', 'Team prompt pack starter', 'Pilot planning worksheet'],
    forWho: [
      'Small businesses trying to improve operations before they automate everything badly.',
      'Teams that need shared usage standards instead of scattered experiments.',
      'Owners who want to prove value before spending harder.',
    ],
    deliveryModes: ['Cohort delivery', 'Private team rollout', 'Workshop-led implementation'],
    modules: [
      {
        slug: 'worth-fixing',
        title: 'Find the workflows worth fixing',
        summary: 'Separate real operational wins from tasks that are too vague, risky, or unstructured.',
        lessons: [
          {
            slug: 'where-ai-belongs',
            title: 'Where AI belongs in a small business',
            summary: 'Map repeated work in support, marketing, admin, sales, and knowledge handling.',
            duration: '20 min',
            format: 'Lesson',
            content: [
              'The first business mistake is asking “what AI tool should we buy?” before asking “where do we keep losing time?” Start with the work, not the software.',
              'Look for repeated tasks with clear inputs and a predictable output: support replies, summaries, follow-ups, quote drafting, meeting notes, and content adaptation.',
              'These are the tasks where AI can create leverage quickly without pretending to replace accountability.',
            ],
            practice: [
              'List five repeated tasks your business handles every week.',
              'Choose one that is frequent, boring, and low-risk enough for a pilot.',
            ],
          },
          {
            slug: 'what-not-to-automate',
            title: 'What not to automate yet',
            summary: 'Spot fragile workflows, unclear ownership, and data problems before they turn into rollout pain.',
            duration: '16 min',
            format: 'Review',
            content: [
              'If the process is tribal, inconsistent, or politically contested, automation usually makes the confusion more expensive.',
              'If the data is unreliable, the output quality will stay unreliable too. AI does not repair a messy operating system by itself.',
              'The right move is often process cleanup first, then a narrow pilot once the workflow is stable enough to support it.',
            ],
            practice: [
              'Write down one workflow your team should fix before automating.',
              'Identify the owner of the pilot you do want to run.',
            ],
          },
        ],
      },
      {
        slug: 'standardise-team-use',
        title: 'Standardise how the team uses AI',
        summary: 'Turn scattered usage into clearer prompts, better review habits, and reusable operating patterns.',
        lessons: [
          {
            slug: 'prompt-systems-for-business',
            title: 'Create prompt systems for common business tasks',
            summary: 'Build reusable prompts for follow-ups, support messages, summaries, quotes, and internal notes.',
            duration: '28 min',
            format: 'Workshop',
            content: [
              'Teams waste time when everyone prompts differently and nobody knows which outputs are trustworthy. Standardised prompts reduce chaos fast.',
              'The aim is not to remove judgement. It is to create consistent starting points for recurring tasks so the team is not rebuilding the same instructions every day.',
              'Good prompt systems are small assets: reusable, reviewable, and tied to one clear job.',
            ],
            practice: [
              'Draft one standard prompt for support, one for sales, and one for internal notes.',
              'Define what must always be checked before those outputs are used.',
            ],
          },
          {
            slug: 'business-guardrails',
            title: 'Guardrails for privacy, brand tone, and human review',
            summary: 'Keep the business safe while still moving quickly.',
            duration: '18 min',
            format: 'Checklist',
            content: [
              'Business AI usage breaks down when no one defines tone, privacy boundaries, or review responsibility. The faster the tool is, the more important the guardrails become.',
              'This course treats guardrails as operational infrastructure. They protect brand quality, customer trust, and internal consistency.',
              'The team should know what data is allowed, what claims must be checked, and who approves final outputs.',
            ],
            practice: [
              'Write a short rule for what customer or financial data is off-limits in public AI tools.',
              'Define the final review owner for one high-impact workflow.',
            ],
          },
        ],
      },
      {
        slug: 'first-pilot',
        title: 'Build the first pilot that actually matters',
        summary: 'Use the course outputs to design one practical pilot with measurable outcomes.',
        lessons: [
          {
            slug: 'tool-choice-without-drift',
            title: 'Tool choice without subscription drift',
            summary: 'Compare assistant, meeting, automation, and workspace tools by task and budget.',
            duration: '21 min',
            format: 'Lesson',
            content: [
              'Tool choice should come after the workflow is defined. Otherwise teams pile up subscriptions and still do the work badly.',
              'A clean buying decision asks: what job is this tool doing, who will use it, what will we stop using, and how do we know the spend is justified?',
              'That framing cuts through most of the hype immediately.',
            ],
            practice: [
              'Pick one tool your team is considering and write down the job it must perform.',
              'List one subscription you would avoid or cancel if that tool actually works.',
            ],
          },
          {
            slug: 'pilot-planning',
            title: 'Pilot planning and rollout discipline',
            summary: 'Define ownership, quality checks, review steps, and success metrics before launch.',
            duration: '32 min',
            format: 'Capstone',
            content: [
              'A pilot should be narrow enough to manage and valuable enough to matter. That means clear owner, clear output definition, clear review step, and clear metric.',
              'Most failed pilots are not technology failures. They are ownership failures or expectation failures.',
              'If the team knows exactly what the pilot is trying to improve and how success will be judged, the rollout becomes much more honest.',
            ],
            practice: [
              'Design one pilot with a named owner, one quality check, and one metric that matters.',
              'Write the condition under which you would stop, revise, or scale the pilot.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'build-useful-ai-workflows',
    title: 'Build Useful AI Workflows',
    strapline: 'A technical track for builders who want to ship narrow, reliable AI workflows instead of vague agent fantasies.',
    summary: 'This course is for developers, product leads, and technical operators building AI-powered workflows, internal tools, and assistant patterns with real boundaries, prompt discipline, and operational realism.',
    audience: 'Developers, technical founders, product teams, and no-code builders moving into implementation.',
    level: 'Builder',
    format: 'Technical course with architecture review clinic',
    duration: '4 weeks',
    pace: '3 to 4 hours per week',
    status: 'Open for enquiry',
    journeyProfile: 'builder',
    highlight: 'Best for people who want to build something useful without disappearing into agent theatre.',
    outcomes: [
      'Scope AI workflows around a real job to be done and an explicit boundary.',
      'Separate prompt logic, orchestration logic, and tool boundaries more cleanly.',
      'Design for review, logging, fallback behaviour, and operational trust.',
      'Ship a narrow pilot that survives contact with real users and real data.',
    ],
    prerequisites: [
      'You should already understand basic prompting and AI usage.',
      'Some technical or automation experience helps, but the course stays pragmatic.',
    ],
    includes: ['6 technical lessons', 'Architecture checklists', 'Evaluation worksheet', 'Implementation review prompts'],
    forWho: [
      'Developers building internal copilots, assistants, or extraction workflows.',
      'Technical operators moving from no-code or prompt usage into system design.',
      'Product leads who need to keep builds grounded in value and maintainability.',
    ],
    deliveryModes: ['Technical cohort', 'Team implementation review', 'Builder workshop series'],
    modules: [
      {
        slug: 'scope-the-system',
        title: 'Scope the right system',
        summary: 'Start with a real workflow, not a mascot with a chatbot attached.',
        lessons: [
          {
            slug: 'choose-the-right-wedge',
            title: 'Choosing the wedge that actually matters',
            summary: 'Pick a narrow use case with clean value, obvious boundaries, and survivable complexity.',
            duration: '23 min',
            format: 'Lesson',
            content: [
              'The easiest way to build nonsense is to start with a vague assistant idea instead of a sharp workflow problem.',
              'A good wedge has a clear trigger, clear input, clear output, and a visible failure mode. That is what makes the system testable and supportable later.',
              'If the scope feels exciting but impossible to describe in one sentence, it is probably too broad.',
            ],
            practice: [
              'Write your target workflow in one sentence: trigger, job, output.',
              'List one explicit boundary for what the system must not do.',
            ],
          },
          {
            slug: 'failure-modes-and-trust',
            title: 'Failure modes, trust boundaries, and human review',
            summary: 'Think through where the system can fail before the first demo convinces everyone too early.',
            duration: '19 min',
            format: 'Review',
            content: [
              'Production trouble usually starts where nobody defined what failure looks like. In AI systems that means hallucinations, silent quality drift, unexpected tool behaviour, and overtrust by users.',
              'Trust boundaries matter because not every step deserves the same autonomy. Some steps can be automated. Some need escalation or review. Some should stay manual.',
              'The earlier you map those boundaries, the less embarrassing the rollout becomes later.',
            ],
            practice: [
              'Name three ways your proposed AI workflow could fail in production.',
              'Define where human review must happen before the output is acted on.',
            ],
          },
        ],
      },
      {
        slug: 'prompt-architecture',
        title: 'Make prompt logic part of the architecture',
        summary: 'Treat prompts as operational assets rather than disposable text blobs.',
        lessons: [
          {
            slug: 'prompt-boundaries-and-tools',
            title: 'Prompt structure, system boundaries, and tool calls',
            summary: 'Keep prompt logic testable, visible, and separate from the rest of the application logic.',
            duration: '29 min',
            format: 'Workshop',
            content: [
              'Prompt logic is part of the application. If it lives as an undocumented blob buried in UI glue, the system will drift and nobody will know why.',
              'Separate system instructions, task templates, tool constraints, and output contracts. That makes prompt behaviour easier to reason about and easier to improve.',
              'A boring structure beats a clever mess every time.',
            ],
            practice: [
              'Split one existing prompt into system context, task instructions, and output requirements.',
              'Write down the tool boundary or capability the prompt assumes.',
            ],
          },
          {
            slug: 'evaluation-and-debugging',
            title: 'Evaluation and debugging for AI workflows',
            summary: 'Review outputs, capture bad cases, and improve the workflow without guessing blindly.',
            duration: '24 min',
            format: 'Exercise',
            content: [
              'You cannot improve an AI workflow by “trying stuff” forever. Capture failure cases, label what went wrong, and make changes against a known set of examples.',
              'Evaluation does not need to start fancy. A spreadsheet of good cases, bad cases, and the reason for failure is already better than improvising in production.',
              'This is the point where the system starts becoming engineering instead of demo theatre.',
            ],
            practice: [
              'Create a small test set of five expected-good cases and three likely-bad cases.',
              'For each case, write the reason the output should pass or fail.',
            ],
          },
        ],
      },
      {
        slug: 'ship-the-pilot',
        title: 'Ship something boring and useful',
        summary: 'Turn the architecture into a pilot that can handle real data, real review, and real constraints.',
        lessons: [
          {
            slug: 'prototype-to-pilot',
            title: 'From prototype to pilot',
            summary: 'Add logging, retry thinking, review gates, and safer rollout patterns.',
            duration: '27 min',
            format: 'Lesson',
            content: [
              'A prototype proves a possibility. A pilot proves an operating path. They are not the same thing.',
              'Pilots need logging, explicit ownership, fallback behaviour, and a rollback mindset. Otherwise the first odd case turns into confusion and finger-pointing.',
              'The goal is not to build the biggest thing. The goal is to ship the smallest system that remains useful under pressure.',
            ],
            practice: [
              'Write the minimum observability you need before exposing the workflow to users.',
              'Define what should happen when the model output is empty, weak, or unsafe.',
            ],
          },
          {
            slug: 'production-credible-workflow',
            title: 'Capstone: design your first production-credible workflow',
            summary: 'Leave with a scoped implementation plan instead of another rough concept.',
            duration: '36 min',
            format: 'Capstone',
            content: [
              'This capstone forces the build into a form that another engineer, operator, or reviewer can actually reason about.',
              'You define scope, trigger, prompt boundary, tool boundary, review step, failure handling, and success measure. That is the minimum shape of a credible AI workflow.',
              'If you can explain all of that clearly, you are building a system. If not, you are still in concept mode.',
            ],
            practice: [
              'Write a one-page implementation brief for the workflow you want to ship.',
              'List the first three risks you need to test before calling the pilot successful.',
            ],
          },
        ],
      },
    ],
  },
];
