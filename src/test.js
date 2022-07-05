import React, { useState } from 'react';

function Test() {
  const [itinerary, setItinerary] = useState([]);
  const [count , setCount] = useState(1);
  const [events , setEvents] = useState([]);

  const Dates = () => {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    var dates = []
    while (today <= nextweek) {
      console.log(today);
      console.log(today.toLocaleString('default', { month: 'long' }));
      console.log(today.getDate());
      dates.push(<div>
        <h1> {today.toLocaleString('default', { month: 'long' })} {today.getDate()} </h1>        
      </div>)
      events.forEach(evt => {
        if (evt.date.getDate() == today.getDate()) {
          dates.push(<h2>{evt.name}</h2>);
        }
      })
      let newDate = today.setDate(today.getDate() + 1);
      today = new Date(newDate);
    }
    return dates
  }

  const addActivity = (param) => {
    setCount(count+1);
    setEvents(arr => [...arr, param]);
  };

  return (
    <div>      
      <button onClick={() => addActivity({name: "Event 2", date: new Date('July 2, 2022 03:24:00')})}>Add Event 2</button>
      <button onClick={() => addActivity({name: "Event 3", date: new Date('July 4, 2022 03:24:00')})}>Add Event 3</button>
      <button onClick={() => addActivity({name: "Event 4", date: new Date('July 6, 2022 03:24:00')})}>Add Event 4</button>
      <h1>Home - Ritz Carlton</h1>
      <Dates></Dates>
      {itinerary.map(e =>
        <div>{e}</div>
      )}
    </div>
  );
}

export default Test