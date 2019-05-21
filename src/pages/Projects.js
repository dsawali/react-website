import React, { Component }from 'react';
import './Projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="container section projects">
                <h1>Projects</h1>
                <hr className="hr-projects"/>
            </div>
        );
    }
}

export default Projects;
