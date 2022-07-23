import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from './Login'
import Sidebar from './sidebar'

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
      <li>Slate</li>
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
      <li>Rib No. 7</li>
    </div>
  } else {
    return <div></div>
  }
}

function Pools() {
  // Check if summertime
  return <div>
    <h1>Pools</h1>
    <li>Swimming pool</li>
  </div>
}

function Parks() {
  return <div>
    <h1>Parks</h1>
    <li>Bryant Park</li>
    <li>Madison Square Park</li>
  </div>
}

function Restuarants() {
  return <div>
    <h1>Restuarants</h1>
    <li>Arno</li>
    <Button>Book Reservation</Button>
    <li>L'Amico</li>
    <Button>Book Reservation</Button>
    <li>Trademark Bar + Kitchen</li>
    <Button>Book Reservation</Button>
  </div>
}

function Movies() {

  var today = new Date();

  const details = {
    name: "AMC 34th Street 14 - Nope",
    date: today.toLocaleDateString(),
    description: "Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour. Tickets will be sent to email on account"
  }

  return <div>
    <h1>Theaters</h1>

    <Link to="/eventDetails" state={details}>AMC 34th Street 14 - Nope</Link>
    <Button>Buy Ticket - $15</Button>
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

function Home() {

  var today = new Date();

  return (
    <div className="App">
      <Sidebar />
      <h1>New York City - Manhattan</h1>
      <h1> {today.getHours()}:{today.getMinutes()} </h1>

      <Bars />
      <LunchTime />
      <Movies />
      <Pools />
      <DinnerSpots />
      <NightTime />
      <Racing />
      <Casinos />
      <Parks />
      <Restuarants />

      <Login />
    </div>
  );
}

export default Home;