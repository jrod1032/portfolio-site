import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;


 // <header className="App-header">
 //          <img src={logo} className="App-logo" alt="logo" />
 //          <h1 className="App-title">Welcome to React</h1>
 //        </header>
 //        <p className="App-intro">
 //          To get started, edit <code>src/App.js</code> and save to reload.
 //        </p>