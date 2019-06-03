import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';


import './index.css';


class App extends Component {
  render() {
    const textlist = [{text: "HTML"}, {text: "JavaScript"}, {text: "React"}];
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
