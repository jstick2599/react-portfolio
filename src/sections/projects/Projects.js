import React, {forwardRef} from 'react';
import verseFacts from "../../imageLinks/versefactsImg.png";
import encapsulate from "../../imageLinks/encapsulate.png";
import keysight from "../../imageLinks/keysight-dashboard.png";
import './Projects.css';

const Projects  = forwardRef(({props, theme}, ref) => {
  const projectsStyle = {
    backgroundColor: theme ? '#B4D9EF' : '#050816', // Set color based on theme state 
    color: theme ? 'black' : 'white',
  };
  return (
    <div className="projects" ref={ref} style={projectsStyle}>
        <h1 className="projectsTitle">Projects</h1>
        <div className='projectsContent'>
          <div className='projectsImage'>
            <h1 className='verseFactsTitle'>Verse Facts</h1>
            <img src={verseFacts} alt="Verse Facts Project" className='verseFactsProject'/>
            <h1 className='encapsulateTitle'>Encapsulate</h1>
            <img src={encapsulate} alt="Encapsulate Project" className='encapsulateProject'/>
            <h1 className='keysightTitle'>Keysight</h1>
            <img src={keysight} alt="Keysight Project" className='capstoneProject'/>
          </div>
          <div className='projectsDescription'>
            <h2 className='verseFactsDescription'>It is a business that I started that gives Bible verse facts generator with articles. It gives the users facts about how the bible is proven true by science/logic. It was built using ReactJS.</h2>
            <h2 className='encapsulateDescription'>Full Stack social media application. It was built using ReactJS and SQLite</h2>
            <h2 className='keysightDescription'>Capstone project made for our clients, Jira. It is a full Stack data extraction and visualization web application. It was built using ReactJS and Spring Boot</h2>
          </div>
        </div>
    </div>
);
});

export default Projects;
