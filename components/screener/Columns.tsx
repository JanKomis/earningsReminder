"use client";

import { Stock } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import SortingButton from "./SortingButton";

/*
export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "ticker",
    header: ({ column }) => <SortingButton column={column} label="Ticker" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortingButton column={column} label="Name" />,
  },
  {
    accessorKey: "earningsDate",
    header: ({ column }) => <SortingButton column={column} label="Earnings" />,
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
  {
    id: "range",
    accessorFn: (row) => row.calculateParams[0].range,
    header: ({ column }) => <SortingButton column={column} label="Range 7D" />,
  },
  {
    id: "rangePercent",
    accessorFn: (row) => row.calculateParams[0].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 7D" />
    ),
  },
  {
    id: "aritMeanDailyRange",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 7D" />
    ),
  },
  {
    id: "meanDevDailyRange",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 7D" />
    ),
  },
  {
    id: "coefVarDailyRange",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 7D" />
    ),
  },
  {
    id: "aritMeanDailyVolume",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 7D" />
    ),
  },
  {
    id: "meanDevDailyVolume",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 7D" />
    ),
  },
  {
    id: "coefVarDailyVolume",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 7D" />
    ),
  },
  {
    id: "range30D",
    accessorFn: (row) => row.calculateParams[1].range,
    header: ({ column }) => <SortingButton column={column} label="Range 30D" />,
  },
  {
    id: "rangePercent30D",
    accessorFn: (row) => row.calculateParams[1].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 30D" />
    ),
  },
  {
    id: "aritMeanDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 30D" />
    ),
  },
  {
    id: "meanDevDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 30D" />
    ),
  },
  {
    id: "coefVarDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 30D" />
    ),
  },
  {
    id: "aritMeanDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 30D" />
    ),
  },
  {
    id: "meanDevDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 30D" />
    ),
  },
  {
    id: "coefVarDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 30D" />
    ),
  },
];
*/

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "ticker",
    header: ({ column }) => <SortingButton column={column} label="Ticker" />,
    groups: "basic",
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortingButton column={column} label="Name" />,
    groups: "basic",
  },
  {
    accessorKey: "earningsDate",
    header: ({ column }) => <SortingButton column={column} label="Earnings" />,
    groups: "basic",
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <SortingButton column={column} label="Market cap" />
    ),
    groups: "basic",
  },
  {
    accessorKey: "priceEOD",
    header: ({ column }) => <SortingButton column={column} label="Price" />,
    groups: "basic",
  },
  {
    accessorKey: "volumeEOD",
    header: ({ column }) => <SortingButton column={column} label="Volume" />,
    groups: "basic",
  },
  {
    id: "range",
    accessorFn: (row) => row.calculateParams[0].range,
    header: ({ column }) => <SortingButton column={column} label="Range 7D" />,
    groups: "statistic7",
  },
  {
    id: "rangePercent",
    accessorFn: (row) => row.calculateParams[0].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "aritMeanDailyRange",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "meanDevDailyRange",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "coefVarDailyRange",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "aritMeanDailyVolume",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "meanDevDailyVolume",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "coefVarDailyVolume",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 7D" />
    ),
    groups: "statistic7",
  },
  {
    id: "range30D",
    accessorFn: (row) => row.calculateParams[1].range,
    header: ({ column }) => <SortingButton column={column} label="Range 30D" />,
    groups: "statistic30",
  },
  {
    id: "rangePercent30D",
    accessorFn: (row) => row.calculateParams[1].rangePercent,
    header: ({ column }) => (
      <SortingButton column={column} label="Perc. range 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "aritMeanDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily range 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "meanDevDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily range 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "coefVarDailyRange30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyRange,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily range 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "aritMeanDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="AM daily volume 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "meanDevDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="MD daily volume 30D" />
    ),
    groups: "statistic30",
  },
  {
    id: "coefVarDailyVolume30D",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyVolume,
    header: ({ column }) => (
      <SortingButton column={column} label="CV daily volume 30D" />
    ),
    groups: "statistic30",
  },
];
