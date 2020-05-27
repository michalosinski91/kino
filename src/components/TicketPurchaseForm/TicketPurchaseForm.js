import React, { useState, useEffect } from "react";
import "./TicketPurchaseForm.scss";
import SelectDetails from "../SelectDetails/SelectDetails";
import SelectSeats from "../SelectSeats/SelectSeats";
import SelectSummary from "../SelectSummary/SelectSummary";
import calendarData from "../../db/calendar.json";

export default function TicketPurchaseForm({
  toggleTicketPurchaseForm,
  handleSubmit,
  films,
  calendar,
}) {
  const [selectFilm, setSelectFilm] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    if (selectFilm) {
      findAvailableDates(selectFilm);
    }
  }, [selectFilm]);

  useEffect(() => {
    if (selectDate) {
      findAvailableTime(selectDate, selectFilm);
    }
  }, [selectDate]);

  useEffect(() => {
    if (selectTime) {
      getSelectedTimeSlotInfo(selectTime, availableTimes);
    }
  }, [selectTime]);

  /**
   * returns an array of films with only title and id object
   */

  const filmList = films.map((film) => {
    return {
      title: film.title,
      id: film.id,
    };
  });

  /**
   * gets the title of a film, finds information about the film, finds all days when the film is played
   * TODO: move to redux store
   */

  function findAvailableDates(title) {
    const film = films.filter((film) => film.title == title)[0];
    const filmSchedule = calendarData.filter((day) =>
      day.timeSlots.some((slot) => slot.filmID == film.id)
    );
    setAvailableDates(filmSchedule);
  }

  /**
   * gets the date and the film, finds all time slots when the film is played on a given date
   * TODO: move to redux store
   */

  function findAvailableTime(date, title) {
    const film = films.filter((film) => film.title == title)[0];
    const day = availableDates.filter((d) => d.date == date)[0];
    const timeSlotList = day.timeSlots.filter((slot) => slot.filmID == film.id);
    setAvailableTimes(timeSlotList);
  }

  function getSelectedTimeSlotInfo(time, date) {
    const selectedSlot = date.filter((d) => d.time == time)[0];
    setSelectedTimeSlot(selectedSlot);
  }

  return (
    <div className="ticket-purchase" data-testid="ticket-purchase">
      <SelectDetails
        selectFilm={selectFilm}
        setSelectFilm={setSelectFilm}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        selectTime={selectTime}
        setSelectTime={setSelectTime}
        filmList={filmList}
        availableDates={availableDates}
        availableTimes={availableTimes}
      />
      <SelectSeats slotData={selectedTimeSlot} />
      <SelectSummary />
      <div className="ticket-purchase__buttons">
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
      </div>
    </div>
  );
}

/** 
 * TODO: refactoring

  
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
*/
