import React, { useState } from "react";
import "./Navbar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home.js";
import About from "../Home/About.js";
import Skills from "../Home/Skills.js";
import Project from "../Home/Project.js";
import Contact from "../Home/Contact.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
   
    setIsOpen(true);
  };

  return (
    <>
      <div className="all-page" >
        
        <div className="navbar" >
          <div className="name"><i>Indresh Kumar Gupta</i></div>
          <div className="content">
            <NavLink to="/" className="content1">Home</NavLink>
            <NavLink to="/about" className="content1">About</NavLink>
            <NavLink to="/skills" className="content1">Skills</NavLink>
            <NavLink to="/project" className="content1">Project</NavLink>
            <NavLink to="/contact" className="content1">Contact</NavLink>
          </div>
          <button onClick={toggleSidebar} className="toggle-btn">
            {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="content5">
            <NavLink to="/" className="nav-item" onClick={() => setIsOpen(false)} >Home</NavLink>
            <NavLink to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/skills" className="nav-item" onClick={() => setIsOpen(false)}>Skills</NavLink>
            <NavLink to="/project" className="nav-item" onClick={() => setIsOpen(false)}>Project</NavLink>
            <NavLink to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>

      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      {/* </div> */}
    </>
  );
}
