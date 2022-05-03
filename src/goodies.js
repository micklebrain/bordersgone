import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51Kr8zwCrXyNi8bG68Az1KpmLo8NDbgspFSPNztIrOnVfQ9dQhgXKJXYhqYwlpvfXpO3ddv4PXfRh2eliaID06bHg00Ghl8Uy5P");
const stripePublishableKey = process.env.STRIPE_PK
const stripePromise = loadStripe(stripePublishableKey);
// const stripePromise = loadStripe("pk_test_51Kr8zwCrXyNi8bG68Az1KpmLo8NDbgspFSPNztIrOnVfQ9dQhgXKJXYhqYwlpvfXpO3ddv4PXfRh2eliaID06bHg00Ghl8Uy5P");

export default function Goodies() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://lostmindsbackend.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}