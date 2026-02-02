import React, { Component } from "react";

import "./NavLink.css";

export default class NavLink extends Component {
  render() {
    return (
      <div className="navLink">
        <a href={this.props.source} target="blank">
          <img src={this.props.icon} alt={this.props.name} />
          <p style={{ display: `${this.props.expanded ? "block" : "none"}` }}>
            {this.props.name}
          </p>
        </a>
      </div>
    );
  }
}
