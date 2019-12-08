import React, { Component } from 'react'

import './ProjectPiece.css'


export default class ProjectPiece extends Component {
    render() {
        const style = {
            background: `url(${this.props.source})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',


        }

        return (
            <div className='project-piece-container'
                style={style} >

                {/* <img src={this.props.source} alt='website example' /> */}

                < h3 > {this.props.title}</h3>

                <p>technologies:</p>
                {
                    this.props.technologies.map((tech, i) => {
                        return <span className='tech-used' key={i}>
                            . {tech} .
            </span>
                    })
                }

            </div >
        )
    }
}