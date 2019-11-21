import React, { Component } from 'react'

import Profile from './Profile.js'


export default class Hero extends Component {
    render() {
        return (
            <div>
                <h1>Cool Hero goes Here</h1>
                <Profile />
            </div>
        )
    }
}