import React, { Component } from 'react'

import ProjectPiece from './ProjectPiece.js'

export default class Projects extends Component {
  render() {
    return (
      <div className='project-container'>
        <h1>Projects</h1>

        <ProjectPiece
          source='images/Flowstate.png'
          title='Flowstate'
          technologies={['html5', 'css', 'javascript']} />
      </div>
    )
  }
}