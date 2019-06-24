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
            <div className="container section about-me">
                <h1>About me</h1>
               
                <hr className="hr-about-me"/>
                
                <div className="content-aboutme">
                <p className="intro-text">
                    Hi there! I'm a recently graduated undergrad from Simon Fraser University.
                    I majored in Computer Science and am looking for new opportunities. 
                    My experiences and interests consist of Full-stack development and Data Science. Always open to new projects!
                </p>
                </div>
            </div>
            </ScrollAnimation>
        );
    }
}

export default AboutMe;
