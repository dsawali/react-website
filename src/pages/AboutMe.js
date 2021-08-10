import React, { Component }from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
            <ScrollAnimation 
                animateIn="fadeIn" 
                animateOnce="true" 
                duration="0.5"
            >
            <div id="about-me" className="container section about-me">
                <h1>About me</h1>
               
                <hr className="hr-about-me"/>
                
                <div className="content-aboutme">
                <p className="intro-text">
                    I'm a Software Engineer currently based in Vancouver, BC, Canada. I'm experienced in web development and automation testing,
                    mainly in JS and TS. Always open to new projects. 
                </p>
                </div>
            </div>
            </ScrollAnimation>
        );
    }
}

export default AboutMe;
