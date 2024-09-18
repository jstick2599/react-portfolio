import React, { forwardRef } from 'react';
import './Skills.css';

const Skills = forwardRef((props, ref) => {
  return (
    <div className="skills" ref={ref}> {/* Attach the ref here */}
      <h1 className="skillsTitle">My Skills</h1>
      <div className="rows">
        <div className="row1">
          <div className="java">
            <img src="/imageLinks/java-logo.png" alt="Java Logo" className='javaLogo'/>
          </div>
          <div className="javascript">
            <img src="/imageLinks/javascript-logo.png" alt="JavaScript Logo" className='javaScriptLogo'/>
          </div>
          <div className="react">
            <img src="/imageLinks/react-logo.png" alt="React Logo" className='reactLogo'/>
          </div>
        </div>
        <div className="row2">
          <div>Git</div>
          <div>Figma</div>
          <div className='api'>{"{REST API}"}</div>
        </div>
        <div className="row3">
          <div>CSS</div>
          <div>HTML</div>
          <div>C++</div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
