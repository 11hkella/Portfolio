import React from 'react';
import './App.css';


import SkillWheel from './SkillWheel.js'
import SkillComp from './SkillComp.js'
import Projects from './Projects.js'
import ProjectPiece from './ProjectPiece.js'
import Navbar from './Navbar.js'
import NavLink from './NavLink.js'
import Hero from './Hero.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SkillWheel />
      <Projects />
    </div>
  );
}

export default App;
