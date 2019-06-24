import React, { Component }from 'react';
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
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
                <div className="container section contact">
                    <h1>Contact</h1>
                    <hr className="hr-contact"/>
                    <div className="contact-entry-wrapper">
                        <div className="contact-entry"><span>Connect with me via <a href="https://www.linkedin.com/in/dsawali/">LinkedIn</a></span></div>
                        <div className="contact-entry"><span>See my projects on <a href="https://github.com/dsawali">Github</a></span></div>
                        <div className="contact-entry"><span>Email me at <a href="mailto:jnthndavis95@gmail.com">jnthndavis95@gmail.com</a></span></div>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Contact;
