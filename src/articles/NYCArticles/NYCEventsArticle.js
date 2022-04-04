import React from "react";

import Event from '../../Event'
import './NYCEventsArticle.css';

class NYCEventsArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    getEvents() {
        var requestOptions = {
            method: 'GET',
        };

        fetch(
            "https://lostmindsbackend.vercel.app/events/newyorkcity", requestOptions)
            // "http://localhost:3000/boroughresturants", requestOptions)
            .then(response => response.text())
            .then(response => {
                var resyJson = JSON.parse(response);
                resyJson['doc'].forEach(event => {
                    const res = {
                        name: event['name'],
                        location: event['location'],
                        location2: event['location2'],
                        day: event['day'],
                        month: event['month'],
                        time: event['time'],
                        city: event['city']
                    }
                    let events = this.state.events;
                    events.push(res);
                    this.setState({ events: events });
                    console.log(this.state.events);
                });
            })
            .catch(error => console.log('error', error));
    }

    async componentDidMount() {
        this.getEvents();
    }

    render() {
        const events = this.state.events
        const eventsList = events.map((event) =>
            <Event
                name={event.name}
                location={event.location}
                location2={event.location2}
                day={event.day}
                month={event.month}
                time={event.time}
                city={event.city}
            >
            </Event>
        );

        return (
            <div>
                <h1> Events </h1>

                {/* {eventsList} */}

                <ul class='event-ul' style={{ padding: '5px' }}>
                    {/* <button onClick={this.addToItinerary.bind(this)}> Add to itinerary </button> */}
                    <div class='focused'>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 5</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Series of shorts by Ezra Wube: Flatbushtopia (2017), Bridge Street (2015), At the Same Moment (2013), Words of Wisdom (2016)</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Plaza at 300 Ashland Drive in Theater</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <h2> Ongoing </h2>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 9</div>
                                            <div class="event-date-month">April</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> New York on Paper Exhibit </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> West Chelsea Contemporary </div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 10</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Macy's Flower Show</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Macy's Herald Square </div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 17</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Tomas Saraceno Particular Matter(s)</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">The Shed</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 1</div>
                                            <div class="event-date-month">May</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Nude Exhibition</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Fotografiska Museum</div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 1</div>
                                            <div class="event-date-month">May</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Orchid show </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> New York Botanical Garden </div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">8-4</div>
                                            <div class="event-date-month">APR-MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Poem Mural</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">The Poem</div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 15</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Deepfake: Unstable Evidence on Screen </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Changing Exhibitions Gallery </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 28</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> MoonRise: A Nouveau Circus Immersive Performance </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> Saturdays </div>
                                            <div class="event-details-location"> 1329 Willoughby Ave </div>
                                            <div class="event-details-location-2">Brooklyn, NY 11237 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 30 </div>
                                            <div class="event-date-month">May</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> The Butterfly Conservatory exhibit </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> American Museum of Natural History </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 30 </div>
                                            <div class="event-date-month">JUN</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> The Fans Strke Back Star Wars Exhibit </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> 526 6th Avenue </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 14th </div>
                                            <div class="event-date-month">AUG</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Sharks exhibit </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> American Museum of Natural History </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 5 </div>
                                            <div class="event-date-month">SEP</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Vasily Kandinsky: Around the Circle </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Solomon R. Guggenheim Museum </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">APR-Ongoing</div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Luna Park</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Coney Island</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">Ongoing</div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Smorgasburg WTC</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Fridays, 11am-7pm</div>
                                            <div class="event-details-location">Fulton + Church St.</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">3</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Smorgasburg</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sundays, 11am-6pm</div>
                                            <div class="event-details-location">Breeze Hill, enter at Lincoln.</div>
                                            <div class="event-details-location-2">Prospect Park , NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> Ongoing </div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Free admissions </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> Thursdays, 6-10pm </div>
                                            <div class="event-details-location"> Brooklyn Muesuem </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> Ongoing </div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Free admissions </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> Fridays, 6-10pm </div>
                                            <div class="event-details-location"> The Rubin Museum of Art </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> Ongoing </div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Free admissions </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> Fridays </div>
                                            <div class="event-details-location"> The Morgan library and Musueum </div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <h2> April </h2>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> 4 </div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Luna Luna, Dent May, Pearl & The Oyster</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm</div>
                                            <div class="event-details-location">Knitting Factory</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">6</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Strokes</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> Wed, 8 – 11 PM </div>
                                            <div class="event-details-location">Barclays Center</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">7</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">International Pillow Fight Day</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Parks around the city</div>
                                            <div class="event-details-location-2">NYC, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">8-9</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Lil Tecca</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Terminal 5</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">10</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Zero Point Energy</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Baby's All Right</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">11</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">New York Yankees vs. Toronto Blue Jays</div>
                                        <div class="event-details">
                                            <div class="event-details-date">7:05-11:05pm</div>
                                            <div class="event-details-location">Yankee Stadium</div>
                                            <div class="event-details-location-2">Bronx, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">12</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Minutes</div>
                                        <div class="event-details">
                                            <div class="event-details-date">7pm-12am</div>
                                            <div class="event-details-location">Studio 54</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">12</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Yumi Zouma</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8-11pm</div>
                                            <div class="event-details-location">Music Hall of Williamsburg</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">6-13</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Aisha Amin: Choir (2020) and Friday (2019)</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Plaza at 300 Ashland Drive in Theater</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">14</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Script</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Radio City Music Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">15</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Said The Sky</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">16</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Big Thief</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm-12am</div>
                                            <div class="event-details-location">Kings Theatre</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">17</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Kaiju Big Battel</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm-12am</div>
                                            <div class="event-details-location">The Bell House</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">18</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Passenger</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm-12am</div>
                                            <div class="event-details-location">Town Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">19-21</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Sundae Flower Shop Popup</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">248 Mott St</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">21</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">LAVEDA, YEAH BABY, THE ONLYS</div>
                                        <div class="event-details">
                                            <div class="event-details-date">7pm</div>
                                            <div class="event-details-location">KNITTING FACTORY</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">22</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Main Squeeze</div>
                                        <div class="event-details">
                                            <div class="event-details-date">9-11pm</div>
                                            <div class="event-details-location">Music Hall of Williamsburg</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">23</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Charli XCX</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Hammerstein Ballroom at Manhattan Center</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">24</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Mrs. Doubtfire</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Stephen Sondheim Theatre</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">25</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Ashe</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">26</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Funny Girl</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">August Wilson Theatre</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">27</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">mike.</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8-11pm</div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">28</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Girl Talk</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Brooklyn Steel</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">29</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Teddy Swims</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">30</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Lola Kirke</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Brooklyn Made</div>
                                            <div class="event-details-location-2">Brooklyn, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">9 - ongoing</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">King Pleasure PRESENTED BY THE FAMILY OF JEAN-MICHEL BASQUIAT</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">STARRETT LEHIGH</div>
                                            <div class="event-details-location-2">New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>

                    <h2> May </h2>
                    <li> 1st | Govenors Island reopened </li>
                    <li> 1st | Japan Day Festival | @ Central Park </li>
                    <li> 5th | ALESSO | @ Advant Gardner </li>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day"> 7 </div>
                                        <div class="event-date-month">MAY</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Queens Night Market </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> 4701 111th St</div>
                                        <div class="event-details-location-2">Queens, NY 11368</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 19th | DAVID GUETTA & MORTEN PRESENT FUTURE RAVE | @ Advant Gardner | music </li>
                    <li> 20th 8 PM | DAVID GUETTA | Avant Gardner</li>
                    <li> 22nd | Keshi | @ Webster Hall </li>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">18-22</div>
                                        <div class="event-date-month">MAY</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">FRIEZE NEW YORK</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">The Shed</div>
                                        <div class="event-details-location-2">New York, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 25th | Russ | @ Radio City Music Hall </li>
                    <li> 9th | Japan Day Festival | @ Central Park </li>

                    <h2> June </h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">1</div>
                                        <div class="event-date-month">JUN</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Smorgasburg opening</div>
                                    <div class="event-details">
                                        <div class="event-details-date">11am-6pm</div>
                                        <div class="event-details-location">Marsha P. Johnson State Park</div>
                                        <div class="event-details-location-2">Williamsburg, Brooklyn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> 7th | Seaport Cinema </li>
                    <li> 9th - 20th | Tribeca Film Festival </li>
                    <li> 10th - 11th | Marshmellow | @ Brooklyn Mirgage | music </li>
                    <li> 14th | Seaport Cinema </li>
                    <li> 19th | Queens Night market opens </li>

                    <h2> July </h2>
                    <li> 31st - September 18 | Bric's Celebrates Brooklyn! Festival </li>

                    <h2> August </h2>
                    <li> 1st | Pixar-themed mini-golf course </li>
                    <a href="https://www.gozerog.com/the-astronaut-experience-new-york-ny/"> 21st - 19th | Zero G Experience </a>
                    <li> 12th | The Kid Laroi | Manhattan Center Hammerstein Ballroom </li>
                    <li> 25th | Russ | Radio City Music Hall </li>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">26</div>
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Odeza Last Goodbye Tour</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Forest Hills Stadium</div>
                                        <div class="event-details-location-2">New York, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>28th | Le Poisson Rouge</li>

                    <h2>September </h2>
                    <li>1st - 12th | US Open</li>

                    <h2>October</h2>
                    <li>24th - 10th | New York Film Festival</li>

                    <h2>November</h2>
                    <li>5th | Eskimo Callboy | @ The Brooklyn Monarch</li>

                    <h2>December</h2>
                    <li>26th from 4-5pm | Arts Festival | 5th Ave</li>

                    <h2>January 2023</h2>

                    <h2>Febuary 2023</h2>

                    <h2>March 2023</h2>
                </ul>
            </div>)
    }
}

export default NYCEventsArticle