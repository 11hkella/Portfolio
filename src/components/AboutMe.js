import React, { Component } from "react";
import "animate.css/animate.min.css";
import profilePicture from "../images/profile1-copy.jpg";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">About Me</h1>
        <div className="about-me-container">
          <img className="profile-pic" src={profilePicture} alt="profile" />

          <p className="about">
            <span>Hi there!</span>
            <br />
            My name is Henry Kellam, and I'm an Atlanta-based web developer with
            4 year of experience building full-stack web applicaitons using
            Typescript, React, NoSQL/SQL databases, and REST APIs. I think the
            best part of development is experiencing those "Ah-ha" moments that
            come after working through difficult logic or when finding that
            obscure solution deep within the docs. When I'm not coding, I enjoy
            performing and recording music, going on hikes, and playing card
            games with friends.
          </p>
        </div>
      </div>
    );
  }
}
