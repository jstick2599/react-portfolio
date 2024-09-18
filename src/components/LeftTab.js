import React from 'react';
import './LeftTab.css';


function LeftTab({ homeRef, skillsRef }) {
  const handleSkillsClick = () => {
    console.log("clicked");
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleHomeClick = () => {
    console.log("clicked");
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="leftTabDiv">
        <h1 className='sections' onClick={handleHomeClick}>JS</h1>
        <h3 className='sections' onClick={handleSkillsClick}>Skills</h3>
        <h3 className='sections'>Projects</h3>
        <h3 className='sections'>Experience</h3>
    </div>
  );
}

export default LeftTab;