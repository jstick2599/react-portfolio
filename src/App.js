import React, {useRef,useState} from 'react';
import './App.css';
import Home from "./sections/home/Home.js";
import Skills from "./sections/skills/Skills.js";
import Projects from "./sections/projects/Projects.js";
import LeftTab from './components/LeftTab.js';
import RightTab from './components/RightTab.js';
import Experience from './sections/experience/Experience.js';
function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef= useRef(null);
  const [theme, setTheme] = useState(true); //true=light mode, false=dark mode

  return (
    <div className="App">
      <LeftTab homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} experienceRef={experienceRef} theme={theme}/> 
      <RightTab theme={theme} setTheme={setTheme}/>
      <div className='pages' >
        <Home ref={homeRef} theme={theme}/>
        <Skills  ref={skillsRef} theme={theme}/>
        <Projects ref={projectsRef} theme={theme}/>
        <Experience ref={experienceRef} theme={theme}/>
      </div>
    
    </div>
  );
}

export default App;
