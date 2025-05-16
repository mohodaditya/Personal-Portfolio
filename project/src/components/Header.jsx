import React from 'react';
import { motion } from 'framer-motion';

// Replace TypeScript interface with JavaScript object structure
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="text-lg font-semibold">
          Aditya<span className="text-primary-600 dark:text-primary-400">.dev</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a 
          href="#contact" 
          className="hidden md:inline-flex btn btn-primary"
        >
          Let's Connect
        </a>
      </div>
    </motion.header>
  );
};

export default Header;