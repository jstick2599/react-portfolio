import React, {forwardRef} from 'react';
import './Experience.css';

const Experience = forwardRef((props, ref) => {
  return (
    <div className="experience" ref={ref}>
        <p className="experienceTest">Experience</p>
    </div>
);
});

export default  Experience;