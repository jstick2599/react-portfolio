import React, { forwardRef } from 'react';
import java from "../../imageLinks/java-logo.png";
import javaScript from "../../imageLinks/javascript-logo.png";
import react from "../../imageLinks/react-logo.png";
import git from "../../imageLinks/git-logo.png";
import figma from "../../imageLinks/figma.png";
import html from "../../imageLinks/html-logo.png";
import css from "../../imageLinks/css-logo.png";
import cpp from "../../imageLinks/c++.jfif";
import './Skills.css';

const Skills = forwardRef(({props, theme}, ref) => {
  console.log("theme is ", theme);
  const skillsStyle = {
    backgroundColor: theme ? '#B4D9EF' : '#050816', // Set color based on theme state 
    color: theme ? 'black' : 'white',
  };
  return (
    <div className="skills" ref={ref} style={skillsStyle}> {/* Attach the ref here */}
      <h1 className="skillsTitle">My Skills</h1>
      <div className="rows">
        <div className="row1">
          <div className="skillsDiv">
            <img src={java} alt="Java Logo" className='javaLogo'/>
          </div>
          <div className="skillsDiv">
            <img src={javaScript} alt="JavaScript Logo" className='javaScriptLogo'/>
          </div>
          <div className="skillsDiv">
            <img src={react} alt="React Logo" className='reactLogo'/>
          </div>
        </div>
        <div className="row2">
          <div className='skillsDiv'>
            <img src={git} alt="Git Logo" className='gitLogo'/>
          </div>
          <div className='skillsDiv'>
            <img src={figma} alt="Figma Logo" className='figmaLogo'/> 
          </div>
          <div className='skillsDiv'>
            <h2 className='api'>{"{REST API}"}</h2>
          </div>
        </div>
        <div className="row3">
          <div className='skillsDiv'>
            <img src={css} alt="CSS Logo" className='cssLogo'/> 
          </div>
          <div className='skillsDiv'>
            <img src={html} alt="HTML Logo" className='htmlLogo'/> 
          </div>
          <div className='skillsDiv'>
            <img src={cpp} alt="C++ Logo" className='cppLogo'/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
