import { motion } from "framer-motion";

import { useState } from "react";

interface Technology {
  name: string;
  icon: string;
  category: string;
  color: string;
}

interface TechCategory {
  id: string;
  name: string;
}

const categories: TechCategory[] = [
  { id: "frontend", name: "Frontend" },
  { id: "database", name: "Bases de Datos" },
  { id: "backend", name: "Backend" },
  { id: "devops", name: "DevOps" },
  { id: "design", name: "Diseño" },
  { id: "mobile", name: "Desarrollo Móvil" },
  { id: "languages", name: "Lenguajes" },
  { id: "frameworks", name: "Frameworks" },
];



const technologies: Technology[] = [

  { name: "HTML5", icon: "html5", category: "frontend", color: "#E34F26" },
  { name: "CSS3", icon: "css3", category: "frontend", color: "#1572B6" },

  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    color: "#3178C6",
  },
  { name: "React", icon: "react", category: "frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", category: "frontend", color: "#000000" },
  {
    name: "Tailwind",
    icon: "tailwindcss",
    category: "frontend",
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    category: "frontend",
    color: "#7952B3",
  },

  
  { name: "Node.js", icon: "nodejs", category: "backend", color: "#339933" },
  { name: "Express", icon: "express", category: "backend", color: "#000000" },

 
  { name: "MySQL", icon: "mysql", category: "database", color: "#4479A1" },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "database",
    color: "#336791",
  },
  { name: "MongoDB", icon: "mongodb", category: "database", color: "#47A248" },
  { name: "Redis", icon: "redis", category: "database", color: "#DC382D" },

  
  

  

  { name: "Git", icon: "git", category: "devops", color: "#F05032" },
  { name: "GitHub", icon: "github", category: "devops", color: "#181717" },
  { name: "Vercel", icon: "vercel", category: "devops", color: "#000000" },

  
  { name: "Figma", icon: "figma", category: "design", color: "#F24E1E" },

 
  { name: "Python", icon: "python", category: "languages", color: "#1572B6" },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "languages",
    color: "#F7DF1E",
  },

 
];

export default function MasteresTnlgs() {
 
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <div>
      <section className=" px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">
           Tecnologías dominadas
        </h2>
        <div className="mt-6 flex flex-wrap md:flex-nowrap  md:gap-9 gap-4  mb-10  ">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4   rounded-full md:text-sm text-[11px] font-medium  text-blue-300 bg-white/10 backdrop-blur-md   border border-white/20 hover:bg-white/20 transition-colors group`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={
                "py-2 px-3 rounded-full md:text-sm text-[11px] font-medium  text-blue-300 bg-white/10 backdrop-blur-md   border border-white/20 hover:bg-white/20 transition-colors group"
              }
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {filteredTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div
                className={` bg-white/10 backdrop-blur-md   border
                 border-white/20 hover:bg-white/20 transition-colors group rounded-xl md:p-6 p-3 shadow-md hover:shadow-xl  duration-300  border-gray-100 `}
              >
          
                <div className="flex justify-center md:mb-4 mb-2">
                  <div className="relative md:w-16 w-12 md:h-16 h-12 flex items-center justify-center ">
                    <div
                      className="absolute inset-0 rounded-full opacity-10"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="md:w-10 w-8  md:h-10 h-8"
                      onError={(e) => {
                        
                        const target = e.target as HTMLImageElement;
                        target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
                      }}
                    />
                  </div>
                </div>

              
                <h3 className="text-center text-white font-medium">
                  {tech.name}
                </h3>

              
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-3 rounded-b-xl transition-all duration-300 `}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
