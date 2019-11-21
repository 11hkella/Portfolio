import React from 'react';
import './App.css';
import Profile from './Profile.js'
import SkillWheel from './SkillWheel.js'
import SkillComp from './SkillComp.js'
import Projects from './Projects.js'
import ProjectPiece from './ProjectPiece.js'
import Navbar from './Navbar.js'
import NavLink from './NavLink.js'
import { directive } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <SkillWheel />
      <Projects />
    </div>
  );
}

export default App;
