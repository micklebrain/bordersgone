// import React from "react";

import React, { useState, useEffect } from "react";

async function Payment(payment, setPayment, paymentIntent) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    var paymentUrl = "https://lostmindsbackend.vercel.app/payment/" + paymentIntent;
    // var paymentUrl = "http://localhost:3000/payment/" + paymentIntent;

    var test = await fetch(paymentUrl, requestOptions)
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
                <h1> Day trip in NYC </h1>
                <ul>
                    <h1>Morning</h1>
                    <h2>Breakfast</h2>
                    <li>7:00 am - Le Pain Quotidien</li>
                    <li>9:00 am - Walk highline</li>
                    <li>11:00 am - Chelsea Market</li>

                    <h1>Afternoon </h1>
                    <h2>Lunch </h2>
                    <li>12:00 pm - Obao</li>
                    <li>2:00 pm - Vessel</li>
                    <li>4:00 pm - Empire State Building</li>

                    <h1>Nightlife</h1>
                    <h2>Dinner </h2>
                    <li>6:00 pm - Barn Joo NoMad</li>

                    <h2>Dessert </h2>
                    <li>8:00 pm - Venchi</li>

                    <h2>Play </h2>
                    <li>9:00 pm Dave and Buster</li>

                    <h2>Drinks - Speakeasy</h2>
                    <li>10:00 pm Dear Irving Gramercy</li>
                    <h2>Dance</h2>
                    <li>12:00 pm Mission nightclub</li>
                </ul>
            </div>
        );
    }
}