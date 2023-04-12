import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  angularjs,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vitejs,
  /*blender,
  dart,
  go,
  laravel,
  php,*/
  vuejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Movil Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "QA Automation & Tester",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
 /* {
    name: "Go",
    icon: go,
  },
   {
    name: "figma",
    icon: figma,
  },
  
   {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Php",
    icon: php,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angularjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vite JS",
    icon: vitejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Developer Fornted",
    company_name: "Freelans",
    icon: web,
    iconBg: "#383E56",
    date: "Mayo 2020 - julio 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js, Angular js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad",
      "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores.",
    ],
  },
  
  {
    title: "Ux/Ui Diseñador",
    company_name: "PROWESSEC",
    icon: web,
    iconBg: "#383E56",
    date: "Septiembre 2021 - Enero 2022",
    points: [
     "Creaba diseños y prototipos para aplicaciones móviles y web en Figma, y brindaba soporte y mantenimiento para asegurar que estuvieran siempre en óptimas condiciones."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelans",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Junio 2022 - Febrero 2023",
    points: [
      "Como desarrollador de software, mi experiencia incluye el desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas. Además, colaboro con equipos multifuncionales, como diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad. También implemento diseños receptivos y garantizo la compatibilidad entre navegadores.",
      " QA automático y testing, para garantizar que las aplicaciones que desarrollamos cumplan con los más altos estándares de calidad. Participaré en revisiones de código y proporcionaré comentarios constructivos a otros desarrolladores, para asegurarnos de que todas las partes interesadas estén satisfechas con el resultado final.",
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
    source_code_link: "https://github.com/kiwithecode",
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
    source_code_link: "https://github.com/kiwithecode",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };