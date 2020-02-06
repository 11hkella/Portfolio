import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import profilePicture from '../images/profile1-copy.jpg'
import './AboutMe.css'


export default class AboutMe extends Component {

    render() {
        return (
            <div>
                <h1 className="about-title">About Me</h1>
                <div className='about-me-container'>
                    <img className='profile-pic' src={profilePicture} />

                    <ScrollAnimation
                        className='animate-wrapper'
                        animateIn="fadeIn"
                        animateOnce={true}>
                        <div className="wrapper">
                            <p className='about'>
                                <span>Hi there!</span><br />
                                I'm a web developer with 1 year of experience building full-stack applicaitons using Javascript,
                                NoSQL/SQL databases, and REST APIs. I think the best part of development is experiencing those
                                 "Ah-ha" moments that come after working through difficult logic or when finding that obscure solution deep within the docs.
                                When I'm not coding, I enjoy performing and recording music, going on hikes with my girlfriend, and playing
                                card games with friends.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div >
            </div>
        )
    }
}