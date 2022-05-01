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
                        <h2>Ongoing</h2>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">until 23</div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Beyond the Alley, There... art exhibit</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Lehmann Maupin</div>
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
                                            <div class="event-date-day">until 1</div>
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
                                        <div class="event-main-title" aria-level="3" role="heading">Orchid show</div>
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
                                            <div class="event-date-day"> until 15</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Deepfake: Unstable Evidence on Screen</div>
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
                                            <div class="event-date-day">until 30</div>
                                            <div class="event-date-month">May</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The Butterfly Conservatory exhibit</div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">American Museum of Natural History</div>
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
                                            <div class="event-date-day">until 30</div>
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
                                            <div class="event-date-day">until 14</div>
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
                                            <div class="event-date-day">until 5</div>
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
                                            <div class="event-date-day">Ongoing</div>
                                            <div class="event-date-month">Forever</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Date Nights</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Friday & Saturday, 5-9pm</div>
                                            <div class="event-details-location">The MET</div>
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
                                        <div class="event-main-title" aria-level="3" role="heading">King Pleasure PRESENTED BY THE FAMILY OF JEAN-MICHEL BASQUIAT</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">STARRETT LEHIGH</div>
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
                                        <div class="event-main-title" aria-level="3" role="heading"> Free admissions </div>
                                        <div class="event-details">
                                            <div class="event-details-date">Fridays</div>
                                            <div class="event-details-location"> The Morgan library and Musueum </div>
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
                                            <div class="event-details-date">Fridays, 6-10pm</div>
                                            <div class="event-details-location">The Rubin Museum of Art</div>
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
                                            <div class="event-date-month">except January and September</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Free admissions</div>
                                        <div class="event-details">
                                            <div class="event-details-date">First Saturdays of month, 5-11pm</div>
                                            <div class="event-details-location">Brooklyn Muesuem</div>
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
                                            <div class="event-date-day">Ongoing</div>
                                            <div class="event-date-month">Forever</div>
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

                        <h2> May </h2>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">1</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Govenors Island opens</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Govenors Island</div>
                                            <div class="event-details-location-2">Manhattan, NY</div>
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
                                            <div class="event-date-day">1</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Noodle Fest</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Astoria</div>
                                            <div class="event-details-location-2">Steinway, Broadway-34 Ave Manhattan, NY</div>
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
                                            <div class="event-date-day">1</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Japan Day Festival</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Central Park</div>
                                            <div class="event-details-location-2">Manhattan, NY</div>
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
                                            <div class="event-date-day">2</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">tai verdes</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Mon, 7 – 11 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">New York City Ballet</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Tue, 7:30 PM – Wed, 12:30 AM</div>
                                            <div class="event-details-location">David H Koch Theater</div>
                                            <div class="event-details-location-2">20 Lincoln Center Plaza, New York, NY</div>
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
                                            <div class="event-date-day">4</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">The KVB</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Wed, 7 – 11 PM</div>
                                            <div class="event-details-location">Brooklyn Made</div>
                                            <div class="event-details-location-2">428 Troutman St, Brooklyn, NY</div>
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
                                            <div class="event-date-day">5</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">ALESSO</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Central Park</div>
                                            <div class="event-details-location-2">Manhattan, NY</div>
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
                                            <div class="event-date-day">5</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Michelle</div>
                                        <div class="event-details">
                                            <div class="event-details-date">7pm-12am</div>
                                            <div class="event-details-location">The Bowery Ballroom</div>
                                            <div class="event-details-location-2">6 Delancey St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Alesso & Acraze</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Fri 10 PM – Sat 4 AM</div>
                                            <div class="event-details-location">Avant Gardner</div>
                                            <div class="event-details-location-2">140 Stewart Ave, Brooklyn, NY</div>
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
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">8</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Rina Sawayama</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sun, 8 PM – Mon, 1 AM</div>
                                            <div class="event-details-location">Brooklyn Steel</div>
                                            <div class="event-details-location-2">319 Frost St, Brooklyn, NY</div>
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
                                            <div class="event-date-day">9</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Giant Rooks</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Mon, 7 PM – Tue, 12 AM</div>
                                            <div class="event-details-location">The Bowery Ballroom</div>
                                            <div class="event-details-location-2">6 Delancey St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Symphony X</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Tue, 7:30 – 11:30 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Mannequin Pussy</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Wed, May 11, 7 – 11 PM</div>
                                            <div class="event-details-location">Saint Vitus Bar</div>
                                            <div class="event-details-location-2">1120 Manhattan Ave, Brooklyn, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Rels B</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Thu, May 12, 7 – 10 PM</div>
                                            <div class="event-details-location">Gramercy Theatre</div>
                                            <div class="event-details-location-2">127 E 23rd St, New York, NY</div>
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
                                            <div class="event-date-day">13</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Limp Bizkit</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Fri, May 13, 7:30 – 9:30 PM</div>
                                            <div class="event-details-location">Madison Square Garden</div>
                                            <div class="event-details-location-2">4 Pennsylvania Plaza, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Rex Orange County</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sat, 6:45 – 8:45 PM</div>
                                            <div class="event-details-location">Forest Hills Stadium</div>
                                            <div class="event-details-location-2">1 Tennis Pl, Forest Hills, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Interpol</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sun, 7:30 – 11:30 PM</div>
                                            <div class="event-details-location">Kings Theatre</div>
                                            <div class="event-details-location-2">1027 Flatbush Ave, Brooklyn, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Booba</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Mon, 8 – 10 PM</div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">125 E 11th St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">HAIM: One More HAIM Tour</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Tue, 7:30 – 11:30 PM</div>
                                            <div class="event-details-location">The Madison Square Garden Company</div>
                                            <div class="event-details-location-2">2 Pennsylvania Plaza, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Sleaford Mods</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Wed, 7 – 11 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
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
                                            <div class="event-date-day">19</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">DAVID GUETTA & MORTEN PRESENT FUTURE RAVE</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm</div>
                                            <div class="event-details-location">Avant Gardner</div>
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
                                            <div class="event-date-day">20</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">DAVID GUETTA</div>
                                        <div class="event-details">
                                            <div class="event-details-date">8pm</div>
                                            <div class="event-details-location">Avant Gardner</div>
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
                                            <div class="event-date-day">16 - 20</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Noma Popup</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Brooklyn</div>
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
                                            <div class="event-date-day">21</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">AJR</div>
                                        <div class="event-details">
                                            <div class="event-details-date">6:30 – 8:30 PM</div>
                                            <div class="event-details-location">Forest Hills Stadium</div>
                                            <div class="event-details-location-2">1 Tennis Pl, Forest Hills, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Keshi</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">Manhattan, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Japan Fes</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Upper West Side</div>
                                            <div class="event-details-location-2">Broadway 73-74st New York, NY</div>
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
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">23</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Turnstile</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Mon, 7 – 9 PM</div>
                                            <div class="event-details-location">Brooklyn Steel</div>
                                            <div class="event-details-location-2">319 Frost St, Brooklyn, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Vincint</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Tue, 7 – 10 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Russ</div>
                                        <div class="event-details">
                                            <div class="event-details-date">All Day</div>
                                            <div class="event-details-location">Radio City Music Hall</div>
                                            <div class="event-details-location-2">Manhattan, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Vio-lence</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Thu, May 26, 6 – 11 PM</div>
                                            <div class="event-details-location">LPR</div>
                                            <div class="event-details-location-2">158 Bleecker St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Yael Naïm</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Fri, 6 – 9 PM</div>
                                            <div class="event-details-location">City Winery New York</div>
                                            <div class="event-details-location-2">25 11th Ave, at Hudson River Park, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Dominic Chianese</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sat, 7 – 9 PM</div>
                                            <div class="event-details-location">The Cutting Room</div>
                                            <div class="event-details-location-2">44 E 32nd St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Post Animal</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Sat, 7 – 9 PM</div>
                                            <div class="event-details-location">The Bowery Ballroom</div>
                                            <div class="event-details-location-2">6 Delancey St, New York, NY</div>
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
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">Dadju - Poa Tour</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Mon, 7 – 11 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
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
                                            <div class="event-date-day">31</div>
                                            <div class="event-date-month">MAY</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading">T-Pain</div>
                                        <div class="event-details">
                                            <div class="event-details-date">Tue, 7 – 11 PM</div>
                                            <div class="event-details-location">Irving Plaza</div>
                                            <div class="event-details-location-2">17 Irving Pl, New York, NY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>

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
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">7</div>
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Seaport Cinema</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">?</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-day">10-11</div>
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Marshmellow</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Brooklyn Mirgage</div>
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
                                        <div class="event-date-day">12 - 14</div>
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Summer Fancy Food 2022
                                    </div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">New York</div>
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
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Seaport Cinema</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Queens</div>
                                        <div class="event-details-location-2">Queens, NY</div>
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
                                        <div class="event-date-day">19</div>
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Japan Fes</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">7th Avenue Parkslope</div>
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
                                        <div class="event-date-day">9-20</div>
                                        <div class="event-date-month">Jun</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Tribeca Film Festival</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Brooklyn Mirgage</div>
                                        <div class="event-details-location-2">Brooklyn, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2> July </h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">16</div>
                                        <div class="event-date-month">JUL</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Japan Fes</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Chelsea</div>
                                        <div class="event-details-location-2">6 Ave 15-16th street Manhattan, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2> August </h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">1</div>
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Pixar-themed mini-golf course</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">?</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-day">31-18</div>
                                        <div class="event-date-month">JUL-AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Bric's Celebrates Brooklyn! Festival</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Brooklyn</div>
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
                                        <div class="event-date-day">21-19</div>
                                        <div class="event-date-month">JUL-AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Zero G Experience</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">?</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">The Kid Laroi</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Manhattan Center Hammerstein Ballroom</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Russ</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
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
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">28</div>
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Le Poisson Rouge</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">?</div>
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
                                        <div class="event-date-month">AUG</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Summer Fest</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">East Village</div>
                                        <div class="event-details-location-2">4th Ave 9-10th Street Manhattan, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2>September</h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">1-12</div>
                                        <div class="event-date-month">SEP</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">US Open</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">?</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-month">SEP</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Konamon Fes</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Chelsea</div>
                                        <div class="event-details-location-2">8 Ave 15-16 street Manhattan, NY</div>
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
                                        <div class="event-date-month">SEP</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Konamon Fes</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Chelsea</div>
                                        <div class="event-details-location-2">6 Ave 24-25 street Manhattan, NY</div>
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
                                        <div class="event-date-day">16-26</div>
                                        <div class="event-date-month">SEP</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">The Feast of San Gennaro</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Little Italy</div>
                                        <div class="event-details-location-2">Mulberry Street, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2>October</h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">8</div>
                                        <div class="event-date-month">OCT</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Ramen Contest</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">East Village</div>
                                        <div class="event-details-location-2">4th Ave 9-10th Street Manhattan, NY</div>
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
                                        <div class="event-date-day">9</div>
                                        <div class="event-date-month">OCT</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Ramen Contest</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Upper East Side</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-month">OCT</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Japan Fest</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Upper West Side</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
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
                                        <div class="event-date-day">30-16</div>
                                        <div class="event-date-month">SEP-OCT</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">New York Film Festival</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">Lincoln Center</div>
                                        <div class="event-details-location-2">Manhattan, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2>November</h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">5</div>
                                        <div class="event-date-month">NOV</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Eskimo Callboy</div>
                                    <div class="event-details">
                                        <div class="event-details-date">All Day</div>
                                        <div class="event-details-location">The Brooklyn Monarch</div>
                                        <div class="event-details-location-2">Brooklyn, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2>December</h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day">26</div>
                                        <div class="event-date-month">DEC</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading">Arts Festival</div>
                                    <div class="event-details">
                                        <div class="event-details-date">4 - 5pm</div>
                                        <div class="event-details-location">5th Ave</div>
                                        <div class="event-details-location-2">Brooklyn, NY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <h2>January 2023</h2>

                    <h2>Febuary 2023</h2>

                    <h2>March 2023</h2>

                    <h2>April 2023</h2>
                </ul>
            </div>)
    }
}

export default NYCEventsArticle