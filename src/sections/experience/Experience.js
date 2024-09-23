import React, {forwardRef} from 'react';
import './Experience.css';

const Experience  = forwardRef(({props, theme}, ref) => {
    const experienceStyle = {
        backgroundColor: theme ? 'white' : '#050816', // Set color based on theme state 
      };
    const bulletPointStyle = {
        backgroundColor: theme ? 'white' : '#050816', // Set color based on theme state 
        color: theme ? 'black' : 'white',
    };
    const lineStyle = {
        borderLeft: theme ? "2px solid black" :"2px solid white", /* or border-right */
      };
    const diamondStyle={
        visibility:theme ? "visible" : "hidden",
    }
    const rightSideStyle={
        backgroundColor:theme?"#B4D9EF":"#3B5161",
    };
  return (
    <div className="experience" ref={ref} style={experienceStyle}>
        <div className="circle">
            <img src="/imageLinks/rtx-logo.png" alt="Raytheon Logo" className='rtxLogo'/>
        </div>
        <div className='verticalLine' style={lineStyle}></div>
        <div className='bulletPoints' style={bulletPointStyle}>
            <div className='firstBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond' style={diamondStyle}/>
                <p className='firstBullet'> Performed programming experience in Java for the development of a first principles analysis modeling and simulation (M&S) GUI to help answer serious questions from Strategy Leads at RTX</p>
            </div>
            <div className='secondBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond' style={diamondStyle}/>
                <p className='secondBullet'>Created a series of frontend stress tests to identify key errors and made updates to make this M&S GUI more robust</p>
            </div>
            <div className='thirdBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond' style={diamondStyle}/>
                <p className='thirdBullet'> Created tests to make the programs more robust. Developed new architecture for Java coding documentation to optimize user performance</p>
            </div>
            <h3 className="websiteToolLine">Made with React . Joshua Stickles 2024</h3>

        </div>
        
        <div className='rightSide' style={rightSideStyle}>
            <div className='experienceTitle'>
                <h1 className='workExperience'>Work Experience</h1>
                <h2 className='software'>Software Engineer at Raytheon</h2>
                <h2 className='timeline'>March 2023-July 2024</h2>
            </div>
          
        </div>
       
        


        
    </div>
);
});

export default  Experience;