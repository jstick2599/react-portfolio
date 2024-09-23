import React, { useState, useEffect ,forwardRef } from 'react';
import './Home.css';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

const Home = forwardRef(({props, theme}, ref) => {
  console.log("theme is ",theme);
  const [isMatrix, setIsMatrix] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatrix(false); // Revert to normal text after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [isMatrix]);

  const homeStyle = {
    backgroundColor: theme ? 'white' : '#050816', // Set color based on theme state
    color: theme ? 'black' : 'white',
  };
  const nameParagraphDivStyle={
    border:theme? "3px solid black" : "3px solid white",
  };
  const colorStyle={
    backgroundColor: theme ? "#B4D9EF": "#3B5161",
  };
  return (
    <div className="home"  ref={ref} style={homeStyle}>
      <div className="bio">
        <div className='nameParagraphDiv' style={nameParagraphDivStyle}>
          {isMatrix
            ? <GlitchClip onHover={false} duration={30}>
            <h1 className='matrixName'>011001100101011001</h1>
            </GlitchClip>
            : <h1 className="name">Joshua Stickles <br/>Web Developer</h1>}
        </div>
        <p className='objective'>Hi, I am a software engineer who loves to design and develop websites. I am interested in a full stack or frontend web development position.</p>
      </div>
      <div className='color' style={colorStyle}>
        <img align="left" src="../../public/imageLinks/self-portrait.png" alt="My Portrait" className='selfie'/>
      </div>
    </div>
  );

});



export default Home;
