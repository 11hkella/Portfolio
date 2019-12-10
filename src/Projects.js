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
                        description=' is a clone of the popular memory game "Simon". It implements similar game logic and tests the player&apos;s ability to remember increasingly long sequences of inputs.'
                        technologies={['HTML5', 'CSS', 'Javascript']}
                        ghLink='https://github.com/11hkella/Flowstate'
                        webLink='https://flowstate.netlify.com/' />

                    <ProjectPiece
                        source='images/WheelOfChores.png'
                        title='Wheel of Chores'
                        description=' is a scheduling app that helps groups of users assign and accomplish recurring tasks.'
                        technologies={['MongoDB', 'Mongoose', 'Node', 'Handelbars']}
                        ghLink='https://github.com/11hkella/Wheel-of-Chores'
                        webLink='https://wheel-of-chores.herokuapp.com/wheel' />



                    <ProjectPiece
                        source='images/SideB.png'
                        title='Side B'
                        description=' is an album review app that allows users to post opinion pieces about the albums they are currently listening to. Users can see reviews and get exposed to new music as well as reply to the reviews of other users.'
                        technologies={['MongoDB', 'Mongoose', 'Node', 'React']}
                        ghLink='https://github.com/11hkella/B-side'
                        webLink='https://b-side-review.herokuapp.com/' />

                    <ProjectPiece
                        source='images/EmojiCam.png'
                        title='EmojiCam'
                        description=' is a photo app that lets users take pictures of themselves with emoji faces. Emoji cam automatically maps emojis to faces in the video frame and changes the emoji&apos;s expression to match the expression of the user.'
                        technologies={['PostgreSQL', 'Django', 'Node', 'React']}
                        ghLink=''
                        webLink='' />

                </div >
            </div>
        )
    }
}