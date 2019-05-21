import React, { Component }from 'react';
import './Skills.css';
import SkillEntry from '../components/SkillEntry';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="container section skills">
                <h1>.skills</h1>
                <SkillEntry category={'Front End'} entry={['React', 'JS']}/>
            </div>
        );
    }
}

export default Skills;
