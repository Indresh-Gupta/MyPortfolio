import React from "react";
import "./Project.css";
function Project() {
   const handlePromptVerseVideo1 = () => {
    window.open("https://drive.google.com/file/d/1YHsuT0Dt45h046etOlGCH0Yu_04gSkLd/view?usp=sharing&t=0.371", "_blank"); // Opens video in a new tab
   };

   const handleOpenStayVideo1 = () => {
    window.open("https://drive.google.com/file/d/1cOPR56mdhD6o2GpjGo3EsmO5FS0dDsSw/view?usp=sharing&t=1.285", "_blank"); // Opens video in a new tab
   };

   const handleWeatherPrediction = () => {
    window.open("https://drive.google.com/file/d/1B3blbqwcF58Z24t4HJh-V5Omclb0xvCF/view?usp=sharing&t=2.911", "_blank"); // Opens video in a new tab
   };

   const EmployeeManagement = () => {
    window.open("https://drive.google.com/file/d/1ITH9ogxB1q_l2MvrMaPczvowRjk_T3rL/view?usp=sharing&t=1.442", "_blank"); // Opens video in a new tab
   };

   const handletictactoe = () => {
    window.open("https://drive.google.com/file/d/1BPmYDbXh8QTNXPz31wY65-dYRLSHL7m5/view?usp=sharing&t=5.47", "_blank"); // Opens video in a new tab
   };

    return (
      <>
        <h1 id="heading1">Project</h1>
        <div className="project">
          <div className="project1">
           <div className="photo1"></div>
          <div className="content3">
            <h1 id='heading'> PromptVerse – AI-Powered Chat Application</h1>
            <p>Developed a full-stack AI chat application using the Google Gemini API to deliver
               real-time AI-powered responses through a ChatGPT-style interface. Implemented secure 
               JWT authentication for personalized user sessions and protected access.
                Enabled users to create, continue, view, and delete chat conversations with persistent storage in MongoDB.
                 Built using React.js, Node.js, Express.js, MongoDB, Google Gemini API, and JWT. </p>
  <button onClick={handlePromptVerseVideo1} className="btn4"> See Video </button>
          </div>
          </div>

           <div className="project2">
           <div className="photo2"></div>
          <div className="content3">
            <h1 id='heading'> Hotel Rental and Review System</h1>
            <p>Developed a comprehensive platform for hotel rentals and reviews, enabling users to 
explore available hotels, view detailed descriptions, and submit reviews. Built using 
Node.js, Express, EJS, Bootstrap, and MongoDB, with Cloud APIs for seamless 
integration and enhanced functionality. This system focuses on providing a 
user-friendly interface for hotel browsing, booking, and feedback collection. </p>
  <button onClick={handleOpenStayVideo1} className="btn4"> See Video </button>
          </div>
          </div>

         {/* <div className="project1">
          <div className="photo1"> </div>
          <div className="content4">
            <h1 id='heading'>Hotel Rental and Review System</h1>
            <p>Developed a comprehensive platform for hotel rentals and reviews, enabling users to 
explore available hotels, view detailed descriptions, and submit reviews. Built using 
Node.js, Express, EJS, Bootstrap, and MongoDB, with Cloud APIs for seamless 
integration and enhanced functionality. This system focuses on providing a 
user-friendly interface for hotel browsing, booking, and feedback collection </p>
     <button onClick={handleOpenStayVideo1} className="btn4">see video</button>
          </div>
         </div> */}
         <div className="project3">
           <div className="photo3"></div>
          <div className="content3">
            <h1 id='heading'> Weather Prediction</h1>
            <p>Developed a web-based weather prediction application that provides real-time 
weather forecasts for various city name locations. The application fetches weather 
data from a public API. React and Material-UI </p>
  <button onClick={handleWeatherPrediction} className="btn4"> See Video </button>
   

          </div></div>
          <div className="project4">
           <div className="photo4"></div>
          <div className="content3">
            <h1 id='heading'> Employees Management</h1>
            <p>Developed a full-stack Employee Management System with secure 
              JWT authentication for personalized and protected user access. 
              Implemented CRUD operations to add, update, delete, and search employee records 
              with photo upload support. Added an interactive image pop-up feature to preview employee photos on click. 
              Tech Stack: React.js, Node.js, Express.js, MongoDB, and JWT Authentication. </p>
  <button onClick={EmployeeManagement} className="btn4"> See Video </button>
   

          </div></div>
         <div className="project5">
           <div className="photo5"></div>
          <div className="content4">
            <h1 id='heading'> Tic-Tac-Toe Game</h1>
            <p>Developed a fully interactive Tic-Tac-Toe game. The game features a dynamic 
interface and responsive gameplay mechanics, allowing two players to compete on 
the same device.  HTML, CSS, and JavaScript.  </p>
<button onClick={handletictactoe} className="btn4">see video</button>
          </div></div> 
        </div>
        </>
     );
}

export default Project;