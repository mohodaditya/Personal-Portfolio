import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';

import ThemeToggle from './components/ThemeToggle.jsx';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

// Sections
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ScrollProgress />
        <Header />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;