import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import img from '../images/aboutme.png'
import { Emoji } from 'emoji-mart'

class About extends Component {
    state = { 
    
    }
    render() { 
        return ( 
            <div name='About' className='about'>
                <div className='about-content'>
                    <h1>
                        <Fade bottom cascade>
                            About Me.
                        </Fade>
                    </h1>
                    <Fade bottom>
                 
                        <p>
                            I am a recent graduate of Georgian College with a Diploma in computer programming. 
                            In 2017, I graduated from the University of Leicester in the UK with a Bachelor degree 
                            in Business Management.  
                        </p>
                        <br />
                        <p>
                            I am a passionate programmer who can turn coffee into code   
                        </p>
                    </Fade>
                    </div>
                    <img src={img}></img>
                
            </div>
        );
    }
}
export default About
