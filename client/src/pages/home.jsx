import React from "react";
import Chatbot from "../components/Chatbot";  // Make sure this path is correct
import DateSearch from "../components/date_search";
import Nav from "../components/nav/nav";
import fetchUsers from "../routes/api";

const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users);
            console.log(users, "users");
        });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                users.map((user) => (
                    <p key={user.id}>{user.username} {user.password}</p>
                ))
                }
            </ul>
        </div>
    );
}



const Home = () => {
    return (
        <div>
            <Nav /> 
            <Users />
            <h1>El Paso</h1>
            <h2>The place we call home.</h2>
            <p>Welcome to your El Paso Concierge App! Our mission is to ensure that you always have something to look forward to while living or visiting the Sun City!</p>

           <div><DateSearch/></div>
            {/* Add some space before the chatbot */}
            <div style={{ marginTop: "2rem" }}>
                <Chatbot initialMessage="Hello! How can I help you explore El Paso today?" />
            </div>
            



            <p class="footer">&hearts; 2024 ELP Concierge. All rights reserved. And some lefts too</p>
        </div>
    );
}

export default Home;
export {fetchUsers};