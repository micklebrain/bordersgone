import React from "react";

import artgallery from '../images/artgallery.jpeg';
import broadway from '../images/broadway.jpeg';
import brunch from '../images/brunch.jpeg'
import cafe from '../images/cafe.jpeg'
import hotpot from '../images/hotpot.jpeg'
import koreanBBQ from '../images/KoreanBBQ.jpeg'
import omakase from '../images/omakase.jpg';
import oysters from '../images/oysters.jpeg';
import pluspool from '../images/pluspool.jpeg';
import nyc from '../images/nyc.jpg'
import nycattractions from '../images/nycattractions.jpeg';
import nycboroughs from '../images/boroughs.png'
import nycneighborhoods from '../images/neighborhoods.jpeg';
import nycsubway from '../images/nyc-subway.jpeg';
import rooftopbar from '../images/rooftopbar.jpeg';
import spa from '../images/spa.jpeg';
import speakeasy from '../images/speakeasy.jpeg';
import winebar from '../images/winebar.jpeg';
import lunarNewYears from '../images/lunarNewYears.jpeg'

import { Link } from "react-router-dom";

import './NewYorkCity.css';

class NewYorkCity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itinerary: [],
        }
    }

    addToItinerary() {
        let itinerary = this.state.itinerary;
        itinerary.push("movies");
        this.setState({ itinerary: itinerary });
    }

    render() {
        return (<div class="articleContainer">
            <h1> New York City guide </h1>
            <div class="column-main">
                {/* <Link to="/NYCarticle3" class="articlePreview"> <img class="article" src={pie} alt="Find a place to eat through survey" /> Stuck on where to eat? </Link> */}
                <Link to="/newyorkcity/NYCEventsArticle" class="articlePreview"> <img class="articleImage" src={nyc} alt="Events" /> </Link> <div> <div class="articleTitle"> Events </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCBroadwaysArticle" class="articlePreview"> <img class="articleImage" src={broadway} alt="Every broadway show" /> </Link> <div> <div class="articleTitle"> Every broadway show currently showing </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCPlusPoolArticle" class="articlePreview"> <img class="articleImage" src={pluspool} alt="New pool coming to Manhattan river" /> </Link> <div> <div class="articleTitle"> New pool coming to Manhattan river </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCArtGalleriesArticle" class="articlePreview"> <img class="articleImage" src={artgallery} alt="NYC Art Galleries guide" /> </Link> <div> <div class="articleTitle"> NYC art gallery guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCTopAttractionsArticle" class="articlePreview"> <img class="articleImage" src={nycattractions} alt="Top attractions" /> </Link> <div> <div class="articleTitle"> Top attractions </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCSpasArticle" class="articlePreview"> <img class="articleImage" src={spa} alt="NYC spas" /> </Link> <div> <div class="articleTitle"> NYC spa guide </div> <div> Jan 27, 2022 </div> </div>
            </div>
            <h1> Food \ Drinks </h1>
            <div class="column-main">
                <Link to="/newyorkcity/NYCBrunch" class="articlePreview"> <img class="articleImage" src={brunch} alt="NYC best brunch spots" /> </Link> <div> <div class="articleTitle"> NYC brunch </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCHotpotArticle" class="articlePreview"> <img class="articleImage" src={hotpot} alt="NYC hotpot" /> </Link> <div> <div class="articleTitle"> NYC hot pot guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCOmakaseArticle" class="articlePreview"> <img class="articleImage" src={omakase} alt="NYC Omakase" /> </Link> <div> <div class="articleTitle"> NYC Omakase </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCOystersArticle" class="articlePreview"> <img class="articleImage" src={oysters} alt="NYC spa guide" /> </Link> <div> <div class="articleTitle"> NYC oysters guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCCafes" class="articlePreview"> <img class="articleImage" src={cafe} alt="NYC most unique cafes" /> </Link> <div> <div class="articleTitle"> NYC most unique cafes </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCAYCEBBQArticle" class="articlePreview"> <img class="articleImage" src={koreanBBQ} alt="NYC All you can eat BBQ guide" /> </Link> <div> <div class="articleTitle"> NYC All you can eat BBQ guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCTrainStopRestaurantsArticle" class="articlePreview"> <img class="articleImage" src={nycsubway} alt="Best restaurant by every subway stop" /> </Link> <div> <div class="articleTitle"> Best Restaurant by Every Subway Stop </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCTopNeighborhoodRestaurantsArticle" class="articlePreview"> <img class="articleImage" src={nycneighborhoods} alt="Best restaurant in every NYC neighborhood " /> </Link> <div> <div class="articleTitle"> Best Restaurant in Every NYC Neighborhood </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCTopBoroughRestaurantsArticle" class="articlePreview"> <img class="articleImage" src={nycboroughs} alt="Italian Trulli" /> </Link> <div> <div class="articleTitle"> Best Restaurant in All Five NYC Boroughs </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCRooftopBarsArticle" class="articlePreview"> <img class="articleImage" src={rooftopbar} alt="NYC Rooftops Guide" /> </Link> <div> <div class="articleTitle"> NYC Rooftops Guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCSpeakeasiesArticle" class="articlePreview"> <img class="articleImage" src={speakeasy} alt="NYC spa guide" /> </Link> <div> <div class="articleTitle"> NYC speakeasies guide </div> <div> Jan 27, 2022 </div> </div>
                <Link to="/newyorkcity/NYCWineBarArticle" class="articlePreview"> <img class="articleImage" src={winebar} alt="NYC wine bar guide" /> </Link> <div> <div class="articleTitle"> NYC wine bar guide </div> <div> Jan 27, 2022 </div> </div>
                {/* <Link to="/NYCLunarNewYearsArticle" class="articlePreview"> <img class="articleImage" src={lunarNewYears} alt="NYC Lunar New Years" /> </Link> <div> <div class="articleTitle"> NYC Lunar New Years </div> <div> Jan 27, 2022 </div> </div> */}
            </div>
        </div>)
    }
}

export default NewYorkCity