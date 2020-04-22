import React from "react";
import "./PurchaseOnline.scss";

export default function PurchaseOnline({ toggleTicketPurchaseForm }) {
  return (
    <div className="purchase-online">
      <h3 className="heading heading--tertiary">Kup bilety przez internet</h3>
      <button
        className="purchase-online__button"
        onClick={toggleTicketPurchaseForm}
      >
        Rozpocznij zakup
      </button>
    </div>
  );
}
