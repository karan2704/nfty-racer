import React from 'react';
import Roadmap from '../assets/Roadmap.png'
import Bg from '../assets/Bg.png'
import Road from '../assets/Road.png'
import Racecar1 from '../assets/Racecar1.png'
import Track1 from '../assets/Track1.png'
import Track2 from '../assets/Track2.png'
import Track3 from '../assets/Track3.png'
import Track4 from '../assets/Track4.png'
import Track5 from '../assets/Track5.png'
import Track6 from '../assets/Track6.png'

function Track() {
    return (
        <div>
            <img src={Roadmap} alt='Roadmap' style={{ marginTop: '300px', width: '100%' }} data-aos="zoom-out" />
            <div style={{ position: 'relative' }}>
                <img src={Bg} alt='Roadmap' style={{ margin: '0', width: '100%' }} />
                <img src={Road} alt='Roadmap' style={{ position: 'absolute', top: '15%', left: '35%' }} data-aos="zoom-out" />
                <img src={Racecar1} alt='Roadmap' style={{ position: 'absolute', top: '15%', left: '35%' }} data-aos="zoom-out" />
                <img src={Track1} alt='Roadmap' style={{ position: 'absolute', top: '8%', left: '15%' }} data-aos="fade-right" />
                <img src={Track2} alt='Roadmap' style={{ position: 'absolute', top: '15%', left: '75%' }} data-aos="fade-left" />
                <img src={Track3} alt='Roadmap' style={{ position: 'absolute', top: '30%', left: '10%' }} data-aos="fade-right" />
                <img src={Track4} alt='Roadmap' style={{ position: 'absolute', top: '40%', left: '75%' }} data-aos="fade-left" />
                <img src={Track5} alt='Roadmap' style={{ position: 'absolute', top: '50%', left: '10%' }} data-aos="fade-right" />
                <img src={Track6} alt='Roadmap' style={{ position: 'absolute', top: '60%', left: '75%' }} data-aos="fade-left" />
            </div>
        </div>
    );
}

export default Track;
