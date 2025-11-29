import { LucideIcon } from 'lucide-react';

export interface PracticeArea {
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
}

export interface Testimonial {
  name: string;
  initial: string;
  text: string;
  timeframe: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceArea {
  county: string;
  cities: string;
  description: string;
}

export interface Award {
  title: string;
  image: string;
  year?: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
}