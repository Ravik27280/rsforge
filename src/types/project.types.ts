export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoUrl?: string;
  date: string;
}

export type ProjectCategory = 'All' | 'Web Development' | 'Frontend' | 'Full Stack' | 'Mobile' | 'AR/VR' | 'Space Tech' | 'Healthcare';

export interface ProjectFilterState {
  category: string;
  searchQuery: string;
  technologies: string[];
} 