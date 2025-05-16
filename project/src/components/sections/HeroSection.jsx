import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Aditya Mohod
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 h-12 md:h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1500,
                'MERN Stack Learner',
                1500,
                'AI Explorer',
                1500,
                'Linux Power User',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Frontend Web Developer (React, Vite) | Passionate about Building Scalable & User-Friendly Interfaces | Open to Software Engineer Internships.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center justify-center space-x-4 pt-8"
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#about" className="btn btn-outline">
              About Me
            </a>
            <motion.a
              href="/public/assets/projects/Aditya Mohod RESUME.pdf"
              download
              className="btn btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;