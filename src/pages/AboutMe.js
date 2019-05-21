import React, { Component }from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="container section about-me">
                <h1>about me</h1>
                <div>picture here</div>
            </div>
        );
    }
}

export default AboutMe;
