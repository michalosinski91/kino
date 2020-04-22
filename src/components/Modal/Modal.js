import React from "react";
import "./Modal.scss";
import TicketPurchaseForm from "../TicketPurchaseForm/TicketPurchaseForm";

export default function Modal({ toggleTicketPurchaseForm }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close" onClick={toggleTicketPurchaseForm}>
          <i className="fas fa-times fa-2x"></i>
        </div>
        <TicketPurchaseForm
          toggleTicketPurchaseForm={toggleTicketPurchaseForm}
        />
      </div>
    </div>
  );
}
