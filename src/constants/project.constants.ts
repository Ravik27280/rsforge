export const PROJECT_CATEGORIES = [
  'All',
  'Web Development',
  'Frontend',
  'Full Stack',
  'Mobile',
  'AR/VR',
  'Space Tech',
  'Healthcare'
] as const;

export const INITIAL_FILTER_STATE = {
  category: '',
  searchQuery: '',
  technologies: []
}; 