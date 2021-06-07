import { Route } from 'react-router';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Intro from './Components/Intro';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Resume from './Components/Resume';
import Works from './Components/Works';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <div className="App">
      <div class="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Header />
        <Intro />
        <Route path="/">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </div>
  );
}

export default App;
