import React from 'react';
import Nav from '../components/nav/nav';

const Gallery =() => {
    return (
        <>
        <Nav /> 
        <div class="gallery">
            <img src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" alt="Tiger" onclick="showDescription('Team Leader')"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg" alt="Orca" onclick="showDescription('Description for Image 2')"/>
            <img src="https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg?w=1024" alt="Shina_Ibu" onclick="showDescription('Description for Image 3')"/>
            <img src="https://nolalobstersdirect.com/wp-content/uploads/2020/11/Depositphotos_10892320_l-2015.jpg" alt="Crustacean" onclick="showDescription('Description for Image 4')"/>
            <img src="https://naturalhistory.si.edu/sites/default/files/styles/circle_teaser/public/media/image/nmnh-cutout-template-henry-copy.png.webp?itok=ERxBhDs1" alt="Cucaracha" onclick="showDescription('Description for Image 5')"/>
        </div>
        <div id="description" class="description"></div>
        </>
    )
}

export default Gallery;
