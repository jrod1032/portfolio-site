import React from 'react';
import Social from './Social.js'
import '../App.css';

const Header = (props) => (
  <header className="header fadeIn">
    <div className="header-text">
      <h1 className="header-title">Welcome! </h1>
      <p className="header-subtitle">My name is Jarrod. I'm a software engineer that just loves the process of building full-stack applications</p>
    </div>
    <Social iconColor="icon-white"/>
  </header>
)

export default Header;