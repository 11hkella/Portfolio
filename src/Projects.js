import React, { Component } from 'react'

import ProjectPiece from './ProjectPiece.js'

import './Projects.css'

export default class Projects extends Component {

    render() {
        return (
            <div className='project-wrapper'>
                <h1>Projects</h1>

                <div className='project-container' >

                    <ProjectPiece
                        source='images/Flowstate.png'
                        title='Flowstate'
                        description=' is a clone of the popular memory game "Simon", which tests the player&apos;s ability to remember increasingly long sequences of inputs.'
                        technologies={['HTML5', 'CSS', 'Javascript']}
                        ghLink='https://github.com/11hkella/Flowstate'
                        webLink='https://flowstate.netlify.com/' />

                    <ProjectPiece
                        source='images/WheelOfChores.png'
                        title='Wheel of Chores'
                        description=' is a scheduling app that helps groups of users assign and accomplish tasks.'
                        technologies={['MongoDB', 'Mongoose', 'Node', 'Handelbars']}
                        ghLink='https://github.com/11hkella/Wheel-of-Chores'
                        webLink='https://wheel-of-chores.herokuapp.com/wheel' />



                    <ProjectPiece
                        source='images/SideB.png'
                        title='Side B'
                        description=' is music reviewing app that allows users to post opinion pieces about their favorite albums, songs, or artists. Write a review yourself, or engauge in a dialogue over the music you are passionate about.'
                        technologies={['MongoDB', 'Mongoose', 'Node', 'React']}
                        ghLink='https://github.com/11hkella/B-side'
                        webLink='https://b-side-review.herokuapp.com/' />

                    <ProjectPiece
                        source='images/EmojiCam.png'
                        title='EmojiCam'
                        description=' is a video app that uses facial recognition and expression detection to automatically map various emojis to user&apos;s faces.'
                        technologies={['PostgreSQL', 'Django', 'Node', 'React']}
                        ghLink='https://github.com/11hkella/EmojiCam'
                        webLink='https://master.dewt15ge7jmum.amplifyapp.com/' />

                </div >
            </div>
        )
    }
}