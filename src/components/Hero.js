import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        {/* <ScrollAnimation
                    className='labels'
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                    delay={100}>

                    <p>&#8592; LinkedIn</p>
                    <p>&#8592; GitHub</p>
                    <p>&#8592; Resume PDF</p>
                    <p>&#8592; Email</p>

                </ScrollAnimation> */}

        <ScrollAnimation
          className="title"
          animateIn="slideInLeft"
          animateOut="slideOutLeft"
          delay={400}
          offset={70}
        >
          <h1>Henry Kellam</h1>
          <h3>Software Developer</h3>
        </ScrollAnimation>
      </div>
    );
  }
}
