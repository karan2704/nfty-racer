import React from 'react'
import styled from 'styled-components'
import Racer from '../assets/racer1.png'
import Racer2 from '../assets/racer2.png'
import ArrowRight from '../assets/ArrowRight.png'

const AboutContainer = styled.div`
    position: relative;
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
    margin: 100px auto;
    width: 100%;
    height: 686px;
    background: linear-gradient(to right, #190032, 59.38% , #001B46);
    border: 5px solid #FFAC1D;
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

const DetailDiv = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
`

const TextWrapper = styled.div`
`

const Footer = styled.div`
    color: white;
    text-align: right;
    width: 650px;
    display: flex;
    margin-top: 0;
`

const FooterText = styled.div`
    color: #595246;
    font-family: 'Racing Sans One', cursive;
    font-size: 38px;
    line-height: 47.88px;
    width: 630px;
`


function About() {
    return (
        <div>
            <AboutContainer>
                <Heading>ABOUT</Heading>
            </AboutContainer>
            <AboutDetails>
                <DetailDiv>
                    <div>
                        <Title>WHAT IS NFTY RACER</Title>
                        <Description> NFTY Racer is the blockchain think tank that is developing
                            the first ever Metaverse Car Club (patent pending). </Description>
                        <Description>It all begins with the NFTY Racer NFT Genesis Collection -- JDM Legends… </Description>
                    </div>
                    <img src={Racer} alt='racer1' />
                </DetailDiv>
                <Footer>
                    <FooterText>TAP TO CONTINUE</FooterText>
                    <img src={ArrowRight} alt="Right" />
                </Footer>
            </AboutDetails>
            <AboutDetails>
                <DetailDiv>
                    <img src={Racer2} alt='racer1' />
                    <TextWrapper>
                        <Title>So Why Are These NFTs The S***?</Title>
                        <Description>Because we did the research </Description>
                        <Description> Each JDM Legend has been painstakingly crafted to ensure accuracy to the original release numbers.</Description>
                        <Description>NFTY Racer spent hours so that you can be assured, the rarity of the car NFTs relative to one another in the set is true to life. We’re talkin’ real deal s***
                        </Description>
                    </TextWrapper>
                </DetailDiv>
                <Footer>
                    <FooterText>TAP TO CONTINUE</FooterText>
                    <img src={ArrowRight} alt="Right" />
                </Footer>
            </AboutDetails>
            <AboutDetails>
                <DetailDiv>
                    <div>
                        <Title>WTF Do They Do?</Title>
                        <Description style={{ fontSize: '25px' }}>HODL & TRADING
                            This project is like your highschool Honda that you put hundreds of thousands of miles on until you pass it down to your kids. It’s going the distance. HODL.
                            Every NFT will be a unique variation, your dream car WILL be minted.  Search for your favorite combo and trade for your dream build! </Description>
                        <Description style={{ fontSize: '25px' }}>Governance
                            The NFTY Racer Metaverse Car Club needs a vote.  Your NFT will be your vote in our governance system, so the future of NFTY Racer belongs to the club.
                        </Description>
                        <Description style={{ fontSize: '25px' }}>Royalty
                            50% of 10% secondary sales fee distributed quarterly to holders, 25% distributed to participants of game and car show activities. So basically that’s cash money and you’re getting paid!
                        </Description>
                    </div>
                    <img src={Racer} alt='racer1' />
                </DetailDiv>
                <Footer>
                    <FooterText>TAP TO CONTINUE</FooterText>
                    <img src={ArrowRight} alt="Right" />
                </Footer>
            </AboutDetails>
        </div>
    )
}

export default About
