import React from "react";
import "./BoxOffice.scss";
import TicketInfo from "../../components/TicketInfo/TicketInfo";
import PurchaseOnline from "../../components/PurchaseOnline/PurchaseOnline";
import Modal from "../../components/Modal/Modal";

export default function BoxOffice({
  showTicketPurchaseForm,
  toggleTicketPurchaseForm,
  films,
  calendar,
  getCalendar,
}) {
  return (
    <div data-testid="boxoffice" className="boxoffice">
      <h2 className="heading heading--secondary">Bilety</h2>
      <img
        className="boxoffice__photo"
        src="https://images.unsplash.com/photo-1564520017660-6fbe48f603fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1041&q=80"
      />
      <div className="boxoffice__container">
        <PurchaseOnline toggleTicketPurchaseForm={toggleTicketPurchaseForm} />
        <TicketInfo />
      </div>
      {showTicketPurchaseForm ? (
        <Modal
          toggleTicketPurchaseForm={toggleTicketPurchaseForm}
          films={films}
          calendar={calendar}
        />
      ) : null}
    </div>
  );
}
