import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <div className="bio">
          <div className='nameParagraphDiv'>
            <h1 className="name">Joshua Stickles <br/>Web Developer</h1>
          </div>
          
          <p className='objective'>Hi, I am a software engineer who loves to design and develop websites. I am interested in a full stack or frontend web development position.</p>
        </div>
        <div className='color'>
          {/* <div className='image'> */}
          <img align="left" src="/imageLinks/self-portrait.png" alt="My Portrait" className='selfie'/>
          {/* </div> */}
          
        </div>
    </div>
  );
}

export default Home;