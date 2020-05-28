import React, { useState, useEffect } from "react";
import "./TicketPurchaseForm.scss";
import StageIndicator from "../StageIndicator/StageIndicator";
import SelectDetails from "../SelectDetails/SelectDetails";
import SelectSeats from "../SelectSeats/SelectSeats";
import calendarData from "../../db/calendar.json";
import CustomerDetails from "../CustomerDetails/CustomerDetails";

export default function TicketPurchaseForm({
  toggleTicketPurchaseForm,
  handleSubmit,
  films,
  calendar,
}) {
  //UI
  const [activeTab, setActiveTab] = useState("customerInfo");
  const [infoValid, setInfoValid] = useState(false);
  // Film Selection
  const [selectFilm, setSelectFilm] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  //Seat selection
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [seatSelection, setSeatSelection] = useState([]);
  //Contact Details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);

  useEffect(() => {
    if (selectFilm) {
      setInfoValid(false);
      setSelectDate("");
      setSelectTime("");
      findAvailableDates(selectFilm);
    }
  }, [selectFilm]);

  useEffect(() => {
    if (selectDate) {
      setInfoValid(false);
      setSelectTime("");
      findAvailableTime(selectDate, selectFilm);
    }
  }, [selectDate]);

  useEffect(() => {
    if (selectTime) {
      getSelectedTimeSlotInfo(selectTime, availableTimes);
    }
    if (selectFilm && selectDate && selectTime) {
      setInfoValid(true);
    }
  }, [selectTime]);

  useEffect(() => {
    checkFormValid();
  }, [firstName, lastName, email, contactNumber, acceptTerms]);

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

  function handleSeatSelect(seat) {
    let position = seatSelection.indexOf(seat);
    let selection = seatSelection;
    if (position == -1) {
      selection.push(seat);
      setSeatSelection(selection);
      checkSeatSelectionValid();
    } else {
      selection.splice(position, 1);
      setSeatSelection(selection);
      checkSeatSelectionValid();
    }
  }

  function checkSeatSelectionValid() {
    if (seatSelection.length > 0) {
      setInfoValid(true);
    } else {
      setInfoValid(false);
    }
  }
  /**
   * TODO: ADD FORM VALIDATION
   */
  function handleFormInput(field, input) {
    if (field == "firstName") {
      setFirstName(input);
    }
    if (field == "lastName") {
      setLastName(input);
    }
    if (field == "email") {
      setEmail(input);
    }
    if (field == "contactNumber") {
      setContactNumber(input);
    }
    if (field == "acceptMarketing") {
      setAcceptMarketing(!acceptMarketing);
    }
    if (field == "acceptTerms") {
      setAcceptTerms(!acceptTerms);
    }
  }

  function checkFormValid() {
    if (
      firstName.length &&
      lastName.length &&
      email.length &&
      contactNumber.length &&
      acceptTerms
    ) {
      setInfoValid(true);
    } else {
      setInfoValid(false);
    }
  }

  const tabList = [
    "selectDetails",
    "selectSeats",
    "customerInfo",
    "paymentDetails",
    "purchaseSummary",
  ];

  function handleNextStage() {
    if (activeTab == "selectDetails") {
      setActiveTab("selectSeats");
      setInfoValid(false);
    }
    if (activeTab == "selectSeats") {
      setActiveTab("customerInfo");
      setInfoValid(false);
    }
    if (activeTab == "customerInfo") {
      setActiveTab("paymentDetails");
      setInfoValid(false);
    }
    if (activeTab == "paymentDetails") {
      setActiveTab("purchaseSummary");
      setInfoValid(false);
    }
    if (activeTab == "purchaseSummary") {
      console.log("end");
    }
  }

  return (
    <div className="ticket-purchase" data-testid="ticket-purchase">
      <StageIndicator activeTab={activeTab} />
      <div className="ticket-purchase__main">
        {activeTab == "selectDetails" && (
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
        )}
        {activeTab == "selectSeats" && (
          <SelectSeats
            slotData={selectedTimeSlot}
            handleSeatSelect={handleSeatSelect}
          />
        )}

        {activeTab == "customerInfo" && (
          <CustomerDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            contactNumber={contactNumber}
            acceptTerms={acceptTerms}
            acceptMarketing={acceptMarketing}
            handleFormInput={handleFormInput}
          />
        )}
        {activeTab == "paymentDetails" && <div>Payment</div>}
        {activeTab == "purchaseSummary" && <div>Summary</div>}
      </div>
      <div className="ticket-purchase__buttons">
        {!infoValid ? (
          <button
            data-testid="button-next"
            className="ticket-purchase__button ticket-purchase__button--disabled"
            disabled
          >
            Przejdź Dalej
          </button>
        ) : (
          <button
            data-testid="button-next-disabled"
            className="ticket-purchase__button"
            onClick={handleNextStage}
          >
            Przejdź Dalej
          </button>
        )}
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
