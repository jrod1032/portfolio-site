import React from 'react';
import '../App.css';

const socialLinks = [
{
  name: 'Github',
  image: './images/github.png',
  fa: 'fa-github',
  link: 'https://github.com/jrod1032'
},
{
  name: 'LinkedIn',
  image: './images/linkedin.png',
  fa: 'fa-linkedin',
  link: 'https://www.linkedin.com/in/jarrod-powell'
},
{
  name: 'Twitter',
  image: './images/twitter.png',
  fa: null,
  link: 'https://twitter.com/jpowell1032'
}
]
//  
// 
//<i className={`fa ${social.fa}`}aria-hidden="true"></i>
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