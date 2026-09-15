export type ProjectStatus = 'live-sold' | 'live' | 'complete' | 'in-progress' | 'portfolio';
export type ProjectCategory = 'flagship' | 'in-progress' | 'research' | 'mobile';

export interface Project {
  id: string;
  title: string;
  role?: string;
  company?: string;
  period?: string;
  status: ProjectStatus;
  statusLabel: string;
  category: ProjectCategory;
  stack: string[];
  heroBlurb: string;
  detailedDescription: string;
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export interface ProjectFilter {
  id: ProjectCategory | 'all';
  label: string;
}
