import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import './SkillComp.css'
import 'animate.css/animate.min.css'


export default class SkillComp extends Component {
  render() {
    return (
      <ScrollAnimation
        animateIn="fadeIn">
        <div className='skill-comp-container'>

          <h2>{this.props.title}</h2>

        </div>
      </ScrollAnimation >
    )
  }
}