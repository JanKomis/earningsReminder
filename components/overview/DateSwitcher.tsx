import { useReducer } from "react";
import { Button } from "../ui/button";

const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

const DateSwitcher = ({ state, dispatch, options }) => {
  return (
    <div>
      <Button
        onClick={() => dispatch({ type: "previous" })}
        disabled={state.currentIndex === 0}
      >
        Previous
      </Button>
      <span>{state.currentLabel}</span>
      <Button
        onClick={() => dispatch({ type: "next" })}
        disabled={state.currentIndex === options.length - 1}
      >
        Next
      </Button>
      <div>
        <span>Start Week: {formatDate(state.startWeek)}</span>
        <span>End Week: {formatDate(state.endWeek)}</span>
      </div>
    </div>
  );
};

export default DateSwitcher;
