import React, { useState } from "react";
import "./SelectDetails.scss";
import Select from "../Select/Select";

export default function SelectDetails({
  selectFilm,
  setSelectFilm,
  selectDate,
  setSelectDate,
  selectTime,
  setSelectTime,
  filmList,
  availableDates,
  availableTimes,
}) {
  return (
    <div className="select-details">
      <Select
        key="selectFilm"
        label={!selectFilm ? "Wybierz Film" : selectFilm}
        handleOptionClick={setSelectFilm}
        filmList={filmList}
        disabled={!filmList.length ? true : false}
      />
      <Select
        key="selectDate"
        label={!selectDate ? "Wybierz Datę" : selectDate}
        handleOptionClick={setSelectDate}
        availableDates={availableDates}
        disabled={!availableDates.length ? true : false}
      />
      <Select
        key="selectTime"
        label={!selectTime ? "Wybierz Godzinę" : selectTime}
        handleOptionClick={setSelectTime}
        availableTimes={availableTimes}
        disabled={!availableTimes.length ? true : false}
      />
    </div>
  );
}
