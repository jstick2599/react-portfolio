import React from 'react';
import './Skills.css';

// const Skills=React.forwardRef((props, ref) =>{
function Skills(){
  return (
    <div className="skills">
      <h1 className="skillsTitle">My Skills</h1>
      <div className="rows">
        <div className='row1'>
          <div>Java</div>
          <div>JavaScript</div>
          <div>React</div>
        </div>
        <div className='row2'>
          <div>Git</div>
          <div>Figma</div>
          <div>{"{REST API}"}</div>
        </div>
        <div className='row3'>
          <div>CSS</div>
          <div>HTML</div>
          <div>C++</div>
        </div>
      </div>
    </div>
  )};


export default Skills;


// const MyComponent = React.forwardRef((props, ref) => {
//   return <div ref={ref}>Hello World</div>;
// });
