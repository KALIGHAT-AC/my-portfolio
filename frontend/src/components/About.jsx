import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that follows best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Approaching challenges with creative thinking and analytical problem-solving skills.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex technical concepts clearly.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and exceptional user experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Passionate Developer with a Vision
              </h3>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Soumyajit, a dedicated full-stack developer who thrives on creating 
                  innovative digital solutions. My journey in technology began with curiosity and 
                  has evolved into a passion for building applications that make a real difference.
                </p>
                <p>
                  I specialize in modern web technologies and love working on projects that challenge 
                  me to learn and grow. From concept to deployment, I enjoy every step of the 
                  development process and take pride in delivering high-quality, user-centric solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-blue-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-indigo-400 mb-2">5-</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-indigo-400 mb-2">0+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-indigo-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Games Played</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-indigo-400 mb-2">10/7</div>
              <div className="text-gray-600 dark:text-gray-400">Sleep Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;