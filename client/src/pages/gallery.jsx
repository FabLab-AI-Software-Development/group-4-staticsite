//8.25.24 met team at Starbucks
//  added className='img-fluid'
//  make img shrink
//  keep desc at bottom
// 8.26.24 added glow functionality on hover, fixed theme, changed images (need to dl)
// 8.27.24 added tones with JS

import React, { useEffect, useState } from "react";
import styles from "../style/gallery.module.css";
import Nav from "../components/nav/nav";
import Clomp3 from "./28.mp3";
import Gmp3 from "./35.mp3"
import Cmp3 from "./40.mp3";
import Dmp3 from "./42.mp3";
import Emp3 from "./44.mp3";
import NoteC from "../script/gallery";
import {NoteD, NoteE, NoteClo, NoteG} from "../script/gallery"


const Gallery = () => {
  // Initial state is an empty string
  const [description, setDescription] = useState("Tap on us to get more info!");

  //useEffect that delays until DOM is loaded
  useEffect(() => {
  
    NoteD(); //CG
    NoteE(); //LH
    NoteC(); //TG
    NoteClo(); //DM
    NoteG(); //JA
  
  }, []);

  // const CreateText = () => {
  //     setDescription('Your friendly neighborhood Spiderman.');
  // };

  const CreateText = (id) => {
    let desc = "";
    switch (id) {
      case 1:
        desc = (
          <>
            <h1>Caren Garc&iacute;a</h1>
            <p>Frontend Magician</p>
          </>
        );
        break;
      case 2:
        desc = (
          <>
            <h1>Luis Mart&iacute;nez</h1>
            <p>Full Stack Engineer, AKA the Oracle</p>
          </>
        );
        break;
      case 3:
        desc = (
          <>
            <h1>Tavo Gonz&aacute;lez</h1>
            <p>Full Stack Gremlin</p>
          </>
        );
        break;
      case 4:
        desc = (
          <>
            <h1>David Marek</h1>
            <p>Backend and GPT whisperer</p>
          </>
        );
        break;

      case 5:
        desc = (
          <>
            <h1>Jonathan Avila</h1>
            <p>Master Scraper and Info Obtainer</p>
          </>
        );
        break;
      default:
        desc = "Click on an image to see the description.";
    }
    setDescription(desc);
  };

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div className={styles.gallery}>
          <img
            className="img-fluid"
            id="imgD"
            src="https://static.vecteezy.com/system/resources/previews/035/940/199/non_2x/ai-generated-adorable-shiba-inu-isolated-on-transparent-background-free-png.png"
            alt="Shina_Ibu"
            onClick={() => CreateText(1)}
          />
             <audio id="hoverSoundD" src={Dmp3} preload="auto"></audio>
          <audio id="pianoSoundD" src={Dmp3} preload="auto"></audio>
          {/* <button id="playButtonD">Play D Note</button> */}


          <img
            className="img-fluid"
            id="imgE"
            src="https://purepng.com/public/uploads/large/purepng.com-white-tigertigeranimalwhitewild-981524653418qdlks.png"
            alt="Tiger"
            onClick={() => CreateText(2)}
          />
           <audio id="hoverSoundE" src={Emp3} preload="auto"></audio>
          <audio id="pianoSoundE" src={Emp3} preload="auto"></audio>
          {/* <button id="playButtonE">Play E Note</button> */}


          <img
            className="img-fluid"
            id="imgC"
            src="https://www.freepnglogos.com/uploads/elephant-png/elephant-sylvana-creation-deviantart-4.png"
            alt="ELFante"
            onClick={() => CreateText(3)}
            // role="button"
          />
          <audio id="hoverSoundC" src={Cmp3} preload="auto"></audio>
          <audio id="pianoSoundC" src={Cmp3} preload="auto"></audio>
          {/* <button id="playButtonC">Play C Note</button> */}

          <img
            className="img-fluid"
            id="imgClo"
            src="https://www.pngall.com/wp-content/uploads/2016/06/Killer-Whale.png"
            alt="Orca"
            onClick={() => CreateText(4)}
          />
          <audio id="hoverSoundClo" src={Clomp3} preload="auto"></audio>
          <audio id="pianoSoundClo" src={Clomp3} preload="auto"></audio>
          {/* <button id="playButtonClo">Play C-lo Note</button> */}

          <img
            className="img-fluid"
            id="imgG"
            src="https://purepng.com/public/uploads/large/purepng.com-kangaroo-standingkangaroostandingroobrown-kangaroo-481520976996bpurl.png"
            alt="Joey"
            onClick={() => CreateText(5)}
          />
          <audio id="hoverSoundG" src={Gmp3} preload="auto"></audio>
          <audio id="pianoSoundG" src={Gmp3} preload="auto"></audio>
          {/* <button id="playButtonG">Play G Note</button> */}
        </div>
        <div className={styles.descriptionDiv}>{description}</div>
      </div>
    </>
  );
};

export default Gallery;
