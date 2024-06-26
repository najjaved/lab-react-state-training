import React, { useState } from 'react';

const LikeButton = () => {
    const [likesCount , updateLikes] = useState(0);
    const clickHandler =() =>{
        updateLikes(likesCount+1);
    }

    return ( 
        <button type = "button" onClick={clickHandler}>
            {likesCount} Likes
        </button> 
     );
}
 
export default LikeButton;