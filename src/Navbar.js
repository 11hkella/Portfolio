import React, { Component } from 'react'
import NavLink from './NavLink'

export default class Navbar extends Component {
  render() {
    const linkInfo = [
      {
        name: 'LinkedIn',
        source: 'http://linkedin.com/in/henry-kellam',
        icon: ''
      },
      {
        name: 'GitHub',
        source: 'https://github.com/11hkella',
        icon: ''
      },
      {
        name: 'Resume',
        source: '',
        icon: ''
      },
      {
        name: 'Email',
        source: '',
        icon: ''
      }
    ]
    return (
      <div className="navbar">
        {linkInfo.map((info, i) => {
          return (
            <NavLink
              source={info.source}
              icon={info.icon}
              key={i} />)
        })}
      </div>
    )
  }
}