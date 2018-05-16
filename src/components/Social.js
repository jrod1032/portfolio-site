import React from 'react';
import '../App.css';

const socialLinks = [
{
  name: 'Github',
  image: null,
  favicon: null,
  link: 'https://github.com/jrod1032'
},
{
  name: 'LinkedIn',
  image: null,
  favicon: null,
  link: 'https://www.linkedin.com/in/jarrod-powell'
},
{
  name: 'Instagram',
  image: null,
  favicon: null,
  link: 'https://www.instagram.com/jrod1032/'
}
]
// <i className={`favicon ${social.favicon}`}aria-hidden="true"></i> 

const Social = (props) => (
  <div className= 'social-links'>
    {socialLinks.map(social => {
      return <div className="social-link" key={social.name}>
      <a href={social.link}
        className={props.iconColor}
        target="_blank" rel="noopener noreferrer">
        <img src={social.image} alt={social.name}></img>
      </a>
      </div>
    })}
  </div>
  )

export default Social;