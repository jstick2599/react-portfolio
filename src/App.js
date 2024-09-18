import React, {useRef} from 'react';
import './App.css';
import Home from "./sections/home/Home.js";
import Skills from "./sections/skills/Skills.js";
import Projects from "./sections/projects/Projects.js";
//import Experience from "./sections/experience/Experience.js";
import LeftTab from './components/LeftTab.js';
import RightTab from './components/RightTab.js';
function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  //const experienceRef= useRef(null);
  return (
    <div className="App">
      <LeftTab homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef}/>
      <RightTab />
      <div className='pages' >
        <Home ref={homeRef}/>
        <Skills  ref={skillsRef}/>
        <Projects ref={projectsRef}/>
      </div>
    </div>
  );
}

export default App;
