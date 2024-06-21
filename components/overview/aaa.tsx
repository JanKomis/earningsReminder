"use client";
import useSWR from "swr";
import React from "react";
import { Button } from "../ui/button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GetUserButton: React.FC = () => {
  const { data, error, mutate } = useSWR(
    "/api/stocks/events?startDate=2024-06-01T00:00:00.000Z&endDate=2024-06-30T23:59:59.999Z",
    fetcher
  );

  const handleClick = () => {
    console.log(data);
  };

  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleClick}>user</button>
    </div>
  );
};

export default GetUserButton;
