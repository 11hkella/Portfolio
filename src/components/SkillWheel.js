import React, { Component } from "react";

import SkillComp from "./SkillComp.js";

import "./SkillWheel.css";

export default class SkillWheel extends Component {
  state = {
    skills: [
      "Typescript",
      "React",
      "Node.js",
      "Python",
      "GraphQL",
      "CSS",
      "MongoDB",
      "PostgreSQL",
      "Cypress",
      "Azure DevOps",
      "AWS",
      "Git",
    ],
  };

  render() {
    return (
      <div className="skill-container">
        <h1 className="title">Skills...</h1>

        <div className="all-skills-conatiner">
          {this.state.skills.map((skill, i) => {
            return <SkillComp title={skill} multiplier={i} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
