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
                <h1> NYC Oysters guide </h1>
                <li> Bar Belly | Lower East Side | daily from 5-7pm ($1) </li>
                <li> Black Crescent | Lower East Side | daily from 5-7pm ($2 each) </li>
                <li> Flex Mussels | Greenwich Village | daily ($1.5 each) </li>
                <li> Good Night Sonny | Lower East Side | Tuesday - Fridays from 4-6pm ($15 for a dozen) </li>
                <li> Maracuja | Williamsburg, Brooklyn | daily from 4-7pm ($1) </li>
                <li> The Wayland | Lower East Side | weekdays from 4-6pm ($18 for a dozen) </li>
        </div>)
    }
}

export default NYCArticle