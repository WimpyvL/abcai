import { Tool, Prompt, UseCase } from './types';

export const TOOLS: Tool[] = [
  {
    name: 'ChatGPT',
    category: 'General Purpose',
    description: 'The industry standard for text generation, reasoning, and coding.',
    bestFor: 'Writing, brainstorming, and complex logic.',
    price: 'Freemium',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Claude',
    category: 'Writing & Analysis',
    description: 'Known for more natural writing and large context windows.',
    bestFor: 'Long-form content and detailed document analysis.',
    price: 'Freemium',
    url: 'https://claude.ai'
  },
  {
    name: 'Perplexity',
    category: 'Search & Research',
    description: 'An AI-powered search engine that provides cited sources.',
    bestFor: 'Fact-checking and real-time research.',
    price: 'Freemium',
    url: 'https://perplexity.ai'
  },
  {
    name: 'Midjourney',
    category: 'Image Generation',
    description: 'The highest quality AI image generator available today.',
    bestFor: 'Professional photography, art, and complex visual concepts.',
    price: 'Paid',
    url: 'https://midjourney.com'
  },
  {
    name: 'Leonardo.ai',
    category: 'Image Generation',
    description: 'A powerful web-based image generator with fine-tuned models.',
    bestFor: 'Game assets, character design, and consistent styles.',
    price: 'Freemium',
    url: 'https://leonardo.ai'
  },
  {
    name: 'Adobe Firefly',
    category: 'Design',
    description: 'Generative AI built directly into Adobe Creative Cloud.',
    bestFor: 'Commercial-safe image generation and editing.',
    price: 'Freemium',
    url: 'https://adobe.com/firefly'
  },
  {
    name: 'ElevenLabs',
    category: 'Audio & Voice',
    description: 'Lifelike AI voice synthesis and cloning technology.',
    bestFor: 'Voiceovers, audiobooks, and localized video content.',
    price: 'Freemium',
    url: 'https://elevenlabs.io'
  },
  {
    name: 'Suno',
    category: 'Audio & Music',
    description: 'Generate full songs with lyrics and vocals from a prompt.',
    bestFor: 'Custom music for content, gifts, or fun.',
    price: 'Freemium',
    url: 'https://suno.com'
  },
  {
    name: 'HeyGen',
    category: 'Video Generation',
    description: 'Create professional videos with AI avatars and voice cloning.',
    bestFor: 'Training videos, personalized sales outreach, and marketing.',
    price: 'Freemium',
    url: 'https://heygen.com'
  },
  {
    name: 'Runway',
    category: 'Video Generation',
    description: 'Next-generation creative tools for video generation and editing.',
    bestFor: 'Cinematic video effects and text-to-video generation.',
    price: 'Freemium',
    url: 'https://runwayml.com'
  },
  {
    name: 'Pika',
    category: 'Video Generation',
    description: 'An idea-to-video platform that brings your imagination to life.',
    bestFor: 'Short animations and social media video content.',
    price: 'Freemium',
    url: 'https://pika.art'
  },
  {
    name: 'Gamma',
    category: 'Presentations',
    description: 'Generate beautiful presentations, websites, and docs from a prompt.',
    bestFor: 'Quick pitch decks and internal business presentations.',
    price: 'Freemium',
    url: 'https://gamma.app'
  },
  {
    name: 'Notion AI',
    category: 'Productivity',
    description: 'AI integrated directly into your Notion workspace.',
    bestFor: 'Summarizing notes, drafting docs, and brainstorming.',
    price: 'Paid',
    url: 'https://notion.so'
  },
  {
    name: 'Cursor',
    category: 'Development',
    description: 'An AI-native code editor built for pair programming with AI.',
    bestFor: 'Software developers looking to 10x their productivity.',
    price: 'Freemium',
    url: 'https://cursor.com'
  },
  {
    name: 'Phind',
    category: 'Development',
    description: 'An AI search engine specifically for developers.',
    bestFor: 'Solving coding problems and learning new technologies.',
    price: 'Freemium',
    url: 'https://phind.com'
  },
  {
    name: 'Fireflies.ai',
    category: 'Meetings',
    description: 'AI meeting assistant that transcribes, summarizes, and analyzes calls.',
    bestFor: 'Automating meeting notes and tracking action items.',
    price: 'Freemium',
    url: 'https://fireflies.ai'
  },
  {
    name: 'Otter.ai',
    category: 'Meetings',
    description: 'Real-time transcription and meeting notes for teams.',
    bestFor: 'Capturing every detail of live meetings and interviews.',
    price: 'Freemium',
    url: 'https://otter.ai'
  },
  {
    name: 'Jasper',
    category: 'Marketing',
    description: 'AI content platform for enterprise marketing teams.',
    bestFor: 'Brand-consistent copy and large-scale content creation.',
    price: 'Paid',
    url: 'https://jasper.ai'
  },
  {
    name: 'Canva Magic Studio',
    category: 'Design',
    description: 'AI tools integrated into the popular design platform.',
    bestFor: 'Small business owners creating social media content.',
    price: 'Freemium',
    url: 'https://canva.com'
  }
];

export const PROMPTS: Prompt[] = [
  {
    id: 'sales-1',
    title: 'Consultative Sales Script',
    category: 'Sales',
    text: 'Act as a high-performing sales consultant. Draft a script for a discovery call with a [Target Client Type] who is struggling with [Problem]. Focus on asking open-ended questions that lead to our solution: [Product/Service].',
    description: 'A script focused on value and discovery rather than hard selling.'
  },
  {
    id: 'sales-2',
    title: 'Objection Handling Guide',
    category: 'Sales',
    text: 'I am selling [Product/Service] and the prospect just said: "[Objection]". Provide 3 different ways to handle this objection using the "Feel, Felt, Found" method or similar consultative techniques.',
    description: 'Turn "no" into "not yet" or "yes".'
  },
  {
    id: 'marketing-1',
    title: 'Local SEO Blog Post',
    category: 'Marketing',
    text: 'Write a 600-word blog post about [Topic] specifically for a South African audience. Include local references, mention [City/Region], and optimize for keywords: [Keywords]. Use a helpful, authoritative tone.',
    description: 'Perfect for building local search authority.'
  },
  {
    id: 'marketing-2',
    title: 'PPC Ad Copy Variations',
    category: 'Marketing',
    text: 'Create 5 variations of Google Search Ad copy for [Product/Service]. Each variation should have a headline (max 30 chars) and a description (max 90 chars). Focus on [Benefit/Offer].',
    description: 'High-converting ad copy in seconds.'
  },
  {
    id: 'email-1',
    title: 'Polite Debt Collection',
    category: 'Email',
    text: 'Write a professional and polite follow-up email for an overdue invoice of [Amount] for [Service]. The tone should be firm but maintain the relationship. Mention the original due date of [Date].',
    description: 'Get paid without burning bridges.'
  },
  {
    id: 'email-2',
    title: 'Re-engagement Campaign',
    category: 'Email',
    text: 'Write a 3-email sequence to re-engage past clients who haven\'t purchased in [Time Period]. Focus on [New Feature/Offer] and offer a [Discount/Incentive] to return.',
    description: 'Bring back your best customers.'
  },
  {
    id: 'support-1',
    title: 'Angry Customer Response',
    category: 'Support',
    text: 'Draft a response to a customer who is angry about [Issue]. Empathize with their frustration, explain what happened without making excuses, and offer [Solution/Compensation].',
    description: 'De-escalate tension with professional empathy.'
  },
  {
    id: 'support-2',
    title: 'FAQ Knowledge Base Article',
    category: 'Support',
    text: 'Write a clear, step-by-step knowledge base article explaining how to [Process/Task] in our system. Use simple language and include a "Troubleshooting" section at the end.',
    description: 'Help customers help themselves.'
  },
  {
    id: 'planning-1',
    title: 'Quarterly Business Review',
    category: 'Planning',
    text: 'Analyze these business metrics: [Metrics]. Identify the top 3 growth opportunities and the 2 biggest risks for the next quarter. Suggest a 90-day action plan to address them.',
    description: 'Strategic thinking powered by your data.'
  },
  {
    id: 'planning-2',
    title: 'Competitor SWOT Analysis',
    category: 'Planning',
    text: 'Perform a SWOT analysis for [Competitor Name] in the [Industry] market. Compare their strengths and weaknesses against our business: [Our Business Name].',
    description: 'Know your competition better than they know themselves.'
  },
  {
    id: 'social-1',
    title: 'Viral LinkedIn Hook',
    category: 'Social',
    text: 'Write 5 different "hooks" for a LinkedIn post about [Topic]. Each hook should be under 2 lines and create enough curiosity to make the reader click "see more".',
    description: 'Stop the scroll and get more views.'
  },
  {
    id: 'social-2',
    title: 'Instagram Carousel Outline',
    category: 'Social',
    text: 'Create a 7-slide outline for an Instagram carousel about [Topic]. Include the headline for each slide, the main point, and a suggested visual description.',
    description: 'Visual storytelling made easy.'
  },
  {
    id: 'dev-1',
    title: 'React Component Refactor',
    category: 'Dev',
    text: 'Refactor the following React component to use functional hooks and improve performance. Explain the changes made: [Code Snippet]',
    description: 'Clean up your codebase with AI assistance.'
  },
  {
    id: 'dev-2',
    title: 'SQL Query Generator',
    category: 'Dev',
    text: 'Write a SQL query to [Task, e.g., find all users who signed up in the last 30 days and have spent more than $100]. Assume a schema with tables: [Table Names and Columns].',
    description: 'Complex queries without the syntax headache.'
  }
];

export const USE_CASES: UseCase[] = [
  {
    industry: 'Guesthouse / Tourism',
    title: 'Automated Guest Concierge',
    description: 'Using AI to handle booking inquiries and local recommendations via WhatsApp, addressing 24/7 staffing gaps.',
    tools: ['ChatGPT', 'WhatsApp Business'],
    benefits: ['Handles late-night queries without extra staff', 'Instant local recommendations', 'Multilingual support for international guests']
  },
  {
    industry: 'Real Estate Agency',
    title: 'Instant Property Listing Generator',
    description: 'Generate professional property descriptions and social media posts from basic specs, saving hours of admin time.',
    tools: ['Claude', 'Canva Magic'],
    benefits: ['Consistent professional tone', 'Faster listing turnaround', 'Automated social media presence']
  },
  {
    industry: 'Schools & Education',
    title: 'Personalized Lesson Planning',
    description: 'Helping teachers create diverse lesson plans and assessment rubrics tailored to different student levels.',
    tools: ['ChatGPT', 'Curipod'],
    benefits: ['Reduces teacher burnout', 'Supports inclusive education', 'Quickly generates practice exams']
  },
  {
    industry: 'Legal Practice',
    title: 'Document Summarization & Review',
    description: 'Quickly scanning long contracts or case law to find specific clauses or summarize key points.',
    tools: ['Claude', 'Harvey AI'],
    benefits: ['Faster research phases', 'Identifies missing clauses', 'Summarizes complex documents for clients']
  },
  {
    industry: 'Doctor\'s Practice',
    title: 'Patient Note Summarization',
    description: 'Transcribing and summarizing patient consultations into structured medical notes for review.',
    tools: ['Whisper', 'ChatGPT'],
    benefits: ['More time with patients', 'Accurate record keeping', 'Reduced administrative overhead']
  },
  {
    industry: 'Small SA Business (Budget)',
    title: 'The "One-Person" Marketing Dept',
    description: 'Using free AI tools to handle email marketing, social media, and basic customer support on a zero-rand budget.',
    tools: ['ChatGPT (Free)', 'Bing Image Creator'],
    benefits: ['Professional output on zero budget', 'Works on low-bandwidth mobile devices', 'Bridges the skills gap for non-marketers']
  },
  {
    industry: 'Agriculture (South Africa)',
    title: 'Smart Crop & Pest Monitoring',
    description: 'Helping small-scale farmers monitor crop health and detect pests early using AI-powered image analysis and weather prediction APIs, specifically designed to work with limited technology and low bandwidth.',
    tools: ['AI Image Analysis', 'Weather APIs', 'WhatsApp AI Bots'],
    benefits: ['Early detection of pests and diseases', 'Increased crop yields and quality', 'Reduced waste of water and fertilizers', 'Accessible via basic smartphones']
  },
  {
    industry: 'Human Resources (South Africa)',
    title: 'AI-Driven Talent & Engagement',
    description: 'Streamlining recruitment and onboarding while boosting employee engagement in a diverse workforce. AI helps bridge the skills gap by identifying potential in non-traditional backgrounds and monitoring sentiment to improve retention.',
    tools: ['AI Applicant Tracking', 'Sentiment Analysis', 'Onboarding Chatbots'],
    benefits: ['Improved hiring efficiency despite skills shortages', 'Personalized onboarding for diverse needs', 'Real-time employee sentiment tracking', 'Higher retention rates through proactive engagement']
  }
];

export const ROLE_PATHS = [
  {
    role: 'Business Owners',
    description: 'Practical AI strategies for leaders to increase efficiency, cut costs, and future-proof their operations in the South African market.',
    path: [
      { level: 'Beginner', topic: 'AI Fundamentals', goal: 'Understand what AI can and cannot do for your bottom line. Learn to identify high-ROI use cases in your current operations.' },
      { level: 'Intermediate', topic: 'Workflow Automation', goal: 'Connect AI to your existing tools (Email, CRM, WhatsApp). Automate repetitive admin tasks like appointment scheduling and basic customer queries.' },
      { level: 'Advanced', topic: 'AI Strategy & Audits', goal: 'Build a long-term AI roadmap and data privacy policy. Learn to evaluate AI vendors and manage the cultural shift within your team.' },
      { level: 'Expert', topic: 'Custom AI Solutions', goal: 'Explore fine-tuning models on your business data or building custom GPTs to act as specialized internal consultants.' }
    ]
  },
  {
    role: 'Creators',
    description: 'Leverage generative AI to scale your content production, maintain brand consistency, and explore new creative frontiers.',
    path: [
      { level: 'Beginner', topic: 'Generative Content', goal: 'Use AI to draft scripts, captions, and basic graphics. Master the art of "iterative prompting" to get better results faster.' },
      { level: 'Intermediate', topic: 'Multi-modal Workflows', goal: 'Combine text-to-image and text-to-video for complex campaigns. Learn to maintain visual consistency across different AI tools.' },
      { level: 'Advanced', topic: 'Brand Voice Training', goal: 'Fine-tune models to consistently match your unique creative style. Build a library of "Style Prompts" that define your brand identity.' },
      { level: 'Expert', topic: 'AI-First Production', goal: 'Integrate AI into every stage of your production pipeline, from conceptualization to final post-production and distribution.' }
    ]
  },
  {
    role: 'Developers',
    description: 'Enhance your development workflow with AI-native tools and learn to build the next generation of intelligent applications.',
    path: [
      { level: 'Beginner', topic: 'AI-Assisted Coding', goal: 'Use Copilot/Cursor to speed up boilerplate and debugging. Learn to write code that is "AI-friendly" (modular and well-documented).' },
      { level: 'Intermediate', topic: 'API Integration', goal: 'Build custom applications using OpenAI or Anthropic APIs. Master function calling and structured data extraction from LLMs.' },
      { level: 'Advanced', topic: 'Vector DBs & RAG', goal: 'Build intelligent apps that chat with your own private data. Learn about embedding models, vector search, and context window management.' },
      { level: 'Expert', topic: 'Agentic Workflows', goal: 'Design systems where multiple AI agents collaborate to solve complex, multi-step problems autonomously.' }
    ]
  },
  {
    role: 'Students',
    description: 'Use AI as a powerful learning companion to master complex subjects, improve research efficiency, and prepare for an AI-integrated workforce.',
    path: [
      { level: 'Beginner', topic: 'Study Assistant', goal: 'Use AI to summarize long readings and explain complex concepts. Learn to use AI as a personalized tutor that adapts to your learning style.' },
      { level: 'Intermediate', topic: 'Critical Thinking', goal: 'Learn to fact-check AI and use it as a debate partner. Understand the limitations and biases of different models.' },
      { level: 'Advanced', topic: 'AI Career Prep', goal: 'Master the AI tools that will be standard in your future industry. Build a portfolio that showcases your ability to work alongside AI.' },
      { level: 'Expert', topic: 'Research & Synthesis', goal: 'Use AI to identify patterns in large datasets and synthesize information from diverse academic sources for advanced research projects.' }
    ]
  }
];

export const COMPARISONS = [
  {
    category: 'Writing & Logic',
    toolA: { name: 'ChatGPT', strength: 'Versatility & Logic', bestFor: 'Brainstorming, complex reasoning, and coding.' },
    toolB: { name: 'Claude', strength: 'Natural Tone', bestFor: 'Long-form writing, natural conversation, and large docs.' }
  },
  {
    category: 'Image Generation',
    toolA: { name: 'Midjourney', strength: 'Aesthetic Quality', bestFor: 'Professional photography and high-end artistic visuals.' },
    toolB: { name: 'Leonardo.ai', strength: 'Control & Style', bestFor: 'Game assets, consistent character design, and fine-tuning.' }
  },
  {
    category: 'Search & Research',
    toolA: { name: 'Perplexity', strength: 'Cited Sources', bestFor: 'Academic research and fact-checked information.' },
    toolB: { name: 'Google AI', strength: 'Ecosystem Sync', bestFor: 'Quick answers integrated with your Google Workspace.' }
  },
  {
    category: 'Video Generation',
    toolA: { name: 'Runway', strength: 'Cinematic Control', bestFor: 'High-end visual effects and creative video experiments.' },
    toolB: { name: 'HeyGen', strength: 'Avatar Realism', bestFor: 'Training videos, avatars, and personalized outreach.' }
  }
];
