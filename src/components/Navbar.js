import React, { Component } from "react";
import NavLink from "./NavLink";
import emailIcon from "../icons/email-24px.svg";
import linkedInIcon from "../icons/linked_in.png";
import gitHubIcon from "../icons/github.png";
import resumeIcon from "../icons/resume.png";

import "./Navbar.css";

export default class Navbar extends Component {
  state = { expanded: false };

  render() {
    const linkInfo = [
      {
        name: "LinkedIn",
        source: "http://linkedin.com/in/henry-kellam",
        icon: linkedInIcon,
      },
      {
        name: "GitHub",
        source: "https://github.com/11hkella",
        icon: gitHubIcon,
      },
      {
        name: "Resume",
        source: "/Resume.pdf",
        icon: resumeIcon,
      },
      {
        name: "Email",
        source: "mailto:henry.a.kellam@gmail.com",
        icon: emailIcon,
      },
    ];
    return (
      <nav
        className="navbar"
        onMouseEnter={() => this.setState({ expanded: true })}
        onMouseLeave={() => this.setState({ expanded: false })}
      >
        {linkInfo.map((info, i) => {
          return (
            <NavLink
              name={info.name}
              source={info.source}
              icon={info.icon}
              expanded={this.state.expanded}
              key={i}
            />
          );
        })}
      </nav>
    );
  }
}
