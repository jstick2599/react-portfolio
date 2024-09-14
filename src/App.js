import React from 'react';
import './App.css';
import Home from "./sections/home/Home.js";
import Skills from "./sections/skills/Skills.js";
import Projects from "./sections/projects/Projects.js";
import LeftTab from './components/LeftTab.js';
import RightTab from './components/RightTab.js';
function App() {
 



// window.addEventListener('scroll', function() {
//   const section1 = document.querySelectorAll('leftTabDiv');
//   console.log("section is sectin ",section1);
//   const rect = section1.getBoundingClientRect();

//   if (rect.top <= window.innerHeight && section1.bottom >= 0) {
//     section1.style.backgroundColor = 'lightgray'; // Color for section 1
//   } 
// });
  // const elements = document.querySelectorAll('.leftTabDiv');
  // elements.forEach((element) => {
  //   element.style.backgroundColor='#B4D9EF';
  //   // element.style.color = 'red';
  // });
  // const changeColorStyle = () => {
  //   const elements = document.querySelectorAll('.leftTabDiv');
  //   elements.forEach((element) => {
  //     element.style.backgroundColor='#B4D9EF';
  //     // element.style.color = 'red';
  //   });
  //   };
    
  

  return (
    <div className="App">
      <LeftTab />
      <RightTab />
      <div className='pages' >
        <Home />
        <Skills/>
        <Projects />
      </div>
    </div>
  );
}

export default App;
