"use client";
import { changeWatchlist } from "@/lib/actions";
import { Button } from "../ui/button";

export default function ButtonTest() {
  const handleClick = async () => {
    await changeWatchlist("test 1");
  };

  return (
    <div>
      <Button onClick={handleClick}>Ahoj</Button>
    </div>
  );
}
