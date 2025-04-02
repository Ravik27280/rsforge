import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types/project.types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const handleClick = () => {
    onClick?.(project);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
      onClick={handleClick}
      data-testid="project-card"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
      <div className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-black border border-gray-100 dark:border-gray-800">
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:from-transparent dark:to-black/40" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={`${tech}-${i}`}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center"
              onClick={handleLinkClick}
              aria-label="View GitHub Repository"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center"
                onClick={handleLinkClick}
                aria-label="View Live Demo"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 