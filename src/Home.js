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
    <li>L'Amico</li>
    <li>Trademark Bar + Kitchen</li>    
  </div>
}

function Movies() {
  return <div>
    <h1>Theaters</h1>
    <li>AMC 34th Street 14</li>
    <li>AMC Empire 25</li>    
    <li>Rooftop Cinema Club Midtown</li>    
  </div>
}

function Home() {

  var today = new Date();

  return (
    <div className="App">
      <Sidebar />
      <h1> Location: New York City - Manhattan</h1>
      <h1> {today.getHours()}:{today.getMinutes()} </h1>

      <Bars/>
      <LunchTime/>      
      <Restuarants/>
      <Movies/>
      <Parks/>
      <DinnerSpots />
      <NightTime />      

      <Login />
    </div>
  );
}

export default Home;