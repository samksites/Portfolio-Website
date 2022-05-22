import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import richmond from './personalInfo/assets/richmond.jpg'
import space from './personalInfo/assets/space.jpg'
import sports from './personalInfo/assets/sports.jpg'
import jmu from './personalInfo/assets/jmu.jpg'
import PhotoFrames from './personalInfo/photoFrames'
import TextBox from './personalInfo/TextBox'
import './personalInfo/pInfo/pInfo.css'
import React from 'react'

const PInfoPage = () => {

    return ( 
        
        <Parallax pages={12}>
            <ParallaxLayer offset={0} style={{backgroundImage: `url(${space})`, backgroundSize: 'cover', zIndex: -1}}>
                <h1 id='top-Header'>About me</h1>
            </ParallaxLayer>
            
            <ParallaxLayer className='chapters' offset={1} factor={.5}>
                <h2 className='headers'>Chapter &#8544; <br></br>Growing up</h2>
            </ParallaxLayer>
            
            <ParallaxLayer offset={2.5} factor={1} speed={2} sticky={{start:2.0, end:3.0}} style={{ display: 'flex', alignItems: 'center', marginLeft: '10vw'}}>
                <TextBox />
                
            </ParallaxLayer>

            <ParallaxLayer offset={2.3} factor={1} speed={.5} style={{ display: 'flex', alignItems: 'center', marginLeft: '60vw'}}>
                {<PhotoFrames height={'200px'} width={'200px'} />}
                
            </ParallaxLayer>

            <ParallaxLayer offset={2.99} factor={1} speed={.7} style={{ display: 'flex', alignItems: 'center', marginLeft: '40vw'}}>
                {<PhotoFrames height={'300px'} width={'300px'} rotate={'10deg'} />}
            </ParallaxLayer>

            <ParallaxLayer offset={2.7} factor={1} speed={.7} style={{ display: 'flex', alignItems: 'center', marginLeft: '75vw'}}>
                {<PhotoFrames height={'200px'} width={'300px'} rotate={'-5deg'} />}
                
            </ParallaxLayer>

            <ParallaxLayer offset={1.5}  factor={1} sticky={{start:1.5, end:3}} style={{backgroundImage: `url(${richmond})`, backgroundSize: 'cover', zIndex: -1}}>
            </ParallaxLayer>

                {/* The end of section one*/}
             
          
            <ParallaxLayer className='chapters' offset={4} factor={.5}>
                <h2 className='headers'>Chapter &#8544;&#8544;<br></br>Sports</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={5.5} factor={1} speed={2} sticky={{start:5.0, end:6.0}} style={{ display: 'flex', alignItems: 'center', marginLeft: '10vw'}}>
                <TextBox />
                
            </ParallaxLayer>

            <ParallaxLayer offset={5.3} factor={1} speed={.5} style={{ display: 'flex', alignItems: 'center', marginLeft: '60vw'}}>
                {<PhotoFrames height={'200px'} width={'200px'} />}
                
            </ParallaxLayer>

            <ParallaxLayer offset={5.99} factor={1} speed={.7} style={{ display: 'flex', alignItems: 'center', marginLeft: '40vw'}}>
                {<PhotoFrames height={'300px'} width={'300px'} rotate={'10deg'} />}
            </ParallaxLayer>

            <ParallaxLayer offset={5.7} factor={1} speed={.7} style={{ display: 'flex', alignItems: 'center', marginLeft: '75vw'}}>
                {<PhotoFrames height={'200px'} width={'300px'} rotate={'-5deg'} />}
                
            </ParallaxLayer>


            <ParallaxLayer offset={4.5}  factor={1} sticky={{start:4.5, end:6}} style={{backgroundImage: `url(${sports})`, backgroundSize: 'cover',  zIndex: -1}}>
            </ParallaxLayer>

            

            {/* The end of section two*/}

            <ParallaxLayer className='chapters' offset={7} factor={.5}>
                 <h2 className='headers'>Chapter &#8544;&#8544;&#8544;<br></br>College</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={7.5}  factor={1} sticky={{start:7.5, end:9}} style={{backgroundImage: `url(${jmu})`, backgroundSize: 'cover',  zIndex: -1}}>
            </ParallaxLayer>
        </Parallax>
    )

}

export default PInfoPage;

