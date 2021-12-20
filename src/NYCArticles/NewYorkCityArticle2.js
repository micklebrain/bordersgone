import React from "react";

import grubhubIcon from '../images/grubhub.png'
import postmatesIcon from '../images/Postmates_Icon.png'
import resyIcon from '../images/resy_icon.png'
import uberEatsIcon from '../images/Uber-Eats-Icon.png'

class NewYorkCityArticle2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: [],
            map: null
        }
    }

    async componentDidMount() {

    }

    render() {
        return (<div>
            <div>
                <h1> Best resturant in every Manhattan neighborhood </h1>
                <h2> Alphabet City - Raclette </h2> <a href="https://www.grubhub.com/restaurant/raclette-195-avenue-a-new-york/305505" target="_blank"> <img src={grubhubIcon} alt="Raclette" width="75" height="75" /> </a>
                <h2> Battery Park City - Liberty Bistro </h2>
                <div class="row">
                    <div class="column">
                        <a href="https://www.grubhub.com/restaurant/liberty-cafe-37-w-43rd-st-new-york/80141" target="_blank"> <img src={grubhubIcon} alt="Liberty Bistro" width="75" height="75" /> </a>

                    </div>
                    <div class="column">
                        <a href="https://resy.com/cities/ny/liberty-bistro?date=2021-12-17&seats=2" target="_blank"> <img src={resyIcon} alt="Liberty Bistro" width="75" height="75" /> </a>
                    </div>
                    <div class="column">
                        <a href="https://www.ubereats.com/store/liberty-cafe/8o7ZV6QVS96r_2fRh5ankw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjkyOCUyMFBvbnRlbm92YSUyMEF2ZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpGLUlTNTluVndvQVI3RGplcW9PT3h6OCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzNC4wMTEzMTg5JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTExNy45NTk2MTE5JTdE" target="_blank"> <img src={uberEatsIcon} alt="Liberty Bistro" width="75" height="75" /> </a>
                    </div>
                    <div class="column">
                        <a href="" target="_blank"> <img src={postmatesIcon} alt="Liberty Bistro" width="75" height="75" /> </a>
                    </div>
                </div>
                <h2> Central Park - Express Cafe in the Loeb Boathouse </h2>
                <h2> Chelsea - Bottino </h2> <a href="https://www.grubhub.com/restaurant/bottino-246-10th-ave-new-york/457634" target="_blank"> <img src={grubhubIcon} alt="Bottino" width="50" height="50" /> </a>
                <h2> Chinatown - Kong Sihk Tong <a href="https://www.grubhub.com/restaurant/new-kim-tong-1722-amsterdam-ave-new-york/320818" target="_blank"> <img src={grubhubIcon} alt="Kong Sihk Tong" width="50" height="50" /> </a> </h2>
                <h2> Civic Center - Potbelly Sandwich Shop </h2>
                <h2> East Harlem - Texas Chicken and Burgers </h2>
                <h2> East Village - Nowan </h2>
                <h2> Financial District - Bao Bao </h2>
                <h2> Flatiron District - Upland </h2>
                <h2> Garment district - Chef Yu </h2>
                <h2> Gramercy - Bite </h2>
                <h2> Greenwich village - Tue Thai Food </h2>
                <h2> Harlem - Manna's </h2>
                <h2> Hell's Kitchen - Yum Yum Too </h2>
                <h2> Hudson Square - Ear Inn </h2>
                <h2> Inwood - La Casa del Mofongo and Piano Bar </h2>
                <h2> Kips Bay - Soft Swerve </h2>
                <h2> Koreatown - Antoya KBBQ </h2>
                <h2> Lower East Side - Sweet Chick </h2>
                <h2> Little Italy - Gelso and Grand </h2>
                <h2> Meatpacking District - Catch NYC </h2>
                <h2> Midtown East - Obao </h2>
                <h2> Midtown South - Chef Yu </h2>
                <h2> Midtown West - Ivan Ramen Slurp Shop </h2>
                <h2> Morning Side Heights - Tom's </h2>
                <h2> Murray Hill - Sushi Ryusei </h2>
                <h2> NoHo - Lafayette Grand Café and Bakery </h2>
                <h2> Nolita - Rubirosa </h2>
                <h2> NOMAD - KazuNori </h2>
                <h2> Roosevelt Island - Granny Annie's Bar and Kitchen </h2>
                <h2> SOHO - Fanelli’s Cafe </h2>
                <h2> Stuyvesant Town - Ess-a-Bagel </h2>
                <h2> Tribeca - Bubby's </h2>
                <h2> Union Square - Tsurutontan Udon Noodle Brasserie </h2>
                <h2> Upper East Side - Vietnaam </h2>
                <h2> Upper West Side - Sushi Kaito </h2>
                <h2> West Village - L'Artusi </h2>
            </div>
        </div>)
    }
}

export default NewYorkCityArticle2