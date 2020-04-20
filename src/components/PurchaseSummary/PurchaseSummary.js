import React from "react";
import "./PurchaseSummary.scss";

export default function PurchaseSummary() {
  return (
    <div className="purchase-summary">
      <div className="purchase-summary__item">
        <p>Name Surname</p>
        <p>E-mail</p>
      </div>
      <div className="purchase-summary__item">
        <p>Film </p>
        <p>01/05/2020 16.00</p>
      </div>
      <div className="purchase-summary__item">
        <p>Bilety Normalne:</p>
        <p>2 x 20.00zł</p>
      </div>
      <div className="purchase-summary__item">
        <p>Bilety Ulgowe:</p>
        <p>1 x 10.00zł</p>
      </div>
      <div className="purchase-summary__item">
        <p>
          <strong>Całkowity Koszt:</strong>
        </p>
        <p>
          <strong>50.00zł</strong>
        </p>
      </div>
    </div>
  );
}
