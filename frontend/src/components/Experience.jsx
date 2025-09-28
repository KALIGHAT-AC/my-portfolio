import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
        {
      type: 'work',
      title: 'Agency Operative & Chaos Bringer',
      company: 'Just Cause 2',
      location: 'Panau, Southeast Asia',
      period: '2010 - 2012',
      description: 'Worked as Rico Rodriguez to destabilize the Panauan government and throw out Baby Panay by teaming up with rival criminal factions namely the Roaches, the Reapers and the Ulars',
      technologies: ['Quad Rocket Launcher', 'Triggered Explosives', 'Rico Signature Gun', 'Submachine Gun', 'Sewed off Shotgun'],
      achievements: [
        'Toppled President Baby Panay’s regime',
        'Took down heavily fortified military bases and oil rigs',
        'Established dominance by completing faction missions and agency objectives'
      ]
    },
    {
      type: 'work',
      title: 'Protagonist & Heist Planner',
      company: 'Grand Theft Auto V',
      location: 'Los Santos, USA',
      period: '2013 - 2015',
      description: 'Took control of Michael, Franklin, and Trevor to carry out missions across Los Santos and built alliances and rivalries while navigating the criminal underworld to execute large-scale heists, balancing stealth, firepower, and strategy.',
      technologies: ['Honing Missiles', 'Railgun', 'Machette', 'Heavy Sniper', 'Special SMG'],
      achievements: [
        'Successfully completed the Union Depository heist',
        'Survived betrayals and rival gangs while keeping the crew intact',
        'Amassed wealth and influence across Los Santos'
      ]
    },
    {
      type: 'work',
      title: 'Revolutionary Leader',
      company: 'Just Cause 3',
      location: 'Medici, Southern Europe',
      period: '2015 - 2017',
      description: 'Returned to Medici as Rico Rodriguez to lead a revolution against General Di Ravello. Then mastered wingsuit, grappling hook, and parachute for unmatched mobility. Ended up destroying enemy propaganda, bases, and weaponry to liberate provinces',
      technologies: ['Bavarium Splitter', 'Urga Vdova 89', 'M488', 'Little General', 'Eden Spark'],
      achievements: [
        'Defeated General Di Ravello and ended his dictatorship',
        'Liberated the entire Medici by defeating Di Ravello Army on the battlefield',
        'Inspired the people of Medici to rise and claim freedom'
      ]
    }
  ];

  const education = [
    {
      degree: 'Indian Certificate of Secondary Education (ICSE)',
      field: 'All Subjects (English, PCMB, History & Geography, Bengali and Computer)',
      institution: 'Julien Day School',
      location: 'Kolkata, India',
      period: '2022',
      grade: '97.4%',
      description: 'Successfully gained a strong foundation in Mathematics, Science, and English with emphasis on analytical and problem-solving skills.'
    },
    {
      degree: 'Indian School Certificate (ISC)',
      field: 'Science (Physics, Chemistry, Mathematics and Biology)',
      institution: 'Julien Day School',
      location: 'Kolkata, India',
      period: '2024',
      grade: '94%',
      description: 'Strong foundation in science and analytical thinking. Participated in various science competitions and programming contests.'
    },
        {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering - Cyber Security (CSE-CS)',
      institution: 'Techno Main Salt Lake',
      location: 'Sector V, West Bengal',
      period: '2024 - Present',
      grade: 'YGPA: 8.84',
      description: 'Starting to enter the world of technology and software development. Got carried to Skill de X Hackathon 2024 win by my friends'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 mx-auto mb-8"></div>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Game Experience
              </h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <h5 className="text-lg text-blue-600 dark:text-indigo-400 font-medium mb-2">
                          {exp.company}
                        </h5>
                      </div>
                      <div className="flex flex-col md:text-right">
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h6 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Weapons Used in Game:
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-blue-300 text-blue-700 dark:border-indigo-400 dark:text-indigo-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h6 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h6>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <h5 className="text-lg text-blue-600 dark:text-indigo-400 font-medium mb-1">
                          {edu.field}
                        </h5>
                        <h6 className="text-gray-700 dark:text-gray-300 font-medium">
                          {edu.institution}
                        </h6>
                      </div>
                      <div className="flex flex-col md:text-right mt-2 md:mt-0">
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="text-sm font-medium text-green-600 dark:text-green-400">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;