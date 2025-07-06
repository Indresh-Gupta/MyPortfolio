import React, {useState, useEffect} from "react";
import "./About.css";

function About() {
    
    const phrases = ["Full Stack Developer", "Programming Enthusiast", "Tech Explorer"];
      const [text, setText] = useState('');
      const [index, setIndex] = useState(0); // Current phrase index
      const [charIndex, setCharIndex] = useState(0); // Current character index
      const [isDeleting, setIsDeleting] = useState(false);
      const typingSpeed = 100;
      const deletingSpeed = 50;
      const delayBetweenPhrases = 1500;
    
      useEffect(() => {
        const currentPhrase = phrases[index];
        
        if (isDeleting) {
          if (charIndex > 0) {
            setTimeout(() => {
              setText(currentPhrase.substring(0, charIndex - 1));
              setCharIndex(charIndex - 1);
            }, deletingSpeed);
          } else {
            setIsDeleting(false);
            setIndex((index + 1) % phrases.length);
          }
        } else {
          if (charIndex < currentPhrase.length) {
            setTimeout(() => {
              setText(currentPhrase.substring(0, charIndex + 1));
              setCharIndex(charIndex + 1);
            }, typingSpeed);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, delayBetweenPhrases);
          }
        }
      }, [charIndex, isDeleting, index, phrases]);

    return (
        <>   
        <div className="about">
            <div className="photo"></div>
            <div className="about-content">
            <h2>About me</h2>
            <div className="typewriter-container">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor">|</span>
    </div>
            {/* <h3>Full Stack Developer!</h3> */}
            <p>"As a passionate and dedicated full-stack developer, I specialize in creating dynamic  and responsive web applications. With a solid foundation in both front-end and back-end  technologies, I have experience building projects using HTML, CSS, JavaScript, React.js, MongoDB, MySQL, Node.js, and Express.js. I am currently pursuing my degree in  Information Technology, where I honed my skills in software development, problem-solving, and teamwork. Though I am a fresher, my eagerness to learn and adapt quickly to new challenges drives me to deliver high-quality code and innovative solutions."</p>
            </div> 
            </div>
            </>
     );
}

export default About;