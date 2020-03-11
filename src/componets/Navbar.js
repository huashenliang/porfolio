import React, { Component } from 'react';
import { Link, animateScroll } from "react-scroll";
class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    render() { 
        return (
        <nav>
            <ul>
                <li>
                    <Link
                    className='link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >
                    Home
                    </Link>
                </li>


                <li>
                    <Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >   
                    About
                    </Link>
                </li>

                <li>
                    <Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Work
                    </Link>
                </li>

                <li>
                    <Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact
                    </Link>
                </li>
            </ul>
        </nav> );
    }
}
 
export default Navbar;