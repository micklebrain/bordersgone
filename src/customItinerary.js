// import React from "react";

import React, { useState, useEffect } from "react";

async function Payment(payment, setPayment) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    var test = await fetch("https://lostmindsbackend.vercel.app/payment/pi_3KwgpaCrXyNi8bG61egfjNLU", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));

    var paymentStatus = JSON.parse(test)['status'];

    setPayment([...payment, paymentStatus]);
}

export default function CustomItinerary() {
    const [payment, setPayment] = useState([]);

    var queryParams = new URLSearchParams(window.location.search);
    var payment_intent = queryParams.get("payment_intent");
    var payment_intent_client_secret = queryParams.get("payment_intent_client_secret");

    if (payment_intent == null || payment != 'succeeded') {
        Payment(payment, setPayment);
        return (<div>
            <h1> Payment must be made </h1>
        </div>)
    } else {
        return (
            <div >
                <h1> Here is your customer itinerary </h1>
                <ul>
                    <li> Eat </li>
                    <li> Dance </li>
                    <li> Play </li>
                </ul>
            </div>
        );
    }
}