import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import './Hero.css'


export default class Hero extends Component {
    render() {
        return (
            <div className='hero-container'>

                <ScrollAnimation
                    className='labels'
                    animateIn="fadeIn"
                    animateOut="fadeOut"
                    delay={300}>

                    <p>&#8592; LinkedIn</p>
                    <p>&#8592; GitHub</p>
                    <p>&#8592; Resume PDF</p>
                    <p>&#8592; Email</p>

                </ScrollAnimation>


                <ScrollAnimation
                    className='title'
                    animateIn="slideInLeft"
                    animateOnce={true}
                    delay={800}>
                    <h1>Henry Kellam</h1>
                    <h3>Software Developer</h3>
                </ScrollAnimation>
            </div>
        )
    }
}