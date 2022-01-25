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
import Nav31 from '../assets/Nav31.png'

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
            name: Nav2,
            left: '230px',
            clicked: Nav31
        },
        {
            name: Nav3,
            left: '470px',
            clicked: Nav31
        },
        {
            name: Nav4,
            left: '670px',
            clicked: Nav31
        },
        {
            name: Nav5,
            left: '870px',
            clicked: Nav31
        },
        {
            name: Nav6,
            left: '1070px',
            clicked: Nav31
        },
        {
            name: Nav7,
            left: '1270px',
            clicked: Nav31
        },
        {
            name: Nav8,
            left: '1470px',
            clicked: Nav31
        },
        {
            name: Nav9,
            left: '1670px',
            clicked: Nav31
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
                    src = Nav31
                }
                return (
                    <Button onClick={() => clickHandler(img.name)}>
                        <Image src={src} alt='' style={{ left: img.left }} />
                    </Button>
                )
            })}
            <img src={Nav1} alt='' style={{ position: 'absolute', top: '-5px', left: 0 }} />
        </NavBar>
    )
}



export default Navigation;
