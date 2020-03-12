import React, { Component } from 'react';
import Projects from './Projects';
import Fade from 'react-reveal/Fade';
import projectsData from './projectsData.js'

class Skills extends Component {
    state = {  }
    render() { 
        console.log(projectsData);
        return ( 
            <div>
                <h1 className='heading'>
                    <Fade bottom cascade>
                        My Work.
                    </Fade>
                </h1>
                <div className='work-content'>
                    {projectsData.projects.map(p => (
                        <Projects 
                            key = {p.id}
                            title = {p.title}
                            service = {p.service}
                            imageSrc = {p.imageSrc}
                            url = {p.url}
                        >
                        </Projects>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Skills;