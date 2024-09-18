import React, { forwardRef } from 'react';
import './Skills.css';

const Skills = forwardRef((props, ref) => {
  return (
    <div className="skills" ref={ref}> {/* Attach the ref here */}
      <h1 className="skillsTitle">My Skills</h1>
      <div className="rows">
        <div className="row1">
          <div className="skillsDiv">
            <img src="/imageLinks/java-logo.png" alt="Java Logo" className='javaLogo'/>
          </div>
          <div className="skillsDiv">
            <img src="/imageLinks/javascript-logo.png" alt="JavaScript Logo" className='javaScriptLogo'/>
          </div>
          <div className="skillsDiv">
            <img src="/imageLinks/react-logo.png" alt="React Logo" className='reactLogo'/>
          </div>
        </div>
        <div className="row2">
          <div className='skillsDiv'>
            <img src="/imageLinks/git-logo.png" alt="Git Logo" className='gitLogo'/>
          </div>
          <div className='skillsDiv'>
            <img src="/imageLinks/figma.png" alt="Figma Logo" className='figmaLogo'/> 
          </div>
          <div className='skillsDiv'>
            <h2 className='api'>{"{REST API}"}</h2>
          </div>
        </div>
        <div className="row3">
          <div className='skillsDiv'>CSS</div>
          <div className='skillsDiv'>HTML</div>
          <div className='skillsDiv'>C++</div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
