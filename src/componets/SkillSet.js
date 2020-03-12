import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from './projectsData.js';
import Skill from './Skill';

class SkillSet extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Skill Set.</Fade></h1>
        <div className='skillset-content'>
                {data.skills.map((skill)=>(
                    <Skill key={skill.id}
                             title = {skill.title}
                             imageSrc = {skill.imageSrc}
                             url={skill.url}
                     ></Skill>
                ))}
        </div>
        </div>  );
    }
}
 
export default SkillSet;