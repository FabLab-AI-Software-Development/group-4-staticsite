import React from 'react';
import Nav from '../components/nav/nav';

const Gallery =() => {
    return (
        <>
        <Nav /> 
        <div class="gallery">
            <img src="https://naturalhistory.si.edu/sites/default/files/styles/circle_teaser/public/media/image/nmnh-cutout-template-henry-copy.png.webp?itok=ERxBhDs1" alt="Cucaracha" onClick="showDescription('Description for Image 5')"/>
        </div>
        <div id="description" class="description"></div>
        </>
    )
}

export default Gallery;
