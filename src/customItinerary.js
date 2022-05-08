// import React from "react";

import React, { useState, useEffect } from "react";

async function Payment(payment, setPayment, paymentIntent) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    // var paymentUrl = "http://localhost:3000/payment/" + paymentIntent;
    var paymentUrl = "https://lostmindsbackend.vercel.app/payment/" + paymentIntent;

    var test = await fetch(paymentUrl, requestOptions)
        // var test = await fetch("https://lostmindsbackend.vercel.app/payment/pi_3KwgpaCrXyNi8bG61egfjNLU", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    var paymentStatus = JSON.parse(test)['status'];

    console.log('Payment Status: ' + paymentStatus);

    setPayment([...payment, paymentStatus]);
}

export default function CustomItinerary() {
    const [payment, setPayment] = useState([]);

    var queryParams = new URLSearchParams(window.location.search);
    var payment_intent = queryParams.get("payment_intent");
    var payment_intent_client_secret = queryParams.get("payment_intent_client_secret");

    if (payment_intent == null) {
        console.log('Failed here');
        return (<div>
            <h1> Payment must be made </h1>
        </div>)
    }

    if (payment == null || payment != 'succeeded') {
        Payment(payment, setPayment, payment_intent);
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