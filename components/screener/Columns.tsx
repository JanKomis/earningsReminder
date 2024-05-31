"use client";

import { Stock } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import SortingButton from "./SortingButton";
import { DataTableRowActions } from "./DataTableRowActions";
import Link from "next/link";
import { Button } from "../ui/button";


export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "ticker",
    header: ({ column }) => <SortingButton column={column} label="Ticker" />,
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <Button variant="link">
          <Link href={`/dashboard/ticker/${value}`}>{value}</Link>
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
