import React from "react";

class NYCArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {            
        return (            
            <div>
                <h1> NYC $1 Oysters guide </h1>
                <li> Bar Belly daily from 5-7pm ($1) </li>
                <li> Black Crescent daily from 5-7pm ($2 each) </li>
                <li> Flex Mussels daily ($1.5 each) </li>
                <li> Good Night Sonny Tuesday - Fridays from 4-6pm ($15 for a dozen) </li>
                <li> Maracuja daily from 4-7pm ($1) </li>
                <li> The Wayland weekdays from 4-6pm ($18 for a dozen) </li>
        </div>)
    }
}

export default NYCArticle