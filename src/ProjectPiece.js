import React, { Component } from 'react'

import './ProjectPiece.css'

export default class ProjectPiece extends Component {
  render() {
    return (
      <div className='project-piece-container'>

        <img src={this.props.source} alt='website example' />

        <h3>{this.props.title}</h3>

        <p>technologies:</p>
        {this.props.technologies.map((tech, i) => {
          return <span className='tech-used'>. {tech} .</span>
        })}

      </div>
    )
  }
}