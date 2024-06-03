"use client";

import React from "react";
import Chart from "react-apexcharts";

const data = {
  series: [
    {
      data: [
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  options: {
    chart: {
      type: "candlestick",
      height: 250,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
        return (
          '<div class="bg-secondary p-2 rounded-md shadow-md">' +
          '<div class="my-1">Open: <span class="font-bold">' +
          o +
          "</span></div>" +
          '<div class="my-1">High: <span class="font-bold">' +
          h +
          "</span></div>" +
          '<div class="my-1">Low: <span class="font-bold">' +
          l +
          "</span></div>" +
          '<div class="my-1">Close: <span class="font-bold">' +
          c +
          "</span></div>" +
          "</div>"
        );
      },
    },
  },
};

function ApexCandleStick({className}) {
  return (
    <div className={className}>
      <Chart
        type="candlestick"
        height={400}
        options={data.options}
        series={data.series}
      />
    </div>
  );
}

export default ApexCandleStick;
