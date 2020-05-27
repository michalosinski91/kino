import React from "react";
import "./Modal.scss";
import TicketPurchaseForm from "../TicketPurchaseForm/TicketPurchaseForm";

export default function Modal({ toggleTicketPurchaseForm, films, calendar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal" data-testid="modal">
      <div className="modal__content">
        <div className="modal__close" onClick={toggleTicketPurchaseForm}>
          <i className="fas fa-times fa-2x"></i>
        </div>
        <TicketPurchaseForm
          toggleTicketPurchaseForm={toggleTicketPurchaseForm}
          handleSubmit={handleSubmit}
          films={films}
          calendar={calendar}
        />
      </div>
    </div>
  );
}
