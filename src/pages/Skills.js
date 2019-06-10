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
        'HTML5/CSS'
    ]
}

const backend = {
    category: 'Back-end',
    entry: [
        'Python',
        'ASP .NET',
        'Java',
        'NodeJS'
    ]
}

const others = {
    category: 'Others',
    entry: [
        'PySpark',
        'Scikit-learn',
        'Docker',
        'Selenium',
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
                <div className="container section skills">
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
