import React from 'react';
import './App.css';

import SkillWheel from './components/SkillWheel.js'
import Projects from './components/Projects.js'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import AboutMe from './components/AboutMe.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillWheel />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
