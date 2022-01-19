import React from 'react'
import FadedRect from '../assets/FadedRect.png'
import GaragePic from '../assets/GaragePic.png'

function Garage() {
    return (
        <div>
            <img src={FadedRect} alt="Title" style={{ float: 'left' }} />
            <p style={{ float: 'left' }}>MEET THE RACERS</p>
            <div style={{ display: 'inline-block', width: '80%' }}>
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
                <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px' }} />
            </div>

        </div>
    )
}

export default Garage
