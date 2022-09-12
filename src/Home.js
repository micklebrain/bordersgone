import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from './Login'
import Sidebar from './sidebar'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticlePreview from "./ArticlePreview";
import laundryIcon from './images/laundryIcon.png';
import simCardIcon from './images/simCard.png';
import taxiIcon from './images/taxiIcon.png';
import empireStateView from './images/EmpireStateView.jpg';

function Bars(props) {
  var today = new Date();
  if (today.getHours() < 8) {
    return <div>
      <h1> Bars </h1>
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
  var today = new Date();

  const details = {
    name: "AMC 34th Street 14 - Nope",
    date: today.toLocaleDateString(),
    description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour. Best seats in middle of theater will be chosen automatically Tickets will be sent to email on account"
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  return <div>
    <h1>Get reservations at popular restuarants</h1>
    <Link to="/eventDetails" state={details} style={linkStyle}>Table at Hags @ 8pm for 2 people</Link>
    <Button onClick={() => {
      window.alert('Payment request sent for Order ID: abc123. Check on your order status under orders in your account profile');
      sendOrder()
    }} class='purchaseButton' id='ticketBuy'>Grab reservation - $5</Button>
    <Link to="/eventDetails" state={details} style={linkStyle}>Table at 4 Charles Prime Rib @ 8pm for 2 people</Link>
    <Button onClick={() => {
      window.alert('Payment request sent for Order ID: abc123. Check on your order status under orders in your account profile');
      sendOrder()
    }} id='ticketBuy'>Grab reservation - $5</Button>
    <Link to="/eventDetails" state={details} style={linkStyle}>Table at Via Carota @ 8pm for 2 people</Link>
    <Button onClick={() => {
      window.alert('Payment request sent for Order ID: abc123. Check on your order status under orders in your account profile');
      sendOrder()
    }} id='ticketBuy'>Grab reservation - $5</Button>
  </div>
}

function sendOrder(email, amount, venmo) {
  // const email = useSelector((state) => state.events.email)
  if (email == null || email == '') {
    window.alert('Must login');
  } else {
    fetch("https://lostmindsbackend.vercel.app/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        venmo: venmo,
        amount: amount,
        orderId: 'abc123',
        status: 'pending'
      }),
    }).then((res) => res.json())
    window.alert('Payment request sent for Order ID: abc123. Check on your order status under orders in your account profile');
  }
}

function Movies() {
  var today = new Date();
  const [buttonText, setButtonText] = useState('Buy ticket - $15');

  const details = {
    name: "AMC 34th Street 14 for 2 people - Nope",
    date: today.toLocaleDateString(),
    description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour. Best seats in middle of theater will be chosen automatically Tickets will be sent to email on account"
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  return <div>
    <h1>Catch a movie</h1>
    <Link to="/eventDetails" state={details} style={linkStyle}>Random movie - AMC 34th Street 14 for 2 people today</Link>
    <Button onClick={() => {
      setButtonText('Payment request sent for Order ID: abc123');
      sendOrder()
    }} id='ticketBuy'>{buttonText}</Button>
    <Link to="/eventDetails" state={details} style={linkStyle}>Nope - AMC Empire 25 for 2 people @10pm</Link>
    <Button onClick={() => {
      setButtonText('Payment request sent for Order ID: abc123');
      sendOrder()
    }} id='ticketBuy'>Buy Ticket - $15</Button>
    <Link to="/eventDetails" state={details} style={linkStyle}>Nope - Regal Union Square for 2 people @10pm</Link>
    <Button onClick={() => {
      setButtonText('Payment request sent for Order ID: abc123');
      sendOrder()
    }} id='ticketBuy'>Buy Ticket - $15</Button>
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

function Billards() {
  return <div>
    <h1>Shoot some billards</h1>
    <li>Billards empire</li>
    <Button>Reserve billards table - $20</Button>
    <li>Billards connect</li>
    <Button>Reserve billards table - $20</Button>
  </div>
}

function Areas(props) {
  var area = "New York City"
  if (props.cityName == "New York City") {
    return <div>
      <h1> Explore </h1>
      <div class="grid-container-area">
        <div class="item2"> <h3>Brooklyn</h3> </div>
        <div class="item2"> <h3>Bronx</h3> </div>
        <div class="item1"> <h3>Long Island</h3> </div>
        <div class="item1"> <h3>Manhattan</h3> </div>
        <div class="item1"> <h3>Queens</h3> </div>
      </div>
    </div>
  } else if (props.cityName == "Seoul") {
    return <div>
      <h1> Explore </h1>
      <div class="grid-container-area">
        <div class="item2"> <h3>Hongdae</h3> </div>
        <div class="item1"> <h3>Gangnam</h3> </div>
        <div class="item1"> <h3>Itaewon</h3> </div>
      </div>
    </div>
  } else {
    return <div>
      <h1> Explore </h1>
      <div class="grid-container-area">
        <div class="item2"> <h3>District 1</h3> </div>
        <div class="item1"> <h3>District 2</h3> </div>
        <div class="item1"> <h3>District 3</h3> </div>
      </div>
    </div>
  }
}

function TimeOfDay() {
  var today = new Date();
  var hours = today.getHours();
  var city = "New York City"
  if (hours < 12) {
    return <div>
      <h1>Good Morning</h1>
    </div>
  } else if (hours > 12 && hours < 20) {
    return <div>
      <h1>Good afternoon</h1>
    </div>
  } else {
    return <div>
      <h1>Nighttime</h1>
    </div>
  }
}

function formatHoursTo12(date) {
  return date.getHours() % 12 || 12;
}

function EmpireStateBuilding(props) {
  var today = new Date();

  const details = {
    name: "AMC 34th Street 14 - Nope",
    date: today.toLocaleDateString(),
    description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour. Best seats in middle of theater will be chosen automatically Tickets will be sent to email on account"
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  return <div>
    <h1>Get tickets to Empire State Building lookout</h1>
    <Link to="/eventDetails" state={details} style={linkStyle}>1 ticket to Empire State Building lookout. The next available time today after 2 hours will be automatically assigned.</Link>
    <img src={empireStateView} alt="Atlanta" />
    <Button onClick={() => {
      sendOrder(props.email, 55, 'micklebrain')
    }} class='purchaseButton' id='ticketBuy'>Reserve tickets - $55</Button>
  </div>
}

// function orderId() {
//   console.log("Order ID: abc123");
//   setButtonText('Payment request sent');
// }

const Home = (props) => {
  var today = new Date();

  var city = "New York City"
  const [cityName, setCityName] = useState('New York City');
  const email = useSelector((state) => state.events.email)

  return (
    <div className="App">
      <Sidebar />

      <Login />

      {/* <label for="cars">What city are you in:</label>

      <select name="cars" id="cars">
        <option value="audi">Choose a city</option>
        <option value="audi">New York City</option>
        <option value="volvo">Atlanta</option>
        <option value="saab">San Francisco</option>
        <option value="mercedes">Seoul</option>
        <option value="mercedes">Tokyo</option>
      </select> */}

      <Button onClick={() => { setCityName('Ho Chi Minh') }}>Ho Chi Minh</Button>
      <Button onClick={() => { setCityName('New York City') }}>New York City</Button>
      <Button onClick={() => { setCityName('Seoul') }}>Seoul</Button>

      <Link to="/newyorkcity" class='cityTitle'> {cityName} </Link>
      <TimeOfDay />

      <Areas cityName={cityName} />

      {/* <LunchTime /> */}
      <EmpireStateBuilding email={email} />
      <Restuarants />
      <Movies />

      <ArticlePreview />

      <h1>Essentials</h1>
      <div class="grid-container-essentials">
        <div class="item2"> <Link to="/simCards"> <img class='icon' src={simCardIcon} alt="Atlanta" /> </Link> <h3>Sim cards</h3> </div>
        <div class="item1"> <Link to="/taxis"> <img class='icon' src={taxiIcon} alt="Atlanta" /> </Link> <h3>Transportation</h3> </div>
        <div class="item1"> <Link to="/laundry"> <img class='icon' src={laundryIcon} alt="Atlanta" /> </Link> <h3>Laundry</h3> </div>
        <div class="item1"> <Link to="/internationalAirports"> <img class='icon' src={laundryIcon} alt="Atlanta" /> </Link> <h3>International Airports</h3> </div>
      </div>

      {/* <Bars />
      <Billards /> 
      <Pools />
      <DinnerSpots />
      <NightTime />
      <Racing />
      <Casinos />
      <Parks />

      <h3>Currency Exchange</h3>
      <h3>Love hotels</h3>
      <h3>Apps</h3> */}

      <a href="https://www.youtube.com/channel/UCnHk9dMwgufCYW2SVo2MCog" target="_blank">Youtube Channel</a>
      <a href="https://www.tiktok.com/@bordersgone?lang=en" target="_blank">Tiktok Channel</a>
    </div>
  );
}

export default Home;