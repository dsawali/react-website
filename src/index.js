import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import ReactGA from 'react-ga';

import './index.css';

const trackingId = 'UA-143520407-1';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <AboutMe />
        <Skills />
        <Experience />
        <Contact />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
