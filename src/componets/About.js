import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import img from '../images/aboutme.png'

class About extends Component {
    state = { }
    render() { 
        return ( 
            <div className='about'>
                <div className='about-content'>
                    <h1>
                        <Fade bottom cascade>
                            About Me.
                        </Fade>
                    </h1>
                    <Fade bottom>
                        <p>
                            Hello, my name is Huashen Liang.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </Fade>
                    </div>
                    <img src={img}></img>
                
            </div>
        );
    }
}
export default About
