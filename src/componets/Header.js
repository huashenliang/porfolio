import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import projectsData from './projectsData';
import Typist from 'react-typist';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h1 className='heading-background'>Passion</h1>
                <header>
                    <h1> <Fade bottom cascade> </Fade></h1>
                </header>
                <Fade bottom>
                <p className='header-title'>
                    <Typist>
                        <span> Hello! </span>
                        <Typist.Backspace count={7} delay={600} />
                        <span> My name is Huashen Liang </span>
                        <Typist.Delay ms={600} />
                        <br />
                        <span> I am a Web developer </span>
                    </Typist>
                <br></br>
                    <button><a href={`mailto:${projectsData.email}`}> Contact Me </a></button>
                </p>
                </Fade>
  
   
            </div>
        );
    }
}
 
export default Header;