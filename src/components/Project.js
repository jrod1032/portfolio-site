import React from 'react';
import '../App.css';

const Project = (props) => {
  const { name, description, imageURL, github, demo, presentation, orientation, altText } = props.project;
  return (
  <div className="project-card">
    <div>
      <div className="project-img-container">
        <img className={orientation} src={imageURL} alt={altText} />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
    <div className="link-container">
    {
      demo
      ? <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      : null
    }
    <a href={github} target="_blank" rel="noopener noreferrer">Code</a>
    {
      presentation
      ? <a href={presentation} target="_blank" rel="noopener noreferrer">Presentation</a>
      : null
    }
    </div>
  </div>
  )
}

export default Project;