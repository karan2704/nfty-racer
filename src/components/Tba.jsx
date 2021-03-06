import React from 'react'
import styled from 'styled-components'
import ArrowDown from '../assets/ArrowDown.png'
import Flags from '../assets/Flags.png'

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
    align-items: center;
    background: rgba(0, 27, 70, 0.85);
    width: 70%;
    height: 661px;
    border: 5px solid #FFAC1D;
`

const Title = styled.p`
    font-family: Racing Sans One;
    font-style: Regular;
    font-size: 40px;
    line-height: 25px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const Description = styled.p`
    font-family: Racing Sans One;
    font-style: Regular;
    font-size: 38px;
    line-height: 50px;
    color: white;
    @media (max-width: 768px){
        font-size: 25px;
        line-height: 35px;
    }
`

const Button = styled.button`
    width: 90%;
    background: #FFAC1D;
    width: 80%;
    height: 70px;
    border: 2px solid white;
    border-radius: 5px;
`

function Tba() {
    return (
        <Container>
            <TbaDiv data-aos="fade-down" data-aos-delay="200">
                <Title style={{ color: 'orange' }}>TBA</Title>
                <Description>
                    The JDM Legends NFTs will start their <br />
                    engines and burn some digital rubber!
                </Description>
                <Title style={{ color: '#595246 ' }}>CLICK HERE TO MINT SOON</Title>
                <img src={ArrowDown} alt="Click Below" />
                <br />
                <Button data-aos="fade-down" data-aos-delay="400"><Description style={{ color: 'black', fontSize: '25px', lineHeight: '20px' }}>Or be Dead F***ing Last</Description></Button>
            </TbaDiv>
            <img src={Flags} alt='Flags' style={{ marginTop: '330px' }} />
        </Container>
    )
}


export default Tba
