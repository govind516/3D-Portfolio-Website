import {
  infosys,
  iiitv,
  journalPipelineVisual,
  mahipal,
  meetingCopilotVisual,
  movieRecommenderVisual,
  quizApiVisual,
  skepsi,
  swoc
} from "../assets";


const experiences = [
  {
    title: "Specialist Programmer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#fff",
    date: "June 2025 - Present",
    points: [
      "Designed and maintained Databricks Spark SQL data pipelines, building datamarts and catalog blocks from client business requirements.",
      "Engineered reusable asset bundles with explicit schema definitions and dependency management for modular, maintainable data services.",
      "Implemented multi-table join logic, aliasing, and data matching rules in PySpark with automated quality checks for nulls, duplicates, and constraints.",
      "Tech Stack: Python, PySpark, Spark SQL, Databricks, Azure, MongoDB, Kafka, Redis, Linux",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Skepsi.ai",
    icon: skepsi,
    iconBg: "#fff",
    date: "June 2024 - September 2024",
    points: [
      "Automated over 300 test cases across 6 hospitality companies, achieving a 98% pass rate and ensuring high software reliability",
      "Developed and deployed functionalities to extract OCR data from government IDs, improving user verification accuracy by 95%",
      "Participated in code reviews and contributed to improving code quality, leading to a 10% reduction in post-release bugs.",
      "Tech Stack: C#, MySQL, Azure, Selenium, NUnit/XUnit",
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
    date: "January 2024 - February 2024",
    points: [
      "Enhanced the functionalities of the company's website, leading to improved user experience and performance.",
      "Developed and managed new services within the user web application, increasing its capabilities and efficiency.",
      "Tech Stack: JavaScript, React.js",
    ],
  },
];


const projects = [
  {
    name: "Meeting-to-Action Copilot",
    description:
      "AI backend that turns meeting transcripts into summaries and action items.",
    tags: [
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Docker" },
      { name: "SonarQube" },
      { name: "React" },
    ],
    image: meetingCopilotVisual,
    imageWidth: 1200,
    imageHeight: 801,
    imageAlt:
      "Screenshot of the Meeting-to-Action Copilot app showing a meeting summary and generated action items",
    inProgress: true,
  },
  {
    name: "Journal App",
    description:
      "Secure journaling with JWT/OAuth auth, Redis caching and Kafka event streaming.",
    tags: [
      {
        name: "Java",
        
      },
      {
        name: "Spring Boot",
        
      },
      {
        name: "Redis"
      },
      {
        name: "Kafka"
      },
      {
        name: "Google OAuth"
      },
      {
        name: "SonarQube",
        
      },
      {
        name: "Swagger"
      },
    ],
    source_code_link: "https://github.com/govind516/journalApp/",
    image: journalPipelineVisual,
    imageWidth: 676,
    imageHeight: 451,
    imageAlt:
      "Screenshot of the Journal App writing interface with a list of journal entries",

  },
  {
    name: "Quiz App Backend",
    description:
      "Quiz CRUD, scoring and result APIs on Spring Boot + PostgreSQL.",
    tags: [
      {
        name: "Java",
        
      },
      {
        name: "Spring Boot",
        
      },
      {
        name: "PostgreSQL"
      },
      {
        name: "Postman"
      },
    ],
    source_code_link: "https://github.com/govind516/Quiz-App/",
    image: quizApiVisual,
    imageWidth: 1008,
    imageHeight: 720,
    imageAlt:
      "Screenshot of the Quiz API platform showing quiz creation and result generation endpoints",
  },
  {
    name: "Movie Recommender",
    description:
      "Content-based movie recommendations trained on Scikit-Learn.",
    tags: [
      {
        name: "Machine Learning",
        
      },
      {
        name: "Jupyter Notebook",
        
      },
      {
        name: "Kaggle"
      },
      {
        name: "Scikit-Learn"
      },
      {
        name: "Streamlit"
      },
    ],
    source_code_link: "https://github.com/govind516/movie-recommender-system/",
    live_demo_link: "https://movie-recommender-system-j87x.onrender.com/",
    image: movieRecommenderVisual,
    imageWidth: 800,
    imageHeight: 500,
    imageAlt:
      "Screenshot of the Movie Recommender showing personalized movie recommendations based on content-based filtering",
  },
];

const testimonials = [
  {
    testimonial:
      "Govind Gupta has been an excellent addition to our team during his internship.",
    name: "Mahipal Rajpurohit",
    designation: "VP",
    company: "Skepsi.ai",
    image: mahipal,
  },
];

export { experiences, projects, testimonials };

