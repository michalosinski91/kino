import React, { useState } from "react";
import "./TicketPurchaseForm.scss";
import PurchaseSummary from "../PurchaseSummary/PurchaseSummary";

export default function TicketPurchaseForm({
  toggleTicketPurchaseForm,
  handleSubmit,
}) {
  const [filmSelect, setFilmSelect] = useState("test1");
  const [dateSelect, setDateSelect] = useState("test1");
  const [hourSelect, setHourSelect] = useState("test1");
  const [ticketNumber, setTicketNumber] = useState("test1");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <div className="ticket-purchase" data-testid="ticket-purchase">
      <h3 className="heading heading--tertiary">Zakup bilety online</h3>
      <form
        data-testid="purchase-form"
        className="ticket-purchase__form"
        onSubmit={handleSubmit}
      >
        <label>
          Wybierz film:
          <select
            value={filmSelect}
            onChange={({ target }) => setFilmSelect(target.value)}
          >
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Dzień:
          <select
            value={dateSelect}
            onChange={({ target }) => setDateSelect(target.value)}
          >
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Godzina:
          <select
            value={hourSelect}
            onChange={({ target }) => setHourSelect(target.value)}
          >
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Ilość biletów:
          <select
            value={ticketNumber}
            onChange={({ target }) => setTicketNumber(target.value)}
          >
            <option value="test1">Test 1</option>
            <option value="test2">Test 2</option>
            <option value="test3">Test 3</option>
            <option value="test4">Test 4</option>
            <option value="test5">Test 5</option>
          </select>
        </label>
        <label>
          Imię:
          <input
            type="text"
            onChange={({ target }) => setFirstName(target.value)}
          />
        </label>
        <label>
          Nazwisko:
          <input
            type="text"
            onChange={({ target }) => setLastName(target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          Powtórz e-mail:
          <input
            type="email"
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>
        <PurchaseSummary />
        <button
          data-testid="form-submit"
          className="ticket-purchase__button"
          type="submit"
        >
          Przejdź do zapłaty
        </button>
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
