import React, { useState } from 'react';

const DiscoButton = () => {

    const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [likesCount , updateLikes] = useState(0);
    const [color, updateColor] = useState(colorsArr[0]);

    const clickHandler =() =>{
        updateLikes(likesCount+1);
        updateColor(colorsArr[likesCount+1 % colorsArr.length]);
    }

    return ( 
        <button type = 'button' className= 'discoButton' style={{backgroundColor: `${color}`}} onClick={clickHandler}>
            {likesCount} Likes
        </button> 
     );
}
 
export default DiscoButton;
