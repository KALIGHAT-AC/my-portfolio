import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

// ✅ Import local images
import ecommerceImg from "../assets/ecommerce.png";
import taskappImg from "../assets/taskapp.png";
import weatherImg from "../assets/weather.png";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A full-stack minimalistic surface designed personal responsive portfolio. Built with React.js, Tailwind CSS, and Node.js.',
      image: ecommerceImg,
      technologies: ['React', 'Node.js', 'Javascript', 'Python', 'Tailwind CSS'],
      liveUrl: 'https://soumyajit-ghosh.vercel.app/',
      githubUrl: 'https://github.com/KALIGHAT-AC/my-portfolio',
      category: 'Full Stack',
      date: 'Sep 2025'
    },
    {
      id: 2,
      title: 'To Do List',
      description: 'My first ever Hackathon project where I was merely a team member. My team made this to do list app which successfully won us the competition.',
      image: taskappImg,
      technologies: ['HTML', 'CSS', 'Javascript', 'Google Fonts'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      category: 'Wrote README.md',
      date: 'Sep-Oct 2024'
    },
    {
      id: 3,
      title: 'Weather Dashboard (Completely Fictional and planned)',
      description: 'A responsive weather application with geolocation support, 7-day forecast, and beautiful data visualizations using Chart.js.',
      image: weatherImg,
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      category: 'Frontend',
      date: 'Oct 2026'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/KALIGHAT-AC?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
