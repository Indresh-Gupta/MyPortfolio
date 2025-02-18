import React from "react";
import "./Home.css";
import { NavLink} from "react-router-dom";



function Home() {
    return (
       <>
       <div className="home">
        <div className="home-content">
       <h3>Hello, It's me</h3>
       <h1>Indresh Gupta</h1>
       <p>I'm a Full Stack Developer with expertise in frontend and backend <br/>development, REST APIs, and creating user-friendly web applications.<br/> Eager to contribute innovative solutions as a fresher.</p>
       <div className="info">
        <button className="btn1"><NavLink to="/about" className="btn1">More about me</NavLink></button>
        <a href="/resume.pdf" download="resume.pdf">
        <button id="btn2">Download Resume</button>
        </a>
       </div>
       <div className="icon">
      <a href="https://github.com/Indresh-Gupta"><i class="fa-brands fa-github"></i></a> 
       <a href="https://www.linkedin.com/in/indresh-gupta-749532286/"><i class="fa-brands fa-linkedin"></i></a>
       
       <a href="https://www.geeksforgeeks.org/user/indreshgzt37/" id="img1"> </a>

       <a href="https://leetcode.com/u/Indresh153/" id="img"></a>
       </div>
       </div>
       
       <div className="photo">

       </div>
       </div>
       </>
      );
}

export default Home;