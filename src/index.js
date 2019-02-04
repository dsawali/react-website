import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfoButton from './Components/Projects/InfoButton'
import SkillHeader from './Components/Skills/SkillHeader';

class App extends Component {
  render() {
    const textlist = [{text: "HTML"}, {text: "JavaScript"}, {text: "React"}];
    return (
      <div className="App">
        <SkillHeader text="Backend" />
        <InfoButton technology= {textlist} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
