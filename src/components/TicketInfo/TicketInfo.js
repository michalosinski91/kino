import React from "react";
import "./TicketInfo.scss";

export default function TicketInfo() {
  return (
    <div className="ticket-info">
      <div className="ticket-info__opening">
        <h3 className="heading heading--tertiary">Godziny otwarcia kasy</h3>
        <div className="ticket-info__opening-days">
          <p>poniedziałek-czwartek</p>
          <strong>10.00-21.00</strong>
        </div>
        <div className="ticket-info__opening-days">
          <p>piątek-sobota</p>
          <strong>9.00-22.00</strong>
        </div>
        <div className="ticket-info__opening-days">
          <p>niedziela</p>
          <strong>12.00-22.00</strong>
        </div>
      </div>
      <div className="ticket-info__text">
        <h4>Bilety ulgowe:</h4>
        <p>
          Bilety ulgowe przysługują: uczniom, studentom, emerytom, rencistom,
          żołnierzom, kombatantom, osobom niepełnosprawnym i ich opiekunowi lub
          opiekunce, osobom przebywającym w domach opieki społecznej, zakładach
          opiekuńczych, schroniskach wychowawczych ,osobom bezrobotnym i
          pracownikom kultury. Odbiór biletu ulgowego jest możliwy tylko na
          podstawie ważnego dokumentu upoważniającego do zniżki.
        </p>
        <h4>Zwrot biletów:</h4>
        <p>
          Przypominamy, że zwrócić można bilet wyłącznie kupiony w kasie. Bilety
          kupione on-line nie podlegają wymianie ani zwrotom.
        </p>
        <p>
          1) zwrotu biletów indywidualnych można dokonać najpóźniej na 2 dni
          przed danym Wydarzeniem, na które obowiązują bilety;
        </p>
        <p>
          2) zwrotu biletów grupowych można dokonać najpóźniej na 7 dni przed
          danym Wydarzeniem, na które obowiązują bilety.
        </p>
        <p>
          Zwroty biletów zakupionych w kasie przyjmujemy wraz z paragonem
          fiskalnym.
        </p>
      </div>
    </div>
  );
}
