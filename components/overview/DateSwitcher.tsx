import { Button } from "../ui/button";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

export default function DateSwitcher({ state, dispatch, options }) {
  return (
    <div className="flex justify-between items-center mb-1 border">
      <Button
        onClick={() => dispatch({ type: "previous" })}
        disabled={state.currentIndex === 0}
        variant="outline"
        size="icon"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <span>{state.currentLabel}</span>
      <Button
        onClick={() => dispatch({ type: "next" })}
        disabled={state.currentIndex === options.length - 1}
        variant="outline"
        size="icon"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
