import React from 'react'
import './pInfo/pInfo.css'
import jmu from './assets/jmu.jpg'


const PhotoFrames = (props) => {
   
    return (
        <img id="portrait" style={{height: props.height, width: props.width}} src={jmu} alt='Temp' ></img>
    )
}

export default PhotoFrames;