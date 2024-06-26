import React, { useState } from 'react';

const Carousel = ({images}) => {

    // 2 state variables for image index and image from an array of images passed as prop
    const [imageIndex, updateImageIndex] = useState(0)
    const [currentImage, updateImage] = useState(images[imageIndex]);

    const moveLeft = () => {
        const newIndex = imageIndex === 0 ?
                        images.length - 1 :
                        imageIndex - 1;
        updateImageIndex(newIndex);
        updateImage(images[newIndex])
    }

    const moveRight = () => {
        const newIndex = imageIndex === images.length - 1 ?
                        0 :
                        imageIndex + 1;
        updateImageIndex(newIndex);
        updateImage(images[newIndex]);
    }

    return ( 
        <div>
            <button onClick={moveLeft}>Left</button>
            <img src={currentImage} />
            <button onClick={moveRight}>Right</button>
        </div>

     );
}
 
export default Carousel;