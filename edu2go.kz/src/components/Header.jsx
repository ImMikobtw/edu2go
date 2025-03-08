import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu"; 
import "../styles/Header.css";
import logo from "../assets/logo.jpeg";

export function Header() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="mainHeader">
      {/* <h1 className="headerTitle">Edu2Go</h1>  Текстовое лого временно закомментировано */}
      
      {/* <img 
        src={logo} 
        className="headerLogo" 
        alt="logo" 
        onClick={() => navigate("/")} 
        style={{ cursor: "pointer" }}
      /> */}

      <nav className="headerElements">
        <DropdownMenu 
          title="Post Graduation" 
          items={["Master's", "PhD", "MBA", "Online Courses"]} 
          isOpen={openDropdown === "Post Graduation"}
          onToggle={() => handleToggle("Post Graduation")}
        />
        <DropdownMenu 
          title="Undergraduate" 
          items={["Bachelor's", "Associate Degree", "Foundation Year"]} 
          isOpen={openDropdown === "Undergraduate"}
          onToggle={() => handleToggle("Undergraduate")}
        />
        <DropdownMenu 
          title="Upskilling" 
          items={["Certifications", "Workshops", "Bootcamps", "Online Trainings"]} 
          isOpen={openDropdown === "Upskilling"}
          onToggle={() => handleToggle("Upskilling")}
        />
        <DropdownMenu 
          title="Study Abroad" 
          items={["Exchange Programs", "Internships", "Language Courses", "Summer Schools"]} 
          isOpen={openDropdown === "Study Abroad"}
          onToggle={() => handleToggle("Study Abroad")}
        />
        <DropdownMenu 
          title="Advanced Diploma" 
          items={["Engineering", "Business", "IT & Software", "Healthcare"]} 
          isOpen={openDropdown === "Advanced Diploma"}
          onToggle={() => handleToggle("Advanced Diploma")}
        />
      </nav>

      <div className="authContainer">
        <button onClick={() => navigate("/login")} className="signInButton">Sign In</button>
        <button onClick={() => navigate("/register")} className="signUpButton">Sign Up</button>
      </div>
    </header>
  );
}



