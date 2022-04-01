import React from "react";

import {
    Link,
} from "react-router-dom";

class Providence extends React.Component {

    render() {
        return (<div class='container'>
            <h1>Providence travel guide</h1>
            <h2>Things to do</h2>
            <li>WaterFire</li> 

            <h2>Food</h2>
            <li>coffee cabinets (coffee milk)</li>
            <li>clam cakes</li>
            <li>clam chowder (which is a clear or red soup as opposed to a creamy white chowder)</li>
            <li>dynamites</li>
            <li>johnny cakes (cornmeal flatbread)</li>
            <li>pizza strips</li>
            <li>New York System hot weiners</li>
            <li>stuffie (stuffed quahog)</li>
            {/* <Link to="/ProvidenceArticle" class="articlePreview"> Things to do in Providence </Link> */}
        </div>)
    }
}

export default Providence