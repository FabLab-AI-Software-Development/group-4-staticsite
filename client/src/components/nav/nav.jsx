import React from 'react';
import styles from './nav.module.css';

const Nav = () => {
    return (
        <nav>
        <div className={styles.container}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/gallery">Gallery</a>
            <a href="/events">Events</a>
        </div>
        </nav>
    );
}


export default Nav;