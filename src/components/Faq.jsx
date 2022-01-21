import React, { useState } from 'react'
import styled from 'styled-components';
import FAQ from '../assets/FAQ.png'
import img0 from '../assets/img0.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'

const FaqContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(0, 27,70, 0.85);
    width: 80%;
    margin: 100px;
`
const Select = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Button = styled.button`
width: 90%;
background: rgba(0, 27,70, 0.85);
width: 80%;
height: 90px;
border: 5px solid rgba(255, 172, 29, 0.7);
border-radius: 5px;
margin: auto auto 50px 30px;
`

const Heading = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 30px;
    line-height: 25.6px;
`


const Description = styled.p`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 28px;
    line-height: 35px;
    width: 630px;
`

const Details = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`

function Faq() {

    const FaqList = [
        {
            title: 'What is Solana ?',
            desc: 'Solana is the decentralized blockchain with a 2022 carbon neutral goal that the NFTY Racer crew and community is using as the fast track into the metaverse as they are one of the most efficiently growing ecosystems designed for scalability and minimal transaction fees so that you can get on the road faster and cheaper.',
            img: img0
        },
        {
            title: 'What is Cost of Mint ?',
            desc: 'Solana is the decentralized blockchain with a 2022 carbon neutral goal that the NFTY Racer crew and community is using as the fast track into the metaverse as they are one of the most efficiently growing ecosystems designed for scalability and minimal transaction fees so that you can get on the road faster and cheaper.',
            img: img1
        },
        {
            title: 'How do I Mint a NFTY Racer ?',
            desc: 'Read the d*** manual! [CTA to send the user scrolling back up to the manual]',
            img: img2
        },
        {
            title: 'How do I Get to Whitelist ?',
            desc: 'We are constantly engaging our community and having free challenges and opportunities for whitelist roles. Follow our Twitter and Discord for details. However… If you want to get ahead of the game you can purchase a VIP exclusive pass for whitelist access and a guaranteed mint.',
            img: img3
        },
        {
            title: 'When is the WhiteList Mint ?',
            desc: 'TBA',
            img: img4
        },
        {
            title: 'When is the Public Mint ?',
            desc: 'TBA',
            img: img5
        },
        {
            title: 'What is The Tokenomics System ?',
            desc: 'The NFTY Racer team decided that our tokenomics system is going to spare you the headache and use what is already in your wallet. Building a new token is just going to cost gas and time that we can use to develop the future of our project. Our ecosystem will utilize Solana, so we can focus on building the future.',
            img: img6
        },
        {
            title: 'What is The Future of NFTY Racer ?',
            desc: 'We are building a project for car lovers that goes beyond a singular world, but bridges to upcoming generations of the metaverse as well as the real world through our utility. We will build opportunities for merchandise, digital and real life car meets, and even one day an exclusive pass to use your NFTY Racer to take a spin in an iconic community funded JDM! Ultimately the future of the Metaverse Car Club changes drastically everyday alongside the metaverse itself, so truly the vision is up to the NFTY Racer community. Join us for the ride racer!',
            img: img7
        }
    ]

    const [info, setInfo] = useState({
        index: 0,
        title: FaqList[0].title,
        desc: FaqList[0].desc,
        img: FaqList[0].img
    })

    const infoHandler = (index) => {
        console.log(index);
        setInfo(
            {
                index: index,
                title: FaqList[index].title,
                desc: FaqList[index].desc,
                img: FaqList[index].img
            }
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
            <img src={FAQ} alt='FAQ Button' style={{ margin: '100px, auto' }} />
            <FaqContainer>
                <Select>
                    {FaqList.map((title, index) => {
                        const bg = (index === info.index) && '#F6A800'
                        return (
                            <Button style={{ background: bg }} onClick={() => infoHandler(index)}><Heading>{FaqList[index].title}</Heading></Button>
                        )
                    })}
                </Select>
                <Details>
                    <img src={info.img} alt='img1' />
                    <Description>{info.title}</Description>
                    <Description>
                        {info.desc}
                    </Description>
                </Details>
            </FaqContainer>
        </div>
    )
}

export default Faq
