import React from 'react';
import { Element } from 'react-scroll';
import '../App.css';

const mySkills = ['Javascript', 'React', 'Redux', 'ES6', 'Node.js', 'Express', 'Koa', 
'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Webpack', 'Docker', 'AWS', 'D3', 
'Git', 'SoA', 'HTML5', 'CSS' ];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateSkills: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    let scrollTop = e.target.scrollingElement.scrollTop;
    let animation = scrollTop > 250 ? 'fadeInUp' : '';

    this.setState({animateSkills: animation})
  }

  render() {
    return (
      <Element name="skills-element">
        <section className="skill-section">
        <h1 className="skill-header">Skills</h1>
        <p>Full Stack Javascript Web Development</p>
        <ul className="skills">
          {mySkills.map(skill => <li className={this.state.animateSkills} key={skill}>{skill}</li>)}
        </ul>

        </section>
      </Element>
      )
  }
}

export default Skills;