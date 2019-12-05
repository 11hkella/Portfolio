import React, { Component } from 'react'

import ProjectPiece from './ProjectPiece.js'
import Carousel from './Carousel.js'

export default class Projects extends Component {
  render() {
    return (
      <div className='project-container'>
        <h1>Projects</h1>

        <Carousel>

          <ProjectPiece
            source='images/Flowstate.png'
            title='Flowstate'
            technologies={['html5', 'css', 'javascript']} />

          <ProjectPiece
            source='images/WheelOfChores.png'
            title='Wheel of Chores'
            technologies={['node', 'handelbars', 'mongoDB', 'mongoose']} />

          <ProjectPiece
            source='images/SideB.png'
            title='Side B'
            technologies={['node', 'react', 'mongoDB', 'mongoose']} />

          <ProjectPiece
            source='images/EmojiCam.png'
            title='EmojiCam'
            technologies={['node', 'react', 'PostgreSQL', 'Django']} />

        </Carousel>
      </div>
    )
  }
}