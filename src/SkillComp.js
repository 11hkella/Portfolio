import React, { Component } from 'react'

import './SkillComp.css'


export default class SkillComp extends Component {
  render() {
    return (
      <div className='skill-comp-container'>

        <h2>{this.props.title}</h2>

      </div>
    )
  }
}