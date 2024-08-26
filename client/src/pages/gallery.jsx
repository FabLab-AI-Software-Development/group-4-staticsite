//8.25.24 met team at Starbucks
//  added className='img-fluid'
//  make img shrink
//  keep desc at bottom
import React, { useState } from "react";
import styles from  "../style/gallery.module.css";
import Nav from "../components/nav/nav";

const Gallery = () => {
  const [description, setDescription] = useState(""); // Initial state is an empty string

  // const CreateText = () => {
  //     setDescription('Your friendly neighborhood Spiderman.');
  // };

  const CreateText = (id) => {
    let desc = "";
    switch (id) {
      case 1:
        desc = "Your friendly neighborhood Spiderman and Full Stack Gremlin.";
        break;
      case 2:
        desc = "Caren Garcia--Frontend Magician.";
        break;
      case 3:
        desc = "Luis Martinez--Full Stack Engineer, AKA the Oracle";
        break;
      case 4:
        desc = "Jonathan Avila--Master Scraper and Info Obtainer.";
        break;
      case 5:
        desc = "David Marek--Backend and GPT whisperer";
        break;
      default:
        desc = "Click on an image to see the description.";
    }
    setDescription(desc);
  };

  return (
    <>
      <Nav />
      <div className= {styles.gallery}>
        <img
          className="img-fluid"
          src="https://naturalhistory.si.edu/sites/default/files/styles/circle_teaser/public/media/image/nmnh-cutout-template-henry-copy.png.webp?itok=ERxBhDs1"
          alt="ELFante"
          onClick={() => CreateText(1)}
          role="button"
        />
        <img
          className="img-fluid"
          src="https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg?w=1024"
          alt="Shina_Ibu"
          onClick={() => CreateText(2)}
        />
        <img
          className="img-fluid"
          src="https://purepng.com/public/uploads/large/purepng.com-white-tigertigeranimalwhitewild-981524653418qdlks.png"
          alt="Tiger"
          onClick={() => CreateText(3)}
        />
        <img
          className="img-fluid"
          src="https://purepng.com/public/uploads/large/purepng.com-kangaroo-standingkangaroostandingroobrown-kangaroo-481520976996bpurl.png"
          alt="Joey"
          onClick={() => CreateText(4)}
        />
        <img
          className="img-fluid"
          src="https://www.pngall.com/wp-content/uploads/2016/06/Killer-Whale.png"
          alt="Orca"
          onClick={() => CreateText(5)}
        />
      </div>
      <div className={styles.descriptionDiv}>{description}</div>
    </>
  );
};

export default Gallery;
