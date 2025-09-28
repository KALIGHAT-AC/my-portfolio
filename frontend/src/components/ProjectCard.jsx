import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
            title="View Live Project"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
            title="View Source Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Project Header */}
        <div className="flex items-center justify-between mb-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
          >
            {project.title}
          </a>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-blue-300 text-blue-700 dark:border-indigo-400 dark:text-indigo-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 dark:text-indigo-400 hover:text-blue-700 dark:hover:text-indigo-300 transition-colors text-sm font-medium"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm font-medium"
          >
            <Github size={14} />
            <span>Source</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;