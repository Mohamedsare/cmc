export type DomainId =
  | "mines"
  | "conduite-engins"
  | "electricite"
  | "industrie"
  | "commerce"
  | "hse"
  | "informatique"
  | "logistique";

export interface Domain {
  id: DomainId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Formation {
  slug: string;
  name: string;
  domain: DomainId;
  domainLabel: string;
  duration: string;
  cost: number;
  registrationFee: number;
  installments: number[];
  description: string;
  popular?: boolean;
  level?: string;
  certificate?: string;
  learnings: string[];
  careers: string[];
  conditions: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  range: string;
  registrationFee: number;
  description: string;
  featured?: boolean;
  examples: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  gradient: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}
