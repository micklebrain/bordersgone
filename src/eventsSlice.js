import { createSlice } from '@reduxjs/toolkit'

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    email: "",
  },
  reducers: {
    addEvent: (state, action) => {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(action.payload);      

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,        
        redirect: 'follow'
      };

      fetch("https://lostmindsbackend.vercel.app/addevent", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      var tmp = state.events
      tmp.push(action.payload)
      state.events = tmp
    },
    defineEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEvent, defineEmail } = eventsSlice.actions

export default eventsSlice.reducer