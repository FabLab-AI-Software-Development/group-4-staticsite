import React from "react";
import DateSearch from "../components/date_search";

const Home = () => {
    return (
        <div>
            <h1>El Paso</h1>
            <h2>The place we call home.</h2>
            <p>Welcome to your El Paso Concierge App! Our mission is to ensure that you always have something to look forward to while living or visiting the Sun City!</p>
            <div><DateSearch/></div>
            <p>&hearts; 2024 ELP Concierge. All rights reserved. And some lefts too</p>
        </div>

    );
}

export default Home;