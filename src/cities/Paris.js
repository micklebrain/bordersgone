import React from "react";
import {
    Link,
} from "react-router-dom";

import paris from './../images/paris.jpeg';

class City extends React.Component {

    init() {
    }

    render() {
        return (<div>
            <h1> Paris travel guide </h1>
            <Link to="/ParisThingsToDoArticle" class="articlePreview"> <img class="articleImage" src={paris} alt="Things to do in Paris" /> </Link> <div> <div class="articleTitle"> Things to do in Paris </div> <div> Jan 27, 2022 </div> </div>
        </div>)
    }
}

export default City