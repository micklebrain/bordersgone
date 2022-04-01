import React from "react";

import {
    Link,
} from "react-router-dom";

class Providence extends React.Component {

    render() {
        return (<div class='container'>
            <h1> Providence travel guide </h1>
            <h2> Food </h2>
            <li> coffee cabinets </li>
            <li> clam cakes</li>
            <li> dynamites </li>            
            <li> johnny cakes (cornmeal flatbread) </li>
            <li> pizza strips </li>
            <li> Rhode Island clam chowder (which is a clear or red soup as opposed to a creamy white chowder) </li>
            <li> New York System hot weiners </li>
            <li> stuffie (stuffed quahog) </li>
            {/* <Link to="/ProvidenceArticle" class="articlePreview"> Things to do in Providence </Link> */}
        </div>)
    }
}

export default Providence