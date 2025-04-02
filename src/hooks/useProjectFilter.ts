import { useMemo } from 'react';
import type { Project, ProjectFilterState } from '../types/project.types';

export const useProjectFilter = (
  projects: readonly Project[],
  filterState: ProjectFilterState
) => {
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = !filterState.category || project.category === filterState.category;
      
      const matchesSearch = project.title.toLowerCase().includes(filterState.searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(filterState.searchQuery.toLowerCase());
      
      const matchesTechnologies = filterState.technologies.length === 0 || 
        filterState.technologies.every(tech => project.technologies.includes(tech));
      
      return matchesCategory && matchesSearch && matchesTechnologies;
    });
  }, [projects, filterState]);

  const allTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap(project => project.technologies)));
  }, [projects]);

  const categories = useMemo(() => {
    return Array.from(new Set(projects.map(project => project.category)));
  }, [projects]);

  return {
    filteredProjects,
    allTechnologies,
    categories
  };
}; 