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
            <img src={MintProgress} alt='ProgressPoints' style={{ margin: 'auto 50px' }} />
            <img src={ProgressMeter} alt='ProgressMeter' style={{ margin: 'auto 50px' }} />
        </Container>
    )
}

export default Progress
