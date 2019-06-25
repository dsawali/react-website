import React, { Component }from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div className="navigation sticky">
                <ul>
                    <li>
                        <AnchorLink href="#about-me" offset="51" className="nav-link">About me</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#skills" offset="51" className="nav-link">Skills</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#experience" offset="51" className="nav-link">Experience</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact" offset="51" className="nav-link">Contact</AnchorLink>
                    </li>
                </ul>
                
            </div>
        );
    }
}

export default Navbar;
