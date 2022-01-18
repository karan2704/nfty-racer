import React from 'react'
import racecar from '../assets/racecar.png'
import styled from 'styled-components'

const HomeContainer = styled.div`
position: relative;
width: 100%;;
align-items: left;
display: flex;
background: linear-gradient(to right, #000000, #0B051B);
`
const Racecar = styled.img`
width: 1440px;
height: 1024px;
background: linear-gradient(to right, white, #0B051B);
`

function Home() {
    return (
        <HomeContainer>
            <Racecar src={racecar} alt="racecar" />
        </HomeContainer>
    )
}

export default Home
