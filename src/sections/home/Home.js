import React, { useState, useEffect } from 'react';
import './Home.css';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

function Home() {
  const [isMatrix, setIsMatrix] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatrix(false); // Revert to normal text after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [isMatrix]);

  return (
    <div className="home">
      <div className="bio">
        <div className='nameParagraphDiv'>
          {isMatrix
            ? <GlitchClip onHover={false} duration={30}>
            <h1 className='matrixName'>011001100101011001</h1>
            </GlitchClip>
            : <h1 className="name">Joshua Stickles <br/>Web Developer</h1>}
        </div>
        <p className='objective'>Hi, I am a software engineer who loves to design and develop websites. I am interested in a full stack or frontend web development position.</p>
      </div>
      <div className='color'>
        <img align="left" src="/imageLinks/self-portrait.png" alt="My Portrait" className='selfie'/>
      </div>
    </div>
  );
}


export default Home;
