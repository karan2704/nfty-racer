import React, { useState } from 'react'
import styled from 'styled-components'
import FadedRect from '../assets/FadedRect.png'
import Miata from '../assets/Miata.jpg'
import AE86 from '../assets/AE86.jpg'
import S13 from '../assets/S13.jpg'
import RX7 from '../assets/RX7.jpg'
import Integra from '../assets/Integra.jpg'
import R33 from '../assets/R33.jpg'
import Supra from '../assets/Supra.jpg'
import NSX from '../assets/NSX.jpg'
import Ele2 from '../assets/Ele2.png'
import Ele4 from '../assets/Ele4.png'

const Button = styled.button`
    background: transparent;
    border: none;
    position: relative;
`

const Qty = styled.div`
    background: rgba(128, 128, 128, 0.5);
    position: absolute;
    width: 150px;
    height: 85px;
    top: 120px;
    left: 400px;
    border-radius: 8px;
`

const QtyText = styled.p`
    color: black;
    font-family: 'Racing Sans One', cursive;
    font-size: 28px;
    line-height: 25px;
    width: 70px;
`

const Mint = styled.div`
    background: rgba(4,15,36,0.8);
    position: absolute;
    text-align: center;
    width: 150px;
    height: 85px;
    top: 250px;
    left: 400px;
    border-radius: 8px;
`
const MintText = styled.div`
    color: white;
    font-family: 'Racing Sans One', cursive;
    font-size: 20px;
    line-height: 25px;
    width: 70px;
`

function Garage() {
    const images = [
        {
            car: Miata,
            qty: 1,
            allotment: '23%',
            text: 'NA (Miata)'
        },
        {
            car: AE86,
            qty: 1166,
            allotment: '21%',
            text: 'AE86 (trueno)'
        },
        {
            car: S13,
            qty: 1055,
            allotment: '19%',
            text: 'S13 (Silvia)'
        },
        {
            car: RX7,
            qty: 944,
            allotment: '17%',
            text: 'FC3S (RX7)'
        },
        {
            car: Integra,
            qty: 555,
            allotment: '10%',
            text: 'DC2 (Integra) (Trueno)'
        },
        {
            car: R33,
            qty: 245,
            allotment: '4.5%',
            text: 'R33 (Skyline)'
        },
        {
            car: Supra,
            qty: 195,
            allotment: '3.5%',
            text: '2JZ (Supra)'
        },
        {
            car: NSX,
            qty: 111,
            allotment: '2%',
            text: 'C32A (NSX)'
        },
    ]
    const [selected, setSelected] = useState(null)

    const highlightHandler = (index) => {
        setSelected(index)
    }
    return (
        <div style={{ position: 'relative' }}>
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '800px', left: '-100px' }} />
            <img src={Ele2} alt='Ele' style={{ position: 'absolute', top: '1300px', left: '-100px' }} />
            <img src={Ele4} alt='Ele' style={{ position: 'absolute', top: '1400px', right: '0px' }} />
            <img src={Ele4} alt='Ele' style={{ position: 'absolute', top: '1800px', right: '0px' }} />
            <img src={FadedRect} alt="Title" style={{ float: 'left' }} data-aos="fade-right" />
            <p style={{ float: 'left' }}>MEET THE RACERS</p>
            <div style={{ display: 'inline-block', width: '80%' }}>
                {images.map((card, index) => {
                    const border = (index === selected) ? 'brightness(100%)' : 'brightness(30%)'
                    return (
                        <Button key={index} onClick={() => highlightHandler(index)}>
                            <img src={card.car} alt="GaragePic" style={{ margin: '70px 70px', filter: border, width: '514px', height: '415px', border: '5px solid #F3A64A', borderBottom: '50px solid #F3A64A' }} data-aos="fade-out" />
                            <Qty style={{ filter: border }}><QtyText>QTY <br /> {card.qty}</QtyText></Qty>
                            <Mint><MintText>MINT ALLOTMENT {card.allotment}</MintText></Mint>
                            <QtyText style={{ position: 'absolute', top: '470px', left: '200px', width: '300px' }}>{card.text}</QtyText>
                        </Button>
                    )
                })}
            </div>

        </div >
    )
}

export default Garage
