import React, { useState, useEffect, useSearchParams } from 'react';
import { useLocation } from 'react-router-dom'

// export function EventDetails() {
const EventDetails = (props) => {
    const location = useLocation();
    const data = location.state;
    console.log('Event Details')
    console.log(data)

    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.date}</h1>
            <h1>{data.description}</h1>
        </div>
    );
};

export default EventDetails

