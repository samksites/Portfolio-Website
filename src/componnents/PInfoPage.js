import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import richmond from './personalInfo/assets/richmond.jpg'
import sports from './personalInfo/assets/sports.jpg'
import jmu from './personalInfo/assets/jmu.jpg'
import PhotoFrames from './personalInfo/photoFrames'
import './personalInfo/pInfo/pInfo.css'
import React from 'react'

const PInfoPage = () => {

    return ( 
   
        <Parallax pages={12}>
            <ParallaxLayer offset={.1}>
                <h1>About me</h1>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
            <div id='ch1' className='flexbox'> </div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={1.15}>
                <h2 className='chapters'>Chapter &#8544; <br></br>Growing up</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={2.5} factor={1} sticky={{start:2.0, end:3.0}} style={{ display: 'flex', alignItems: 'center', marginLeft: '10vw'}}>
                <div className='yearsTitle'></div>
                
            </ParallaxLayer>

            <ParallaxLayer offset={2.3} factor={1} speed={.5} style={{ display: 'flex', alignItems: 'center', marginLeft: '70vw'}}>
                {<PhotoFrames height={'200px'} width={'200px'} />}
                
            </ParallaxLayer>

            <ParallaxLayer offset={2.99} factor={1} speed={.7} style={{ display: 'flex', alignItems: 'center', marginLeft: '40vw'}}>
                {<PhotoFrames height={'300px'} width={'300px'} />}
                
            </ParallaxLayer>

            <ParallaxLayer offset={1.38}  factor={1.2} sticky={{start:1.38, end:3}} style={{backgroundImage: `url(${richmond})`, backgroundSize: 'cover', zIndex: -1}}>
            </ParallaxLayer>


             
            <ParallaxLayer><div></div></ParallaxLayer>
            <ParallaxLayer offset={4}>
            <div id='ch1' className='flexbox'> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={4.15}>
                <h2 className='chapters'>Chapter &#8544;&#8544;<br></br>Sports</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={4.38} speed={2} factor={1} sticky={{start:4.38, end:6}} style={{backgroundImage: `url(${sports})`, backgroundSize: 'cover'}}>
                <TextBox />
            </ParallaxLayer>
            <ParallaxLayer offset={7}>
            <div id='ch1' className='flexbox'> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={7.15}>
                <h2 className='chapters'>Chapter &#8544;&#8544;&#8544;<br></br>College</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={4.38}  factor={1} sticky={{start:7.38, end:9}} style={{backgroundImage: `url(${jmu})`, backgroundSize: 'cover'}}>
            </ParallaxLayer>
        </Parallax>
    )

}

export default PInfoPage;

