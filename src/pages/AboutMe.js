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
                <h1>About me</h1>
               
                <hr className="hr-about-me"/>
                
                <div className="content-aboutme">
                <p className="intro-text">
                    Hi there. I'm a fourth-year Computer Science student in Simon Fraser University. 
                    I was born in Jakarta, Indonesia. I love technology and all things computer. 
                    I have a passion for Software Engineering and Data Science .
                    Always open to new connections and projects!
                </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;
