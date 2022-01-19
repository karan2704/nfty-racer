import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    width: 100%;
`


const TbaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 27, 70, 0.85);
    width: 70%;
`

const Title = styled.p`
    font-family: Racing Sans One;
    font-style: Regular;
    font-size: 40px;
    line-height: 50px;
`

const Description = styled.p`
    font-family: Racing Sans One;
    font-style: Regular;
    font-size: 38px;
    line-height: 50px;
`

const Button = styled.button`
    width: 90%;
`

function Tba() {
    return (
        <Container>
            <TbaDiv>
                <Title style={{ color: 'orange' }}>TBA</Title>
                <Description>TBA</Description>
                <Title>CLICK HERE</Title>
                <Button>CLICK</Button>
            </TbaDiv>

        </Container>
    )
}


export default Tba
