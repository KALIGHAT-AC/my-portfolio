import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

// Function to trigger file download
const handleDownloadCV = () => {
  const fileUrl = "/files/resume.pdf"; // Put your file inside `public/files/` folder
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "SoumyajitGhosh_Resume.pdf"; // File name after download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Soumyajit's Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleDownloadCV}
              className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              <Download size={16} />
              <span>Download CV</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-gray-300 dark:border-gray-600"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-gray-300 dark:border-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors py-2"
              >
                Contact
              </button>
              <Button
                onClick={handleDownloadCV}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;