import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import About from "./components/About/About"
// import Portfolio from "./components/portfolio/Portfolio"
import Skill from "./components/Skills/Skill"
import Project from "./components/Project/Project"
import Contact from "./components/contact/Contact"
import "./App.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <About/>
       <Project/>
       <Skill/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;