import React from "react";
import "./Project.css";
function Project() {
   const handleOpenVideo1 = () => {
  //   window.open("/video/WanderlustVideo.mp4", "_blank"); // Opens video in a new tab
   };

    return (
      <>
        <h1 id="heading1">Project</h1>
        <div className="project">
         <div className="project1">
          <div className="photo1"> </div>
          <div className="content4">
            <h1 id='heading'>Hotel Rental and Review System</h1>
            <p>Developed a comprehensive platform for hotel rentals and reviews, enabling users to 
explore available hotels, view detailed descriptions, and submit reviews. Built using 
Node.js, Express, EJS, Bootstrap, and MongoDB, with Cloud APIs for seamless 
integration and enhanced functionality. This system focuses on providing a 
user-friendly interface for hotel browsing, booking, and feedback collection </p>
     <button onClick={handleOpenVideo1} className="btn4">see video</button>
          </div>
         </div>
         <div className="project2">
           <div className="photo2"></div>
          <div className="content3">
            <h1 id='heading'> Weather Prediction</h1>
            <p>Developed a web-based weather prediction application that provides real-time 
weather forecasts for various city name locations. The application fetches weather 
data from a public API. React and Material-UI </p>
  <button className="btn4"> See Video </button>
   

          </div></div>
         <div className="project2"> <div className="photo3"></div>
          <div className="content3">
            <h1 id='heading'> Tic-Tac-Toe Game</h1>
            <p>Developed a fully interactive Tic-Tac-Toe game. The game features a dynamic 
interface and responsive gameplay mechanics, allowing two players to compete on 
the same device.  HTML, CSS, and JavaScript.  </p>
<button className="btn4">see video</button>
          </div></div> 
        </div>
        </>
     );
}

export default Project;