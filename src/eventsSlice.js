import { createSlice } from '@reduxjs/toolkit'

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    email: "",
  },
  reducers: {
    addEvent: (state, action) => {
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