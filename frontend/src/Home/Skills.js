import React from "react";
import "./Skills.css";


function Skills() {
    return ( 
        <div className="skill">
            <h1 id="heading1">My Skill</h1>
            <h2 id="heading1">Frontend</h2>
            <div className="frontend">
                <div className="box">
                  <div className="box1"></div>
                  <div >
                    <h2>html</h2>
                    <p className="bar"></p>
                    <p>90%</p>
                    </div>
                </div>
                <div className="box">
                <div className="box2"></div>
                  <div className="bar-data">
                    <h2>css</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
                </div>
                <div className="box">
                <div className="box3"></div>
                  <div>
                    <h2>javascript</h2>
                    <p className="bar"></p>
                    <p>70%</p>
                    </div>
                </div>
                <div className="box">
                <div className="box4"></div>
                  <div>
                    <h2>reactjs</h2>
                    <p className="bar"></p>
                    <p>70%</p>
                    </div>
                </div>
            </div>
            <h2 id="heading1">Backend</h2>
            <div className="frontend">
            <div className="box">
            <div className="box5"></div>
                  <div>
                    <h2>nodejs</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            <div className="box">
            <div className="box6"></div>
                  <div>
                    <h2>expressjs</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            </div>
            <h2 id="heading1">Database Management</h2>
            <div className="frontend">
            <div className="box">
            <div className="box7"></div>
                  <div>
                    <h2>mysql</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            <div className="box">
            <div className="box8"></div>
                  <div>
                    <h2>MongoDB</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            </div>
            <h2 id="heading1">Tools/Version Control</h2>
            <div className="frontend">
            <div className="box">
            <div className="box9"></div>
                  <div>
                    <h2>Git</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            <div className="box">
            <div className="box10"></div>
                  <div>
                    <h2>Github</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            </div>
            <h2 id="heading1">Other tools & Technologies</h2>
            <div className="frontend">
            <div className="box">
            <div className="box11"></div>
                  <div>
                    <h2>MaterialUI</h2>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            <div className="box">
            <div className="box12"></div>
                  <div>
                    <h3>TailwindCSS</h3>
                    <p className="bar"></p>
                    <p>80%</p>
                    </div>
            </div>
            <div className="box">
            <div className="box13"></div>
                  <div>
                    <h2>Bootstrap</h2>
                    <p className="bar"></p>
                    <p>90%</p>
                    </div>
            </div>
            </div>
        </div>
     );
}

export default Skills;