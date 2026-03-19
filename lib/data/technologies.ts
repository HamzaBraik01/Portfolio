export type Tech = {
  name: string;
  icon: string;         // URL to SVG logo
  darkInvert?: boolean; // invert on dark bg (for black logos like GitHub, Next.js)
};

export type TechCategory = {
  category: string;
  gradient: string;
  techs: Tech[];
};

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SI  = "https://cdn.simpleicons.org";

export const techCategories: TechCategory[] = [
  {
    category: "Microservices & Backend",
    gradient: "from-purple-500 to-indigo-600",
    techs: [
      { name: "Java",           icon: `${DEV}/java/java-original.svg` },
      { name: "Spring Boot",    icon: `${SI}/springboot/6DB33F` },
      { name: "Spring Cloud",   icon: `${SI}/spring/6DB33F` },
      { name: "JWT",            icon: `${SI}/jsonwebtokens/FB015B` },
      { name: "Maven",          icon: `${SI}/apachemaven/C71A36` },
      { name: "PostgreSQL",     icon: `${DEV}/postgresql/postgresql-original.svg` },
      { name: "Hibernate",      icon: `${SI}/hibernate/59666C` },
      { name: "PHP",            icon: `${DEV}/php/php-original.svg` },
      { name: "Laravel",        icon: `${SI}/laravel/FF2D20` },
      { name: "SQL",             icon: `${DEV}/mysql/mysql-original.svg` },
      { name: "MongoDB",         icon: `${DEV}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: "Frontend",
    gradient: "from-pink-500 to-rose-600",
    techs: [
      { name: "JavaScript",     icon: `${DEV}/javascript/javascript-original.svg` },
      { name: "React",          icon: `${DEV}/react/react-original.svg` },
      { name: "Next.js",        icon: `${SI}/nextdotjs/000000`, darkInvert: true },
      { name: "TypeScript",     icon: `${DEV}/typescript/typescript-original.svg` },
      { name: "Angular",        icon: `${SI}/angular/DD0031` },
      { name: "Vue.js",         icon: `${SI}/vuedotjs/4FC08D` },
      { name: "Tailwind CSS",   icon: `${SI}/tailwindcss/06B6D4` },
      { name: "Framer Motion",  icon: `${SI}/framer/000000`, darkInvert: true },
    ],
  },
  {
    category: "Tools & DevOps",
    gradient: "from-teal-500 to-cyan-600",
    techs: [
      { name: "Docker",         icon: `${SI}/docker/2496ED` },
      { name: "Git",            icon: `${DEV}/git/git-original.svg` },
      { name: "GitHub",         icon: `${SI}/github/181717`, darkInvert: true },
      { name: "Vercel",         icon: `${SI}/vercel/000000`, darkInvert: true },
      { name: "Linux",          icon: `${DEV}/linux/linux-original.svg` },
      { name: "VS Code",        icon: `${DEV}/vscode/vscode-original.svg` },
      { name: "Postman",        icon: `${SI}/postman/FF6C37` },
      { name: "Swagger",        icon: `${SI}/swagger/85EA2D` },
      { name: "Figma",          icon: `${SI}/figma/F24E1E` },
      { name: "CI/CD",          icon: `${SI}/githubactions/2088FF` },
    ],
  },
  {
    category: "Testing & Quality",
    gradient: "from-orange-500 to-amber-500",
    techs: [
      { name: "JUnit",              icon: `${SI}/junit5/25A162` },
      { name: "Unit Tests",         icon: `${SI}/jest/C21325` },
      { name: "Mockito",            icon: `${DEV}/java/java-original.svg` },
      { name: "Integration Tests",  icon: `${DEV}/spring/spring-original.svg` },
      { name: "SonarQube",          icon: `https://cdn.simpleicons.org/sonar/4E9BCD` },
      { name: "Jenkins",            icon: `${SI}/jenkins/D24939` },
    ],
  },
];
