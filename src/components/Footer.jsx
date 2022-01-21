import React from 'react'
import styled from 'styled-components'
import Twitter from '../assets/Twitter.png'
import Discord from '../assets/Discord.png'


const Container = styled.div`
    border-top: 8px solid #FFAC1D;
    border-bottom: 8px solid #FFAC1D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 500px auto;
    height: 400px;
`
const Description = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 28px;
    line-height: 35px;
    width: 630px;
`

function Footer() {
    return (
        <Container>
            <div style={{ display: 'inline-block' }}>
                <img src={Twitter} alt='TwitterLogo' style={{ margin: '35px 25px 10px 25px' }} />
                <img src={Discord} alt='DiscordLogo' style={{ margin: '35px 25px 10px 25px' }} />
            </div>
            <Description>@Copyright 2022 NFTY Racer</Description>
        </Container>
    )
}

export default Footer
