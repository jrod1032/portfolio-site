import React from 'react';
import Project from './Project.js'
import { Element } from 'react-scroll';
import { projectInfo } from '../data.js';

const Projects = (props) => (
  <Element name="projects-element">
    <section className="project-section">
      <h1 className="projects-header">Portfolio</h1>
      <div className="projects-container">
        {projectInfo.map(project => <Project key={project.name} project={project} />)}
      </div>
    </section>
  </Element>
  )

export default Projects;