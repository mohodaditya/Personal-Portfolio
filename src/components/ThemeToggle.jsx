import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-amber-400" />
      ) : (
        <Moon size={20} className="text-indigo-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;