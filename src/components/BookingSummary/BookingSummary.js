import React from "react";
import "./BookingSummary.scss";
import { formatMoney } from "../../utils/MoneyFormat";
import BookingSummaryItem from "./BookingSummaryItem/BookingSummaryItem";

export default function BookingSummary({
  selectFilm,
  selectDate,
  selectTime,
  seatSelection,
  firstName,
  lastName,
  email,
  contactNumber,
  acceptTerms,
  acceptMarketing,
  totalCost,
}) {
  return (
    <div className="booking-summary">
      <div className="booking-summary__section">
        <h3 className="heading heading--tertiary">Twoje dane</h3>
        <BookingSummaryItem
          label="Imię i Nazwisko"
          data={`${firstName} ${lastName}`}
        />
        <BookingSummaryItem label="Email" data={email} />
        <BookingSummaryItem label="Telefon" data={contactNumber} />
        <BookingSummaryItem
          label="Akceptuję Regulamin"
          data={acceptTerms ? "Tak" : "Nie"}
        />
        <BookingSummaryItem
          label="Zgoda Maketingowa"
          data={acceptMarketing ? "Tak" : "Nie"}
        />
      </div>
      <div className="booking-summary__section">
        <h3 className="heading heading--tertiary">Szczegóły zakupu</h3>
        <BookingSummaryItem label="Film" data={selectFilm} />
        <BookingSummaryItem
          label="Data i Godzina"
          data={`${selectDate}, godzina ${selectTime}`}
        />
        <BookingSummaryItem
          label="Ilość Biletów"
          data={`${seatSelection.length}`}
        />
        <BookingSummaryItem label="Miejsca" data={`${seatSelection}`} />
        <BookingSummaryItem
          label="Całkowity koszt"
          data={`${formatMoney(totalCost)}`}
        />
      </div>
    </div>
  );
}
