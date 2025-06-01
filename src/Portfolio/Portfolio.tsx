import Header_Portfolio from "./Components/Header_Portfolio";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import MasteresTnlgs from "./Components/MasteredTnlgs";



export default function Portafolio() {
  return (
    <div className="bg-[#0f172a] bg text-white min-h-screen font-sans">
      <Header_Portfolio></Header_Portfolio>

      <Aboutme></Aboutme>

      <Skills></Skills>

      <Projects></Projects>

      <MasteresTnlgs></MasteresTnlgs>
      
      <footer className="text-center text-slate-500 py-6 text-xs">
        © 2025 Jaider Quintero. 
      </footer>
    </div>
  );
}
