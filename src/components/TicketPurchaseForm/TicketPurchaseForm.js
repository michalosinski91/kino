import React from "react";
import "./TicketPurchaseForm.scss";
import PurchaseSummary from "../PurchaseSummary/PurchaseSummary";

export default function TicketPurchaseForm({ toggleTicketPurchaseForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="ticket-purchase" onSubmit={handleSubmit}>
      <h3 className="heading heading--tertiary">Zakup bilety online</h3>
      <form className="ticket-purchase__form">
        <label>
          Wybierz film:
          <select value="test1">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Dzień:
          <select value="test1">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Godzina:
          <select value="test1">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Ilość biletów:
          <select value="test1">
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Imię:
          <input type="text" />
        </label>
        <label>
          Nazwisko:
          <input type="text" />
        </label>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Powtórz e-mail:
          <input type="email" />
        </label>
        <PurchaseSummary />
        <button className="ticket-purchase__button">Przejdź do zapłaty</button>
        <button
          className="ticket-purchase__cancel"
          onClick={toggleTicketPurchaseForm}
        >
          Anuluj zakup
        </button>
      </form>
    </div>
  );
}
