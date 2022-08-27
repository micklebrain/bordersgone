import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from './Login'
import Sidebar from './sidebar'
import { useState } from 'react';

import laundryIcon from './images/laundryIcon.png';
import simCardIcon from './images/simCard.png';
import taxiIcon from './images/taxiIcon.png';

function Bars(props) {
  var today = new Date();
  if (today.getHours() < 8) {
    return <div>
      <h2> Bars </h2>
      <li></li>
    </div>
  } else {
    return <div></div>
  }
}

function LunchTime(props) {
  var today = new Date();
  if (today.getHours() > 8 && today.getHours() < 14) {
    return <div>
      <h2> Brunch </h2>
      <li></li>
    </div>
  } else {
    return <div></div>
  }
}

function NightTime(props) {
  var today = new Date();
  if (today.getHours() > 20) {
    return <div>
      <h1>Clubs</h1>
      <li>Mission</li>
      <Button>Buy table $100</Button>
      <li>Slate</li>
      <Button>Buy table $100</Button>
    </div>
  } else {
    return <div></div>
  }
}

function DinnerSpots(props) {
  var today = new Date();
  if (today.getHours() > 19) {
    return <div>
      <h1>Dinner</h1>
      <li>Anytime Kitchen</li>
      <Button>Reserve table with wine bottle - $20</Button>
      <li>Rib No. 7</li>
      <Button>Reserve table with wine  bottle - $20</Button>
    </div>
  } else {
    return <div></div>
  }
}

function Pools() {
  // Check if summertime
  var today = new Date();
  if (today.getHours() < 19) {
    return <div>
      <h1>Pools</h1>
      <li>Swimming pool</li>
    </div>
  } else {
    return <div></div>
  }
}

function Parks() {
  var today = new Date();
  if (today.getHours() < 19) {
    return <div>
      <h1>Parks</h1>
      <li>Bryant Park</li>
      <li>Madison Square Park</li>
    </div>
  } else {
    return <div></div>
  }
}

function Restuarants() {
  return <div>
    <h1>Restuarants</h1>
    <li>Arno</li>
    <Button>Reserve table with wine bottle - $20</Button>
    <li>L'Amico</li>
    <Button>Reserve table with wine bottle - $20</Button>
    <li>Trademark Bar + Kitchen</li>
    <Button>Reserve table with wine bottle - $20</Button>
  </div>
}

// function orderId() {
//   console.log("Order ID: abc123");
//   setButtonText('Payment request sent');
// }

function Movies() {
  var today = new Date();
  const [buttonText, setButtonText] = useState('Buy ticket - $15');

  const details = {
    name: "AMC 34th Street 14 - Nope",
    date: today.toLocaleDateString(),
    description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour. Best seats in middle of theater will be chosen automatically Tickets will be sent to email on account"
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
    textAlign: 'center'
  };

  return <div>
    <h1>Theaters</h1>
    <Link to="/eventDetails" state={details} style={linkStyle}>Nope - AMC 34th Street 14 @6pm</Link>
    <Button onClick={() => { setButtonText('Payment request sent for Order ID: abc123'); }} id='ticketBuy'>{buttonText}</Button>
    <li>AMC Empire 25 - Nope</li>
    <Button>Buy Ticket - $15</Button>
    <li>Rooftop Cinema Club Midtown - Nope</li>
    <Button>Buy Ticket - $15</Button>
  </div>
}

function Racing() {
  return <div>
    <h1>Go Karting</h1>
    <li>Staten Island FunPark</li>
  </div>
}

function Casinos() {
  return <div>
    <h1>Casinos</h1>
    <li>Empire City Casino</li>
    <li>Genting World Casino New York City</li>
  </div>
}

function Areas(area) {
  if (area == "New York City") {
    return <div>
      <h1> Areas </h1>
      <li>Brooklyn</li>
      <li>Long Island</li>
      <li>Manhattan</li>      
      <li>Queens</li>      
    </div>
  } else {
    return <div>
    <h1> Areas </h1>
    <li>Hongdae</li>
    <li>Gangnam</li>
    <li>Itaewon</li>
  </div>
  }
}

function Home() {
  var today = new Date();
  var city = "new york city"

  return (
    <div className="App">
      <Sidebar />

      <Login />
      <label for="cars">What city are you in:</label>

      <select name="cars" id="cars">
        <option value="audi">New York City</option>
        <option value="volvo">Atlanta</option>
        <option value="saab">San Francisco</option>
        <option value="mercedes">Seoul</option>
        <option value="mercedes">Tokyo</option>
      </select>

      <Link to="/newyorkcity">Manhattan - New York City</Link>
      <h1> {today.getHours()}:{today.getMinutes()} </h1>

      <h1>Essentials</h1>
      <div class="grid-container">
        <div class="item2"> <Link to="/simCards"> <img class='icon' src={simCardIcon} alt="Atlanta" /> </Link> <h3>Sim cards</h3> </div>
        <div class="item1"> <Link to="/laundry"> <img class='icon' src={laundryIcon} alt="Atlanta" /> </Link> <h3>Laundry</h3> </div>
        <div class="item1"> <Link to="/taxis"> <img class='icon' src={taxiIcon} alt="Atlanta" /> </Link> <h3>Taxi</h3> </div>
      </div>

      <Areas area="New York City"/>

      <h1>Fun</h1>
      <Bars />
      <LunchTime />
      <Movies />
      <Restuarants />
      <Pools />
      <DinnerSpots />
      <NightTime />
      <Racing />
      <Casinos />
      <Parks />

      <h3>Currency Exchange</h3>
      <h3>Love hotels</h3>
      <h3>Apps</h3>
    </div>
  );
}

export default Home;