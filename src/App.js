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
        <p>hi</p>
        <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
          <Header />
          {isDesktop ? <Intro /> : ''}
          <Route exact path="/">
            {!isDesktop ? <Intro /> : ''}
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </div>
      </div>
    );
  }
}


export default App;
