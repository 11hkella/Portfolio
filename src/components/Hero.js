import { Component } from "react";
import "animate.css/animate.min.css";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        {/* TODO: animate title to slide in from the left */}
        <div className="title">
          <h1>Henry Kellam</h1>
          <h3>
            Mid-Level Full-Stack Software Engineer | React, TypeScript, Node.js,
            Cloud-Native Systems
          </h3>
        </div>
      </div>
    );
  }
}
