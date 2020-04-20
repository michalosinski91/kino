import React from "react";
import "./BoxOffice.scss";
import TicketPurchaseForm from "../../components/TicketPurchaseForm/TicketPurchaseForm";
import TicketInfo from "../../components/TicketInfo/TicketInfo";

export default function BoxOffice() {
  return (
    <div data-testid="boxoffice" className="boxoffice">
      <h2 className="heading heading--secondary">Bilety</h2>
      <img
        className="boxoffice__photo"
        src="https://images.unsplash.com/photo-1564520017660-6fbe48f603fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1041&q=80"
      />
      <div className="boxoffice__container">
        <TicketPurchaseForm />
        <TicketInfo />
      </div>
    </div>
  );
}
