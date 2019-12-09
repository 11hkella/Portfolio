import React, { Component } from 'react'

import './ProjectPiece.css'


export default class ProjectPiece extends Component {
    render() {
        const style = {
            background: `url(${this.props.source})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <div className='project-piece-container' >

                <img src={this.props.source} alt='project' />

                <div className='info-container'>

                    < h3 > {this.props.title}</h3>

                    {
                        this.props.technologies.map((tech, i) => {
                            return <span className='tech-used' key={i}>
                                . {tech} .</span>
                        })
                    }
                </div>

            </div >
        )
    }
}