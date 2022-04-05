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
                <h1> NYC $1 Dollar Oysters </h1>
                <li> Bar Belly Fridays from 5-7pm </li>                
                <li> Black Crescent from 6-8pm </li>
                <li> Brooklyn Crab Tuesday and Wednesday </li>                
                <li> Flex Mussels from 5:30-11pm </li>
                <li> Good Night Sonny Tuesday - Fridays from 4-6pm (One dozen for $15) </li>
                <li> Lighthouse from 4-7pm </li>
                <li> Maracuja from 4-7pm </li>
                <li> Pinkerton Wine Bar all the time </li>
                <li> The Wayland Monday - Friday from 4-6pm </li>
        </div>)
    }
}

export default NYCArticle