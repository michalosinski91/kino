import React, { useState, useEffect } from "react";
import "./SelectSeats.scss";

import Seat from "./Seat/Seat";
import Legend from "./Legend/Legend";

export default function SelectSeats({ slotData }) {
  const [seatingGrid, setSeatingGrid] = useState(null);
  const [seatSelection, setSeatSelection] = useState([]);
  const NUMBER_OF_SEATS = 100;

  useEffect(() => {
    createSeatingGrid(slotData);
  }, [slotData]);

  function createSeatingGrid(data) {
    let grid = [];
    for (let i = 0; i < NUMBER_OF_SEATS; i++) {
      if (!data) {
        grid.push(<Seat key={i} label={i + 1} status={"disable"} />);
      } else {
        if (data.seatsAvailable.indexOf(i) == -1) {
          grid.push(<Seat key={i} label={i + 1} status={"taken"} />);
        } else {
          grid.push(
            <Seat
              key={i}
              label={i + 1}
              status={"free"}
              handleSeatSelect={handleSeatSelect}
            />
          );
        }
      }
    }
    setSeatingGrid(grid);
  }

  function handleSeatSelect(seat) {
    let position = seatSelection.indexOf(seat);
    let selection = seatSelection;
    console.log(selection, position, seat);
    if (position == -1) {
      selection.push(seat);
      setSeatSelection(selection);
    } else {
      selection.splice(position, 1);
      setSeatSelection(selection);
    }
  }

  return (
    <div className="select-seats">
      <div className="select-seats__cinema-container">
        <div className="select-seats__screen"></div>
        <div className="select-seats__seating-area">{seatingGrid}</div>
      </div>
      <Legend />
    </div>
  );
}
