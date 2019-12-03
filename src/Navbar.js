import React, { Component } from 'react'
import NavLink from './NavLink'

import './Navbar.css'

export default class Navbar extends Component {
  render() {
    const linkInfo = [
      {
        name: 'LinkedIn',
        source: 'http://linkedin.com/in/henry-kellam',
        icon: '/icons/linked_in.png'
      },
      {
        name: 'GitHub',
        source: 'https://github.com/11hkella',
        icon: '/icons/github.png'
      },
      {
        name: 'Resume',
        source: '',
        icon: '/icons/resume.png'
      },
      {
        name: 'Email',
        source: '',
        icon: '/icons/email-24px.svg'
      }
    ]
    return (
      <div className="navbar">
        {linkInfo.map((info, i) => {
          return (
            <NavLink
              name={info.name}
              source={info.source}
              icon={info.icon}
              key={i} />)
        })}
      </div>
    )
  }
}