import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './index.css';


class App extends Component {
  render() {
    const textlist = [{text: "HTML"}, {text: "JavaScript"}, {text: "React"}];
    return (
      <div className="App">
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
