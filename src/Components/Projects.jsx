import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "bites-and-drizzles",
    title: "bites and drizzles food truck",
    client: "Tech Startup",
    description: "Comprehensive digital marketing strategy that increased client engagement by 150%.",
    image: "/path-to-image.jpg",
    tags: ["Marketing", "Social Media", "Analytics"],
    results: "200% ROI increase",
    resultsDescription: "Achieved a significant return on investment through targeted campaigns and optimization.",
    testimonial: "The team at Spynad transformed our digital presence. Their strategic approach and creativity exceeded our expectations.",
  },
  {
    id: "brand-redesign",
    title: "Brand Redesign",
    client: "Fashion Retailer",
    description: "Complete brand overhaul including logo design, visual identity, and marketing materials.",
    image: "/path-to-image.jpg",
    tags: ["Branding", "Design", "Strategy"],
    results: "35% Brand Recognition Increase",
    resultsDescription: "Significant improvement in brand recognition and customer engagement.",
    testimonial: "The new brand identity perfectly captures our vision and has resonated strongly with our target audience.",
  },
  // Add more projects
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20">
      <motion.div 
        className="container mx-auto px-4 md:px-8 max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 pb-4">
            Our Projects
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Showcasing our successful campaigns and creative solutions
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
        <div className="md:w-1/2">
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-black/80 via-black/40 to-transparent md:block hidden`} />
          </div>
        </div>

        <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
              {project.title}
            </h3>
            <p className="text-purple-300 text-xl mb-6">{project.client}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-purple-300 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Link to={`/projects/${project.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium
                          hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View Project
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Export projects so they can be accessed by ProjectDetail component
export { projects };

export default Projects;
