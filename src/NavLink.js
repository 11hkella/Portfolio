import React, { Component } from 'react'

export default class NavLink extends Component {
  render() {
    return (
      <div className='navLink'>
        <a href={this.props.source}>
          <img src={this.props.icon} />
        </a>
      </div>
    )
  }
}