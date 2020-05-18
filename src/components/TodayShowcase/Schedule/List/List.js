import React from "react";
import ListItem from "./ListItem/ListItem";
import "./List.scss";
import { generateID } from "../../../../utils/GenerateID";

export default function List({ schedule, handleDisplayPhotoChange }) {
  return (
    <div className="list">
      {schedule &&
        schedule.map((timeSlot) => (
          <ListItem
            data={timeSlot}
            key={generateID()}
            handleDisplayPhotoChange={handleDisplayPhotoChange}
          />
        ))}
    </div>
  );
}
