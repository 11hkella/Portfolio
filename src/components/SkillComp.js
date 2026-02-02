import { Component } from "react";

import "./SkillComp.css";
import "animate.css/animate.min.css";

export default class SkillComp extends Component {
  render() {
    const delay = 50 * this.props.multiplier;
    return (
      // TODO: add animation delay based on multiplier prop
      <div className="skill-comp-container">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
