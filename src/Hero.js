import React, { Component } from 'react'

import './Hero.css'


export default class Hero extends Component {
    render() {
        return (
            <div className='hero-container'>
                <div className='title'>
                    <h1>Henry Kellam</h1>
                    <h3>Software Developer</h3>
                </div>
            </div>
        )
    }
}