import React, {forwardRef} from 'react';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
        <h1 className="projectsTitle">Projects</h1>
        <div className='projectsContent'>
          <div className='projectsImage'>
            <h1 className='educationTitle'>Education Project</h1>
            <img src="/imageLinks/education-project.png" alt="Education Project" className='educationProject'/>
            <h1 className='encapsulateTitle'>Encapsulate</h1>
            <img src="/imageLinks/encapsulate.png" alt="Encapsulate Project" className='encapsulateProject'/>
            <h1 className='keysightTitle'>Keysight</h1>
            <img src="/imageLinks/keysight-dashboard.png" alt="Keysight Project" className='capstoneProject'/>
          </div>
          <div className='projectsDescription'>
            <h2 className='educationDescription'>Education-themed full-stack web application built during UC Merced's HackMerced 2022 hackathon. It was built using ReactJS and Spring Boot</h2>
            <h2 className='encapsulateDescription'>Full Stack social media application. It was built using ReactJS and SQLite</h2>
            <h2 className='keysightDescription'>Capstone project made for our clients, Jira. It is a full Stack data extraction and visualization web application. It was built using ReactJS and Spring Boot</h2>
          </div>
        </div>
    </div>
);
});

export default Projects;