import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Skill extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
            <div className='skills'>
                <a href={this.props.url}>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                </a>
                <h1>{this.props.title}</h1>
            </div> 
        </Fade>
        );
    }
}
 
export default Skill;