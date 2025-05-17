import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills.js';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'programming', label: 'Programming Languages' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  // Debug logging
  useEffect(() => {
    console.log('Active Category:', activeCategory);
    console.log('Filtered Skills:', filteredSkills);
    console.log('C Programming Skill:', skills.find(skill => skill.id === 'c'));
  }, [activeCategory, filteredSkills]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Tools</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={item}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 group hover:bg-gradient-to-br hover:from-primary-500/5 hover:to-primary-600/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        onError={(e) => {
                          console.error(`Failed to load image for ${skill.name}:`, skill.icon);
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = './assets/projects/vite.png'; // Fallback image
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image for ${skill.name}:`, skill.icon);
                        }}
                      />
                    </div>
                  </div>
                  <p className="font-medium text-center">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;