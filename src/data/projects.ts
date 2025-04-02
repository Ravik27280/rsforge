import { Project } from '../types/project.types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A comprehensive expense tracking application to manage personal finances and track spending patterns.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/expense-tracker",
    demoUrl: "https://expense-tracker-ravik.vercel.app",
    date: "2024"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React.js showcasing projects and professional experience.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/Portfolio",
    demoUrl: "https://ravikumar.engineer",
    date: "2024"
  },
  {
    id: 3,
    title: "Admin Panel",
    description: "A comprehensive admin dashboard with user management, analytics, and content management features.",
    category: "Full Stack",
    technologies: ["JavaScript", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/adminPanel",
    demoUrl: "https://admin-panel-ravik.vercel.app",
    date: "2024"
  },
  {
    id: 4,
    title: "Project Healthy",
    description: "Healthcare management system focused on patient care and medical record management.",
    category: "Healthcare",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/Project-healthy",
    demoUrl: "https://project-healthy.vercel.app",
    date: "2024"
  },
  {
    id: 5,
    title: "AR Visiting Card",
    description: "Innovative augmented reality business card application that brings traditional visiting cards to life.",
    category: "AR/VR",
    technologies: ["C#", "Unity", "AR Foundation"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/AR-Visiting-Card",
    date: "2021"
  },
  {
    id: 6,
    title: "Space App Challenge",
    description: "NASA Space App Challenge project focusing on Mission to Planet Earth: A Digital History.",
    category: "Space Tech",
    technologies: ["C#", "Unity", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Ravik27280/SpaceAppChallenge2020",
    date: "2020"
  }
] as const;