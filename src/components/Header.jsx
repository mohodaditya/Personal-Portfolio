import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-gray-800 bg-[#0a1620]/80 dark:bg-gray-900/80 backdrop-blur-md`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Brand/Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold flex-shrink-0 text-gray-900 dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aditya<span className="text-primary-600 dark:text-primary-400">.dev</span>
        </motion.a>

        {/* Centered Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  className="font-medium text-sm text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-[#0a1620]/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-4 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block font-medium text-sm text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 