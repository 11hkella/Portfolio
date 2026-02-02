import React, { Component } from "react";
import ProjectPiece from "./ProjectPiece.js";
import "./Projects.css";
import flowstateImg from "../images/Flowstate.png";
import wheelOfChoresImg from "../images/WheelOfChores.png";
import sideBImg from "../images/SideB.png";
import emojiCamImg from "../images/EmojiCam.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <h1>Projects</h1>

        <div className="project-container">
          <ProjectPiece
            source={flowstateImg}
            title="Flowstate"
            description=' is a clone of the popular memory game "Simon", which tests the player&apos;s ability to remember increasingly long sequences of inputs.'
            technologies={["HTML5", "CSS", "Javascript"]}
            ghLink="https://github.com/11hkella/Flowstate"
          />

          <ProjectPiece
            source={wheelOfChoresImg}
            title="Wheel of Chores"
            description=" is a scheduling app that helps groups of users assign and accomplish tasks."
            technologies={["MongoDB", "Express", "Handelbars", "Node"]}
            ghLink="https://github.com/11hkella/Wheel-of-Chores"
          />

          <ProjectPiece
            source={sideBImg}
            title="B-Side"
            description=" is music reviewing app that allows users to post opinion pieces about their favorite albums, songs, or artists. Write a review yourself, or engauge in a dialogue over the music you are passionate about."
            technologies={["MongoDB", "Express", "React", "Node"]}
            ghLink="https://github.com/11hkella/B-side"
          />

          <ProjectPiece
            source={emojiCamImg}
            title="EmojiCam"
            description=" is a video app that uses facial recognition and expression detection to automatically map various emojis to user's faces."
            technologies={["PostgreSQL", "Django", "React", "Node"]}
            ghLink="https://github.com/11hkella/EmojiCam"
            webLink="https://master.dewt15ge7jmum.amplifyapp.com/"
          />
        </div>
      </div>
    );
  }
}
