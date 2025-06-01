import { Hammer, Zap, BookOpen, MessageCircle, Users } from "lucide-react";

interface SoftSkill {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  bgPattern: string;
}

const softSkills: SoftSkill[] = [
  {
    id: "teamwork",
    title: "Trabajo en Equipo",
    icon: Users,
    description:
      "Capacidad para colaborar efectivamente con otros, compartir ideas y alcanzar objetivos comunes en proyectos multidisciplinarios.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50",
  },
  {
    id: "teamwork",
    title: "Resolución problemas",
    icon: Hammer,
    description:
      "Capacidad para colaborar efectivamente con otros, compartir ideas y alcanzar objetivos comunes en proyectos multidisciplinarios.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50",
  },
  {
    id: "teamwork",
    title: "Adaptabilidad",
    icon: Zap,
    description:
      "Capacidad para colaborar efectivamente con otros, compartir ideas y alcanzar objetivos comunes en proyectos multidisciplinarios.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50",
  },
  {
    id: "teamwork",
    title: "Aprendizaje Autónomo ",
    icon: BookOpen,
    description:
      "Capacidad para colaborar efectivamente con otros, compartir ideas y alcanzar objetivos comunes en proyectos multidisciplinarios.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50",
  },
  {
    id: "teamwork",
    title: "Comunicasión asertiva",
    icon: MessageCircle,
    description:
      "Capacidad para colaborar efectivamente con otros, compartir ideas y alcanzar objetivos comunes en proyectos multidisciplinarios.",
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50",
  },
];

export default function Skills() {
  return (
    <div>
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">
          Habilidades
        </h2>
        <div className="w-full  md:gap-6 gap-3 flex md:inline-flex md:flex-nowrap flex-wrap  ">
          {softSkills.map((skill) => {
            return (
              <div
                key={skill.id}
                className=" md:h-24 md:w-52 h-[72px] relative  mt-3 rounded-2xl md:p-2 p-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group-hover:bg-white  "
              >
                <div className="absolute  bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 "></div>

                <div className="absolute  w-20 h-20 opacity-10 ">
                  <div className="w-full h-full bg-gradient-to-br rounded-full blur-xl"></div>
                </div>

                <div className="relative ">
                  <div className="mb-2">
                    <div className="md:w-10 w-7 md:h-10 h-7 rounded-2xl   bg-white/10 backdrop-blur-md  flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors group">
                      <skill.icon className="w-4 h-4 text-blue-300 group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="md:text-sm text-[10px] ml-1 font-bold text-white mb-4 group-hover:text-gray-900 transition-colors">
                    {skill.title}
                  </h3>

                  <div className="mb-4">
                    <div className="h-1 bg-gradient-to-r rounded-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
