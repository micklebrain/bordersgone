import React from "react";

class NYCUpcomingEventsArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1> Upcoming Events </h1>
                <ul>
                    {/* <button onClick={this.addToItinerary.bind(this)}> Add to itinerary </button> */}

                    <div class='focused'> 
                        <h2> Ongoing </h2>                        
                        <li> March 5 - April 9 | New York on Paper Exhibit | @ West Chelsea Contemporary </li>
                        <li> until May 1st | Orchid show | @ New York Botanical Garden </li>
                        <li> until May 30th | The Butterfly Conservatory exhibit | @ American Museum of Natural History </li>
                        <li> until August 14th | Sharks exhibit | @ American Museum of Natural History </li>
                        <li> until September 5 | Vasily Kandinsky: Around the Circle | @ Solomon R. Guggenheim Museum </li>
                        <li> ongoing @ 6-10pm | Free Thursdays admissions | @ Brooklyn Muesuem </li> 
                        <li> ongoing | Free Friday admissions @6-10pm | @ The Rubin Museum of Art </li>
                        <li> ongoing | Free Friday admissions | @ The Morgan library and museum </li>
                        
                        <h2> March </h2>
                        <li> 2nd - 6th | Nitehawk Shorts Festival | Various locations </li>
                        <li> 3rd from 2-9pm| NYC Winter Wine and Food Festival | @Webster Hall </li>
                        <li> 4th | Rezz | @Terminal 5 </li>                    
                        <li> 10th | Amine | @Terminal5</li>
                        <li> 13th - 14th | Tyler, The Creator | @ Madison Sqaure Garden </li>
                        <li> 17th | St Patrick's Day Parade </li>
                        <li> 18th | Reliant K | @ Irving plaza </li>
                        <li> 18th - 19th | Bad Bunny | @ Barclay Center </li>
                        <li> 26th | JoJo | @Terminal5 </li>
                        <li> 27th | New York Rangers vs Buffalo Sabres | @The Madison Square Garden </li>
                        <li> 28th | New York Knicks vs Chicago Bull | @The Madison Square Garden </li>                    
                    </div>

                    <h2> April </h2>
                    <li> 8th | Lil Tecca | @Terminal 5 </li>

                    <h2> May </h2>
                    <li> 1st | Govenors island reopened </li>
                    <li> 1st | Japan Day Festival | @Central Park </li>
                    <li> 9th | Japan Day Festival | @Central Park </li>

                    <h2> June </h2>
                    <li> 7th | Seaport Cinema </li> 
                    <li> 9th - 20th | Tribeca Film Festival </li>
                    <li> 14th | Seaport Cinema </li>
                    <li> 19th | Queens Night market opens </li>

                    <h2> July </h2>
                    <li> 31st - September 18 | Bric's Celebrates Brooklyn! Festival </li>
                    
                    <h2> August </h2>
                    
                    <li> 1st | Pixar-themed mini-golf course </li>
                    <a href="https://www.gozerog.com/the-astronaut-experience-new-york-ny/"> 21st - 19th | Zero G Experience </a>
                    <li> 28th | Le Poisson Rouge </li>                    

                    <h2> September </h2>
                    <li> 30th - September 12 | US Open </li>

                    <h2> October </h2>
                    <li> 24th - 10th | New York Film Festival </li>

                    <h2> November </h2>
                    <li> 5th | Eskimo Callboy | @The Brooklyn Monarch </li> 

                    <h2> December </h2>
                    <li> 26th from 4-5pm | Arts Festival | 5th Ave</li>

                    <h2> January 2023 </h2> 

                    <h2> Febuary 2023 </h2>
                </ul>
            </div>)
    }
}

export default NYCUpcomingEventsArticle