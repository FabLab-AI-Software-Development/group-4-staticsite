import React from "react";
import Chatbot from "../components/Chatbot";  // Make sure this path is correct
import DateSearch from "../components/date_search";


const Home = () => {
    return (
        <div>
            <h1>El Paso</h1>
            <h2>The place we call home.</h2>
            <p>Welcome to your El Paso Concierge App! Our mission is to ensure that you always have something to look forward to while living or visiting the Sun City!</p>

           <div><DateSearch/></div>
            {/* Add some space before the chatbot */}
            <div style={{ marginTop: "2rem" }}>
                <Chatbot initialMessage="Hello! How can I help you explore El Paso today?" />
            </div>
            



            <p>&hearts; 2024 ELP Concierge. All rights reserved. And some lefts too</p>
        </div>
    );
}

export default Home;