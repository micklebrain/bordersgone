import React from "react";

import {
    Link,
} from "react-router-dom";

import Sidebar from '../sidebar'

class Chicago extends React.Component {

    render() {
        return (
            <div class='container'>
                <Sidebar
                    // events={this.state.events}
                    // onEventsChange={this.handleEventsChange}>
                    >
                </Sidebar>
                <h1> Chicago travel guide </h1>
                <Link to="/ChicagoArticle" class="articlePreview"> Top 5 must do things in Chicago </Link>
                <Link to="/ChicagoArticle2" class="articlePreview"> Top 5 restaurants in Chicago </Link>
            </div>)
    }
}

export default Chicago