import React, { Component }from 'react';
import './Experience.css';
import ExperienceEntry from '../components/ExperienceEntry';
import ScrollAnimation from 'react-animate-on-scroll';

const exp = [
    {
        title: 'Software Engineer in Test',
        company: 'Electronic Arts',
        date: 'Mar 2020 - Present'
    },
    {
        title: 'QA Engineer',
        company: 'Vipre Security',
        date: 'Sep 2019 - Mar 2020'
    },
    {
        title: 'Software Developer Co-op',
        company: 'BCAA',
        date: 'Sep 2018 - Apr 2019'
    },
    {
        title: 'Software Developer Co-op (Automated Testing)',
        company: 'BCAA',
        date: 'May 2017 - Sep 2017'
    },
    {
        title: 'Investment Banking Intern',
        company: 'NISP Sekuritas Ltd.',
        date: 'Jun 2013 - Sep 2013'
    }
]

class Experience extends Component {
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
                <div className="container section experience" id="experience">
                    <h1>Experience</h1>
                    <hr className="hr-experience"/>
                    <div className="experience-wrapper">
                        <ExperienceEntry expData={exp} />
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Experience;
