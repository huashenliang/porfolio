import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import projectsData from './projectsData';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const icons = [
    <GitHubIcon style={{paddingTop:30}}/>,
    <LinkedInIcon />
]

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>
                    <Fade bottom cascade> Contact Me. </Fade>
                </h1>
            <Fade bottom>
                <div className='contact-content'>
                    <h1>
                        Let's keep in touch! 
                    </h1>
                    <a href={`mailto:${projectsData.email}`} className='email'> {projectsData.email}</a>
                    <ul>
                        {projectsData.contact.map((contact, index) => {
                           return( 
                           <li key={index}>
                                <a target='_blank' href={contact.url}>
                                    {icons[index]} {contact.name} 
                                </a>
                            </li>)
                        })}
                       
                    </ul>
                </div>
            </Fade>
            <span className='footer'> Personal Portfolio by Huashen Liang @2020</span>
            </div>
        );
    }
}
export default Contact;
