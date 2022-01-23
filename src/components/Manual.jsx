import React from 'react'
import styled from 'styled-components'
import HowTo from '../assets/Heading.png'
import Vid1 from '../assets/Vid1.png'
import Vid2 from '../assets/Vid2.png'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 60px;
    line-height: 35.6px;
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
    width: 730px;
`

const ManualDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    width: 60%;
    height: 686px;
    background: rgba(0, 27, 70, 0.85);
    border: 5px solid #FFAC1D;
    text-align: left;
`

function Manual() {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '100%', height: '140px', background: 'linear-gradient(to left, #0B0B0C,#18191B)' }}>
                <img data-aos="zoom-in" src={HowTo} alt='How to mint' />
            </div>
            <Wrapper>
                <Title data-aos="slide-up" >STOP!</Title>
                <Title data-aos="slide-up">READ THE F***ING MANUAL!</Title>
                <Description data-aos="slide-up" >NFTY Racers Gotta Have Their Learner’s Permit First.
                    Here are a couple of guides to get you on the road.
                </Description>
                <img src={Vid1} alt='Thumbnail1' />
                <div style={{ display: 'inline-block' }}>
                    <img src={Vid2} alt='Thumbnail2' style={{ margin: '20px 40px' }} />
                    <img src={Vid2} alt='Thumbnail3' style={{ margin: '20px 40px' }} />
                </div>
                <ManualDiv data-aos="zoom-in-up">
                    <Heading>NEWBIE RACER MANUAL</Heading>
                    <Description>1.   Create a Phantom Wallet or Solflare Wallet.</Description>

                    <Description>2.  Purchase some Solana on an exchange, such as Coinbase.</Description>

                    <Description>3.  Transfer and fund your Wallet with Solana into your </Description>


                    <Description>4.  Connect your Phantom or Solflare Wallet to our website.</Description>

                    <Description>5.  Mint Your Dream Car.</Description>
                </ManualDiv>
            </Wrapper>
        </div>
    )
}

export default Manual
