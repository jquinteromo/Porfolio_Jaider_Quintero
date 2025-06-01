import { useState, useRef } from "react";

import { ChevronRight } from "lucide-react";
import {
  Github,
  Users,
  ExternalLink,
  ChevronLeft,
  Calendar,
  Code,
  X,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  videoUrl?: string;
  date: string;
  teamSize?: number;
  features: string[];
}

const projects: Project[] = [
  {
    id: "Blog Caricaturesco",
    title: "Blog de Caricaturas",
    shortDescription:
      "Mi primer proyecto web: un blog simple sobre anime clásico",
    image: "/Images_projects/blog_caricaturesco/goku.png",
    description:
      "Uno de mis primeros proyectos cuando comencé a aprender programación hace dos años. Se trata de un blog sencillo pero funcional dedicado al anime clásico, con artículos sobre Caballeros del Zodiaco, Dragon Ball Z y Naruto. Desarrollado con HTML y CSS puro, este proyecto marcó mis primeros pasos en el desarrollo web. Incluye un diseño responsive básico, efectos hover y una estructura semántica clara. Aunque hoy en día trabajo con tecnologías más modernas, he querido incluir este proyecto en mi portafolio porque tiene un valor especial para mí: fue el primero que realicé y representa el punto de partida de mi camino como desarrollador.",
    stack: ["HTML5", "CSS3"],
    githubUrl: "https://github.com/jquinteromo/Blog-ejemplo-caricaturesco.git",
    liveUrl: "https://blog-ejemplo-caricaturesco.vercel.app/",
    videoUrl: "https://www.youtube.com/embed/fgWjXZUQQ8I",
    category: "Frontend",
    date: "2023",
    teamSize: 1,
    features: [
      "Diseño simple y limpio",
      "Artículos sobre anime clásico",
      "Efectos hover en las tarjetas",
      "Navegación con anclas",
      "Estructura semántica HTML",
      "Mi primer proyecto web",
    ],
  },
  
 
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div>
      <section id="Projets" className="md:px-20 px-6  md:py-10 bg-[#0f172a] ">
        <h2 className="text-2xl font-semibold text-sky-400 mb-6">Proyectos</h2>
        <div className="relative ">
          
          <button
            onClick={scrollLeft}
            className={`${projects.length > 3 ? 'md:visible' : 'md:hidden'} ${projects.length > 2 ? 'visible' : 'hidden'} absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors`} 
          >
            <ChevronLeft className={`w-6 h-6 text-white`} />
          </button>
          <button
            onClick={scrollRight}
            className={`${projects.length > 3 ? 'md:visible': 'md:hidden'} ${projects.length > 2 ? 'visible' : 'hidden'} absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 md:w-80 w-44 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden  group"
              >
               
                <div className="relative md:h-48 h-24 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="p-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500/80 text-white px-2 font-bold py-1 rounded-full text-xs ">
                      {project.category}
                    </span>
                  </div>
                </div>

            
                <div className="md:p-6 p-2 ">
                  <h3 className="md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 md:text-sm text-[10px] mb-4 line-clamp-2 ">
                    {project.shortDescription}
                  </p>

               
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded-md md:text-xs 
                        text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs font-medium">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 md:text-sm text-[10px] md:ml-0 ml-1">
                      {project.date}
                    </span>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center text-blue-400 md:text-sm text-[10px] font-medium cursor-pointer  hover:bg-white/10 transition-all duration-300"
                    >
                      Ver detalles
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-screen overflow-y-auto">
           
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-6 left-4 right-4 md:left-6 md:right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.date}</span>
                    </div>
                    {selectedProject.teamSize && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{selectedProject.teamSize} persona(s)</span>
                      </div>
                    )}
                    <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </div>

           
              <div className="p-4 md:p-8 text-sm md:text-base leading-relaxed bg">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Video Demo
                </h3>
                <div className="flex justify-center bg-black md:w-96 md:h-60 mb-10 ">
                  <iframe
                    width="100%"
                    height="240"
                    src={selectedProject.videoUrl}
                    title="Mi proyecto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                
                <div className="mb-6 md:mb-8 ">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    Descripción del Proyecto
                  </h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>

              
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                    Características Principales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

           
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-5 h-5" />
                    Ver Código
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Proyecto
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
