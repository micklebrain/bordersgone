import React from "react";

class NYCBroadwaysArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurantDetails: [],
            map: null
        }
    }

    async componentDidMount() {
    }

    restaurantsTrain() {
    }

    render() {
        return (
            <div>
                <h1> NYCBroadwaysArticle </h1>
                https://www.broadway.org/shows/index/all,-1,0,
                <ul>
                    <li> Ain't Too Proud - The Life and Times of The Temptations @ Imperial Theatre </li>
                    <li> Aladdin @ New Amsterdam Theatre - lottery </li>
                    <li> American Buffalo @ Circle in the Square Theatre </li>
                    <li> American Utopia @ St. James Theatre </li>
                    <li> Beetlejuice @ Marquis Theatre </li>
                    <li> Birthday Candles @ American Airlines Theatre </li>
                    <li> The Book of Mormon @ Eugene O'Neill Theatre </li>
                    <li> Caroline, or Change @ Studio 54 </li>
                    <li> Chicago @ Studio 54 </li>
                    <li> Hamilton @ Richard Rodgers Theatre </li>
                    <li> The Lion King @ Minskoff Theatre </li>                    
                    <li> Wicked @ Gershwin Theatre </li>
                </ul>
            </div>)
    }
}

export default NYCBroadwaysArticle