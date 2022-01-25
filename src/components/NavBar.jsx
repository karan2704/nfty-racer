import React from 'react';
import styled from 'styled-components'
import Nav1 from '../assets/Nav1.png'
import Nav2 from '../assets/Nav2.png'
import Nav3 from '../assets/Nav3.png'
import Nav4 from '../assets/Nav4.png'
import Nav6 from '../assets/Nav6.png'
import Nav7 from '../assets/Nav7.png'
import Nav8 from '../assets/Nav8.png'
import Nav9 from '../assets/Nav9.png'
import Nav10 from '../assets/Nav10.png'
import Nav11 from '../assets/Nav11.png'

const NavBar = styled.div`
    position: relative;
    display: inline-block;
    width:100%;
    z-index: 1000;
`

function Navigation() {
    return (
        <NavBar>
            <img src={Nav2} alt='' style={{ position: 'absolute', top: 0, left: '250px' }} />
            <img src={Nav1} alt='' style={{ position: 'absolute', top: 0, left: 0 }} />
            <img src={Nav3} alt='' style={{ position: 'absolute', top: 0, left: '370px' }} />
            <img src={Nav10} alt='' style={{ position: 'absolute', top: 0, left: '490px' }} />
            <img src={Nav11} alt='' style={{ position: 'absolute', top: 0, left: '610px' }} />
            <img src={Nav6} alt='' style={{ position: 'absolute', top: 0, left: '730px' }} />
            <img src={Nav7} alt='' style={{ position: 'absolute', top: 0, left: '850px' }} />
            <img src={Nav8} alt='' style={{ position: 'absolute', top: 0, left: '970px' }} />
            <img src={Nav9} alt='' style={{ position: 'absolute', top: 0, left: '1090px' }} />
        </NavBar>
    )
}



export default Navigation;
