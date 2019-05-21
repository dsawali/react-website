import React, { Component }from 'react';
import './Skills.css';
import SkillEntry from '../components/SkillEntry';

const frontend = {
    category: 'Front-end',
    entry: [
        'JavaScript ES6',
        'React',
        'Babel',
        'HTML5/CSS'
    ]
}

const backend = {
    category: '',
    entry: [
        ''
    ]
}

const others = {
    category: '',
    entry: [
        ''
    ]
}

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
                <h1>Skills</h1>
                <hr className="hr-skills"/>
                <SkillEntry category={frontend.category} entry={frontend.entry}/>
                {/* <SkillEntry category={'Back end'} entry={['React', 'JS']}/>
                <SkillEntry category={'Others'} entry={['React', 'JS']}/> */}
            </div>
        );
    }
}

export default Skills;
