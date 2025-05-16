import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/mohodaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-mohod/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adityamohod754@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Aditya Mohod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;