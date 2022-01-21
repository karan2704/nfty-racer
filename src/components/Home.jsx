import React from 'react'
import racecar from '../assets/racecar.png'
import styled from 'styled-components'
import MintNow from '../assets/MintNow.png'
import Arrows from '../assets/Arrows.png'

const HomeContainer = styled.div`
position: relative;
width: 100%;;
align-items: left;
display: flex;
vertical-align: middle;
background: linear-gradient(to right, #000000, #0B051B);
`
const Racecar = styled.img`
width: 1440px;
height: 1024px;
position: relative;
background: linear-gradient(to right, white, #0B051B);
`
const Wrapper = styled.div`
    text-align: right;
    position: absolute;
    top: 300px;
    right: 200px;
`
const Heading = styled.p`
    color: white;
    right: 100px;
    font-family: 'Racing Sans One', cursive;
    font-size: 60px;
    line-height: 75.6px;
    text-shadow: 2px 5px rgba(243, 166, 74, 0.85);
`

function Home() {
    return (
        <HomeContainer>
            <Racecar src={racecar} alt="racecar" />
            <Wrapper>
                <Heading>WELCOME TO THE <br />
                    METAVERSE CAR CLUB</Heading>
                <img src={MintNow} alt='MintBtn' />
            </Wrapper>
            <img src={Arrows} alt='-' style={{ position: 'absolute', left: '30px', top: '400px' }} />

        </HomeContainer>
    )
}

export default Home
