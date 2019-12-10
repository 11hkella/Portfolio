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
    ],
  }

  render() {
    return (
      <div className='all-skills-conatiner'>
        <div className='title'>
          <h1>Skills</h1>
        </div>

        {this.state.skills.map((skill, i) => {
          return <SkillComp
            title={skill}
            key={i} />
        })}

      </div>
    )
  }
}