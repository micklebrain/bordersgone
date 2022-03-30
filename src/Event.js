import React from "react";

import './Event.css'

class Event extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            day: props.day,
            month: props.month,
            name: props.name,
            time: props.time,
            location: props.location,
            location2: props.location2
        }
    }

    render() {
        return (
            <li class='event-li'>
                <div class='event-outer'>
                    <div class='event'>
                        <div class='event-date'>
                            <div>
                                <div class="event-date-day">{this.state.day}</div>
                                <div class="event-date-month">{this.state.month}</div>
                            </div>
                        </div>
                        <div class='event-main'>
                            <div class="event-main-title" aria-level="3" role="heading">{this.state.name}</div>
                            <div class="event-details">
                                <div class="event-details-date">{this.state.time}</div>
                                <div class="event-details-location">{this.state.location}</div>
                                <div class="event-details-location-2">{this.state.location2}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)
    }
}

export default Event