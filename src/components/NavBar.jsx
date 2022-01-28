import React, { useState } from 'react';
import styled from 'styled-components'
import Nav1 from '../assets/Nav1.png'
import Nav2 from '../assets/Nav2.png'
import Nav3 from '../assets/Nav3.png'
import Nav6 from '../assets/Nav6.png'
import Nav7 from '../assets/Nav7.png'
import Nav8 from '../assets/Nav8.png'
import Nav9 from '../assets/Nav9.png'
import Nav4 from '../assets/Nav4.png'
import Nav5 from '../assets/Nav5.png'
import Nav21 from '../assets/Nav21.png'
import Nav31 from '../assets/Nav31.png'
import Nav41 from '../assets/Nav41.png'
import Nav51 from '../assets/Nav51.png'
import Nav61 from '../assets/Nav61.png'
import Nav71 from '../assets/Nav71.png'
import Nav81 from '../assets/Nav81.png'
import Nav91 from '../assets/Nav91.png'

const NavBar = styled.div`
    position: relative;
    display: inline-block;
    width:100%;
    z-index: 1000;
`

const Button = styled.div`
    border: none;
    background: transparent;
`
const Image = styled.img`
    position: absolute;
    top: 0;
`



function Navigation() {
    const NavElements = [
        {
            name: Nav21,
            left: '230px',
            clicked: Nav2
        },
        {
            name: Nav3,
            left: '470px',
            clicked: Nav31
        },
        {
            name: Nav4,
            left: '670px',
            clicked: Nav41
        },
        {
            name: Nav5,
            left: '870px',
            clicked: Nav51
        },
        {
            name: Nav6,
            left: '1070px',
            clicked: Nav61
        },
        {
            name: Nav7,
            left: '1270px',
            clicked: Nav71
        },
        {
            name: Nav8,
            left: '1470px',
            clicked: Nav81
        },
        {
            name: Nav9,
            left: '1670px',
            clicked: Nav91
        }
    ]

    const [image, setImage] = useState(Nav2)


    const clickHandler = (source) => {
        setImage(source)
    }

    return (
        <NavBar>

            {NavElements.map((img, index) => {
                var src = img.name
                if (img.name === image) {
                    src = img.clicked
                }
                return (
                    <Button onClick={() => clickHandler(img.name)}>
                        <Image src={src} alt='' style={{ left: img.left, maxWidth: '170px', height: '90px' }} />
                    </Button>
                )
            })}
            <img src={Nav1} alt='' style={{ position: 'absolute', top: '-5px', left: 0 }} />
        </NavBar>
    )
}



export default Navigation;
