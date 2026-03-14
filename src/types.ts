export interface NavItem {
  label: string;
  path: string;
  description: string;
}

export interface TrustSignal {
  value: string;
  label: string;
  detail: string;
}

export interface AudiencePath {
  id: string;
  title: string;
  summary: string;
  href: string;
  firstMove: string;
  outcomes: string[];
  journeyProfile?: JourneyProfileId;
}

export interface Pillar {
  id: string;
  title: string;
  label: string;
  summary: string;
  href: string;
  highlights: string[];
  cta: string;
}

export interface FeaturedGuide {
  category: string;
  title: string;
  summary: string;
  href: string;
  format: string;
  takeaways: string[];
}

export interface SignatureQuestion {
  question: string;
  shortAnswer: string;
  whatAiCanDo: string;
  whereHumansMatter: string;
  recommendedPath: string;
}

export interface UseCase {
  industry: string;
  problem: string;
  aiCanImprove: string[];
  exampleWorkflow: string;
  tools: string[];
  caution: string;
}

export interface Tool {
  name: string;
  category: string;
  useCase: string;
  pricing: string;
  description: string;
  bestFor: string;
  fit: string;
  caution: string;
  url: string;
}

export interface Comparison {
  category: string;
  decision: string;
  toolA: {
    name: string;
    strength: string;
    bestFor: string;
  };
  toolB: {
    name: string;
    strength: string;
    bestFor: string;
  };
}

export interface Prompt {
  id: string;
  title: string;
  category: string;
  purpose: string;
  whenToUse: string;
  prompt: string;
  inputs: string[];
  output: string;
  tip: string;
}

export interface CourseLesson {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  format: string;
  content: string[];
  practice: string[];
}

export interface CourseModule {
  slug: string;
  title: string;
  summary: string;
  lessons: CourseLesson[];
}

export interface CourseProgress {
  learnerId: string;
  courseSlug: string;
  completedLessonSlugs: string[];
  completionCount: number;
  totalLessons: number;
}

export interface Course {
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
  journeyProfile: JourneyProfileId;
  highlight: string;
  outcomes: string[];
  prerequisites: string[];
  includes: string[];
  forWho: string[];
  deliveryModes: string[];
  modules: CourseModule[];
}

export interface CourseDeliveryModel {
  title: string;
  summary: string;
  bestFor: string;
  includes: string[];
}

export interface BuildTrack {
  audience: string;
  title: string;
  summary: string;
  outcomes: string[];
}

export interface ServiceOffer {
  title: string;
  summary: string;
  audience: string;
  deliverables: string[];
}

export interface ReadinessOption {
  label: string;
  score: number;
  note: string;
}

export interface ReadinessQuestion {
  id: string;
  question: string;
  options: ReadinessOption[];
}

export interface ReadinessBand {
  name: string;
  min: number;
  max: number;
  summary: string;
  priorities: string[];
  recommendation: string;
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    path: string;
  }[];
}

export interface JourneyStage {
  id: string;
  title: string;
  path: string;
  description: string;
}

export interface JourneyLink {
  title: string;
  path: string;
  reason: string;
  outcome: string;
}

export interface JourneyPage {
  stageId: string;
  summary: string;
  nextLabel: string;
  nextPath: string;
  recommendations: JourneyLink[];
}

export type JourneyPageKey = 'home' | 'learn' | 'courses' | 'use' | 'choose' | 'build' | 'prompts' | 'readiness' | 'training';

export type JourneyProfileId = 'beginner' | 'business' | 'builder';

export interface JourneyProfile {
  id: JourneyProfileId;
  title: string;
  summary: string;
  intent: string;
}

export interface AdaptiveJourney {
  profile: JourneyProfile;
  stages: JourneyStage[];
  pages: Record<JourneyPageKey, JourneyPage>;
}
