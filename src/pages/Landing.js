import React, { Component }from 'react';
import './Landing.css';


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
                
            </div>
        );
    }
}

export default Landing;
