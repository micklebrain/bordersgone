import React from "react";

class NYCArticle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {            
        return (            
            <div>
                <h1>NYC Oysters guide</h1>
                <h2>Brooklyn</h2>
                <li>Maracuja | Williamsburg | daily from 4-7pm | $1/each</li>

                <h2>Manhattan</h2>
                <li>$1/each | Bar Belly | Lower East Side | daily from 5-7pm | east coast</li>
                <li>$15/dozen | Good Night Sonny | Lower East Side | Tuesday - Fridays from 4-6pm</li>
                <li>$1.5/each | Flex Mussels | Greenwich Village | daily</li>
                <li>$18/dozen | The Wayland | Lower East Side | weekdays from 4-6pm</li>
                <li>$2/each | Black Crescent | Lower East Side | daily from 5-7pm</li>
        </div>)
    }
}

export default NYCArticle