import './App.css';
import React from 'react';
import Donate from './Donate';
import Home from './Home';
import Hotels from './Hotels';
import Speakeasy from './Speakeasy'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TicketMarketplace from './TicketMarketplace';

import Atlanta from './cities/Atlanta';
import Chicago from './cities/Chicago';
import Denver from './cities/Denver';
import LasVegas from './cities/LasVegas';
import NewYorkCity from './cities/NewYorkCity';
import Paris from './cities/Paris';
import Philadelphia from './cities/Philadelphia';
import SanFrancisco from './cities/SanFrancisco';
import Seattle from './cities/Seattle';
import Toronto from './cities/Toronto';
import WashingtonDC from './cities/WashingtonDC';

import AtlantaArticle from './articles/AtlantaArticles/AtlantaArticle';
import ChicagoArticle from './articles/ChicagoArticles/ChicagoArticle';
import ChicagoArticle2 from './articles/ChicagoArticles/ChicagoArticle2';
import DenverArticle from './articles/DenverArticles/DenverArticle';
import LasVegasArticle from './articles/LasVegasArticles/LasVegasArticle';
import ParisThingsToDoArticle from './articles/ParisArticles/ParisThingsToDoArticle';
import PhiladelphiaArticle from './articles/PhiladelphiaArticles/PhiladelphiaArticle';
import PhiladelphiaNeighborhoodRestaurantsArticle from './articles/PhiladelphiaArticles/PhiladelphiaNeighborhoodRestaurantsArticle';

import NYCArtGalleriesArticle from './articles/NYCArticles/NYCArtGalleriesArticle'
import NYCAYCEBBQArticle from './articles/NYCArticles/NYCAYCEBBQArticle'
import NYCBroadwaysArticle from './articles/NYCArticles/NYCBroadwaysArticle';
import NYCCafes from './articles/NYCArticles/NYCCafes'
import NYCBrunch from './articles/NYCArticles/NYCBrunch';
import NYCEventsArticle from './articles/NYCArticles/NYCEventsArticle';
import NYCHotpotArticle from './articles/NYCArticles/NYCHotpotArticle';
import NYCLunarNewYearsArticle from './articles/NYCArticles/NYCLunarNewYearsArticle';
import NYCOmakaseArticle from './articles/NYCArticles/NYCOmakaseArticle';
import NYCOystersArticle from './articles/NYCArticles/NYCOystersArticle';
import NYCPlusPoolArticle from './articles/NYCArticles/NYCPlusPoolArticle';
import NYCRooftopBarsArticle from './articles/NYCArticles/NYCRooftopBarsArticle';
import NYCSpasArticle from './articles/NYCArticles/NYCSpasArticle';
import NYCSpeakeasiesArticle from './articles/NYCArticles/NYCSpeakeasiesArticle';
import NYCTopAttractionsArticle from './articles/NYCArticles/NYCTopAttractionsArticle';
import NYCTopBoroughRestaurantsArticle from './articles/NYCArticles/NYCTopBoroughRestaurantsArticle';
import NYCTopNeighborhoodRestaurantsArticle from './articles/NYCArticles/NYCTopNeighborhoodRestaurantsArticle';
import NYCTrainStopRestaurantsArticle from './articles/NYCArticles/NYCTrainStopRestaurantsArticle';
import NewYorkCityArticle3 from './articles/NYCArticles/NewYorkCityArticle3';

import SanFranciscoArticle from './articles/SanFranciscoArticles/SanFranciscoArticle';

import Article from './Article'

import Navbarmenu from './Navbarmenu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbarmenu />
          <Switch>
            <Route exact path="/"> <Home /> </Route>

            <Route exact path="/atlanta" component={Atlanta} />
            <Route exact path="/chicago" component={Chicago} />
            <Route exact path="/denver" component={Denver} />                      
            <Route exact path="/lasvegas" component={LasVegas} />
            <Route exact path="/newyorkcity" component={NewYorkCity} />
            <Route exact path="/paris" component={Paris} />
            <Route exact path="/philadelphia" component={Philadelphia} />
            <Route exact path="/sanfrancisco" component={SanFrancisco} />
            <Route exact path="/seattle" component={Seattle} />
            <Route exact path="/toronto" component={Toronto} />
            <Route exact path="/washingtonDC" component={WashingtonDC} />

            <Route exact path="/article" component={Article} />
            <Route exact path="/hotels" component={Hotels} />
            <Route exact path="/speakeasies" component={Speakeasy} />
            <Route exact path="/ticketMarketplace" component={TicketMarketplace} />
            <Route exact path="/donate" component={Donate} />

            <Route exact path="/AtlantaArticle" component={AtlantaArticle} />
            <Route exact path="/ChicagoArticle" component={ChicagoArticle} />
            <Route exact path="/ChicagoArticle2" component={ChicagoArticle2} />
            <Route exact path="/DenverArticle" component={DenverArticle} />            
            <Route exact path="/LasVegasArticle" component={LasVegasArticle} />

            <Route exact path="/ParisThingsToDoArticle" component={ParisThingsToDoArticle} />
            <Route exact path="/PhiladelphiaArticle" component={PhiladelphiaArticle} />
            <Route exact path="/PhiladelphiaNeighborhoodRestaurantsArticle" component={PhiladelphiaNeighborhoodRestaurantsArticle} />
            
            <Route exact path="/NYCArtGalleriesArticle" component={NYCArtGalleriesArticle} />
            <Route exact path="/NYCAYCEBBQArticle" component={NYCAYCEBBQArticle} />
            <Route exact path="/NYCBroadwaysArticle" component={NYCBroadwaysArticle} />
            <Route exact path="/NYCBrunch" component={NYCBrunch} />
            <Route exact path="/NYCCafes" component={NYCCafes} />
            <Route exact path="/NYCHotpotArticle" component={NYCHotpotArticle} />
            <Route exact path="/NYCLunarNewYearsArticle" component={NYCLunarNewYearsArticle} />
            <Route exact path="/NYCOmakaseArticle" component={NYCOmakaseArticle} />
            <Route exact path="/NYCOystersArticle" component={NYCOystersArticle} />
            <Route exact path="/NYCPlusPoolArticle" component={NYCPlusPoolArticle} />
            <Route exact path="/NYCRooftopBarsArticle" component={NYCRooftopBarsArticle} />                  
            <Route exact path="/NYCSpasArticle" component={NYCSpasArticle} />
            <Route exact path="/NYCSpeakeasiesArticle" component={NYCSpeakeasiesArticle} />
            <Route exact path="/NYCTopAttractionsArticle" component={NYCTopAttractionsArticle} />
            <Route exact path="/NYCTopBoroughRestaurantsArticle" component={NYCTopBoroughRestaurantsArticle} />
            <Route exact path="/NYCTopNeighborhoodRestaurantsArticle" component={NYCTopNeighborhoodRestaurantsArticle} />            
            <Route exact path="/NYCTrainStopRestaurantsArticle" component={NYCTrainStopRestaurantsArticle} />
            <Route exact path="/NYCEventsArticle" component={NYCEventsArticle} />

            <Route exact path="/NYCarticle3" component={NewYorkCityArticle3} />

            <Route exact path="/SanFranciscoArticle" component={SanFranciscoArticle} />
          </Switch>
        </Router>
      </div>)
  }
}

export default App;
