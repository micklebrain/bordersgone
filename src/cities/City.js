import React from "react";
import {
    Link,
} from "react-router-dom";

class City extends React.Component {

    init() {
        cityName: String
        articles: []
    }

    render() {
        return (<div>
            <h1> {cityName} travel guide </h1>
        </div>)
    }
}

export default City