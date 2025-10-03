import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import profilePic from "../assets/ProfileImage.jpeg";
import { ArrowDown, Github, Linkedin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(""); 
  const fullText = "Soumyajit Ghosh"; // 👈 Your name to type

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // typing speed in ms
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://whatsapp.com', color: 'hover:text-green-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/soumyajit-ghosh-321307318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/KALIGHAT-AC', color: 'hover:text-gray-600 dark:hover:text-gray-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', color: 'hover:text-blue-700' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-600' }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white dark:from-gray-900 dark:to-indigo-900 pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto rounded-full p-[3px] bg-gradient-to-r from-blue-500 to-indigo-600">
              <img
                src={profilePic}
                alt="Soumyajit Ghosh"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-pulse">|</span> {/* blinking cursor */}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring Software Engineer and Problem-Solving Enthusiast
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about learning programming and building user-friendly applications. I enjoy exploring ways to turn complex problems into simple, effective solutions as I grow my skills.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
