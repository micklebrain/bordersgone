import React from "react";

import {
    Link,
} from "react-router-dom";

class Bogota extends React.Component {

    render() {
        return (<div class='container'>
            <h1>Bogota travel guide</h1>
            <Link to="/BogotaRestaurants" class="articlePreview">Top 5 resturants in Bogota</Link>
            <ul>
                <li> La Candelaria </li>
                <li> Zona Rosa </li>
            </ul>
        </div>)
    }
}

export default Bogota