import './App.css';
import React from 'react';
import Donate from './Donate';
import Home from './Home';
import Hotels from './Hotels';
import Speakeasy from './Speakeasy'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TicketMarketplace from './TicketMarketplace';

import Atlanta from './cities/Atlanta';
import Bangkok from './cities/Bangkok';
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
import Seoul from './cities/Seoul';
import Singapore from './cities/Singapore';
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
import Navbarmenu from './Navbarmenu';
import CityNavbarmenu from './CityNavbarmenu';
import Goodies from './goodies';
import CustomItinerary from './customItinerary';
import Itinerary from './itinerary'
import Booking from './Booking'
import EventDetails from './EventDetails';
import Explore from './Explore';
import SimCards from './SimCards';
import Laundry from './Laundry';

import Account from './Account';

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
        <BrowserRouter>
          <Navbarmenu/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/atlanta" element={<Atlanta/>} />
            <Route exact path="/bogota" element={<Bogota/>} />
            <Route exact path="/boston" element={<Boston/>} />
            <Route exact path="/chicago" element={<Chicago/>} />
            <Route exact path="/denver" element={<Denver/>} />
            <Route exact path="/lasvegas" element={<LasVegas/>} />
            <Route exact path="/KualaLumpur" element={KualaLumpur} />
            <Route exact path="/newyorkcity" element={<NewYorkCity/>} />
            <Route exact path="/paris" element={Paris} />
            <Route exact path="/philadelphia" element={<Philadelphia/>} />
            <Route exact path="/providence" element={<Providence/>} />
            <Route exact path="/sanfrancisco" element={<SanFrancisco/>} />
            <Route exact path="/seattle" element={<Seattle/>} />
            <Route exact path="/singapore" element={<Singapore/>} />
            <Route exact path="/bangkok" element={<Bangkok/>} />
            <Route exact path="/toronto" element={<Toronto/>} />
            <Route exact path="/seoul" element={<Seoul/>} />
            <Route exact path="/washingtonDC" element={<WashingtonDC/>} />
            <Route exact path="/hotels" element={<Hotels/>} />
            <Route exact path="/speakeasies" element={<Speakeasy/>} />
            <Route exact path="/ticketMarketplace" element={<TicketMarketplace/>} />
            <Route exact path="/donate" element={<Donate/>} />
            <Route exact path="/AtlantaArticle" element={<AtlantaArticle/>} />
            <Route exact path="/ChicagoArticle" element={<ChicagoArticle/>} />
            <Route exact path="/ChicagoArticle2" element={<ChicagoArticle2/>} />
            <Route exact path="/DenverArticle" element={<DenverArticle/>} />
            <Route exact path="/LasVegasArticle" element={<LasVegasArticle/>} />
            <Route exact path="/ParisThingsToDoArticle" element={<ParisThingsToDoArticle/>} />
            <Route exact path="/PhiladelphiaArticle" element={<PhiladelphiaArticle/>} />
            <Route exact path="/PhiladelphiaNeighborhoodRestaurantsArticle" element={<PhiladelphiaNeighborhoodRestaurantsArticle/>} />
            <Route exact path="/bogota/bogotarestaurants" element={<Hotels/>} />
            <Route exact path="/newyorkcity/NYCArtGalleriesArticle" element={<NYCArtGalleriesArticle/>} />
            <Route exact path="/newyorkcity/NYCAYCEBBQArticle" element={<NYCAYCEBBQArticle/>} />
            <Route exact path="/newyorkcity/NYCBobaTeaArticle" element={<NYCBobaTeaArticle/>} />
            <Route exact path="/newyorkcity/NYCBroadwaysArticle" element={<NYCBroadwaysArticle/>} />
            <Route exact path="/newyorkcity/NYCBrunch" element={<NYCBrunch/>} />
            <Route exact path="/newyorkcity/NYCCafes" element={<NYCCafes/>} />
            <Route exact path="/newyorkcity/NYCEventsArticle" element={<NYCEventsArticle/>} />
            <Route exact path="/newyorkcity/NYCHotpotArticle" element={<NYCHotpotArticle/>} />
            <Route exact path="/newyorkcity/NYCLunarNewYearsArticle" element={<NYCLunarNewYearsArticle/>} />
            <Route exact path="/newyorkcity/NYCOmakaseArticle" element={<NYCOmakaseArticle/>} />
            <Route exact path="/newyorkcity/NYCOystersArticle" element={<NYCOystersArticle/>} />
            <Route exact path="/newyorkcity/NYCPhoArticle" element={<NYCPhoArticle/>} />
            <Route exact path="/newyorkcity/NYCPlusPoolArticle" element={<NYCPlusPoolArticle/>} />
            <Route exact path="/newyorkcity/NYCRamenArticle" element={<NYCRamenArticle/>} />
            <Route exact path="/newyorkcity/NYCRooftopBarsArticle" element={<NYCRooftopBarsArticle/>} />
            <Route exact path="/newyorkcity/NYCSpasArticle" element={<NYCSpasArticle/>} />
            <Route exact path="/newyorkcity/NYCSpeakeasiesArticle" element={<NYCSpeakeasiesArticle/>} />
            <Route exact path="/newyorkcity/NYCTour" element={<NYCTour/>} />
            <Route exact path="/newyorkcity/NYCTopAttractionsArticle" element={<NYCTopAttractionsArticle/>} />
            <Route exact path="/newyorkcity/NYCTopBoroughRestaurantsArticle" element={<NYCTopBoroughRestaurantsArticle/>} />
            <Route exact path="/newyorkcity/NYCTopNeighborhoodRestaurantsArticle" element={<NYCTopNeighborhoodRestaurantsArticle/>} />
            <Route exact path="/newyorkcity/NYCTrainStopRestaurantsArticle" element={<NYCTrainStopRestaurantsArticle/>} />
            <Route exact path="/newyorkcity/NYCWineBarArticle" element={<NYCWineBarArticle/>} />
            <Route exact path="/NYCarticle3" element={<NewYorkCityArticle3/>} />
            <Route exact path="/SanFranciscoArticle" element={<SanFranciscoArticle/>} />
            <Route exact path="/goodies" element={<Goodies/>}/>
            <Route exact path="/customItinerary" element={<CustomItinerary/>}/>
            <Route exact path="/itinerary" element={<Itinerary/>}/>
            <Route exact path="/booking" element={<Booking/>}/>
            <Route exact path="/explore" element={<Explore/>}/>
            <Route exact path="/simCards" element={<SimCards/>}/>
            <Route exact path="/laundry" element={<Laundry/>}/>
            <Route exact path="/account" element={<Account/>}/>
            <Route path="/eventDetails" element={<EventDetails/>} />
          </Routes>
        </BrowserRouter>
      </div>)
  }
}

export default App;
