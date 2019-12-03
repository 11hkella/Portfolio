import React, { Component } from 'react'

export default class NavLink extends Component {
    render() {
        return (
            <div className='navLink'>
                <a href={this.props.source}
                    target='blank'>
                    <img src={this.props.icon}
                        alt={this.props.name} />
                    <p>{this.props.name}</p>
                </a>
            </div>
        )
    }
}