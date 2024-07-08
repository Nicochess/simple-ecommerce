"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./_components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Pa7IPLbsNGcpjyRtIvG46EmHTNtsSZUv3X0L5SYd2nvi7A298avj9fdTGXsHW2PT2nPQUB671lNEVwQb4v6dyjk00z6FWOoka"
);

const Checkout = () => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        amount: 50,
        mode: "payment",
        currency: "usd",
      }}
    >
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
