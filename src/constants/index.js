import {
  bookFinderVisual,
  infosys,
  iiitv,
  journalPipelineVisual,
  meetingCopilotVisual,
  movieRecommenderVisual,
  quizApiVisual,
  skepsi,
  stockForecastVisual,
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
      "An AI-powered backend service that converts meeting transcripts into summaries, action items, and follow-ups through modular Spring Boot REST APIs, Dockerized services, and SonarQube quality gates.",
    tags: [
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Docker" },
      { name: "SonarQube" },
      { name: "React" },
    ],
    source_code_link: "https://github.com/govind516/meeting-to-action-copilot/", 
    image: meetingCopilotVisual,
  },
  {
    name: "Journal App",
    description:
      "A secure journaling app with Spring Boot, Redis caching, Kafka event streaming, JWT and Google OAuth authentication with SonarQube for code quality assurance.",
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
    source_code_link: "https://github.com/govind516/journal-pipeline/",
    image: journalPipelineVisual,

  },
  {
    name: "Quiz App Backend",
    description:
      "A backend-only quiz application with APIs to handle quiz creation, management, scoring, and result generation providing enhanced user experience.",
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
  },
  {
    name: "Movie Recommender",
    description:
      "A web-based system that delivers personalized movie recommendations using content-based filtering for an enhanced viewing experience.",
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
  },
  {
    name: "Stock Price Prediction",
    description:
      "A machine learning model that combines KNN and LSTM algorithms to analyze historical data, predict stock prices, and help users make informed investment decisions.",
    tags: [
      {
        name: "Machine Learning",
        
      },
      {
        name: "Jupyter Notebook",
        
      },
      {
        name: "Python"
      },
      {
        name: "Scikit-Learn"
      },
      {
        name: "TensorFlow"
      },
    ],
    source_code_link: "https://github.com/govind516/Book-Finder-App/",
    image: stockForecastVisual,
  },
  {
    name: "Book Finder App",
    description:
      "Allows users to search for books by title, author, and language using the Open Library API and displays search results with book covers, titles, authors, and publication details.",
    tags: [
      {
        name: "React"
      },
      {
        name: "Tailwind CSS"
      },
      {
        name: "Open API"
      },
      {
        name: "CodeSandbox"
      },
    ],
    source_code_link: "https://github.com/govind516/Book-Finder-App/",
    live_demo_link: "https://43rklk-3000.csb.app/",
    image: bookFinderVisual,
  },
];

export { experiences, projects };

