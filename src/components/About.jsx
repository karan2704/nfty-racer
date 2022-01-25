import React, { useState } from 'react'
import styled from 'styled-components'
import Racer from '../assets/racer1.png'
import Racer2 from '../assets/racer2.png'
import ArrowRight from '../assets/ArrowRight.png'
import DesignL from '../assets/DesignL.png'
import DesignR from '../assets/DesignR.png'
import Ele1 from '../assets/Ele1.png'
import Ele2 from '../assets/Ele2.png'
import Ele3 from '../assets/Ele3.png'

const AboutContainer = styled.div`
    position: relative;
    width: 100%;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 2s, height 4s;
`

const Heading = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 60px;
    line-height: 45.6px;
`

const AboutDetails = styled.div`
    margin: 100px auto;
    width: 98%;
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
    width: 100%;
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
const Button = styled.div`
    border: none;
    background: none;
`


function About() {

    const text = [
        {
            title: 'WHAT IS NFTY RACER',
            desc: ['NFTY Racer is the blockchain think tank that is developing the first ever Metaverse Car Club (patent pending).\n\t It all begins with the NFTY Racer NFT Genesis Collection -- JDM Legends… ',
                'JDM Legends is a set of 5,555 Japanese Domestic Market Car NFTs racing on the Solana Blockchain. These JDM legends are all uniquely generated with the properties of the 8 most iconic vehicles of the Japanese Domestic Market from the peak of tuner culture in the 90s. ']
        },
        {
            title: 'So Why Are These NFTs The S***?',
            desc: ['Because we did the research\nEach JDM Legend has been painstakingly crafted to ensure accuracy to the original release numbers.\nNFTY Racer spent hours so that you can be assured, the rarity of the car NFTs relative to one another in the set is true to life. We’re talkin’ real deal s***',
                'It doesn’t stop at allotment numbers, we found the original paint hex-codes, trims, rim designs, and everything else from the original release of these classic JDM cars. These historic build features are included in the ratios of our mint-allotment, so that you mint out your own unique legendary JDM racer.\nOur designer is carefully crafting a collection of custom body-kits and other drool worthy attributes if you are lucky enough to mint them. For the most fortunate drivers, we have some unique special features inspired by JDM culture!'
            ]
        },
        {
            title: 'WTF Do They Do?',
            desc: ['HODL & TRADING \nThis project is like your highschool Honda that you put hundreds of thousands of miles on until you pass it down to your kids. It’s going the distance. HODL. \nEvery NFT will be a unique variation, your dream car WILL be minted.  Search for your favorite combo and trade for your dream build!\nGovernance The NFTY Racer Metaverse Car Club needs a vote.  Your NFT will be your vote in our governance system, so the future of NFTY Racer belongs to the club.\n Royalty\n 50% of 10% secondary sales fee distributed quarterly to holders, 25% distributed to participants of game and car show activities. So basically that’s cash money and you’re getting paid!',
                ' Customization\nUnlike real-life, you wont have to eat ramen or deliver tofu for a month to afford making your car unique. \n Race & WAGER  In Japanese street race culture, TALK IS CHEAP! With our NFTs you can turn the blockchain into your race track: compete in races, enter into a car meet, and compete in official NFTY Tournaments! Confident in your skills? Put your money where your mouth is. With the development of our game, you’ll be able to win some of the crypto that’s already in your portfolio. We’re not here to waste your time with a new s***coin. \nAccess\n Access to what you ask? The future racer… The future…']
        }
    ]

    const [page, setPage] = useState([0, 0, 0])

    const textChangeHandler = (index) => {
        let arr = page
        if (page[index] === 0) {
            arr[index] = 1
            setPage(arr)
        } else {
            arr[index] = 0
            setPage(arr)
        }
        console.log(page)
    }
    return (
        <div>
            <AboutContainer>
                <img src={Ele1} alt='Ele' style={{ position: 'absolute', top: '900px', right: '400px' }} />
                <img src={Ele1} alt='Ele' style={{ position: 'absolute', top: '700px', right: '650px' }} />
                <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '1700px', right: '300px' }} />
                <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '1700px', right: '600px' }} />
                <img src={Ele3} alt='Ele' style={{ position: 'absolute', top: '3200px', right: '250px' }} />
                <img src={Ele3} alt='Ele' style={{ position: 'absolute', top: '3200px', right: '600px' }} />
                <img src={DesignL} alt='' style={{ margin: 'auto 30px' }} data-aos="fade-out" />
                <Heading data-aos="fade-out">ABOUT</Heading>
                <img src={DesignR} alt='' style={{ margin: 'auto 30px' }} data-aos="fade-out" />
            </AboutContainer>
            <AboutDetails data-aos="fade-left" data-aos-delay="200">
                <DetailDiv>
                    <div>
                        <Title>{text[0].title}</Title>
                        <Description>{text[0].desc[page[0]]}</Description>
                    </div>
                    <img src={Racer} alt='racer1' />
                </DetailDiv>
                <Footer>
                    <FooterText>TAP TO CONTINUE</FooterText>
                    <Button onClick={() => textChangeHandler(0)}><img src={ArrowRight} alt="Right" style={{ width: '70px', height: '70px' }} /></Button>
                </Footer>
            </AboutDetails>
            <AboutDetails data-aos="fade-right" data-aos-delay="200">
                <img src={Ele1} alt='Ele' style={{ position: 'absolute', top: '900px', right: '200px' }} />
                <img src={Ele1} alt='Ele' style={{ position: 'absolute' }} />
                <DetailDiv>
                    <img src={Racer2} alt='racer1' />
                    <TextWrapper>
                        <Title>{text[1].title}</Title>
                        <Description>{text[1].desc[0]}</Description>
                        <Footer>
                            <FooterText>TAP TO CONTINUE</FooterText>
                            <img src={ArrowRight} alt="Right" style={{ width: '70px', height: '70px' }} />
                        </Footer>
                    </TextWrapper>
                </DetailDiv>
            </AboutDetails>
            <AboutDetails style={{ height: '760px' }} data-aos="fade-left" data-aos-delay="200">
                <DetailDiv>
                    <div>
                        <Title>{text[2].title}</Title>
                        <Description style={{ fontSize: '25px' }}>{text[2].desc[0]}</Description>
                    </div>
                    <img src={Racer} alt='racer1' />
                </DetailDiv>
                <Footer>
                    <FooterText>TAP TO CONTINUE</FooterText>
                    <img src={ArrowRight} alt="Right" style={{ width: '70px', height: '70px' }} />
                </Footer>
            </AboutDetails>
        </div>
    )
}

export default About
