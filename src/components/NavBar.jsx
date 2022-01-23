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

const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`

function Navigation() {
    return (
        <NavBar>
            <img src={Nav1} alt='' />
            <img src={Nav2} alt='' style={{ marginTop: '0' }} />
            <img src={Nav3} alt='' />
            <img src={Nav4} alt='' />
            <img src={Nav4} alt='' />
            <img src={Nav6} alt='' />
            <img src={Nav7} alt='' />
            <img src={Nav8} alt='' />
            <img src={Nav9} alt='' />
        </NavBar>
    )
}



export default Navigation;
