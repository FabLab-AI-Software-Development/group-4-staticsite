import React from 'react';

const Gallery =() => {
    return (
        <>
        <div class="gallery">
            <img src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" alt="Image 1" onclick="showDescription('Team Leader')"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg" alt="Image 2" onclick="showDescription('Description for Image 2')"/>
            <img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg" alt="Image 3" onclick="showDescription('Description for Image 3')"/>
            <img src="https://i.abcnewsfe.com/a/c43529b4-d093-4c75-aa57-1005778c2122/wirestory_116b158ee773d84ce0211955f4b47f2a_16x9.jpg?w=992" alt="Image 4" onclick="showDescription('Description for Image 4')"/>
            <img src="https://www.terro.com/media/Articles/TERRO/how_to_contain_a_roach_infestation.png" alt="Image 5" onclick="showDescription('Description for Image 5')"/>
        </div>
        <div id="description" class="description"></div>
        </>

    )
}

export default Gallery;
