/**
 * Central content store for the portfolio.
 * Edit these arrays/objects to update the site — no component changes needed.
 */

export const profile = {
  name: 'Kavinda Ikiriwatte',
  role: 'Full Stack Engineer',
  tagline: 'Building scalable, reliable, and user-focused web applications.',
  experienceYears: '7+',
  location: 'Kandy, Sri Lanka',
  email: 'kavindai@outlook.com',
  linkedin: 'https://www.linkedin.com/in/kavinda-ikiriwatte/',
  github: 'https://github.com/AchiGitHub',
  resumeUrl: '/cv.pdf', // served from /public/cv.pdf
  resumeFileName: 'Kavinda-Ikiriwatte-CV.pdf',
  summary:
    'I am a Full Stack Engineer with 7+ years of experience building scalable, reliable, and user-focused web applications. I have strong experience across frontend development, backend systems, cloud infrastructure, and modern software engineering practices. I enjoy designing clean user interfaces, building robust APIs, improving system performance, and deploying applications on AWS.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  { value: '7+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '3', label: 'Degrees Earned' },
  { value: '1', label: 'IEEE Publication' },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Creative Software / ATL — CtrlPrint',
    role: 'Full Stack Engineer',
    period: '2023 — Present',
    current: true,
    description:
      'Driving modern frontend development with React and building robust backend services in Go for a collaborative print-production platform. Focused on performance, clean architecture, and delivering a polished end-user experience.',
    tech: ['React', 'Go', 'TypeScript', 'REST APIs'],
  },
  {
    company: 'Millennium IT ESP',
    role: 'Senior Software Engineer — Vision Platform',
    period: '2022 Aug — 2023',
    description:
      'Built a workflow platform that lets teams create configurable user flows for diverse use cases. Use cases are configured from an admin portal and consumed through a client portal driven by workflows, using a microservices and microfrontend architecture.',
    tech: [
      'ReactJS',
      'Redux',
      'Nx Workspace',
      'GraphQL',
      'ASP.NET Core',
      'RabbitMQ',
      'PostgreSQL',
      'Docker',
      'Node.js',
      'Microservices',
      'Microfrontends',
    ],
  },
  {
    company: 'Millennium IT ESP',
    role: 'Software Engineer — Enterprise Application Development',
    period: '2019 Nov — 2022 Jul',
    description:
      'Delivered enterprise web applications across the full stack, contributing to self-care portals, user management, and Wi-Fi access systems built on microservice architectures.',
    tech: ['ReactJS', 'Redux', 'Spring Boot', 'PostgreSQL', 'Docker', 'Microservices'],
  },
  {
    company: 'Millennium IT ESP',
    role: 'Intern — Enterprise Application Development',
    period: '2019 Mar — 2019 Nov',
    description:
      'Began my professional journey contributing to enterprise application development, learning production engineering practices and modern web development.',
    tech: ['JavaScript', 'Java', 'SQL'],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Chakra UI',
      'Redux',
      'Redux Toolkit',
      'React Native',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Go',
      'Java',
      'Spring Boot',
      'ASP.NET Core',
      'REST APIs',
      'GraphQL',
      'PHP',
      'Laravel',
      'Python',
    ],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'SQL', 'NoSQL'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'EC2',
      'S3',
      'Lambda',
      'RDS',
      'CloudFront',
      'API Gateway',
      'IAM',
      'CloudWatch',
      'CloudFormation',
      'AWS Cognito',
      'Docker',
      'CI/CD',
      'GitHub Actions',
    ],
  },
  {
    category: 'Tools & Testing',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'Linux', 'Jest', 'React Testing Library'],
  },
  {
    category: 'Other',
    skills: [
      'Microservices',
      'Microfrontends',
      'RabbitMQ',
      'Nx Workspace',
      'Solidity',
      'Web3.js',
      'Truffle Suite',
      'Ganache',
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  tag?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'CtrlPrint',
    tag: 'Professional',
    featured: true,
    description:
      'A collaborative print-production platform. I work across the stack — building modern React interfaces and Go backend services — with a focus on performance, reliability, and a refined user experience.',
    tech: ['React', 'Go', 'TypeScript'],
  },
  {
    title: 'Nexus Vision',
    tag: 'Platform',
    featured: true,
    description:
      'A workflow-based platform where admin users configure user flows for different use cases and client users interact with those configured workflows, built on a microservices and microfrontend foundation.',
    tech: [
      'ReactJS',
      'Redux',
      'Nx Workspace',
      'GraphQL',
      'ASP.NET Core',
      'RabbitMQ',
      'PostgreSQL',
      'Docker',
      'Node.js',
      'Microservices',
      'Microfrontends',
    ],
  },
  {
    title: 'SLT OTT CRM',
    tag: 'Frontend',
    featured: true,
    description:
      "Self-care portal and user-management subsystem for SLT's Over-The-Top delivery. Worked as a frontend developer delivering a responsive, intuitive customer-facing experience.",
    tech: ['ReactJS', 'Redux', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Docker', 'Microservices'],
  },
  {
    title: 'Mi Guest Wi-Fi',
    tag: 'Admin Portal',
    description:
      'Internal admin portal that allows guest users to access internal Wi-Fi, integrating with a RADIUS server for authentication and access control.',
    tech: ['ReactJS', 'Redux', 'Spring Boot', 'PostgreSQL', 'RADIUS Server'],
  },
  {
    title: 'Vehicle Hire Platform on AWS',
    tag: 'Cloud / Serverless',
    description:
      "A serverless microservice platform built entirely on AWS as part of my master's degree, demonstrating cloud-native architecture and infrastructure as code.",
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'CloudFormation', 'AWS Cognito'],
  },
  {
    title: 'Coinfo',
    tag: 'Mobile',
    description:
      'A mobile application that displays the latest cryptocurrency prices and daily price movements with a clean, fast interface.',
    tech: ['React Native', 'Redux Thunk', 'Axios', 'React Navigation'],
  },
  {
    title: 'Secure Blockchain Framework',
    tag: 'Research · Distinction',
    description:
      'MSc research project (distinction) — a secure framework with encryption and access control for interoperable blockchain networks using router blockchain networks.',
    tech: ['Solidity', 'Truffle Suite', 'Ganache CLI', 'Web3.js', 'Node.js', 'ReactJS', 'Redux Toolkit', 'Docker'],
  },
];

export const publications = [
  {
    title: 'Traffic Density Estimation and Traffic Control using Convolutional Neural Network',
    authors: 'A.K. Ikiriwatte, D.D.R. Perera, S.M.M.C. Samarakoon, D.M.W.C.B. Dissanayake and P.L. Rupasignhe',
    venue: '2019 International Conference on Advancements in Computing (ICAC)',
    link: 'https://ieeexplore.ieee.org/document/9103369',
  },
];

export type Education = {
  degree: string;
  institution: string;
  meta?: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: 'MSc in Advanced Software Engineering',
    institution: 'University of Westminster, England',
    meta: 'Affiliated with Informatics Institute of Technology',
    period: '2020 May — 2022 May',
  },
  {
    degree: 'BSc in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology',
    period: '2016 Jan — 2019 Nov',
  },
  {
    degree: 'BSc in Statistics and Mathematics',
    institution: 'University of Peradeniya, Sri Lanka',
    period: '2016 Jan — 2018 Nov',
  },
];
