import React from 'react';
// import profilePic from "../../public/images/JarrodFBPIC.jpg";

const About = (props) => (
  <section className="about-section">
    <h1 className="about-header">About Me</h1>
    <img src="./images/JarrodFBPIC.jpg" className="round-border profile-pic" alt="Jarrod Powell" />
    <div className="about-summary">
      <p>Lorem ipsum all the stuff about me. I also like producing Electronic Music and all the other things I still need to type out</p>
      <p>Feel free to message me on <a href="https://www.linkedin.com/in/jarrod-powell">LinkedIn</a>. You can also listen some of my music on <a href="soundcloun">SoundCloud</a></p> 
    </div>
  </section>
  )

export default About;