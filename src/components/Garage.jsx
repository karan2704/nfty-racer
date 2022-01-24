import React, { useState } from 'react'
import styled from 'styled-components'
import FadedRect from '../assets/FadedRect.png'
import GaragePic from '../assets/GaragePic.png'
import Ele2 from '../assets/Ele2.png'
import Ele4 from '../assets/Ele4.png'

const Button = styled.button`
    background: transparent;
    border: none;
`
function Garage() {
    const indices = [0, 1, 2, 3, 4, 5, 6, 7]
    const [selected, setSelected] = useState(null)

    const highlightHandler = (index) => {
        setSelected(index)
    }
    return (
        <div style={{ position: 'relative' }}>
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '800px', left: '-100px' }} />
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '1300px', left: '-100px' }} />
            <img src={Ele4} alt='Ele' style={{ position: 'absolute', top: '1300px', right: '0px' }} />
            <img src={Ele4} alt='Ele' style={{ position: 'absolute', top: '1800px', right: '0px' }} />
            <img src={FadedRect} alt="Title" style={{ float: 'left' }} data-aos="fade-right" />
            <p style={{ float: 'left' }}>MEET THE RACERS</p>
            <div style={{ display: 'inline-block', width: '80%' }}>
                {indices.map((index) => {
                    const border = (index === selected) ? 'brightness(100%)' : 'brightness(30%)'
                    return (
                        <Button key={index} onClick={() => highlightHandler(index)}>
                            <img src={GaragePic} alt="GaragePic" style={{ margin: '70px 70px', filter: border }} data-aos="fade-out" />
                        </Button>
                    )
                })}
            </div>

        </div >
    )
}

export default Garage
