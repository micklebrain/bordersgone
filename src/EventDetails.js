import React, { useState, useEffect, useSearchParams } from 'react';
import { useLocation } from 'react-router-dom'

const EventDetails = (props) => {
    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <h1>{data.name}</h1>
            {/* <h1>{data.date}</h1> */}
            <div class="description">{data.description}</div>
        </div>
    );
};

export default EventDetails

