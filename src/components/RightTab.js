import React, {useEffect, useState} from 'react';
import './RightTab.css';


function RightTab() {
  const [isHover, setIsHover]=useState(false);
  const [theme, setTheme] = useState(true); //true=light mode, false=dark mode
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
    


  return (
    <div className="rightTabDiv">
        <img src="/imageLinks/github-logo.png" alt="github logo" className='github'/>
        <img src="/imageLinks/linkedin-logo.png" alt="linkedin logo" className='linkedin'/>
        {theme ?<img src="/imageLinks/moon-logo.png" alt="moon logo" className='moon' onClick={handleMoonClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        :<img src="/imageLinks/sun-logo.png" alt="sunlogo" className='sun' onClick={handleSunClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
  }
        
          {isHover && <div className="hover">
            <h4 className='popup'>Toggle Theme</h4>
            </div> }
     
      
    </div>
      
  );
}

export default RightTab;