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
  threejs,
  code213,
  sonelgazLogo,
  UMMTO,
  training,
  foodrecipe,
  dashboard,
  appel,
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
    title: "Automation Engineering",
    company_name: "Mouloud Mammeri University of Tizi Ouzou (UMMTO), Algeria",
    icon: UMMTO,
    iconBg: "#383E56",
    date: "2022 – Present",
    points: [
      "Gained solid foundations in automation systems, control theory, and industrial electronics.",
      "Worked with Programmable Logic Controllers (PLCs) using Ladder Logic programming.",
      "Designed and simulated control systems with MATLAB/Simulink, and implemented automation projects, and some arduino projects.",
      "Programmed and configured automation projects using Siemens Step7 and TIA Portal.",
      "A Masters Student in Automation & Industrial Informatics",
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

const projects = [
  {
    name: "Food Recipe App ",
    description:
      "Find ideas, cook smarter: a recipe app that helps you search meals, organize favorites, and keep your best recipes in one place.",
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
    image: foodrecipe,
    source_code_link: "https://github.com/InasCh4/Food_Recipe_App",
  },
  {
    name: "Real Time dashboard ",
    description:
      "Monitor industrial electrical data live: a MERN dashboard streaming telemetry via MQTT/WebSocket, with KPIs, charts, alerts, and history in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "MQTT",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/InasCh4/ESP-Realtime-Dashboard",
  },
  {
    name: "Apple iPhone clone ",
    description:
      "A 3D Apple iPhone landing page clone built with Three.js and GSAP, featuring smooth animations, interactive product views, and a modern UI.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: appel,
    source_code_link: "https://github.com/InasCh4/Apple_iPhone_web_site",
  },
];

export { services, technologies, experiences, projects };
