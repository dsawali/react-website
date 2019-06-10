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
                </div>
            </ScrollAnimation>
        );
    }
}

export default Contact;
