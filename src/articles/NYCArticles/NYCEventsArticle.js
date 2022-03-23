import React from "react";

class NYCEventsArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1> Events </h1>
                <ul class='event-ul'>
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
                                            <div class="event-details-location-2">New York, NY </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li> every Saturday until May 28 | MoonRise: A Nouveau Circus Immersive Performance | 1329 Willoughby Ave, Brooklyn 11237</li>
                        <li> until May 30th | The Butterfly Conservatory exhibit | @ American Museum of Natural History </li>
                        <li> until June 30th | The Fans Strke Back Star Wars Exhibit | @ 526 6th Avenue </li>
                        <li> until August 14th | Sharks exhibit | @ American Museum of Natural History </li>
                        <li> until September 5 | Vasily Kandinsky: Around the Circle | @ Solomon R. Guggenheim Museum </li>                        
                        <li> ongoing from 6-10pm | Free Thursdays admissions | @ Brooklyn Muesuem </li>
                        <li> ongoing | Free Friday admissions from 6-10pm | @ The Rubin Museum of Art </li>
                        <li> ongoing | Free Friday admissions | @ The Morgan library and museum </li>

                        <h2> March </h2>
                        <li> until 23rd | Olalekan Jeyifous: The Frozen Neighborhoods (Fly-through) (2021) | @ Plaza at 300 Ashland Drive in Theater </li>
                        <li> 24th | Mitski | @ Radio City Hall | music </li>
                        <li> 26th | JoJo Concert | @ Terminal5 | music </li>
                        <li> 27th | New York Rangers vs Buffalo Sabres | @ The Madison Square Garden </li>
                        <li> 28th | New York Knicks vs Chicago Bull | @ The Madison Square Garden </li>
                        <li> 25th - 30th | Tanika I. Williams: (construct)Clearing (2021) and Sanctuary (2021) | @ Plaza at 300 Ashland Drive in Theater </li>
                        <li> until 31st | Tomas Saraceno Patircular Matter(s) | @ The Shed </li>
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
                                        <div class="event-date-day"> 1-5 </div>
                                        <div class="event-date-month">APR</div>
                                    </div>
                                </div>
                                <div class='event-main'>
                                    <div class="event-main-title" aria-level="3" role="heading"> Series of shorts by Ezra Wube: Flatbushtopia (2017), Bridge Street (2015), At the Same Moment (2013), Words of Wisdom (2016) </div>
                                    <div class="event-details">
                                        <div class="event-details-date"> All Day </div>
                                        <div class="event-details-location"> Plaza at 300 Ashland Drive in Theater </div>
                                        <div class="event-details-location-2">New York, NY </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>                    
                    <li> 7th | International Pillow Fight Day | @ Parks around the city </li>
                    <li> 8th - 9th | Lil Tecca | @ Terminal 5 | music</li>
                    <li> 6th - 13th  | Aisha Amin: Choir (2020) and Friday (2019) | @ Plaza at 300 Ashland Drive in Theater </li>
                    <li> 14th | The Script | @ Radio City Music Hall </li>
                    <li> 15th | Said The Sky | @ Webster Hall | music</li>
                    <li> 19th - 21st | Sundae Flower Shop Popup | @ 248 Mott St </li>
                    <li> 23rd | Charli XCX | @ Hammerstein Ballroom at Manhattan Center </li>
                    <li> April 9 - ongoing | King Pleasure PRESENTED BY THE FAMILY OF JEAN-MICHEL BASQUIAT | @ STARRETT LEHIGH </li>

                    <h2> May </h2>
                    <li> 1st | Govenors Island reopened </li>
                    <li> 1st | Japan Day Festival | @ Central Park </li>
                    <li> 5th | ALESSO | @ Advant Gardner </li>
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