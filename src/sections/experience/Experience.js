import React, {forwardRef} from 'react';
import './Experience.css';

const Experience = forwardRef((props, ref) => {
  return (
    <div className="experience" ref={ref}>
        <div className="circle">
            <img src="/imageLinks/rtx-logo.png" alt="Raytheon Logo" className='rtxLogo'/>
        </div>
        <div className='verticalLine'></div>
        <div className='bulletPoints'>
            <div className='firstBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond'/>
                <p className='firstBullet'> Performed programming experience in Java for the development of a first principles analysis modeling and simulation (M&S) GUI to help answer serious questions from Strategy Leads at RTX</p>
            </div>
            <div className='secondBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond'/>
                <p className='secondBullet'>Created a series of frontend stress tests to identify key errors and made updates to make this M&S GUI more robust</p>
            </div>
            <div className='thirdBulletPoint'>
                <img src="/imageLinks/croppedDiamond.jpg" alt="Diamond bullet point" className='diamond'/>
                <p className='thirdBullet'> Created tests to make the programs more robust. Developed new architecture for Java coding documentation to optimize user performance</p>
            </div>
           

        </div>
        <div className='rightSide'>
            <p>hello</p>
        </div>
       
 


        
    </div>
);
});

export default  Experience;