import React, { Component }from 'react';
import './Landing.css';
import resume from '../downloadables/resume.pdf';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="container section landing">
                <h1>Davis Sawali</h1>
                <a href={resume} target="_blank"><button className="resume-btn">Resume</button></a>
            </div>
        );
    }
}

export default Landing;
