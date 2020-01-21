import React, { Component } from 'react'

import './AboutMe.css'


export default class AboutMe extends Component {
    render() {
        return (
            <div className='about-me-container'>
                <img className='profile-pic' src='./images/profile1-copy.jpg' alt='profile' />
                <p className='about'>
                    Experience in full-stack developing with a focus on object-oriented
programming, code readability, and time efficiency. Ability to learn
quickly with a diverse background in music, lighting design, and
mechanical engineering. Inspired when utilizing technical skills to take
ambitious projects from concept to creation.
                </p>
            </div >
        )
    }
}