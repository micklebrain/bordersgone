import React from "react";

import {
    Link,
} from "react-router-dom";


class LasVegas extends React.Component {

    render() {        
        return (<div class='container'>
            <h1> Las Vegas travel guide </h1>
            <h2> Ambassador - Eric Chen - local resident for 10+ years </h2>
            <Link to="/LasVegasArticle" class="articlePreview"> Top 5 must do things in Las Vegas </Link>
            <h2>Things to do off the strip</h2>
            <ol>
                <li>Saw Escape Room</li>
            </ol>
            <h2>Things to do at Fremont</h2>            
        </div>)
    }
}

export default LasVegas