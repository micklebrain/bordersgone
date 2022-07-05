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
import Bogota from './cities/Bogota';
import Boston from './cities/Boston';
import Chicago from './cities/Chicago';
import Denver from './cities/Denver';
import LasVegas from './cities/LasVegas';
import KualaLumpur from './cities/KualaLumpur';
import NewYorkCity from './cities/NewYorkCity';
import Paris from './cities/Paris';
import Providence from './cities/Providence';
import Philadelphia from './cities/Philadelphia';
import SanFrancisco from './cities/SanFrancisco';
import Seattle from './cities/Seattle';
import Singapore from './cities/Singapore';
import Bangkok from './cities/Bangkok';
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
import NYCBobaTeaArticle from './articles/NYCArticles/NYCBobaTeaArticle';
import NYCBroadwaysArticle from './articles/NYCArticles/NYCBroadwaysArticle';
import NYCCafes from './articles/NYCArticles/NYCCafes'
import NYCBrunch from './articles/NYCArticles/NYCBrunch';
import NYCEventsArticle from './articles/NYCArticles/NYCEventsArticle';
import NYCHotpotArticle from './articles/NYCArticles/NYCHotpotArticle';
import NYCLunarNewYearsArticle from './articles/NYCArticles/NYCLunarNewYearsArticle';
import NYCOmakaseArticle from './articles/NYCArticles/NYCOmakaseArticle';
import NYCOystersArticle from './articles/NYCArticles/NYCOystersArticle';
import NYCPhoArticle from './articles/NYCArticles/NYCPhoArticle';
import NYCPlusPoolArticle from './articles/NYCArticles/NYCPlusPoolArticle';
import NYCRamenArticle from './articles/NYCArticles/NYCRamenArticle';
import NYCRooftopBarsArticle from './articles/NYCArticles/NYCRooftopBarsArticle';
import NYCSpasArticle from './articles/NYCArticles/NYCSpasArticle';
import NYCSpeakeasiesArticle from './articles/NYCArticles/NYCSpeakeasiesArticle';
import NYCTopAttractionsArticle from './articles/NYCArticles/NYCTopAttractionsArticle';
import NYCTopBoroughRestaurantsArticle from './articles/NYCArticles/NYCTopBoroughRestaurantsArticle';
import NYCTopNeighborhoodRestaurantsArticle from './articles/NYCArticles/NYCTopNeighborhoodRestaurantsArticle';
import NYCTour from './articles/NYCArticles/NYCTour';
import NYCTrainStopRestaurantsArticle from './articles/NYCArticles/NYCTrainStopRestaurantsArticle';
import NYCWineBarArticle from './articles/NYCArticles/NYCWineBarArticle';

import NewYorkCityArticle3 from './articles/NYCArticles/NewYorkCityArticle3';

import SanFranciscoArticle from './articles/SanFranciscoArticles/SanFranciscoArticle';

import Article from './Article'

import Navbarmenu from './Navbarmenu';

import Goodies from './goodies';
import CustomItinerary from './customItinerary';

import Test from './test'
import Booking from './Booking'

import Sidebar from './sidebar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleEventsChange = this.handleEventsChange.bind(this);
    this.state = { events: [] };
  }

  handleEventsChange(events) {
    this.setState({ events: events`` });
  }

  handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  render() {
    return (
      <div>
        <Router>
          <Navbarmenu />
          {/* <Sidebar
            events={this.state.events}
            onEventsChange={this.handleEventsChange}>
          </Sidebar> */}
          {/* <div id="g_id_onload"
            data-client_id="1045839805169-9vcgmva03ano3lo435i221gnd92580lh.apps.googleusercontent.com"
            data-login_uri="https://bordersgone.com/newyorkcity">
          </div> */}
          <Switch>
            <Route exact path="/"> <Home /> </Route>

            <Route exact path="/atlanta" component={Atlanta} />
            <Route exact path="/bogota" component={Bogota} />
            <Route exact path="/boston" component={Boston} />
            <Route exact path="/chicago" component={Chicago} />
            <Route exact path="/denver" component={Denver} />
            <Route exact path="/lasvegas" component={LasVegas} />
            <Route exact path="/KualaLumpur" component={KualaLumpur} />
            <Route exact path="/newyorkcity" component={NewYorkCity} />
            <Route exact path="/paris" component={Paris} />
            <Route exact path="/philadelphia" component={Philadelphia} />
            <Route exact path="/providence" component={Providence} />
            <Route exact path="/sanfrancisco" component={SanFrancisco} />
            <Route exact path="/seattle" component={Seattle} />
            <Route exact path="/singapore" component={Singapore} />
            <Route exact path="/bangkok" component={Bangkok} />
            <Route exact path="/toronto" component={Toronto} />
            <Route exact path="/washingtonDC" component={WashingtonDC} />

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

            <Route exact path="/bogota/bogotarestaurants" component={Hotels} />

            <Route exact path="/newyorkcity/NYCArtGalleriesArticle" component={NYCArtGalleriesArticle} />
            <Route exact path="/newyorkcity/NYCAYCEBBQArticle" component={NYCAYCEBBQArticle} />
            <Route exact path="/newyorkcity/NYCBobaTeaArticle" component={NYCBobaTeaArticle} />
            <Route exact path="/newyorkcity/NYCBroadwaysArticle" component={NYCBroadwaysArticle} />
            <Route exact path="/newyorkcity/NYCBrunch" component={NYCBrunch} />
            <Route exact path="/newyorkcity/NYCCafes" component={NYCCafes} />
            <Route exact path="/newyorkcity/NYCEventsArticle" component={NYCEventsArticle} />
            <Route exact path="/newyorkcity/NYCHotpotArticle" component={NYCHotpotArticle} />
            <Route exact path="/newyorkcity/NYCLunarNewYearsArticle" component={NYCLunarNewYearsArticle} />
            <Route exact path="/newyorkcity/NYCOmakaseArticle" component={NYCOmakaseArticle} />
            <Route exact path="/newyorkcity/NYCOystersArticle" component={NYCOystersArticle} />
            <Route exact path="/newyorkcity/NYCPhoArticle" component={NYCPhoArticle} />
            <Route exact path="/newyorkcity/NYCPlusPoolArticle" component={NYCPlusPoolArticle} />
            <Route exact path="/newyorkcity/NYCRamenArticle" component={NYCRamenArticle} />
            <Route exact path="/newyorkcity/NYCRooftopBarsArticle" component={NYCRooftopBarsArticle} />
            <Route exact path="/newyorkcity/NYCSpasArticle" component={NYCSpasArticle} />
            <Route exact path="/newyorkcity/NYCSpeakeasiesArticle" component={NYCSpeakeasiesArticle} />
            <Route exact path="/newyorkcity/NYCTour" component={NYCTour} />
            <Route exact path="/newyorkcity/NYCTopAttractionsArticle" component={NYCTopAttractionsArticle} />
            <Route exact path="/newyorkcity/NYCTopBoroughRestaurantsArticle" component={NYCTopBoroughRestaurantsArticle} />
            <Route exact path="/newyorkcity/NYCTopNeighborhoodRestaurantsArticle" component={NYCTopNeighborhoodRestaurantsArticle} />
            <Route exact path="/newyorkcity/NYCTrainStopRestaurantsArticle" component={NYCTrainStopRestaurantsArticle} />
            <Route exact path="/newyorkcity/NYCWineBarArticle" component={NYCWineBarArticle} />

            <Route exact path="/NYCarticle3" component={NewYorkCityArticle3} />

            <Route exact path="/SanFranciscoArticle" component={SanFranciscoArticle} />

            <Route exact path="/goodies" component={Goodies} />
            <Route exact path="/customItinerary" component={CustomItinerary} />

            <Route exact path="/test" component={Test} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
        </Router>
      </div>)
  }
}

export default App;
