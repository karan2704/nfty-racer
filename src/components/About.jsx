import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
    position: relative;
    background: #190032;
    width: 100%;
    height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Heading = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 60px;
    line-height: 75.6px;
`

const AboutDetails = styled.div`
    width: 100%;
    height: 686px;
    background: linear-gradient(to right, #190032, 59.38% , #001B46);
    padding: 30px 55px;
    border: 10px solid yellow;
    text-align: left;
`

const Title = styled.p`
    color: #F7941D;
    font-family: 'Racing Sans One', cursive;
    font-size: 40px;
    line-height: 40px;
`

const Description = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 28px;
    line-height: 35px;
    width: 630px;
`

function About() {
    return (
        <>
            <AboutContainer>
                <Heading>ABOUT</Heading>
            </AboutContainer>
            <AboutDetails>
                <Title>WHAT IS NFTY RACER</Title>
                <Description>NFTY Racer is the blockchain think
                    tank that is developing the first ever metaverse car club </Description>
                <Description>It all begins with a NFTY Racer NFT genesis</Description>
            </AboutDetails>
        </>
    )
}

export default About
