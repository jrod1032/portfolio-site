import React from 'react';

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
      <img src={social.image} alt={social.name}></img>
      </div>
    })}
  </div>
  )

export default Social;