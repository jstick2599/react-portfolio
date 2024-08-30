import React from 'react';
import './App.css';
import Home from "./pages/home/Home.js";
import Skills from "./pages/skills/Skills.js";
import Projects from "./pages/projects/Projects.js";
function App() {
  return (
    <div className="App">
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
    </div>
  );
}

export default App;
