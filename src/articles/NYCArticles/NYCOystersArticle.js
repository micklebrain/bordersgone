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
                <h2> Brooklyn </h2>
                <li> Maracuja | Williamsburg | daily from 4-7pm | $1/each </li>

                <h2> Manhattan </h2>
                <li> Bar Belly | Lower East Side | daily from 5-7pm | $1/each </li>
                <li> Good Night Sonny | Lower East Side | Tuesday - Fridays from 4-6pm | $15/dozen </li>
                <li> Flex Mussels | Greenwich Village | daily | $1.5/each </li>
                <li> The Wayland | Lower East Side | weekdays from 4-6pm | $18/dozen </li>
                <li> Black Crescent | Lower East Side | daily from 5-7pm | $2/each </li>                  
        </div>)
    }
}

export default NYCArticle