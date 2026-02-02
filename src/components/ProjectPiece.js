import React, { Component } from "react";
import gitHubIcon from "../icons/github.png";
import webLinkIcon from "../icons/link-24px.svg";
import "./ProjectPiece.css";

export default class ProjectPiece extends Component {
  render() {
    return (
      <div className="project-piece-container">
        <div className="flip-card">
          <div className="card-front">
            <img src={this.props.source} alt="project" />
          </div>

          <div className="card-back">
            <p className="description">
              <span>{this.props.title}</span>
              {this.props.description}
            </p>

            <div className="tech-stack">
              {this.props.technologies.map((tech, i) => {
                return (
                  <span className="tech-used" key={i}>
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="link-container">
              <a href={this.props.ghLink} target="blank">
                <img src={gitHubIcon} alt="github" />
              </a>
              {this.props.webLink ? (
                <a href={this.props.webLink} target="blank">
                  <img src={webLinkIcon} alt="website" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
