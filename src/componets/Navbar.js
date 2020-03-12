import React, { Component } from 'react';
import { Link, animateScroll } from "react-scroll";
class Navbar extends Component {
    state = { 
       navBar:['Home','About','work','contact']
    }
    scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    render() { 
        return (
        <nav>
            <ul>
                {this.state.navBar.map(n => {
                    return(
                        <li>
                            <Link
                            className='link'
                            activeClass="active"
                            to={n}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.scrollToTop}
                        >
                            {n.toUpperCase()}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav> );
    }
}
 
export default Navbar;