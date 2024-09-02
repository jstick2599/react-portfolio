import React from 'react';
import './App.css';
import Home from "./pages/home/Home.js";
import Skills from "./pages/skills/Skills.js";
import Projects from "./pages/projects/Projects.js";
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
