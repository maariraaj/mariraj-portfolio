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
  starbucks,
  tesla,
  shopify,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
  {
    title: "Open Source Contributor",
    icon: backend,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Leverage LeetCode effectively by rigorously tackling problems daily, mastering algorithms and data structures, and analyzing solutions to cultivate optimal problem-solving acumen.",
    name: "maariraaj",
    social: "Leetcode",
    link: "https://leetcode.com/u/maariraaj/",
    image: "src/assets/leetcode.png",
  },
  {
    id: 2,
    testimonial:
      "Utilized LinkedIn to build a strong network, engage with insightful content, demonstrate expertise, and strategically showcase accomplishments to drive professional growth.",
    name: "marirajb",
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/marirajb/",
    image: "src/assets/linkedin.jpg",
  },
  {
    id: 3,
    testimonial:
      "Harnessed GitHub to display code contributions, collaborate on diverse projects, showcase development expertise, and curate a professional repository of technical work.",
    name: "maariraaj",
    social: "GitHub",
    link: "https://github.com/maariraaj",
    image: "src/assets/github.png",
  },
];

const projects = [
  {
    name: "Shadow Chat",
    description:
      "Shadow Chat is a dynamic full-stack application designed for secure group communication. Users can authenticate, create and manage groups, with exclusive rights for creators to modify group details and control membership. The platform supports rich text and multimedia messaging, fostering seamless interaction within the group.",
    tags: [
      {
        name: "group_chat_app",
        color: "blue-text-gradient",
      },
      {
        name: "html_tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/shadow_chat.png",
    web_link: "https://groupchatfs.onrender.com/",
    source_code_link: "https://github.com/maariraaj/groupChatFS",
  },
  {
    name: "Piggy Banker",
    description:
      "Piggy Banker is a robust full-stack application that allows users to securely manage and track their daily expenses with pagination and user-specific data handling. It ensures data security with encrypted passwords and provides efficient logging and performance optimization.",
    tags: [
      {
        name: "expense_tracker",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/piggy_bank.png",
    web_link: "http://65.1.227.153/",
    source_code_link: "https://github.com/maariraaj/expenseTracker",
  },
  {
    name: "The Artistic Aura",
    description:
      "The Artistic Aura is an application that gives users the option to see different products and add them to the cart, manipulating cart data. User needs to log in to access their cart and users can see the product details as well.",
    tags: [
      {
        name: "ecommerce",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/artistic_aurora.png",
    web_link: "https://the-artistic-aura.vercel.app/",
    source_code_link: "https://github.com/maariraaj/ecomWeb",
  },
  {
    name: "Pigeon Mail",
    description:
      "Pigeon Mail is an application where users can send and receive mail. Each user has their account. Integrated react-draft-wysiwyg editor for composing new emails. Users can use Inbox, Sent Mail to see received and sent mails respectively. ",
    tags: [
      {
        name: "mailbox_client",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/pigeon_mail.png",
    web_link: "https://pigeonmail.vercel.app/",
    source_code_link: "https://github.com/maariraaj/mailbox",
  }
];

export { services, technologies, experiences, testimonials, projects };
