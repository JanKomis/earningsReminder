"use client";

import { useReducer } from "react";
import DateSwitcher from "./DateSwitcher";

// Pomocná funkce pro získání pondělí aktuálního týdne
const getMonday = (date) => {
  date = new Date(date);
  const day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is sunday
  return new Date(date.setDate(diff));
};

// Pomocná funkce pro získání pátku aktuálního týdne
const getFriday = (date) => {
  const monday = getMonday(date);
  return new Date(monday.setDate(monday.getDate() + 4));
};

// Pomocná funkce pro přidání týdnů k datu
const addWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

const options = [
  { label: "This week", offset: 0 },
  { label: "Next week", offset: 1 },
  { label: "After 14 days", offset: 2 },
  { label: "After 21 days", offset: 3 },
  { label: "After 28 days", offset: 4 },
];

const initialState = {
  currentIndex: 0,
  currentLabel: options[0].label,
  startWeek: getMonday(new Date()),
  endWeek: getFriday(new Date()),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      const nextIndex = Math.min(state.currentIndex + 1, options.length - 1);
      return {
        currentIndex: nextIndex,
        currentLabel: options[nextIndex].label,
        startWeek: addWeeks(state.startWeek, 1),
        endWeek: addWeeks(state.endWeek, 1),
      };
    case "previous":
      const prevIndex = Math.max(state.currentIndex - 1, 0);
      return {
        currentIndex: prevIndex,
        currentLabel: options[prevIndex].label,
        startWeek: addWeeks(state.startWeek, -1),
        endWeek: addWeeks(state.endWeek, -1),
      };
  }
  throw Error("Unknown action: " + action.type);
};

export default function EventContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <DateSwitcher state={state} dispatch={dispatch} options={options}></DateSwitcher>
      </div>
    </div>
  );
}
