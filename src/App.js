import React from 'react';
import './App.css';

import SkillWheel from './SkillWheel.js'
import Projects from './Projects.js'
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import AboutMe from './AboutMe.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillWheel />
      <Projects />
    </div>
  );
}

export default App;
