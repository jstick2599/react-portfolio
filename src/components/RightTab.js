import React, {useState} from 'react';
import github from '../imageLinks/github-logo.png';
import linkedin from "../imageLinks/linkedin-logo.png";
import moon from "../imageLinks/moon-logo.png";
import sun from "../imageLinks/sun-logo.png";
<<<<<<< HEAD
import './RightTab.css';
=======


>>>>>>> b96ab22bc69ef3b017169c85efe064d47c339465



function RightTab({ theme, setTheme }){
  const [isHover, setIsHover]=useState(false);
  
  const handleMouseOver = () => {
    setIsHover(true);
    console.log("testing");
  };

  // Set hover state to false when mouse is out
  const handleMouseOut = () => {
    setIsHover(false);
  };
  const handleMoonClick = () => {
    setTheme(false);
    console.log("The theme is ",theme);
  };
  const handleSunClick = () => {
    setTheme(true);
    console.log("The theme is ",theme);
  };
    


function RightTab({ theme, setTheme }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const handleMoonClick = () => {
    setTheme(false);
  };

  const handleSunClick = () => {
    setTheme(true);
  };

  return (
    <div className="rightTabDiv">
<<<<<<< HEAD
      <a href="https://github.com/jstick2599" >
        <img src={github} alt="github logo" className='github' />
      </a>
      <a href="https://www.linkedin.com/in/joshua-stickles-980b60195/">
        <img src={linkedin} alt="linkedin logo" className='linkedin'/>
      </a>
      <div className='themeLogo'>
      {theme ?<img src={moon} alt="moon logo" className='moon' onClick={handleMoonClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      :<img src={sun} alt="sun logo" className='sun' onClick={handleSunClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>}
      {isHover && <div className="hover">
        <h4 className='popup'>Toggle Theme</h4>
      </div> }
=======
      <a href="https://github.com/jstick2599" className='github'>
        <img src={github} alt="github logo" className='github' />
      </a>
      <a href="https://www.linkedin.com/in/joshua-stickles-980b60195/" className='linkedin'>
        <img src={linkedin} alt="linkedin logo" className='linkedin' />
      </a>
      <div className='themeLogo'>
        {theme ? (
          <img src={moon} alt="moon logo" className='moon' onClick={handleMoonClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        ) : (
          <img src={sun} alt="sun logo" className='sun' onClick={handleSunClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        )}
        {isHover && <h4 className='popup'>Toggle Theme</h4>}
>>>>>>> b96ab22bc69ef3b017169c85efe064d47c339465
      </div>
    </div>
  );
}}

export default RightTab;
