import React, { Component } from 'react'

import SkillComp from './SkillComp.js'

import './SkillWheel.css'


export default class SkillWheel extends Component {

  state = {
    skills: [
      'React',
      'Node.js',
      'CSS',
      'HTML5',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Django',
      'GitHub',
      'AWS',
      'Cypress'
    ],
  }

  render() {
    return (
      <div className='skill-container'>


        <h1 className='title'>Skills...</h1>

        <div className='all-skills-conatiner'>
          {this.state.skills.map((skill, i) => {
            return <SkillComp
              title={skill}
              multiplier={i}
              key={i} />
          })}
        </div>

      </div>
    )
  }
}