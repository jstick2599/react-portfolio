import React from 'react';
import './App.css';
import Home from "./sections/home/Home.js";
import Skills from "./sections/skills/Skills.js";
import Projects from "./sections/projects/Projects.js";
import LeftTab from './components/LeftTab.js';
function App() {
  return (
    <div className="App">
      <LeftTab />
      <div className='pages'>
        <Home />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
