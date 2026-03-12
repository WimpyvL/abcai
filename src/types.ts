export interface Tool {
  name: string;
  category: string;
  description: string;
  bestFor: string;
  price: 'Free' | 'Freemium' | 'Paid';
  url: string;
}

export interface Prompt {
  id: string;
  title: string;
  category: 'Sales' | 'Marketing' | 'Email' | 'Support' | 'Planning' | 'Social' | 'Dev';
  text: string;
  description: string;
}

export interface UseCase {
  industry: string;
  title: string;
  description: string;
  tools: string[];
  benefits: string[];
}

export interface RolePath {
  role: string;
  path: {
    level: string;
    topic: string;
    goal: string;
  }[];
}
