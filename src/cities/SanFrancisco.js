import React from "react";
import {
    Link,
} from "react-router-dom";

class SanFrancisco extends React.Component {

    render() {
        return (<div class='container'>
            <h1> San Francisco travel guide </h1>
            <h1> Ambassador - Timothy Do - local resident for 10+ years </h1>
            <Link to="/SanFranciscoArticle" class="articlePreview"> Top 5 must do things in San Francisco </Link>
        </div>)
    }
}

export default SanFrancisco