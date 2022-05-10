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

function sendEmail() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("https://lostmindsbackend.vercel.app/sendemail", requestOptions)
    //   fetch("http://localhost:3000/sendemail", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default function CustomItinerary() {
    const [payment, setPayment] = useState([]);

    var queryParams = new URLSearchParams(window.location.search);
    var payment_intent = queryParams.get("payment_intent");
    var payment_intent_client_secret = queryParams.get("payment_intent_client_secret");

    sendEmail();

    // if (payment_intent == null) {
    //     return (<div>
    //         <h1> Payment must be made </h1>
    //     </div>)
    // }

    // if (payment == null || payment != 'succeeded') {
    //     Payment(payment, setPayment, payment_intent);
    //     return (<div>
    //         <h1> Payment must be made </h1>
    //     </div>)
    // } else {
        return (
            <div >
                <h1> Day trip in NYC </h1>
                <ul>
                    <h1>Morning</h1>
                    <h2>Breakfast</h2>
                    <li>7am - Le Pain Quotidien</li>
                    <li>9am - Walk highline</li>
                    <li>11am - Chelsea Market</li>

                    <h1>Afternoon </h1>
                    <h2>Lunch </h2>
                    <li>12pm - Obao</li>
                    <li>2pm - Vessel</li>
                    <li>4pm - Empire State Building</li>

                    <h2>Dinner </h2>
                    <li>6pm - Barn Joo NoMad</li>

                    <h2>Dessert </h2>
                    <li>8pm - Venchi</li>

                    <h1>Nightlife</h1>
                    <h2>Play </h2>
                    <li>9pm Dave and Buster</li>

                    <h2>Drinks - Speakeasy</h2>
                    <li>12am Dear Irving Gramercy</li>
                    <h2>Dance</h2>
                    <li>2am Mission nightclub</li>
                </ul>
            </div>
        );
    // }
}