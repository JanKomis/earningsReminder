"use client";
import { useReducer } from "react";
import DateSwitcher from "./DateSwitcher";
import useSWR from "swr";
import { EventDataTable } from "./EventDataTable";
import CustomBarChart from "./Chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { getColumns } from "./EventTableColumns";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

export default function EventContainer({ eventName }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, error, mutate } = useSWR(
    `/api/stocks/events?startDate=${state.startWeek}Z&endDate=${state.endWeek}Z&event=${eventName}`,
    fetcher
  );

  const title = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const columns = getColumns(eventName);

  if (!data) return <div>loading...</div>;

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-row">
            <div className="flex flex-col basis-2/3">
              <CardTitle>{title(eventName)}</CardTitle>
              <span>
                {formatDate(state.startWeek)} - {formatDate(state.endWeek)}
              </span>
            </div>
            <div className="basis-1/3">
              <DateSwitcher
                state={state}
                dispatch={dispatch}
                options={options}
              />
            </div>
          </div>
          <Separator className="my-2" />
        </CardHeader>
        <CardContent>
          <div className="flex h-[380px]">
            <div className="w-8/12">
              <EventDataTable columns={columns} data={data.data} />
            </div>
            <CustomBarChart data={data.data} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
