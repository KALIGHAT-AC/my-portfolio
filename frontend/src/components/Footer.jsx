import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Soumyajit Ghosh</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating innovative digital solutions 
              that make a difference in people's lives.
            </p>
            <p className="text-gray-400 text-sm">
              Always learning, always creating, always improving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a 
                href="#home" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-gray-400">Email:</span> soumyajitghosh808@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="text-gray-400">Phone:</span> +91 0123456789
              </p>
              <p className="text-gray-300">
                <span className="text-gray-400">Location:</span> Kolkata, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Centered copyright with "Made with ❤️" below it and back-to-top on the right */}
          <div className="flex items-center justify-between w-full">
            {/* Spacer on the left for larger screens to visually center the middle block */}
            <div className="hidden md:block md:flex-1" />

            {/* Center block: copyright and made-with stacked and centered */}
            <div className="flex flex-col items-center text-center md:flex-none">
              <div className="text-gray-400 text-sm">
                © {currentYear} All Rights Reserved
              </div>
              <div className="flex items-center space-x-1 text-gray-300 mt-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by Soumyajit Ghosh</span>
              </div>
            </div>

            {/* Back to Top - right aligned on larger screens */}
            <div className="md:flex-1 md:flex md:justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group"
                aria-label="Back to top"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 dark:bg-gray-950 py-4">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400 text-sm">
            <p>
              Built with React.js & Tailwind CSS • 
              <a 
                href="https://github.com/KALIGHAT-AC/my-portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors ml-1"
              >
                View Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;