import { useState, useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeaderPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const skills = ["Desarrollo Web", "Diseño UI/UX", "Programación"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div>
      <header className="p-6 text-center">
        <div className="relative md:w-full md:h-[300px] h-[280px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-blue-400/20 blur-xl"></div>
              <div className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-blue-300/15 blur-xl"></div>
              <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full bg-white/10 blur-lg"></div>
            </div>
          </div>

         
          <div className="relative z-10 flex flex-row h-full">
            <div className="flex flex-col justify-center px-4 sm:px-8 md:px-16 w-full md:w-2/3 ">
            
              <div className="bg-white/10  backdrop-blur-md rounded-lg md:p-6 p-4 md:w-full w-44 border border-white/20 md:mb-0 mb-10 ">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:text-center text-left  text-lg md:text-4xl font-bold text-white mb-2"
                >
                  Jaider Quintero Montiel
                </motion.h1>

                <div className="h-8 overflow-hidden">
                  <motion.div
                    animate={{ y: -activeIndex * 32 }}
                    transition={{ ease: "easeInOut" }}
                  >
                    {skills.map((skill, index) => (
                      <div key={index} className="h-8 flex items-center">
                        <span className="text-sm md:text-xl text-white/90">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6"
                >
                  <a href="#Projets">
                  <button className="flex items-center bg-white/20 hover:bg-white/30 transition-colors text-white md:px-4 px-2 md:py-2 py-1  rounded-lg text-sm backdrop-blur-sm border border-white/30">
                    Ver proyectos <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  </a>
                </motion.div>
              </div>
            </div>

         
            <div className="hidden md:flex items-center justify-center w-1/3 pr-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className=" relative rounded-full md:w-44 md:h-44  bg-white/10 backdrop-blur-md border-2 border-white/30 p-2 overflow-hidden">
                  <img
                    className="rounded-full w-full h-full object-cover "
                    src="/images/Porfil_Image.png"
                    alt="Foto de perfil"
                  />
                </div>
              </motion.div>
            </div>

      
            <div className="flex md:hidden items-center justify-center mr-5 ">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-full w-28 h-28 bg-white/10 backdrop-blur-md border-2 border-white/30 p-1 overflow-hidden mb-5">
                  <img
                    className="rounded-full w-full h-full object-cover"
                    src="/images/Porfil_Image.png"
                    alt="Foto de perfil"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4 flex gap-3 z-20"
          >
            <a
              href="mailto:qjaider1111@gmail.com"
              className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors group"
              title="Enviar email"
            >
              <Mail className="w-4 h-4 text-blue-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaider-quintero-montiel-73a396289"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors group"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-300 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/jquinteromo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors group"
              title="GitHub"
            >
              <Github className=" w-4 h-4 text-blue-300 group-hover:text-white" />
            </a>
          </motion.div>
        </div>
      </header>
    </div>
  );
}
