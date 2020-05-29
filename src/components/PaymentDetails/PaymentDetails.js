import React from "react";
import "./PaymentDetails.scss";
import { CardElement } from "@stripe/react-stripe-js";
export default function PaymentDetails() {
  return (
    <div className="payment-details">
      <CardElement options={{}} />
    </div>
  );
}
