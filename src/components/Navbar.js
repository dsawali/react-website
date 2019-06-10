import React, { Component }from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">About me</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                
            </div>
        );
    }
}

export default Navbar;
