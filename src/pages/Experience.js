import React, { Component }from 'react';
import './Experience.css';
import ExperienceEntry from '../components/ExperienceEntry';

const exp = [
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

// NEED TO FIX IMPLEMENTATION TO PASS OBJECT INSTEAD

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="container section experience">
                <h1>Experience</h1>
                <hr className="hr-experience"/>
                <div className="experience-wrapper">
                    <div className="experience-title">
                       <ExperienceEntry expData={exp} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
