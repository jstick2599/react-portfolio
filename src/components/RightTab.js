import React, {useEffect, useState} from 'react';
import './RightTab.css';


function RightTab() {
  const [isHover, setIsHover]=useState(false);
  const handleMouseOver = () => {
    setIsHover(true);
    console.log("testing");
  };

  // Set hover state to false when mouse is out
  const handleMouseOut = () => {
    setIsHover(false);
  };
    


  return (
    <div className="rightTabDiv">
        <img src="/imageLinks/github-logo.png" alt="github logo" className='github'/>
        <img src="/imageLinks/linkedin-logo.png" alt="linkedin logo" className='linkedin'/>
        <img src="/imageLinks/moon-logo.png" alt="moon logo" className='moon' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        
          {isHover && <div className="hover">
            <h4 className='popup'>Toggle Theme</h4>
            </div> }
     
      
    </div>
      
  );
}

export default RightTab;