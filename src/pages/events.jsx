import React, { useState } from 'react';
// import './events.css';

function Events() {
    // Sample list of events
    const initialEvents = [
        { id: 1, name: "Music Festival", date: "2024-08-10", location: "Downtown", going: false },
        { id: 2, name: "Art Exhibition", date: "2024-08-15", location: "Art District", going: false },
        { id: 3, name: "Food Fair", date: "2024-08-20", location: "Public Square", going: false }
    ];

    const [events, setEvents] = useState(initialEvents);
    const [goingEvents, setGoingEvents] = useState([]);

    const handleGoingClick = (id) => {
        const updatedEvents = events.map(event => {
            if (event.id === id) {
                event.going = !event.going;
            }
            return event;
        });
        setEvents(updatedEvents);
        const filteredGoingEvents = updatedEvents.filter(event => event.going);
        setGoingEvents(filteredGoingEvents);
    };

    return (
        <div className="app">
            <section className="section events-section" id="events">
                <div className="container">
                    <div className="section-title">
                        <h2>Upcoming Events</h2>
                        <p>Discover the latest events in El Paso and surrounding areas.</p>
                    </div>
                    <div className="events-list">
                        {events.map(event => (
                            <div key={event.id} className="event-card">
                                <h3>{event.name}</h3>
                                <div>
                                    <p>Date: {event.date}</p>
                                    <p>Location: {event.location}</p>
                                </div>
                                <button
                                    onClick={(e) => handleGoingClick(event.id)}
                                    style={{ backgroundColor: event.going ? '#f44336' : '#4CAF50' }} // Red for cancel, green for going
                                >
                                    {event.going ? 'Cancel' : 'Going'}
                                </button>

                            </div>
                        ))}
                    </div>
                    <div className="going-events">
                        <h3>Going to:</h3>
                        {goingEvents.map(event => (
                            <p key={event.id}>{event.name} - {event.date}</p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Events;