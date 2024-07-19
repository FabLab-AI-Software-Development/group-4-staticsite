import React from 'react';

const Gallery =() => {
    return (
        <>
        <div class="gallery">
            <img src="https://www.rawpixel.com/image/6153767/png-tiger-animal#eyJrZXlzIjoidGlnZXIiLCJzb3J0ZWRLZXlzIjoidGlnZXIifQ==" alt="Image 1" onclick="showDescription('Team Leader')"/>
            <img src="image2.jpg" alt="Image 2" onclick="showDescription('Description for Image 2')"/>
            <img src="image3.jpg" alt="Image 3" onclick="showDescription('Description for Image 3')"/>
            <img src="image4.jpg" alt="Image 4" onclick="showDescription('Description for Image 4')"/>
            <img src="image5.jpg" alt="Image 5" onclick="showDescription('Description for Image 5')"/>
        </div>
        <div id="description" class="description"></div>
        </>

    )
}

export default Gallery;
