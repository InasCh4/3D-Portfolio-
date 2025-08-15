import {
  frontend,
  roboticarm,
  back,
  hardware,
  javascript,
  Arduino,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  PLC,
  carrent,
  jobit,
  tripguide,
  threejs,
  code213,
  sonelgazLogo,
  UMMTO,
  training,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
  {
    title: "Automation Engineer",
    icon: roboticarm,
  },
  {
    title: "Embedded Systems Developer",
    icon: hardware,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Arduino",
    icon: Arduino,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PLC",
    icon: PLC,
  },
];

const experiences = [
  {
    title: "Full-Stack MERN Development Training",
    company_name: "code213 (Private School–Algiers)",
    icon: code213,
    iconBg: "#383E56",
    date: "Summer 2024",
    points: [
      "Learned the complete MERN stack: MongoDB, Express.js, React.js, Node.js.",
      "Built responsive web applications with API handling and authentication.",
      "Implemented NoSQL databases and integrated back-end with front-end.",
      "Applied best practices in version control with Git and project deployment.",
    ],
  },
  {
    title: "Practical Training (Electrical Networks)",
    company_name: "SONELGAZ Distribution Directorate, Tizi Ouzou",
    icon: sonelgazLogo,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Introduction to medium-voltage electrical networks.",
      "Participated in SCADA system operation (supervision and remote control).",
      "Worked with Easergy T200I and T200P equipment.",
      "Programmed and monitored PLC-based control systems.",
    ],
  },
  {
    title: "Bachelor’s Degree in Automation Engineering",
    company_name: "Mouloud Mammeri University of Tizi Ouzou (UMMTO), Algeria",
    icon: UMMTO,
    iconBg: "#383E56",
    date: "2022 – 2025",
    points: [
      "Gained solid foundations in automation systems, control theory, and industrial electronics.",
      "Worked with Programmable Logic Controllers (PLCs) using Ladder Logic programming.",
      "Designed and simulated control systems with MATLAB/Simulink.",
      "Programmed and configured automation projects using Siemens Step7",
      "Designed, simulated, and implemented automation projects.",
    ],
  },
  {
    title: "Self-Training & Freelance Web Development",
    company_name: "Home-based",
    icon: training,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Continuously learning and practicing full-stack web development with a focus on modern JavaScript technologies.",
      "Built personal projects integrating React.js, Node.js, and APIs.",
      "Designed and deployed responsive, user-friendly websites for freelance clients.",
      "Improved skills in UI/UX design, performance optimization, and project deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
];

export { services, technologies, experiences, testimonials, projects };
