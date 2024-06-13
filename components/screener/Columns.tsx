"use client";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Stock } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import SortingButton from "./SortingButton";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { manageWatchlist } from "@/lib/actions";

export const columns: ColumnDef<Stock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    groups: [],
  },
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
    groups: [],
  },
  {
    accessorKey: "watchlist",
    header: ({ column }) => <SortingButton column={column} label="Watchlist" />,
    cell: ({ row }) => {
      const params = row.original;

      const handleClick = async () => {
        await manageWatchlist({ data: [params] });
      };

      return (
        <Button variant="outline" size="icon" onClick={handleClick}>
          {params.watchlist.watchlist ? (
            <BookmarkFilledIcon className="h-4 w-4" />
          ) : (
            <BookmarkIcon className="h-4 w-4" />
          )}
        </Button>
      );
    },
    groups: [],
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortingButton column={column} label="Name" />,
    groups: ["basic"],
  },
  {
    accessorKey: "earningsDate",
    header: ({ column }) => <SortingButton column={column} label="Earnings" />,
    groups: ["basic"],
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <SortingButton column={column} label="Market cap" />
    ),
    groups: ["basic"],
  },
  {
    accessorKey: "priceEOD",
    header: ({ column }) => <SortingButton column={column} label="Price" />,
    groups: ["basic"],
  },
  {
    accessorKey: "volumeEOD",
    header: ({ column }) => <SortingButton column={column} label="Volume" />,
    groups: ["basic"],
  },
  {
    accessorKey: "range",
    accessorFn: (row) => row.calculateParams[0].range,
    header: ({ column }) => <SortingButton column={column} label="Range 7D" />,
    groups: ["statistic7"],
  },
  {
    accessorKey: "rangePercent",
    accessorFn: (row) => row.calculateParams[0].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "aritMeanDailyRange",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "meanDevDailyRange",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "coefVarDailyRange",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "aritMeanDailyVolume",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "meanDevDailyVolume",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "coefVarDailyVolume",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 7D" />
    ),
    groups: ["statistic7"],
  },
  {
    accessorKey: "range30D",
    accessorFn: (row) => row.calculateParams[1].range,
    header: ({ column }) => <SortingButton column={column} label="Range 30D" />,
    groups: ["statistic30"],
  },
  {
    accessorKey: "rangePercent30D",
    accessorFn: (row) => row.calculateParams[1].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "aritMeanDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "meanDevDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "coefVarDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "aritMeanDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "meanDevDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 30D" />
    ),
    groups: ["statistic30"],
  },
  {
    accessorKey: "coefVarDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 30D" />
    ),
    groups: ["statistic30"],
  },
];
