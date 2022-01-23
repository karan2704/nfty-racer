import React from 'react'
import styled from 'styled-components'
import MintProgress from '../assets/MintProgress.png'
import ProgressMeter from '../assets/ProgressMeter.png'

const Container = styled.div`
    margin-top: 400px;
    display: inline-block;
`

function Progress() {
    return (
        <Container>
            <img data-aos="slide-right" data-aos-duration="4000" src={MintProgress} alt='ProgressPoints' style={{ margin: 'auto 50px' }} />
            <img data-aos="slide-left" data-aos-duration="4000" src={ProgressMeter} alt='ProgressMeter' style={{ margin: 'auto 50px' }} />
        </Container>
    )
}

export default Progress
