import {
  backend,
  creator,
  docker,
  figma,
  git,
  iiitv,
  java,
  javascript,
  JournalApp,
  Mahipal,
  mobile,
  mongodb,
  movie,
  mysql,
  nodejs,
  postgresql,
  QuizApp,
  reactjs,
  selenium,
  skepsi,
  spring,
  stock,
  swoc,
  tailwind,
  threejs,
  web,
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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "follow",
    title: "Follow Me",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Spring Boot Developer",
    icon: mobile,
  },
  {
    title: ".NET Developer",
    icon: web,
  },
  {
    title: "Google Cloud Program Volunteer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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

  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "selenium",
    icon: selenium,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Skespi.ai",
    icon: skepsi,
    iconBg: "#fff",
    date: "June 2024 - August 2024",
    points: [
      "Automated over 300 test cases across 6 hospitality companies, achieving a 98% pass rate and ensuring high software reliability",
      "Developed and deployed functionalities to extract OCR data from government IDs, improving user verification accuracy by 95%",
      "Participated in code reviews and contributed to improving code quality, leading to a 10% reduction in post-release bugs.",
      "Tech Stack: C#, ASP.NET, MySQL, Azure, Selenium",
    ],
  },
  {
    title: "Summer Research Intern",
    company_name: "IIIT Vadodara",
    icon: iiitv,
    iconBg: "#fff",
    date: "May 2024 - June 2024",
    points: [
      "Worked with Prof Bhupendra Kumar to Analyzing and evaluating cloud native technologies to enhance the efficiency and management of 5G network deployments.",
      "Exploring potential applications of artificial intelligence for integration into the architecture of 6G networks.",
      "Tech Stack: Open 5GS, VMware Workstation, Networking",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Social Winter of Code",
    icon: swoc,
    iconBg: "#fff",
    date: "January 2024 - Feburary 2024",
    points: [
      "Enhanced the functionalities of the company's website, leading to improved user experience and performance.",
      "Developed and managed new services within the user web application, increasing its capabilities and efficiency.",
      "Tech Stack: JavaScript, React.js",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Govind Gupta has been an excellent addition to our team during his internship.",
    name: "Mahipal Rajpurohit",
    designation: "VP",
    company: "Skepsi.ai",
    image: Mahipal,
  },
];

const projects = [
  {
    name: "Journal App",
    description:
      "A secure journaling app with Spring Boot, Redis caching, Kafka event streaming, JWT and Google OAuth authentication with SonarQube for code quality assurance.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "Kafka",
        color: "blue-text-gradient",
      },
      {
        name: "Google OAuth",
        color: "pink-text-gradient",
      },
      {
        name: "SonarQube",
        color: "blue-text-gradient",
      },
      {
        name: "Swagger",
        color: "green-text-gradient",
      },
    ],
    image: JournalApp,
    source_code_link: "https://github.com/govind516/journalApp",
    // live_demo_link: "https://movie-recommender-system-j87x.onrender.com/",
  },
  {
    name: "Movie Recommender",
    description:
      "A web-based system that delivers personalized movie recommendations using content-based filtering for an enhanced viewing experience.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "jupiter notebook",
        color: "green-text-gradient",
      },
      {
        name: "Kaggle",
        color: "pink-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/govind516/movie-recommender-system/",
    live_demo_link: "https://movie-recommender-system-j87x.onrender.com/",
  },
  {
    name: "Stock Price Prediction",
    description:
      "A machine learning model that combines KNN and LSTM algorithms to analyze historical data, predict stock prices, and help users make informed investment decisions.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "jupiter notebook",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/govind516/Stock-Price-Prediction/",
  },
  {
    name: "Quiz App Backend",
    description:
      "A backend-only quiz application with APIs to handle quiz creation, management, scoring, and result generation providing enhanced user experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: QuizApp,
    source_code_link: "https://github.com/govind516/Quiz-App/",
  },
];

export { experiences, projects, services, technologies, testimonials };
