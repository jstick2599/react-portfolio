import React from 'react';
import './LeftTab.css';


function LeftTab({ homeRef, skillsRef, projectsRef, experienceRef, theme }) {
  const handleSkillsClick = () => {
    console.log("clicked");
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleHomeClick = () => {
    console.log("clicked");
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleProjectsClick = () => {
    console.log("clicked");
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleExperienceClick = () => {
    console.log("clicked");
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const sectionsStyle={
    color: theme ? 'black' : 'white',
  };
  return (
    <div className="leftTabDiv" style={sectionsStyle}>
        <h1 className='sections' onClick={handleHomeClick}>JS</h1>
        <h3 className='sections' onClick={handleSkillsClick}>Skills</h3>
        <h3 className='sections' onClick={handleProjectsClick}>Projects</h3>
        <h3 className='sections' onClick={handleExperienceClick}>Experience</h3>
    </div>
  );
}

export default LeftTab;