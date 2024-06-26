import React, { useState } from 'react';
import maxenceImg from '../assets/images/maxence.png';
import maxenceGlassesImg from '../assets/images/maxence-glasses.png';

const ClickablePicture  = () => {
    const [picture, updatePicture] = useState(maxenceImg)
        
    const togglePicture =() =>{
        updatePicture((previousPicture) =>{
            return previousPicture === maxenceImg? maxenceGlassesImg: maxenceImg;
        }); // OR updatePicture((previousPicture) => previousPicture === maxenceImg? maxenceGlassesImg: maxenceImg)
    }

    return ( 
        <div className = 'picture'>
            <img src= {picture}
            alt = 'picture not found'
            onClick={togglePicture}
            />
         </div>
     );
}
 
export default ClickablePicture ;