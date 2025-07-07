import React from "react";
import { events_list } from "../components/dataComps/events_list";

const sortEventsByDate = (eventsArr) => {
    return [...eventsArr].sort((a, b) => {
        // Parse dates as YYYY-MM-DD for comparison
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
};

const Events = () => {
    const sortedEvents = sortEventsByDate(events_list);
    return (
        <div className="min-h-screen w-full bg-gray-100 py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">All Events</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                {sortedEvents.map((event, idx) => (
                    <div key={idx} className={`rounded-lg shadow-lg p-6 ${event.background} text-white`}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                                <p className="text-sm mb-1">{event.subtitle}</p>
                                <p className="mb-2">{event.description}</p>
                                <p className="text-sm">{event.location}</p>
                                <p className="text-sm">{event.date} | {event.time}</p>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0">
                                <button
                                    className="bg-white text-red-900 font-bold py-2 px-4 rounded-3xl"
                                    onClick={() => window.open(event.registerLink, '_blank')}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
