import React from "react";
import Nav from "../components/nav/nav";
import styles from "../style/about.module.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.h1}>About Us</h1>
        <h2 >Fab Lab Team</h2>

        <svg
          className={styles.teamSVG}
           width="400px"
           height="200px"
          viewBox="0 0 200 100" // Define the coordinate system don't need it
          preserveAspectRatio="xMidYMid meet" // Center the SVG
        >
          {/* Define the path */}
          <defs>
            <path
              id="curvedPath"
              d="M 0,100 q 100,-100 200, 0"
              fill="transparent"
            />
            <path
              id="curvedPath2"
              d="M 0,130 q 100,-130 200, 0"
              fill="transparent"
            />
          </defs>

          {/* Use the path for text */}
          <text fill="white" fontSize="14">
            <textPath href="#curvedPath" startOffset="50%" textAnchor="middle">
              TAVO, CAREN, DAVID,
            </textPath>
          </text>

          {/* second textPath for wrapping */}
          <text fill="white" fontSize="14">
            <textPath href="#curvedPath2" startOffset="50%" textAnchor="middle">
              LUIS, JONATHAN
            </textPath>
          </text>
        </svg>

        {/* <h3 className={styles.curve}>TAVO, CAREN, DAVID, LUIS, JONATHAN</h3> */}

        <p>
          <button className="w3-button w3-light-grey w3-block">
            < Link to="/gallery"  id={styles.contact}>
            Contact One of us
            </Link>
            
          </button>
        </p>
      </div>
    </>
  );
};

export default About;
