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
        slug: 'what-ai-is',
        title: 'Get clear on what AI is',
        summary: 'Strip away the noise and build a usable mental model before you touch anything advanced.',
        lessons: [
          {
            slug: 'what-ai-is-actually-doing',
            title: 'What AI is actually doing under the hood',
            summary: 'Pattern prediction, probabilistic output, and why fluent text is not the same thing as truth.',
            duration: '22 min',
            format: 'Lesson',
            content: [
              'Start with the boring truth: large language models are prediction systems. They do not “know” things in the same way a person does. They predict the next useful token based on patterns learned from huge amounts of data.',
              'That prediction ability is still useful. It means the model can draft, summarise, classify, transform, and explain information quickly. But the same mechanism also means it can produce fluent nonsense when the patterns are weak or the request is underspecified.',
              'The practical rule is simple: treat the model like a fast first-pass operator. It can move work forward. It should not be mistaken for an accountable source of truth.',
            ],
            practice: [
              'Explain AI to a non-technical colleague in three sentences without using the words “intelligence” or “revolution.”',
              'List one task where fluent wording could hide a dangerous error in your work.',
            ],
          },
          {
            slug: 'where-ai-helps-and-breaks',
            title: 'Where AI helps and where it still breaks',
            summary: 'Identify the good use cases, the dangerous ones, and the work humans still own.',
            duration: '18 min',
            format: 'Lesson',
            content: [
              'AI tends to help most with repeated language-heavy work: drafting, summarising, categorising, planning, extracting, and restructuring information.',
              'It becomes riskier when the task requires factual certainty, compliance, high-context judgement, or accountability. That is where confident mistakes become expensive.',
              'The point is not to avoid AI. The point is to use it where its strengths matter and to design human review where the downside is real.',
            ],
            practice: [
              'Write down three tasks where AI is a good assistant for you right now.',
              'Write down one task you should not hand over to AI without final review.',
            ],
          },
        ],
      },
      {
        slug: 'brief-the-model',
        title: 'Learn to brief the model properly',
        summary: 'Good prompting is mostly good briefing, not mystical wording hacks.',
        lessons: [
          {
            slug: 'prompt-structure',
            title: 'Prompt structure that produces better output',
            summary: 'Use context, constraints, examples, and output formatting to get more reliable work.',
            duration: '26 min',
            format: 'Workshop',
            content: [
              'Weak prompts are vague briefs. Strong prompts give the model enough context to understand the job, enough constraints to avoid drift, and a usable output format.',
              'A practical structure is: role or task, context, goal, constraints, input material, and required output format. That one pattern already solves most beginner prompting problems.',
              'You do not need magic wording. You need clearer instructions and a better definition of done.',
            ],
            practice: [
              'Rewrite one vague prompt you already use into a structured brief.',
              'Add an explicit output format to the next prompt you run.',
            ],
          },
          {
            slug: 'fix-weak-outputs',
            title: 'Fix weak outputs without starting over every time',
            summary: 'Turn corrections, follow-up prompts, and review notes into an actual workflow.',
            duration: '17 min',
            format: 'Exercise',
            content: [
              'Most people throw away the whole exchange when the first answer is weak. That is usually the wrong move. Use feedback loops instead: point out what is wrong, tighten the brief, and ask for a revised version.',
              'This is where AI starts feeling useful. You stop treating the first output like a final answer and start treating the system like a drafting partner that responds to review.',
              'The hidden win is operational: your corrections reveal the prompt pattern you actually need to save and reuse later.',
            ],
            practice: [
              'Take one weak AI output and improve it in two rounds instead of starting over.',
              'Write down the correction pattern you used so it becomes a reusable prompt note.',
            ],
          },
        ],
      },
      {
        slug: 'daily-use',
        title: 'Use AI in daily work without becoming careless',
        summary: 'Move from understanding into practical habits that hold up in real life.',
        lessons: [
          {
            slug: 'low-risk-first-wins',
            title: 'Low-risk first wins for work and study',
            summary: 'Use AI for summaries, first drafts, planning, and revision in ways that save time.',
            duration: '24 min',
            format: 'Lesson',
            content: [
              'The fastest honest wins usually come from tasks that already have human review built in: summarising notes, drafting messages, planning work, and generating first-pass study aids.',
              'This matters because low-risk wins build confidence without creating bad habits. People learn the tool faster when the downside of a weak output is recoverable.',
              'Start small. Build a repeatable habit. Then expand once the process is under control.',
            ],
            practice: [
              'Use AI to draft one email and then edit it before sending.',
              'Use AI to turn notes into a short action list for tomorrow.',
            ],
          },
          {
            slug: 'privacy-and-review',
            title: 'Privacy, accuracy, and review discipline',
            summary: 'Learn the guardrails that stop beginner mistakes from becoming expensive mistakes.',
            duration: '20 min',
            format: 'Checklist',
            content: [
              'Do not feed sensitive data into tools casually. Check what information belongs in the system and what does not. Privacy and confidentiality are not optional just because a tool is convenient.',
              'Also stop confusing confidence with correctness. Outputs still need review, especially when the work touches clients, money, law, health, or brand risk.',
              'The strongest beginner habit is simple: review everything that matters before it leaves your hands.',
            ],
            practice: [
              'List the kinds of sensitive information you should not paste into public AI tools.',
              'Create a two-step review rule for anything AI-generated that goes to a client or stakeholder.',
            ],
          },
          {
            slug: 'first-ai-workflow',
            title: 'Capstone: build your first useful AI workflow',
            summary: 'Choose a real task, document your process, and leave with something reusable.',
            duration: '35 min',
            format: 'Capstone',
            content: [
              'The capstone turns theory into operating behaviour. Choose one real task, define the input, define what good output looks like, and document where human review happens.',
              'This is the moment the learner stops “trying AI” and starts building a repeatable way of using it.',
              'If the workflow is small, clear, and used again next week, the course has done its job.',
            ],
            practice: [
              'Document one task you repeat every week and design an AI-assisted version of it.',
              'Write the prompt, the review step, and the final output format you will use going forward.',
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
