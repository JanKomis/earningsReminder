"use client";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import SortingButton from "./SortingButton";
import { Button } from "../ui/button";

function insertAt(array, index, element) {
  return [...array.slice(0, index), element, ...array.slice(index)];
}

export function getColumns(eventName) {
  const commonColumns = [
    {
      accessorKey: "ticker",
      header: ({ column }) => <SortingButton column={column} label="Ticker" />,
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <Button variant="link" onClick={() => console.log(value)}>
            {value}
          </Button>
        );
      },
    },
    {
      accessorKey: "watchlist",
      header: ({ column }) => (
        <SortingButton column={column} label="Watchlist" />
      ),
      cell: ({ row }) => {
        const params = row.original;
        return (
          <Button variant="outline" size="icon">
            {params.watchlist.watchlist ? (
              <BookmarkFilledIcon className="h-4 w-4" />
            ) : (
              <BookmarkIcon className="h-4 w-4" />
            )}
          </Button>
        );
      },
    },
    {
      accessorKey: "marketCap",
      header: ({ column }) => (
        <SortingButton column={column} label="Market cap" />
      ),
    },
    {
      accessorKey: "priceEOD",
      header: ({ column }) => <SortingButton column={column} label="Price" />,
    },
    {
      accessorKey: "volumeEOD",
      header: ({ column }) => <SortingButton column={column} label="Volume" />,
    },
  ];

  let specificColumn;

  if (eventName === "earnings") {
    specificColumn = {
      accessorKey: "earningsDate",
      header: ({ column }) => (
        <SortingButton column={column} label="Earnings" />
      ),
      cell: ({ getValue }) => {
        const value = getValue() as string;
        const date = new Date(value).toLocaleDateString();
        return <span>{date}</span>;
      },
    };
  } else if (eventName === "dividends") {
    specificColumn = {
      accessorKey: "dividendDate",
      header: ({ column }) => (
        <SortingButton column={column} label="Dividend" />
      ),
      cell: ({ getValue }) => {
        const value = getValue() as string;
        const date = new Date(value).toLocaleDateString();
        return <span>{date}</span>;
      },
    };
  }

  return specificColumn
    ? insertAt(commonColumns, 2, specificColumn)
    : commonColumns;
}
