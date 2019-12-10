import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import './SkillComp.css'
import 'animate.css/animate.min.css'


export default class SkillComp extends Component {
  render() {
    const delay = this.props.multiplier * 100
    return (
      <ScrollAnimation
        animateIn="fadeIn"
        delay={delay} >
        <div className='skill-comp-container'>

          <h2>{this.props.title}</h2>

        </div>
      </ScrollAnimation >
    )
  }
}