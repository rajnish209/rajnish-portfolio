import { useState ,useEffect} from "react";
import "./contact.scss";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Contact() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200});
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div id="contact">
    <br />
     <h1 style={{textAlign: "center", color: "white"}} >Contact Me</h1>
     <hr style={{width: 150, marginTop: "-18px",height: 4, backgroundColor: "#18d26e", border: "none"}}/>
      <div className="contact">
      <div className="left">
        <br />
        <p >Let's get in touch and build something together.</p>
        <br />
        <br />
        <br />
        <div className="contactMain">
        <div className="div1">
        <FaHome className="icon1" style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/>
          <h1>Location</h1>
          <p>Jehanabad ,Bihar</p>
        </div>
        <div>
        <FaPhone className="icon1" style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/>
          <h1>Phone</h1>
          <p>(+91) 6295430342</p>
        </div>
        <div>
        <GrMail className="icon1" style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/>
          <h1>Email</h1>
          <p>rajnishkumar320883@gmail.com</p>
        </div>
        </div>
        
      </div>
      <div className="right">
        <h2 style={{textAlign: "center", color: "white"}}>E-Mail Me</h2>
        <hr style={{width: 120, marginTop: "-18px",height: 4, backgroundColor: "#18d26e", border: "none"}}/>
        <form onSubmit={handleSubmit}>
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <textarea placeholder="Message"></textarea>
          <br />
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      </div>
      <br />
      <br />
      <div className="footer">
        <p style={{marginTop: 5}}>Created By <span>Rajnish</span> | © 2021 All rights reserved</p>
      </div>
    </div>
  );
}