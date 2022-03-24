import React from "react";

import './NYCEventsArticle.css';

class NYCEventsArticle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Events </h1>
                <ul class='event-ul' style={{ padding: '5px' }}>
                    {/* <button onClick={this.addToItinerary.bind(this)}> Add to itinerary </button> */}
                    <div class='focused'>
                        <h2> Ongoing </h2>                        
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day"> until 9</div>
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
                                            <div class="event-date-day"> Until 17 </div>
                                            <div class="event-date-month">APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Tomas Saraceno Patircular Matter(s) </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> The Shed </div>
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
                                            <div class="event-date-day"> until 1</div>
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
                                            <div class="event-date-day"> until 15</div>
                                            <div class="event-date-month">May</div>
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
                                            <div class="event-date-day"> until 28 </div>
                                            <div class="event-date-month">May</div>
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

                        <h2> March </h2>
                        <li class='event-li'>
                            <div class='event-outer'>
                                <div class='event'>
                                    <div class='event-date'>
                                        <div>
                                            <div class="event-date-day">25</div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Cults (Delete) </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Elsewhere, 599 Johnson Ave</div>
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
                                            <div class="event-date-day">26</div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Elephante </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">Webster Hall</div>
                                            <div class="event-details-location-2">New York NY</div>
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
                                            <div class="event-date-day"> 26 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> JoJo Concert </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Terminal5 </div>
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
                                            <div class="event-date-day"> 27 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> New York Rangers vs Buffalo Sabres </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> The Madison Square Garden </div>
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
                                            <div class="event-date-day"> 28 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> New York Knicks vs Chicago Bulls </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> The Madison Square Garden </div>
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
                                            <div class="event-date-day"> 29 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> The Score </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Gramercy Theatre </div>
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
                                            <div class="event-date-day"> 25-30 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Tanika I. Williams, (construct) (Clearing (2021) and Sanctuary (2021) </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Plaza at 300 Ashland Drive in Theater </div>
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
                                            <div class="event-date-day"> 31 </div>
                                            <div class="event-date-month">MAR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> American Utopia </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location">St. James Theatre</div>
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
                                            <div class="event-date-day"> 27-10</div>
                                            <div class="event-date-month">MAR-APR</div>
                                        </div>
                                    </div>
                                    <div class='event-main'>
                                        <div class="event-main-title" aria-level="3" role="heading"> Macy's Flower Show </div>
                                        <div class="event-details">
                                            <div class="event-details-date"> All Day </div>
                                            <div class="event-details-location"> Macy's Herald Square </div>
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>

                    <h2> April </h2>
                    <li class='event-li'>
                        <div class='event-outer'>
                            <div class='event'>
                                <div class='event-date'>
                                    <div>
                                        <div class="event-date-day"> 1 </div>
                                        <div class="event-date-month">APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Smorgasburg WTC opening </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> Fulton + Church St. </div>
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
                                        <div class="event-date-day"> 2 </div>
                                        <div class="event-date-month">APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> New York Knicks vs Knicks </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> The Madison Square Garden </div>
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
                                        <div class="event-date-day"> 3 </div>
                                        <div class="event-date-month">APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Smorgasburg opening </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> Prospect Park </div>
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
                                        <div class="event-date-day"> 4 </div>
                                        <div class="event-date-month">APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Luna Luna, Dent May, Pearl & The Oyster </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
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
                                        <div class="event-date-day"> 31-5 </div>
                                        <div class="event-date-month">MAR-APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Series of shorts by Ezra Wube: Flatbushtopia (2017), Bridge Street (2015), At the Same Moment (2013), Words of Wisdom (2016) </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> Plaza at 300 Ashland Drive in Theater </div>
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
                    <li> 25th | Russ | @ Radio City Music Hall </li>
                    <li> 9th | Japan Day Festival | @ Central Park </li>

                    <h2> June </h2>
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
                    <li> 28th | Le Poisson Rouge </li>

                    <h2> September </h2>
                    <li> 1st - 12th | US Open </li>

                    <h2> October </h2>
                    <li> 24th - 10th | New York Film Festival </li>

                    <h2> November </h2>
                    <li> 5th | Eskimo Callboy | @ The Brooklyn Monarch </li>

                    <h2> December </h2>
                    <li> 26th from 4-5pm | Arts Festival | 5th Ave</li>

                    <h2> January 2023 </h2>

                    <h2> Febuary 2023 </h2>
                </ul>
            </div>)
    }
}

export default NYCEventsArticle