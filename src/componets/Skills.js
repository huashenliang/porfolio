import React, { Component } from 'react';
import Skill from './Skill';
import Fade from 'react-reveal/Fade';
import projectsData from './projectsData.js'

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className='heading'>
                    <Fade bottom cascade>
                        My Work.
                    </Fade>
                </h1>
                <div className='work-content'>
                    {projectsData.projects.map(p => (
                        <Skill 
                            key = {p.id}
                            title = {p.title}
                            service = {p.service}
                            imageSrc = {p.imageSrc}
                            url = {p.url}
                        >
                        </Skill>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Skills;