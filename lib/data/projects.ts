// Portfolio section projects (displayed on the homepage)
export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  gradient: string;
  glowColor: "purple" | "pink" | "teal";
  github: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "StreamPulse — Video Streaming Platform",
    category: "Backend Microservices",
    description:
      "Fully backend video streaming platform built on a microservices architecture using Spring Boot & Spring Cloud. Features JWT auth, API Gateway, Eureka discovery, OpenFeign inter-service communication, and Docker Compose orchestration.",
    tags: ["Java 17", "Spring Boot", "Spring Cloud", "PostgreSQL", "Docker", "JWT", "Microservices"],
    image: "/StreamPulse.jpg",
    gradient: "from-indigo-500 to-cyan-500",
    glowColor: "teal",
    github: "https://github.com/HamzaBraik01/streampulse-backend-microservices",
  },
  {
    title: "Smart Delivery Management System (SDMS)",
    category: "Full Stack Development",
    description:
      "Software solution for optimization and intelligent tracking of logistics deliveries. Features modular architecture for route management, real-time order tracking, and automated driver assignment.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "JUnit", "Mockito"],
    image: "/smartlogi-sdms.png",
    gradient: "from-purple-500 to-purple-600",
    glowColor: "purple",
    github: "https://github.com/HamzaBraik01/smartlogi-sdms",
  },
  {
    title: "OctoPOS – Point of Sale System",
    category: "Full Stack Development",
    description:
      "Complete commercial management application for the restaurant sector. Digitized order-taking, visual table management, fast checkout system, and automated financial reports (revenue, sales).",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    gradient: "from-pink-500 to-pink-600",
    glowColor: "pink",
    image: "/OctoPOS.png",
    github: "https://github.com/HamzaBraik01/OctoPOS",
  },
  {
    title: "Surveillance & Prediction System for Refrigeration",
    category: "Full Stack + ML",
    description:
      "Intelligent solution for real-time monitoring and predictive maintenance of refrigeration equipment using Machine Learning for anomaly detection and preventive alerts.",
    tags: ["Python", "Flask", "Vue.js", "Machine Learning", "SQL"],
    gradient: "from-teal-500 to-teal-600",
    glowColor: "teal",
    image: "/FroidPredict-Maintenance-Predictive-et-Analyse-Thermodynamique-des-Installations-Frigorifiques.png",
    github:
      "https://github.com/HamzaBraik01/FroidPredict-Maintenance-Predictive-et-Analyse-Thermodynamique-des-Installations-Frigorifiques",
  },
];

// ─── Projects page (all projects with images and domains) ─────────────────────

export type ProjectDomain = "design";

export type Project = {
  title: string;
  domain: ProjectDomain;
  description: string;
  tags: string[];
  link?: string;
  images?: string[];
};

// All design projects removed (no assets available)
export const allProjects: Project[] = [];
