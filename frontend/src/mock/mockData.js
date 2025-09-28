// Mock data for the portfolio - can be easily replaced with real data later

export const mockPersonalInfo = {
  name: "Soumyajit Ghosh",
  title: "Full Stack Developer & Creative Problem Solver",
  description: "Passionate about creating beautiful, functional, and user-friendly applications. I love turning complex problems into simple, elegant solutions.",
  email: "soumyajit.example@gmail.com",
  phone: "+91 9876543210",
  location: "Kolkata, India",
  avatar: "/api/placeholder/150/150" // Placeholder - will be replaced with actual image
};

export const mockSocialLinks = {
  whatsapp: "https://whatsapp.com",
  linkedin: "https://linkedin.com", 
  github: "https://github.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com"
};

export const mockAbout = {
  mainText: `Hello! I'm Soumyajit, a dedicated full-stack developer who thrives on creating 
  innovative digital solutions. My journey in technology began with curiosity and 
  has evolved into a passion for building applications that make a real difference.`,
  secondaryText: `I specialize in modern web technologies and love working on projects that challenge 
  me to learn and grow. From concept to deployment, I enjoy every step of the 
  development process and take pride in delivering high-quality, user-centric solutions.`,
  thirdText: `When I'm not coding, you can find me exploring new technologies, contributing to 
  open-source projects, or sharing knowledge with the developer community. I believe 
  in continuous learning and staying updated with the latest industry trends.`,
  stats: {
    experience: "5+",
    projects: "50+", 
    clients: "100+",
    support: "24/7"
  }
};

export const mockSkills = {
  frontend: [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 80 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'FastAPI', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 70 }
  ],
  database: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Firebase', level: 80 }
  ],
  tools: [
    'VS Code', 'Figma', 'Postman', 'GitHub', 'Slack', 'Jira', 
    'Notion', 'Adobe XD', 'Chrome DevTools', 'NPM/Yarn'
  ]
};

export const mockExperience = {
  work: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY', 
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects, focusing on responsive web applications and API development. Collaborated with design teams to implement pixel-perfect UIs.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker', 'FastAPI'],
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 35%',
        'Improved code review process'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Indian Institute of Technology',
      location: 'India',
      period: '2015 - 2019',
      grade: 'CGPA: 8.5/10',
      description: 'Focused on software engineering, data structures, algorithms, and web development. Active member of coding club and hackathon participant.'
    }
  ]
};

export const mockProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/soumyajit/ecommerce',
    category: 'Full Stack',
    date: 'Dec 2023'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    liveUrl: 'https://example-taskapp.com',
    githubUrl: 'https://github.com/soumyajit/task-manager',
    category: 'Frontend',
    date: 'Nov 2023'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with geolocation support, 7-day forecast, and beautiful data visualizations using Chart.js.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/soumyajit/weather-app',
    category: 'Frontend',
    date: 'Oct 2023'
  }
];

export const mockFormspreeConfig = {
  formId: 'mnngjgkv', // Replace with actual Formspree form ID
  endpoint: 'https://formspree.io/f/mnngjgkv'
};