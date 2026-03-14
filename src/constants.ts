import type {
  AudiencePath,
  BuildTrack,
  Comparison,
  FeaturedGuide,
  FooterLinkGroup,
  NavItem,
  Pillar,
  Prompt,
  ReadinessBand,
  ReadinessQuestion,
  ServiceOffer,
  SignatureQuestion,
  Tool,
  TrustSignal,
  UseCase,
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Learn', path: '/learn', description: 'AI basics, first steps, and practical learning tracks.' },
  { label: 'Courses', path: '/courses', description: 'Structured learning tracks for beginners, teams, and builders.' },
  { label: 'Use', path: '/use', description: 'Business use cases, workflow ideas, and adoption guidance.' },
  { label: 'Choose', path: '/choose', description: 'Tool comparisons and plain-English buying decisions.' },
  { label: 'Build', path: '/build', description: 'Technical and no-code implementation paths.' },
  { label: 'Prompts', path: '/prompts', description: 'Ready-to-use prompts grouped by outcome.' },
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    value: '4',
    label: 'core pillars',
    detail: 'Learn, Use, Choose, and Build keep the site structured instead of noisy.',
  },
  {
    value: '6',
    label: 'start paths',
    detail: 'Visitors can begin from their actual goal instead of guessing where to click.',
  },
  {
    value: 'SA-first',
    label: 'practical framing',
    detail: 'Examples reflect budgets, bandwidth, staffing pressure, and ROI reality.',
  },
  {
    value: 'Beginner to technical',
    label: 'coverage',
    detail: 'The platform serves first-timers, teams, founders, operators, and developers.',
  },
];

export const AUDIENCE_PATHS: AudiencePath[] = [
  {
    id: 'new',
    title: "I'm new to AI",
    summary: 'Understand the basics, stop the overwhelm, and learn what is worth your time.',
    href: '/learn',
    firstMove: 'Start with AI basics, better prompts, and simple low-risk use cases.',
    outcomes: ['Understand AI terms without jargon', 'Pick your first tools', 'Use AI safely'],
    journeyProfile: 'beginner',
  },
  {
    id: 'business',
    title: 'I want to use AI in my business',
    summary: 'Find use cases with real ROI instead of chasing whatever is trending this week.',
    href: '/use',
    firstMove: 'Map where your team loses time, then start with admin, support, or sales workflows.',
    outcomes: ['Spot quick wins', 'Reduce repetitive work', 'Avoid risky implementation'],
    journeyProfile: 'business',
  },
  {
    id: 'automate',
    title: 'I want to automate work',
    summary: 'See where AI belongs inside workflows, and where automation alone is enough.',
    href: '/use',
    firstMove: 'Document the current process before touching tools. Bad workflows scale badly.',
    outcomes: ['Map repeatable tasks', 'Choose good automation targets', 'Keep humans in the loop'],
    journeyProfile: 'business',
  },
  {
    id: 'build',
    title: 'I want to build with AI',
    summary: 'Go beyond prompting into APIs, assistants, automations, and lightweight products.',
    href: '/build',
    firstMove: 'Pick one narrow use case and build a boring, useful workflow before going agent-heavy.',
    outcomes: ['Choose the right stack', 'Ship credible prototypes', 'Avoid agent theatre'],
    journeyProfile: 'builder',
  },
  {
    id: 'choose',
    title: 'I want to choose the right tools',
    summary: 'Compare tools by job-to-be-done, budget, and team fit.',
    href: '/choose',
    firstMove: 'Decide the job first. Tool choice gets easier once the use case is honest.',
    outcomes: ['Compare tools clearly', 'Understand pricing tradeoffs', 'Avoid duplicate subscriptions'],
    journeyProfile: 'business',
  },
  {
    id: 'training',
    title: 'I want team training or consulting',
    summary: 'Get workshops, readiness reviews, and implementation support that lead somewhere.',
    href: '/training',
    firstMove: 'Start with a readiness review or scoped workshop before buying a big transformation story.',
    outcomes: ['Upskill teams', 'Plan implementation', 'Create a practical next step'],
    journeyProfile: 'business',
  },
];

export const PILLARS: Pillar[] = [
  {
    id: 'learn',
    title: 'Learn',
    label: 'AI basics without the nonsense',
    summary: 'Plain-language learning tracks for people who need clarity before they need complexity.',
    href: '/learn',
    highlights: ['What AI is', 'Where AI fails', 'Prompting basics'],
    cta: 'Start learning',
  },
  {
    id: 'use',
    title: 'Use',
    label: 'Practical workflows and business adoption',
    summary: 'Role-based examples, automation ideas, and real-world operating guidance.',
    href: '/use',
    highlights: ['Workflow examples', 'Industry use cases', 'Adoption cautions'],
    cta: 'See practical use',
  },
  {
    id: 'choose',
    title: 'Choose',
    label: 'Tool decisions in plain English',
    summary: 'Curated tool guidance focused on use case, pricing, and fit instead of hype.',
    href: '/choose',
    highlights: ['Best tool for the job', 'Free vs paid tradeoffs', 'Simple comparisons'],
    cta: 'Compare tools',
  },
  {
    id: 'build',
    title: 'Build',
    label: 'For technical teams and serious operators',
    summary: 'APIs, automations, lightweight AI systems, and build choices that still make sense later.',
    href: '/build',
    highlights: ['Developer workflows', 'No-code to code path', 'Implementation discipline'],
    cta: 'Build the right thing',
  },
];

export const FEATURED_GUIDES: FeaturedGuide[] = [
  {
    category: 'Start here',
    title: 'AI basics without the nonsense',
    summary: 'A grounded primer on what AI is, what it does well, where it lies, and how to start safely.',
    href: '/learn',
    format: 'Guide',
    takeaways: ['Stop mixing up AI buzzwords', 'Know when to trust outputs', 'Get your first quick wins'],
  },
  {
    category: 'Business',
    title: 'How a small business should start using AI',
    summary: 'A practical sequence for owners who want time savings and better output without buying random subscriptions.',
    href: '/use',
    format: 'Framework',
    takeaways: ['Find repeatable tasks', 'Choose low-risk pilots', 'Measure useful outcomes'],
  },
  {
    category: 'Tools',
    title: 'Choose the right AI tool for the job',
    summary: 'Use-case-first comparisons covering writing, research, meetings, design, coding, and automation.',
    href: '/choose',
    format: 'Comparison',
    takeaways: ['Avoid tool overlap', 'See pricing reality', 'Know the tradeoffs'],
  },
  {
    category: 'Prompts',
    title: 'Prompts that produce work, not fluff',
    summary: 'Outcome-based prompts with clear inputs, expected outputs, and usage notes for real tasks.',
    href: '/prompts',
    format: 'Library',
    takeaways: ['Prompt with structure', 'Customize properly', 'Review outputs faster'],
  },
  {
    category: 'Readiness',
    title: 'AI readiness for teams and business owners',
    summary: 'A quick diagnostic to show whether you should start with training, workflow cleanup, or implementation.',
    href: '/readiness-test',
    format: 'Assessment',
    takeaways: ['Get a score', 'See immediate priorities', 'Know what to do next'],
  },
  {
    category: 'Technical',
    title: 'Build with AI without building nonsense',
    summary: 'A practical path for teams shipping assistants, automations, and API-based workflows.',
    href: '/build',
    format: 'Track',
    takeaways: ['Scope tightly', 'Handle data safely', 'Ship boring reliability'],
  },
];

export const SIGNATURE_QUESTIONS: SignatureQuestion[] = [
  {
    question: 'Can AI build a website?',
    shortAnswer: 'Yes, parts of it. The planning, review, and final decisions still matter.',
    whatAiCanDo: 'Draft copy, scaffold layouts, write components, suggest structure, and speed up implementation.',
    whereHumansMatter: 'Strategy, product judgement, brand clarity, testing, and deciding what should not be built.',
    recommendedPath: 'Start with Learn if you are new, or Build if you want to ship real product workflows.',
  },
  {
    question: 'Can AI help with bookkeeping?',
    shortAnswer: 'It can assist. It should not become your unreviewed finance brain.',
    whatAiCanDo: 'Categorize transactions, summarize expenses, draft follow-up messages, and support reporting workflows.',
    whereHumansMatter: 'Compliance, reconciliation, final sign-off, and anything that can create tax or cashflow mistakes.',
    recommendedPath: 'See Use for business workflow ideas and Choose for tools that fit admin-heavy teams.',
  },
  {
    question: 'Can AI replace staff?',
    shortAnswer: 'Usually no. It changes roles, removes repetitive work, and exposes weak processes.',
    whatAiCanDo: 'Handle repetitive drafting, summarizing, triage, search, and first-pass support.',
    whereHumansMatter: 'Judgement, accountability, client trust, escalation, quality control, and ownership.',
    recommendedPath: 'Use ABCAI to redesign work responsibly before you try to cut headcount.',
  },
  {
    question: 'Can AI help me study or learn faster?',
    shortAnswer: 'Yes, if you use it as a tutor and critic instead of a cheating machine.',
    whatAiCanDo: 'Explain concepts, generate quizzes, summarize readings, and create revision plans.',
    whereHumansMatter: 'Checking facts, doing the hard thinking, and making sure you can perform without the tool.',
    recommendedPath: 'Start in Learn, then use Prompts to build better study workflows.',
  },
];

export const LOCAL_REALITIES = [
  'Budgets are tighter, so free and low-cost stacks matter.',
  'Bandwidth and device constraints still shape what is realistic.',
  'Smaller teams need tools that reduce admin, not add process.',
  'AI adoption fear is real, which means training and guardrails matter.',
];

export const USE_CASES: UseCase[] = [
  {
    industry: 'Tourism and hospitality',
    problem: 'Enquiries arrive all day, but small teams cannot answer every booking question fast enough.',
    aiCanImprove: ['WhatsApp replies', 'FAQ handling', 'itinerary drafting'],
    exampleWorkflow: 'Use AI to draft responses, summarize guest needs, and prepare staff handoff notes before a human confirms.',
    tools: ['ChatGPT', 'WhatsApp Business', 'Perplexity'],
    caution: 'Do not let AI promise availability, pricing, or policy details without a final human check.',
  },
  {
    industry: 'Real estate',
    problem: 'Agents waste time rewriting listing copy, follow-up messages, and client summaries.',
    aiCanImprove: ['Listing descriptions', 'follow-up emails', 'viewing summaries'],
    exampleWorkflow: 'Capture property facts once, generate listing variants, then adapt for website, WhatsApp, and social posts.',
    tools: ['ChatGPT', 'Canva Magic Studio', 'Gamma'],
    caution: 'Fact-check every generated property detail. AI is not allowed to invent square meterage.',
  },
  {
    industry: 'Education and training',
    problem: 'Teachers and trainers are buried in prep, admin, and repetitive explanation.',
    aiCanImprove: ['Lesson outlines', 'rubrics', 'revision guides'],
    exampleWorkflow: 'Use AI to generate first drafts of teaching material, then adapt to grade level and curriculum needs.',
    tools: ['ChatGPT', 'Claude', 'Gamma'],
    caution: 'Do not outsource subject accuracy or assessment integrity to the model.',
  },
  {
    industry: 'Healthcare admin',
    problem: 'Front-desk staff and admin teams lose time to call summaries, reminder messages, and repetitive documents.',
    aiCanImprove: ['Call notes', 'patient instructions', 'admin summaries'],
    exampleWorkflow: 'Transcribe calls, summarize next actions, and draft patient-facing follow-ups for review.',
    tools: ['Otter', 'ChatGPT', 'Claude'],
    caution: 'PII and medical data require strict handling. Public models are not a casual dumping ground.',
  },
  {
    industry: 'Legal and professional services',
    problem: 'Teams spend too much time on document review, intake notes, and first-pass research.',
    aiCanImprove: ['Clause summaries', 'meeting notes', 'research starting points'],
    exampleWorkflow: 'Use AI to create first-pass summaries, issue lists, and client-ready plain-English explanations.',
    tools: ['Claude', 'Perplexity', 'ChatGPT'],
    caution: 'Everything substantive still needs professional review. Hallucinated legal advice is not funny.',
  },
  {
    industry: 'Small service businesses',
    problem: 'Owners are acting as sales, admin, support, and marketing all at once.',
    aiCanImprove: ['Quotes', 'emails', 'content drafts'],
    exampleWorkflow: 'Create reusable prompt templates for common admin, then layer simple automation once the process is stable.',
    tools: ['ChatGPT', 'Canva Magic Studio', 'Make'],
    caution: 'Start with repeated tasks. Do not automate chaos and call it digital transformation.',
  },
];

export const IMPLEMENTATION_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Clean up the work before you automate it',
    summary: 'Document the process, find the repeated steps, and define what good output looks like.',
  },
  {
    phase: 'Phase 2',
    title: 'Pilot one useful workflow',
    summary: 'Pick a small, boring, frequent task where AI can save time without creating outsized risk.',
  },
  {
    phase: 'Phase 3',
    title: 'Measure adoption and quality',
    summary: 'Track time saved, rework rate, user confidence, and where the model still needs supervision.',
  },
  {
    phase: 'Phase 4',
    title: 'Scale with guardrails',
    summary: 'Expand only after prompts, permissions, QA checks, and ownership are clear.',
  },
];

export const TOOLS: Tool[] = [
  {
    name: 'ChatGPT',
    category: 'Assistant',
    useCase: 'Writing and general work',
    pricing: 'Freemium',
    description: 'A strong all-rounder for writing, reasoning, idea generation, and structured task support.',
    bestFor: 'Teams that need one flexible assistant before they start buying specialist tools.',
    fit: 'Great first paid tool if you want broad value across admin, planning, and drafting.',
    caution: 'Still needs fact-checking and explicit instructions for high-stakes work.',
    url: 'https://chatgpt.com',
  },
  {
    name: 'Claude',
    category: 'Assistant',
    useCase: 'Long documents and careful writing',
    pricing: 'Freemium',
    description: 'Often strong at document-heavy work, natural tone, and nuanced summarization.',
    bestFor: 'Policy summaries, long-form drafting, and document analysis.',
    fit: 'Useful when your team works with large docs or wants calmer writing output.',
    caution: 'Do not assume better tone equals better accuracy.',
    url: 'https://claude.ai',
  },
  {
    name: 'Perplexity',
    category: 'Research',
    useCase: 'Research and source-backed answers',
    pricing: 'Freemium',
    description: 'AI-powered search with citations that makes early-stage research faster.',
    bestFor: 'Research, trend checks, market scans, and finding the next source to read.',
    fit: 'A smart complement to ChatGPT or Claude when you need cited answers.',
    caution: 'Citations improve trust, but you still need to inspect the underlying sources.',
    url: 'https://www.perplexity.ai',
  },
  {
    name: 'Canva Magic Studio',
    category: 'Design',
    useCase: 'Fast marketing assets',
    pricing: 'Freemium',
    description: 'Good for lightweight visuals, social assets, and marketing teams that need speed.',
    bestFor: 'Small teams creating day-to-day design output without a dedicated designer.',
    fit: 'Strong for practical content production, especially when brand polish matters more than originality.',
    caution: 'Easy to create generic-looking work if nobody is directing the result.',
    url: 'https://www.canva.com',
  },
  {
    name: 'Gamma',
    category: 'Presentation',
    useCase: 'Presentations and simple docs',
    pricing: 'Freemium',
    description: 'Turns outlines into usable presentations and lightweight shareable documents quickly.',
    bestFor: 'Pitch decks, internal proposals, training docs, and workshop materials.',
    fit: 'Useful when speed matters and the message is already clear.',
    caution: 'A weak brief still becomes a weak deck, just faster.',
    url: 'https://gamma.app',
  },
  {
    name: 'Fireflies',
    category: 'Meetings',
    useCase: 'Meeting notes and follow-up',
    pricing: 'Freemium',
    description: 'Captures meeting transcripts, summaries, and action items.',
    bestFor: 'Sales calls, project handoffs, and teams that forget what was agreed.',
    fit: 'Works well when note-taking is a recurring drag on delivery.',
    caution: 'Participants should know recording is happening and sensitive meetings need policy.',
    url: 'https://fireflies.ai',
  },
  {
    name: 'Otter',
    category: 'Meetings',
    useCase: 'Transcription and live notes',
    pricing: 'Freemium',
    description: 'Reliable meeting transcription and recap support.',
    bestFor: 'Lectures, interviews, workshops, and team calls.',
    fit: 'Good when searchable conversation history matters.',
    caution: 'Transcript quality still drops in noisy or multilingual environments.',
    url: 'https://otter.ai',
  },
  {
    name: 'Make',
    category: 'Automation',
    useCase: 'Workflow automation',
    pricing: 'Freemium',
    description: 'Visual automation builder for connecting apps, AI steps, and operational workflows.',
    bestFor: 'Routing form entries, summarizing inbound messages, and pushing data between tools.',
    fit: 'A practical step once the workflow is already understood and repeated often enough.',
    caution: 'If your process is undefined, Make will automate the mess beautifully.',
    url: 'https://www.make.com',
  },
  {
    name: 'Zapier',
    category: 'Automation',
    useCase: 'Simple app automation',
    pricing: 'Freemium',
    description: 'Accessible automation for teams that want quick wins without heavy setup.',
    bestFor: 'Simple handoffs between forms, email, CRM, and task tools.',
    fit: 'Best when you want easy automation before moving into more flexible systems.',
    caution: 'Costs can stack up fast if you build lots of noisy workflows.',
    url: 'https://zapier.com',
  },
  {
    name: 'Cursor',
    category: 'Developer',
    useCase: 'AI-assisted coding',
    pricing: 'Freemium',
    description: 'An AI-native editor for coding, refactoring, and working across codebases.',
    bestFor: 'Developers who want faster iteration and strong code understanding support.',
    fit: 'Useful when the team already has engineering discipline and wants leverage, not shortcuts.',
    caution: 'It accelerates good engineering and bad engineering equally.',
    url: 'https://www.cursor.com',
  },
  {
    name: 'GitHub Copilot',
    category: 'Developer',
    useCase: 'Inline coding help',
    pricing: 'Paid',
    description: 'Fast inline suggestions and conversational help inside established developer tooling.',
    bestFor: 'Teams already living inside VS Code or JetBrains tools.',
    fit: 'Strong for boilerplate, refactors, and everyday coding flow.',
    caution: 'Inline speed does not remove the need for tests, review, or architectural judgement.',
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'Notion AI',
    category: 'Workspace',
    useCase: 'Knowledge work and internal docs',
    pricing: 'Paid',
    description: 'AI inside a workspace many teams already use for notes, docs, and planning.',
    bestFor: 'Summaries, project notes, writing support, and internal knowledge workflows.',
    fit: 'Good when your team already runs on Notion and wants assistance inside that context.',
    caution: 'Do not buy it just because it is built in. Confirm the workflow value first.',
    url: 'https://www.notion.so/product/ai',
  },
];

export const COMPARISONS: Comparison[] = [
  {
    category: 'General assistant',
    decision: 'Choose the one that matches the work, not the internet argument.',
    toolA: { name: 'ChatGPT', strength: 'Versatility', bestFor: 'Mixed everyday work, reasoning, brainstorming, and drafting.' },
    toolB: { name: 'Claude', strength: 'Document-heavy work', bestFor: 'Long documents, careful writing, and nuanced summaries.' },
  },
  {
    category: 'Research',
    decision: 'Use a research tool when you need sources, not just polished answers.',
    toolA: { name: 'Perplexity', strength: 'Citations and speed', bestFor: 'Source-backed research and fast market scanning.' },
    toolB: { name: 'ChatGPT', strength: 'Synthesis', bestFor: 'Turning your research into plans, summaries, and decisions.' },
  },
  {
    category: 'Automation',
    decision: 'Start simple. The workflow matters more than the platform logo.',
    toolA: { name: 'Zapier', strength: 'Ease of setup', bestFor: 'Straightforward automations and quick wins.' },
    toolB: { name: 'Make', strength: 'Flexibility', bestFor: 'More complex routing, transformation, and operational logic.' },
  },
  {
    category: 'Coding support',
    decision: 'Pick based on team workflow, not just demo magic.',
    toolA: { name: 'Cursor', strength: 'Codebase context', bestFor: 'Pair-programming style workflows and deeper editing tasks.' },
    toolB: { name: 'GitHub Copilot', strength: 'Inline speed', bestFor: 'Fast coding assistance inside existing editor habits.' },
  },
];

export const PROMPTS: Prompt[] = [
  {
    id: 'prompt-sales-discovery',
    title: 'Sales discovery call prep',
    category: 'Sales',
    purpose: 'Prepare for a client discovery call with sharper questions and better positioning.',
    whenToUse: 'Before a first call, proposal meeting, or outbound campaign.',
    prompt:
      'You are helping me prepare for a discovery call with a [type of client] in [industry]. Their likely problem is [problem]. Create a call plan with: 1) a short opening, 2) 8 high-signal questions, 3) likely objections, 4) how our offer [offer] could help, and 5) what not to promise too early.',
    inputs: ['type of client', 'industry', 'problem', 'offer'],
    output: 'A discovery plan with questions, objection handling, and positioning notes.',
    tip: 'Use the output to prepare, not to sound robotic on the call.',
  },
  {
    id: 'prompt-email-followup',
    title: 'Professional follow-up email',
    category: 'Email',
    purpose: 'Draft a follow-up that is clear, polite, and actually moves the thread forward.',
    whenToUse: 'After a meeting, proposal, invoice reminder, or stalled conversation.',
    prompt:
      'Draft a concise follow-up email to [person or client] about [topic]. The context is [context]. The goal is [goal]. Keep the tone [tone], include one clear next step, and make the email easy to reply to from a phone.',
    inputs: ['person or client', 'topic', 'context', 'goal', 'tone'],
    output: 'A short email draft with a clear ask and professional tone.',
    tip: 'Add the exact next step you want. Vague follow-ups die in inboxes.',
  },
  {
    id: 'prompt-support-response',
    title: 'Customer support de-escalation',
    category: 'Support',
    purpose: 'Respond to a frustrated customer without sounding defensive or scripted.',
    whenToUse: 'When a client is unhappy, confused, or escalating a support issue.',
    prompt:
      'Draft a response to a customer who is upset about [issue]. Their message said: [paste message]. Acknowledge the frustration, explain what we know so far, avoid blaming language, and offer the next step: [next step]. Keep it calm, human, and clear.',
    inputs: ['issue', 'customer message', 'next step'],
    output: 'A support reply that lowers tension and clarifies what happens next.',
    tip: 'If the customer is right, say so. AI should not be used to dodge accountability.',
  },
  {
    id: 'prompt-marketing-angles',
    title: 'Campaign angle generator',
    category: 'Marketing',
    purpose: 'Generate stronger message angles before writing ads or content.',
    whenToUse: 'At the start of a campaign, launch, product push, or promo period.',
    prompt:
      'I need campaign angles for [product or service] aimed at [audience]. The main promise is [promise]. Generate 5 distinct messaging angles with: target pain point, core idea, headline direction, and why each angle might convert.',
    inputs: ['product or service', 'audience', 'promise'],
    output: 'Five clear message angles with rationale and headline direction.',
    tip: 'Pick one angle and test it properly. More angles is not a strategy by itself.',
  },
  {
    id: 'prompt-planning-priorities',
    title: 'Weekly priorities and plan',
    category: 'Planning',
    purpose: 'Turn scattered tasks into a realistic weekly plan.',
    whenToUse: 'At the start of the week or when work feels noisy.',
    prompt:
      'Act as an operations coach. Here is my list of tasks, deadlines, and constraints: [paste details]. Group them into 1) must-do, 2) should-do, and 3) can-wait. Then give me a practical weekly plan with focus blocks, likely risks, and what I should stop doing.',
    inputs: ['tasks, deadlines, and constraints'],
    output: 'A prioritized weekly plan with realistic focus blocks and risks.',
    tip: 'Feed it the real constraints. Fake capacity creates fake plans.',
  },
  {
    id: 'prompt-research-brief',
    title: 'Research brief from messy notes',
    category: 'Research',
    purpose: 'Turn scattered notes into a clean brief or summary.',
    whenToUse: 'After interviews, meetings, desk research, or reading sessions.',
    prompt:
      'Turn these rough notes into a structured brief. Organize them into: key findings, repeated themes, unanswered questions, risks, and recommended next actions. Keep the language clear enough for a non-technical stakeholder. Notes: [paste notes].',
    inputs: ['notes'],
    output: 'A concise research brief with findings, themes, gaps, and next actions.',
    tip: 'Ask the model to quote or reference the source notes when the detail matters.',
  },
  {
    id: 'prompt-ops-sop',
    title: 'SOP draft builder',
    category: 'Operations',
    purpose: 'Create a first draft of a standard operating procedure from a working process.',
    whenToUse: 'When a task is repeated often and needs to become trainable.',
    prompt:
      'Create a simple SOP for this process: [describe process]. Structure it with purpose, owner, required inputs, step-by-step actions, quality checks, and common mistakes. Keep it usable by a new team member.',
    inputs: ['process'],
    output: 'A plain-English SOP draft with steps, checks, and common mistakes.',
    tip: 'This works best when you describe the real process, not the idealized version.',
  },
  {
    id: 'prompt-code-review',
    title: 'Code review assistant',
    category: 'Coding',
    purpose: 'Review code with focus on bugs, risks, and missing tests instead of style chatter.',
    whenToUse: 'During PR review, refactors, or before shipping changes.',
    prompt:
      'Review the following code like a senior engineer. Focus on bugs, edge cases, regressions, security issues, and missing tests. Ignore trivial style comments unless they hide a real problem. Code: [paste code or diff].',
    inputs: ['code or diff'],
    output: 'A prioritized review with concrete findings and test gaps.',
    tip: 'Ask for findings first. Otherwise the model drifts into generic praise.',
  },
  {
    id: 'prompt-study-tutor',
    title: 'Study tutor and quiz generator',
    category: 'Study',
    purpose: 'Learn a topic actively instead of passively re-reading notes.',
    whenToUse: 'Before exams, after lectures, or while learning something unfamiliar.',
    prompt:
      'Teach me [topic] like a patient tutor. First explain it in simple language, then give me 5 quiz questions, then ask me one question at a time and wait for my answer before correcting me. If I struggle, use a simpler example.',
    inputs: ['topic'],
    output: 'An explanation, quiz set, and interactive tutoring flow.',
    tip: 'Use it to test yourself, not to avoid the actual learning.',
  },
];

export const BUILD_TRACKS: BuildTrack[] = [
  {
    audience: 'No-code operators',
    title: 'Automate useful work first',
    summary: 'Use forms, AI steps, and automations to remove repetitive admin without overbuilding.',
    outcomes: ['Map one workflow clearly', 'Use AI inside automation carefully', 'Keep approval points visible'],
  },
  {
    audience: 'Developers',
    title: 'Ship narrow AI products',
    summary: 'Build assistants, extraction tools, and internal copilots with clear boundaries and real evaluation.',
    outcomes: ['Scope one use case', 'Handle prompts and tools cleanly', 'Test failure modes'],
  },
  {
    audience: 'Teams',
    title: 'Build internal operating leverage',
    summary: 'Create lightweight systems for support, sales, research, and knowledge work.',
    outcomes: ['Standardize prompts', 'Protect sensitive data', 'Measure adoption properly'],
  },
  {
    audience: 'Founders and product leads',
    title: 'Find commercial AI opportunities',
    summary: 'Differentiate between useful AI features and expensive theatre.',
    outcomes: ['Pick the right wedge', 'Avoid fake assistants', 'Focus on time-to-value'],
  },
];

export const BUILD_PRINCIPLES = [
  'Separate prompt logic, application logic, and tool boundaries.',
  'Treat AI outputs as proposals until your system proves otherwise.',
  'Prefer one useful workflow over a vague multi-agent platform.',
  'Log prompts, failures, and recovery paths where it matters.',
];

export const BUILD_STARTERS = [
  'Internal knowledge assistant for policies, SOPs, or onboarding',
  'Lead qualification workflow for forms, email, or WhatsApp inbound',
  'Document extraction pipeline for invoices, quotes, or contracts',
  'Meeting summary and action routing for teams that lose decisions in calls',
];

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    title: 'AI readiness review',
    summary: 'A focused assessment of where AI makes sense, where it does not, and what should happen first.',
    audience: 'Founders, business owners, and department leads.',
    deliverables: ['Current-state review', 'Priority use cases', 'Risk and guardrail notes'],
  },
  {
    title: 'Team workshops',
    summary: 'Practical training sessions that help teams use AI better at work without hype or panic.',
    audience: 'Operations, marketing, support, admin, sales, and mixed teams.',
    deliverables: ['Live workshop', 'Role-specific examples', 'Reusable prompt pack'],
  },
  {
    title: 'Courses and cohorts',
    summary: 'Structured learning tracks for individuals, cohorts, and teams who want more depth than a single workshop.',
    audience: 'Learners, cohort leads, and teams building practical AI capability.',
    deliverables: ['Course access guidance', 'Recommended track selection', 'Delivery options for individuals or teams'],
  },
  {
    title: 'Workflow design and automation',
    summary: 'Turn repeated work into a defined process, then automate the parts worth automating.',
    audience: 'Teams losing time to admin, handoffs, and repetitive coordination.',
    deliverables: ['Workflow mapping', 'Pilot automation plan', 'Implementation guidance'],
  },
  {
    title: 'AI implementation support',
    summary: 'Help technical and semi-technical teams build lightweight AI systems that can survive contact with reality.',
    audience: 'Product teams, founders, and technical operators.',
    deliverables: ['Use-case scoping', 'Stack guidance', 'Review of build approach'],
  },
];

export const READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    id: 'goal',
    question: 'How clear is your reason for adopting AI right now?',
    options: [
      { label: 'We mostly do not know. It is vague curiosity or FOMO.', score: 0, note: 'Clarity first.' },
      { label: 'We have ideas, but they are still broad and unprioritized.', score: 1, note: 'You need focus.' },
      { label: 'We know a few repeated problems that AI may help with.', score: 2, note: 'Good starting point.' },
      { label: 'We have a specific workflow or outcome we want to improve.', score: 3, note: 'Strong signal.' },
    ],
  },
  {
    id: 'process',
    question: 'How defined are the workflows you want AI to support?',
    options: [
      { label: 'They are messy, mostly tribal knowledge, and change constantly.', score: 0, note: 'Document the work first.' },
      { label: 'We know the process roughly, but it is inconsistent.', score: 1, note: 'Stabilize before scaling.' },
      { label: 'The workflow is repeatable and partly documented.', score: 2, note: 'Good pilot territory.' },
      { label: 'The workflow is clear, repeatable, and owned.', score: 3, note: 'Ready for measured automation.' },
    ],
  },
  {
    id: 'data',
    question: 'How usable is the information or data the workflow depends on?',
    options: [
      { label: 'It is scattered everywhere and hard to trust.', score: 0, note: 'Data cleanup matters.' },
      { label: 'It exists, but it is inconsistent or hard to access.', score: 1, note: 'Usable with caution.' },
      { label: 'It is mostly accessible and good enough for pilot work.', score: 2, note: 'You can move.' },
      { label: 'It is organized, accessible, and reliable.', score: 3, note: 'Strong base.' },
    ],
  },
  {
    id: 'team',
    question: 'How ready is the team that would use or manage the AI workflow?',
    options: [
      { label: 'They are anxious, confused, or resistant.', score: 0, note: 'Training first.' },
      { label: 'A few people are curious, but there is no shared practice.', score: 1, note: 'Early-stage readiness.' },
      { label: 'There are active users and some emerging champions.', score: 2, note: 'Promising foundation.' },
      { label: 'The team already uses AI responsibly in day-to-day work.', score: 3, note: 'Good operating base.' },
    ],
  },
  {
    id: 'risk',
    question: 'How well do you understand the risks around privacy, quality, and human review?',
    options: [
      { label: 'We have not thought about that much yet.', score: 0, note: 'Do not rush implementation.' },
      { label: 'We know there are risks, but no clear guardrails exist.', score: 1, note: 'Guardrails needed.' },
      { label: 'We know where review is needed and what data is sensitive.', score: 2, note: 'Reasonable baseline.' },
      { label: 'We have clear approval points, data boundaries, and ownership.', score: 3, note: 'Healthy discipline.' },
    ],
  },
];

export const READINESS_BANDS: ReadinessBand[] = [
  {
    name: 'Not ready yet',
    min: 0,
    max: 24,
    summary: 'You should not be buying a stack or automating core workflows yet. Start with clarity, training, and process cleanup.',
    priorities: ['Define the real goal', 'Document repeated workflows', 'Train key people first'],
    recommendation: 'Start with a readiness review or beginner team workshop.',
  },
  {
    name: 'Emerging',
    min: 25,
    max: 49,
    summary: 'You have intent, but not enough operational clarity yet. Pilot work is possible if it stays tightly scoped.',
    priorities: ['Pick one narrow use case', 'Create guardrails', 'Improve data access'],
    recommendation: 'Run one low-risk pilot before expanding.',
  },
  {
    name: 'Operationally promising',
    min: 50,
    max: 74,
    summary: 'You have enough structure to run useful pilots and early automation if ownership stays clear.',
    priorities: ['Measure quality and adoption', 'Create repeatable prompts', 'Formalize review steps'],
    recommendation: 'Pilot a real workflow and track time saved plus error rate.',
  },
  {
    name: 'Ready to scale carefully',
    min: 75,
    max: 100,
    summary: 'You can move beyond experimentation, provided the rollout stays disciplined and measured.',
    priorities: ['Standardize successful workflows', 'Expand with governance', 'Build for maintainability'],
    recommendation: 'Scale proven workflows and consider deeper implementation support.',
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Learn', path: '/learn' },
      { label: 'Courses', path: '/courses' },
      { label: 'Use', path: '/use' },
      { label: 'Choose', path: '/choose' },
      { label: 'Build', path: '/build' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Prompt Library', path: '/prompts' },
      { label: 'AI Readiness Test', path: '/readiness-test' },
      { label: 'Courses and cohorts', path: '/courses' },
      { label: 'Training and Consulting', path: '/training' },
    ],
  },
];
