import { Route } from 'react-router';
import { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Works from './Components/Works';
import '@fortawesome/fontawesome-free/js/all.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1199 });
  }

  render = () => {
    const isDesktop = this.state.isDesktop;
    return (
      <div className="App">
        <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
          <Header />
          {isDesktop ? <Intro /> : ''}
          <Route exact path="/personal-site/">
            {!isDesktop ? <Intro /> : ''}
            <About />
          </Route>
          <Route exact path="/personal-site/contact">
            <Contact />
          </Route>
          <Route exact path="/personal-site/experience">
            <Experience />
          </Route>
          <Route exact path="/personal-site/works">
            <Works />
          </Route>
          <Route exact path="/personal-site/education">
            <Education />
          </Route>
          <Route exact path="/personal-site/about">
            <About />
          </Route>
        </div>
      </div>
    );
  }
}


export default App;
