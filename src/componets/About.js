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

                        </p>
                    </Fade>
                    </div>
                    <img src={img}></img>
                
            </div>
        );
    }
}
export default About
