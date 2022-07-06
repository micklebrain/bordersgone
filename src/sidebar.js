import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector, useDispatch } from 'react-redux'

export default props => {
    const [itinerary, setItinerary] = useState([]);
    const [count, setCount] = useState(1);
    const [events, setEvents] = useState([]);
    const evts = useSelector((state) => state.events.events)
    const email = useSelector((state) => state.events.email)

    const requestOptions = {
        method: 'GET',
    }

    useEffect(() => {
        console.log('Email');
        console.log(email);
        const url = "https://lostmindsbackend.vercel.app/userEvents/" + email
        fetch(url, {
            method: 'GET'
        })
            // "http://localhost:3000/boroughresturants", requestOptions)
            .then(response => response.text())
            .then(response => {
                var resyJson = JSON.parse(response);
                resyJson['doc'].forEach(event => {
                    setEvents(arr => [...arr, event]);
                });
            })
            .catch(error => console.log('error', error));
    }, []);

    const Dates = () => {
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        var dates = []
        while (today <= nextweek) {
            dates.push(<div>
                <h1> {today.toLocaleString('default', { month: 'long' })} {today.getDate()} </h1>
            </div>)
            events.forEach(evt => {
                // evts.forEach(evt => {                
                const eventDate = new Date(evt.date);
                if (eventDate.getDate() == today.getDate()) {
                    dates.push(<h2>{evt.name}</h2>);
                }
            })
            let newDate = today.setDate(today.getDate() + 1);
            today = new Date(newDate);
        }
        return dates
    }

    const addActivity = (param) => {
        setCount(count + 1);
        setEvents(arr => [...arr, param]);
    };

    return (
        <Menu right>
            <h1>Hello ...</h1>
            <h1>Home - Ritz Carlton</h1>
            <Dates></Dates>
            <button onClick={() => addActivity({ name: "Event 2", date: new Date('July 2, 2022 03:24:00') })}>Add Event</button>
            <button onClick={() => addActivity({ name: "Event 3", date: new Date('July 4, 2022 03:24:00') })}>Add Event 2</button>
        </Menu>
    );
};

