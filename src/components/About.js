import React from 'react';
import { Element } from 'react-scroll';

const About = (props) => (
  <Element name="about-element">
    <section className="about-section">
      <h1 className="about-header">About Me</h1>
      <img src="./images/beardJarrod.jpg" className="round-border about-pic" alt="Jarrod Powell" />
      <div className="about-summary">
        <p>I am a self taught software developer, having developed an addiction to
         programming in my later years. I also enjoy composing and producing music, 
         playing the viola and guitar, as well as playing basketball and baseball 
         (which has now turned into softball in my later years).</p>
        <p>Feel free to message me on <a href="https://www.linkedin.com/in/jarrod-powell">LinkedIn</a>. 
        If your interested, you can also listen some of my music on <a href="https://soundcloud.com/jpowell1032">SoundCloud</a></p> 
      </div>
    </section>
  </Element>
  )

export default About;