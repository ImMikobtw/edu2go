import { useNavigate } from "react-router-dom";

import "../styles/Header.css"
import line from "../assets/Line.svg"
import logo from "../assets/logo.jpeg"

export function Header() {

      const navigate = useNavigate();

    return (
       <header className="mainHeader">
          <img src={logo} className="headerLogo" alt="logo" />
          <div className="headerElements">
                <ul className="headerButtons" type = "none">
                  <a href="#" className="headerLinks">Post graduation</a>
                  <a href="#" className="headerLinks">Undergraduate</a>
                  <a href="#" className="headerLinks">Upskilling Certifications</a>
                  <a href="#" className="headerLinks">Study Abroad</a>
                  <a href="#" className="headerLinks">Advanced Diploma</a>
                </ul>
          </div>
          <div>
                <ul className="authElements">
                  <a onClick={() => navigate("/login")} className="signInButton">Sign In</a> 
                  <img src={line} alt="Line" className="headerLine" />
                  <a onClick={() => navigate("/register")} className="signUpButton">Sign Up</a>
                </ul>
          </div>
       </header>
      );
}