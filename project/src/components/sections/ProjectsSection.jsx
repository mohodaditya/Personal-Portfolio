import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import { projects } from '../../data/projects.js';
import 'keen-slider/keen-slider.min.css';

const ProjectsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    defaultAnimation: {
      duration: 500,
    },
    renderMode: "performance",
    drag: false,
  });

  return (
    <section id="projects" className="section relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>
        
        <div className="relative px-4 md:px-8">
          <div ref={sliderRef} className="keen-slider !overflow-hidden">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="keen-slider__slide !overflow-visible"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 transform-gpu will-change-transform"
                  whileHover={{ y: -8 }}
                >
                  {project.image && (
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.includes('Framer Motion') && (
                        <div className="flex items-center gap-1">
                          <img src="/assets/logos/framer-logo.svg" alt="Framer Logo" className="w-5 h-5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Framer Motion</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.link && (
                        <motion.a 
                          href={project.link} 
                          className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      
                      {project.repoLink && (
                        <motion.a 
                          href={project.repoLink} 
                          className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-gray-200"
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;