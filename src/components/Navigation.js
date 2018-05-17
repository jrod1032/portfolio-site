import React from 'react';
import { Link, scroll, scrollSpy } from 'react-scroll';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: 'nav-v1',
      text: 'logo-v1'
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    if (window.pageYOffset > 0) {
      this.setState({nav: 'nav-v2', text: 'logo-v2'})
    } else if (window.pageYOffset === 0) {
      this.setState({nav: 'nav-v1', text: 'logo-v1'})
    }
  }

  render() {
    return (
      <nav className={`nav nav-sticky ${this.state.nav}`}>
        <a onClick={() => scroll.scrollToTop()}>
          <h1 id="logo" className={this.state.text}>JP</h1>
        </a>
        <ul className="nav-list">
          <li><Link
          activeClass="active"
          to="skills-element"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}>
          <span className={this.state.text}>Skills</span>
          </Link></li>
          <li><Link
          activeClass="active"
          to="projects-element"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}>
          <span className={this.state.text}>Portfolio</span>
          </Link></li>
          <li><Link
          activeClass="active"
          to="about-element"
          spy={true}
          smooth={true}
          duration={500}
          offset={0}>
          <span className={this.state.text}>About</span>
          </Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;