import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './AboutMe.css'
import 'animate.css/animate.min.css'



export default class AboutMe extends Component {
    render() {
        const delay = this.props.multiplier * 100
        return (
            <ScrollAnimation
                animateIn="fadeIn"
                delay={delay}>
                <h1 className="about-title">About Me</h1>
                <div className='about-me-container'>
                    <img className='profile-pic' src='./images/profile1-copy.jpg' alt='profile' />
                    <div className="wrapper">
                        <p className='about'>
                            Experience in full-stack developing with a focus on object-oriented
        programming, modern frameworks, and time efficiency. Ability to learn
        quickly with a diverse background in music, lighting design, and
        mechanical engineering. Inspired when utilizing technical skills to take
        ambitious projects from concept to creation.
                </p>
                    </div>
                </div >
            </ScrollAnimation>
        )
    }
}