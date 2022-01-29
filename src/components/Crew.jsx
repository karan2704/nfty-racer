import React from 'react';
import CrewTitle from '../assets/Crew.png'
import styled from 'styled-components'
import Ele2 from '../assets/Ele2.png'

const Container = styled.div`
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const CrewText = styled.div`
    margin: 0; 
    display: flex; 
    @media (max-width: 768px){
        flex-direction: column;
    }  
`

const Black = styled.div`
    background: black;
    height: 330px;
    width: 340px;
    display: inline-block;
`

const White = styled.div`
    background: white;
    height: 330px;
    width: 340px;
    text-align: left;
    padding: 10px;
`

const Title = styled.p`
    color: black;
    font-family: 'Racing Sans One', cursive;
    font-size: 22px;
    line-height: 25px;
    width: 300px;
`

const Description = styled.p`
    color: black;
    font-family: 'Racing Sans One', cursive;
    font-size: 17px;
    line-height: 17px;
    width: 270px;
`


function Crew() {
    const text = {
        title: '3PedalExcitement - JTFounder - Business & Marketing',
        desc: 'JT is a car collector and persistent entrepreneur. Gaming has also always been a favorite pass-time of his, whether at the card-table or on a mobile-device.  As an early-adopter of crypto he saw the potential for NFT to bridge these interests, and started the conversation that brought us together.'
    }
    return (
        <Container>
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '650px', left: '-100px' }} />
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '1100px', left: '-100px' }} />
            <img src={CrewTitle} alt='Crew' style={{ marginBottom: '350px' }} data-aos="slide-right" />
            <CrewText>
                <White>
                    <Title data-aos="slide-down">{text.title}</Title>
                    <Description data-aos="slide-down">{text.desc}</Description>
                </White>
                <Black />
                <White>
                    <Title data-aos="slide-down">{text.title}</Title>
                    <Description data-aos="slide-down">{text.desc}</Description>
                </White>
                <Black />
                <White>
                    <Title data-aos="slide-down">{text.title}</Title>
                    <Description data-aos="slide-down">{text.desc}</Description>
                </White>
            </CrewText>
            <CrewText>
                <Black />
                <White>
                    <Title data-aos="slide-down">{text.title}</Title>
                    <Description data-aos="slide-down">{text.desc}</Description>
                </White>
                <Black />
                <White >
                    <Title data-aos="slide-down">{text.title}</Title>
                    <Description data-aos="slide-down">{text.desc}</Description>
                </White>
                <Black />
            </CrewText>
        </Container>
    );
}

export default Crew;
