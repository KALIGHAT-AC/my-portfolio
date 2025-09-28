import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 66 },
        { name: 'JavaScript', level: 74 },
        { name: 'TypeScript', level: 3 },
        { name: 'HTML/CSS', level: 99 },
        { name: 'Tailwind CSS', level: 59 },
        { name: 'Next.js', level: 5 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
            {
      category: 'Programming Languages',
      skills: [
        { name: 'C#', level: 32 },
        { name: 'Python', level: 88 },
        { name: 'C', level: 90 },
        { name: 'C++', level: 63 },
        { name: 'Java', level: 99.5 },
        { name: 'Dart', level: 28.2 }
      ],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 5 },
        { name: 'Python', level: 88 },
        { name: 'Express.js', level: 8 },
        { name: 'FastAPI', level: 7 },
        { name: 'REST APIs', level: 44 },
        { name: 'GraphQL', level: 19 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 15 },
        { name: 'PostgreSQL', level: 20 },
        { name: 'Git', level: 9 },
        { name: 'Docker', level: 5 },
        { name: 'AWS', level: 2 },
        { name: 'Firebase', level: 11 }
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const tools = [
    'VS Code', 'Figma', 'PyCharm', 'GitHub', 'Flutter', 'Epic Games Store', 
    'Codeblocks', 'Steam', 'Eclipse IDE', 'Unity Hub'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuously learning and adapting to new technologies to deliver cutting-edge solutions
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 dark:bg-indigo-900 dark:text-indigo-200 hover:bg-blue-200 dark:hover:bg-indigo-800 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;