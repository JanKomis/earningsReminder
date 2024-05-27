"use client";

import { Stock } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "earningsDate",
    header: "Earnings",
  },
  {
    accessorKey: "marketCap",
    header: "Market cap",
  },
  {
    accessorKey: "priceEOD",
    header: "Price",
  },
  {
    accessorKey: "volumeEOD",
    header: "Volume",
  },

  {
    id: "range",
    accessorFn: (row) => row.calculateParams[0].range,
    header: "Range 7D",
  },
  {
    id: "rangePercent",
    accessorFn: (row) => row.calculateParams[0].rangePercent,
    header: "Perc. range 7D",
  },
  {
    id: "aritMeanDailyRange",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyRange,
    header: "AM daily range 7D",
  },
  {
    id: "meanDevDailyRange",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyRange,
    header: "MD daily range 7D",
  },
  {
    id: "coefVarDailyRange",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyRange,
    header: "CV daily range 7D",
  },
  {
    id: "aritMeanDailyVolume",
    accessorFn: (row) => row.calculateParams[0].aritMeanDailyVolume,
    header: "AM daily volume 7D",
  },
  {
    id: "meanDevDailyVolume",
    accessorFn: (row) => row.calculateParams[0].meanDevDailyVolume,
    header: "MD daily volume 7D",
  },
  {
    id: "coefVarDailyVolume",
    accessorFn: (row) => row.calculateParams[0].coefVarDailyVolume,
    header: "CV daily volume 7D",
  },

  {
    id: "range",
    accessorFn: (row) => row.calculateParams[1].range,
    header: "Range 30D",
  },
  {
    id: "rangePercent",
    accessorFn: (row) => row.calculateParams[1].rangePercent,
    header: "Perc. range 30D",
  },
  {
    id: "aritMeanDailyRange",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyRange,
    header: "AM daily range 30D",
  },
  {
    id: "meanDevDailyRange",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyRange,
    header: "MD daily range 30D",
  },
  {
    id: "coefVarDailyRange",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyRange,
    header: "CV daily range 30D",
  },
  {
    id: "aritMeanDailyVolume",
    accessorFn: (row) => row.calculateParams[1].aritMeanDailyVolume,
    header: "AM daily volume 30D",
  },
  {
    id: "meanDevDailyVolume",
    accessorFn: (row) => row.calculateParams[1].meanDevDailyVolume,
    header: "MD daily volume 30D",
  },
  {
    id: "coefVarDailyVolume",
    accessorFn: (row) => row.calculateParams[1].coefVarDailyVolume,
    header: "CV daily volume 30D",
  },
];

/*
export const columns = [
  {
    header: "First Name",
    accessor: "name.first",
    accessorFn: (row) => row.name.first,
  },
  {
    header: "Last Name",
    accessor: 'name.last',
    accessorFn: (row) => row.name.last,
  },
];
*/
/*
{
  id: 'clwjov16o00z6k8ho04334hli',
  ticker: 'SONY',
  createdAt: 2024-05-23T20:11:36.768Z,
  updatedAt: 2024-05-23T20:11:36.768Z,
  expirationDay: 'FRI',
  exchange: 'NYSE',
  exchangeTimezone: 'EDT',
  name: 'Sony Group Corporation',
  earningsDate: 2024-05-14T06:00:00.000Z,
  earningsStart: 2024-08-07T06:00:00.000Z,
  earningsEnd: 2024-08-12T06:00:00.000Z,
  dividendDate: 2023-12-12T00:00:00.000Z,
  marketCap: 99514089472n,
  priceEOD: 80.8,
  volumeEOD: 584840,
  calculateParams: [
    {
      id: 'clwjov16o00z7k8ho5ioqjf99',
      stockId: 'clwjov16o00z6k8ho04334hli',
      duration: 7,
      lowPrice: 80.70999908447266,
      range: 3.680000305175781,
      rangePercent: 2.228952355655297,
      aritMeanDailyRange: 0.8108329772949219,
      varianceDailyRange: 0.05296450612950139,
      meanDevDailyRange: 0.2301401879931043,
      coefVarDailyRange: 28.38318056092039,
      aritMeanDailyVolume: 775623.3333333334,
      varianceDailyVolume: 29764336866.66667,
      meanDevDailyVolume: 172523.4386008657,
      coefVarDailyVolume: 22.24319862315458
    },
    {
      id: 'clwjov16o00z8k8ho8dpnccx5',
      stockId: 'clwjov16o00z6k8ho04334hli',
      duration: 30,
      lowPrice: 75.11000061035156,
      range: 10.45999908447266,
      rangePercent: 6.50983262671535,
      aritMeanDailyRange: 0.9915214206861414,
      varianceDailyRange: 0.2258483814363177,
      meanDevDailyRange: 0.4752350801827636,
      coefVarDailyRange: 47.92988535274375,
      aritMeanDailyVolume: 1048706.086956522,
      varianceDailyVolume: 528990863579.4467,
      meanDevDailyVolume: 727317.5809640839,
      coefVarDailyVolume: 69.35380560962051
    }
  ]
}
*/
