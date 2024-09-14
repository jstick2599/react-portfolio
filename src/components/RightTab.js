import React from 'react';
import './RightTab.css';

function RightTab() {
  return (
    <div className="rightTabDiv">
        <img src="/imageLinks/github-logo.png" alt="github logo" className='github'/>
        <img src="/imageLinks/linkedin-logo.png" alt="linkedin logo" className='linkedin'/>
        <img src="/imageLinks/moon-logo.png" alt="moon logo" className='moon'/>
    </div>
  );
}

export default RightTab;