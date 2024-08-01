import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav>
        <div class="container">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/gallery">Gallery</a>
            <a href="/events">Events</a>
        </div>
        </nav>
    );
}


export default Nav;