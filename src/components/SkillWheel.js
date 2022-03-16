import React, { Component } from 'react'

import SkillComp from './SkillComp.js'

import './SkillWheel.css'


export default class SkillWheel extends Component {

  state = {
    skills: [
      'Sencha ExtJS',
      'GraphQL',
      'Typscript',
      'React',
      'Node.js',
      'CSS',
      'HTML5',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Git',
      'Cypress',
      'Azure DevOps',
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