import React, { Component }from 'react';
import './Skills.css';
import SkillEntry from '../components/SkillEntry';
import ScrollAnimation from 'react-animate-on-scroll';

const frontend = {
    category: 'Front-end',
    entry: [
        'JavaScript ES6',
        'React',
        'Babel',
        'SASS',
        'ESlint'
    ]
}

const backend = {
    category: 'Back-end',
    entry: [
        'Python',
        'Go',
        'ASP .NET',
        'Java',
        'NodeJS'
    ]
}

const others = {
    category: 'Others',
    entry: [
        'Docker',
        'Bamboo (CI/CD)',
        'Docker',
        'Selenium',
        'Protractor',
        'MongoDB'
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
            <ScrollAnimation 
                animateIn="fadeIn" 
                animateOnce="true" 
                duration="0.5"
            >
                <div className="container section skills" id="skills">
                    <h1>Skills</h1>
                    <hr className="hr-skills"/>
                    <div className="content-wrapper">
                        <div className="content-skills">
                            <SkillEntry category={frontend.category} entry={frontend.entry}/>
                        </div>
                        <div className="content-skills">
                            <SkillEntry category={backend.category} entry={backend.entry}/>
                        </div>
                        <div className="content-skills">
                            <SkillEntry category={others.category} entry={others.entry}/>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Skills;
