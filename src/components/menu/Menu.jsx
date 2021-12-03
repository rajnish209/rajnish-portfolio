import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+ (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
     
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Project">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skill">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}