export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  role?: string;
  tools?: string[];
  publishedOn?: string;
  link?: { label: string; url: string };
  challenge: string;
  research: string;
  strategy: string;
  creativeDirection: string;
  execution: string;
  deliverables: string[];
  results: string[];
  lessonsLearned: string;
  gallery: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  client: string;
  project: string;
}

export interface TechItem {
  name: string;
  category: string;
}
