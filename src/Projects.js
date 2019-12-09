import React, { Component } from 'react'
import styled from 'styled-components'

import ProjectPiece from './ProjectPiece.js'

import './Projects.css'

const Card = styled.div`
    animation: ${(props) => props.changeCards ?
        'flip-scale-2-hor-top 0.4s linear both forwards'
        :
        'flip-scale-2-hor-top 0.4s linear both reverse'};
    border: 2px solid black;
    border-radius: 10px;
    width: 40vw;
    overflow: hidden;

`

export default class Projects extends Component {

    state = {
        changeCards: true,
        flipIn: false,

    }

    componentDidMount() {
        setInterval(() => {
            this.flipCard()
        }, 10000)
    }

    flipCard = () => {
        this.setState({ changeCards: !this.state.changeCards, })
    }


    render() {
        return (
            <div className='project-container' >
                <h1>Projects</h1>


                <Card changeCards={this.state.changeCards}>
                    {this.state.changeCards ?
                        <ProjectPiece
                            source='images/Flowstate.png'
                            title='Flowstate'
                            technologies={['html5', 'css', 'javascript']} />
                        :
                        <ProjectPiece
                            source='images/WheelOfChores.png'
                            title='Wheel of Chores'
                            technologies={['node', 'handelbars', 'mongoDB', 'mongoose']} />
                    }
                </Card>

                <ProjectPiece
                    source='images/SideB.png'
                    title='Side B'
                    technologies={['node', 'react', 'mongoDB', 'mongoose']} />

                <ProjectPiece
                    source='images/EmojiCam.png'
                    title='EmojiCam'
                    technologies={['node', 'react', 'PostgreSQL', 'Django']} />

            </div>
        )
    }
}