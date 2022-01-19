import React from 'react'
import FadedRect from '../assets/FadedRect.png'
import GaragePic from '../assets/GaragePic.png'

function Garage() {
    return (
        <div>
            <img src={FadedRect} alt="Title" style={{ float: 'left' }} />
            <p style={{ float: 'left' }}>MEET THE RACERS</p>
            <div style={{ display: 'inline-block', width: '70%' }}>
                <img src={GaragePic} alt="GaragePic" />
                <img src={GaragePic} alt="GaragePic" />
                <img src={GaragePic} alt="GaragePic" />
                <img src={GaragePic} alt="GaragePic" />
                <img src={GaragePic} alt="GaragePic" />
                <img src={GaragePic} alt="GaragePic" />
            </div>

        </div>
    )
}

export default Garage
