import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from './Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-300">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            to="/projects"
            className="group inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full
                      hover:bg-white/10 transition-all duration-300"
          >
            <motion.span
              className="mr-2 text-purple-400 transform transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </motion.span>
            <span className="text-purple-400 font-medium">
              Back to Projects
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-[400px]">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-purple-300 text-xl">{project.client}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies/Tags */}
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 rounded-full text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Results</h2>
              <p className="text-gray-300">
                {project.resultsDescription}
              </p>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-white/5 p-6 rounded-2xl">
                <p className="text-gray-300 italic">
                  "{project.testimonial}"
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 