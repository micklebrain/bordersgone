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
import manhattan from './images/manhattan.png';
import empireStateView from './images/EmpireStateView.jpg';
import summitOneVanderbilt from './images/SummitOneVanderbilt.jpeg';
import hopOnHopOff from './images/hopOnHopOff.jpeg';
import Modal from "./Modal";
import useModal from './useModal';
// import Modal from 'react-bootstrap/Modal';

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

const handleSubmit = (e) => {
  e.preventDefault();
  sendOrder(e.target.email.value, 55, e.target.username.value);
}

function EmpireStateBuilding(props) {
  var today = new Date();

  const details = {
    name: "The Empire State Building",
    date: today.toLocaleDateString(),
    description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from \"Empire State\", the nickname of the state of New York. The next available time after 2 hours will be automatically assigned."
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  const [hidden, setHidden] = useState(true);

  return <div>
    <div class='ticketTitle'>The Empire State Building Observation Deck</div>
    <img src={empireStateView} alt="Atlanta" class='sellingImage' />
    <div class='description'>Step onto New York’s most famous open-air observatory. Take advantage of 360° views & see all of NYC including the Brooklyn Bridge, Central Park, the Statue of Liberty and so much more.</div>
    <Link to="/eventDetails" state={details} style={linkStyle}>Details</Link>
    <div class='description'>1 ticket: $55</div>
    {/* <button id='purchaseTicketButton' class="purchaseButton" onClick={() => {
      if (props.email == null || props.email == '') {
        window.alert('Please login');
      } else {
        sendOrder(props.email, 55, 'micklebrain')
      }
    }}>Reserve</button> */}

  </div>
}

function SummitOneVanderbilt(props) {
  var today = new Date();

  const details = {
    name: "Summit One Vanderbilt",
    date: today.toLocaleDateString(),
    description: "General admission to New York’s most transformational experience."
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  const [hidden, setHidden] = useState(true);

  return <div>
    <div class='ticketTitle'>Summit One Vanderbilt NYC observation deck</div>
    <img src={summitOneVanderbilt} alt="Atlanta" class='sellingImage' />
    <div class='description'>Your experience at SUMMIT is unique to you: challenging, inspiring, thrilling. We invite you to extend the horizon of your imagination, and reconsider what is possible.</div>
    <Link to="/eventDetails" state={details} style={linkStyle}>Details</Link>
    <div class='description'>1 ticket: $65</div>

    {/* <button id='purchaseTicketButton' class="purchaseButton" onClick={() => {
      if (props.email == null || props.email == '') {
        window.alert('Please login');
      } else {
        sendOrder(props.email, 55, 'micklebrain')
      }
    }}>Reserve</button> */}

  </div>
}

function KingPowerMahanakhon(props) {
  var today = new Date();

  const details = {
    name: "King Power Mahanakhon",
    date: today.toLocaleDateString(),
    description: "General admission to New York’s most transformational experience."
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  const [hidden, setHidden] = useState(true);

  return <div>
    <div class='ticketTitle'>King Power Mahanakhon Skywalk</div>
    <img src={summitOneVanderbilt} alt="Atlanta" class='sellingImage' />
    <div class='description'>Your experience at SUMMIT is unique to you: challenging, inspiring, thrilling. We invite you to extend the horizon of your imagination, and reconsider what is possible.</div>
    <Link to="/eventDetails" state={details} style={linkStyle}>Details</Link>
    <div class='description'>1 ticket: $40</div>
  </div>
}

function BusTours(props) {
  var today = new Date();

  const details = {
    name: "Double decker city bus tour",
    date: today.toLocaleDateString(),
    description: "Bus Tours."
  }

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    textAlign: 'center'
  };

  const [hidden, setHidden] = useState(true);

  return <div>
    <div class='ticketTitle'>Double decker city bus tour</div>
    <img src={hopOnHopOff} alt="Atlanta" class='sellingImage' />
    <div class='description'>In simple terms, hop-on, hop-off means you can jump on and off our New York bus tour at any of our designated stops, as many times as you wish.</div>
    <Link to="/eventDetails" state={details} style={linkStyle}>Details</Link>
    <div class='description'>1 ticket: $60</div>
  </div>
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const Concept = (props) => {
  var today = new Date();

  var city = "New York City"
  const [cityName, setCityName] = useState('New York City');
  const email = useSelector((state) => state.events.email);

  const { isShowing, toggle } = useModal();

  let purchaseOption;
  if (email) {
    purchaseOption = <div>
      <button id='purchaseTicketButton' class="purchaseButton" onClick={() => {
        sendOrder(props.email, 55, 'micklebrain')
      }}>Reserve</button>
    </div>
  } else {
    purchaseOption = <div>
      <button className="submitButton" onClick={toggle}>Reserve</button>
    </div>
    // <div class="orderForm">
    //   <form onSubmit={e => { handleSubmit(e) }}>
    //     <label>Email: </label>
    //     <br />
    //     <input
    //       name='email'
    //       type='email'
    //       required
    //     />
    //     <br />
    //     <label>Venmo \ Cashapp username:</label>
    //     <br />
    //     <input
    //       name='username'
    //       type='text'
    //       required
    //     />
    //     <br />
    //     <input
    //       className='submitButton'
    //       type='submit'
    //       value='Reserve'
    //     />       
    //   </form>
    // </div>

  }

  var NYC = <div>
    <EmpireStateBuilding email={email} />
    {purchaseOption}
    <SummitOneVanderbilt email={email} />
    {purchaseOption}
    <BusTours email={email} />
    {purchaseOption}
    <ArticlePreview />
  </div>

  var bangkok = <div> <KingPowerMahanakhon /> {purchaseOption} </div>

  const [currentCity, setCurrentCity] = useState(NYC);

  return (
    <div className="App">

      {/* <Sidebar /> */}

      {/* <label for="cars">What city are you in:</label>

      <select name="cars" id="cars">
        <option value="audi">Choose a city</option>
        <option value="audi">New York City</option>
        <option value="volvo">Atlanta</option>
        <option value="saab">San Francisco</option>
        <option value="mercedes">Seoul</option>
        <option value="mercedes">Tokyo</option>
      </select> */}

      {/* <Button onClick={() => { setCityName('Ho Chi Minh') }}>Ho Chi Minh</Button>
      <Button onClick={() => { setCityName('New York City') }}>New York City</Button>
      <Button onClick={() => { setCityName('Seoul') }}>Seoul</Button>*/}

      <Link to="/newyorkcity" class='cityTitle'> {cityName} </Link>


      <Modal
        isShowing={isShowing}
        hide={toggle}
      />

      {/* <h1>Essentials</h1>
      <div class="grid-container-essentials">
        <div class="item2"> <Link to="/simCards"> <img class='icon' src={simCardIcon} alt="Atlanta" /> </Link> <h3>Sim cards</h3> </div>
        <div class="item1"> <Link to="/taxis"> <img class='icon' src={taxiIcon} alt="Atlanta" /> </Link> <h3>Transportation</h3> </div>
        <div class="item1"> <Link to="/laundry"> <img class='icon' src={laundryIcon} alt="Atlanta" /> </Link> <h3>Laundry</h3> </div>
        <div class="item1"> <Link to="/internationalAirports"> <img class='icon' src={laundryIcon} alt="Atlanta" /> </Link> <h3>International Airports</h3> </div>
      </div> */}

      <div class="grid-container-essentials">
        <div class="item2"> <Link to="/simCards"> <img class='icon' src={simCardIcon} alt="Atlanta" /> </Link> <h3>Brooklyn</h3> </div>
        <div class="item1"> <Link to="/taxis"> <img class='icon' src={manhattan} alt="Atlanta" /> </Link> <h3>Manhattan</h3> </div>
      </div>

      <div class="grid-container-essentials">
        <div class="item2"> <Link to="/simCards"> <img class='icon' src={simCardIcon} alt="Atlanta" /> </Link> <h3>Dumbo</h3> </div>
        <div class="item1"> <Link to="/taxis"> <img class='icon' src={taxiIcon} alt="Atlanta" /> </Link> <h3>Flatbush</h3> </div>
      </div>

      {/* <div>Check in: </div>
      <div>Check out: </div> */}

      {currentCity}

      {/* 
      <TimeOfDay /> 
      <Areas cityName={cityName} /> */}
      {/* <LunchTime /> */}
      {/* <Restuarants />
      <Movies />*/}

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

      <Login />

      <button class="cityName" onClick={() => { setCityName('Tokyo'); setCurrentCity(NYC); }}>Tokyo</button>
      <button class="cityName" onClick={() => { setCityName('New York City'); setCurrentCity(NYC); }}>New York</button>
      <button class="cityName" onClick={() => { setCityName('Bangkok'); setCurrentCity(bangkok); }}>Bangkok</button>

      <a href="https://www.youtube.com/channel/UCnHk9dMwgufCYW2SVo2MCog" target="_blank">Youtube Channel</a>
      <a href="https://www.tiktok.com/@bordersgone?lang=en" target="_blank">Tiktok Channel</a>
    </div>
  );
}

export default Concept;