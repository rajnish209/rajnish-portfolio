import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1200});
  })

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:100,
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer" data-aos="fade-right">
          <img src="rajjo_pic.jpeg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 data-aos="fade-down">Hi, My Name Is </h2>
          {/* <img src="wave.gif" height="70px" width="90px"/> */}
          <h1>Rajnish Kumar</h1>
          <h3>
             <span ref={textRef}></span>
          </h3>
          <br />
          <div className="contact" data-aos="fade-up">
            <a href="https://github.com/rajnish209" target="blank"><FaGithub className="icon"/></a>
            <a href="https://twitter.com/Rajnish96873355?t=UI_IHpdQ3JnzdhobdRg60g&s=08" target="blank"><FaTwitterSquare className="icon"/></a>
            <a href="https://www.linkedin.com/in/rajnish-kumar-320745175/" target="blank"><GrLinkedin className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}