const { weeklyStockOptions: inputData } = require("./weeklyStockOptions.ts");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const yahooFinance2 = require("yahoo-finance2").default;
//import yahooFinance2 from "yahoo-finance2";
const math = require("mathjs");

/*
type calculatedDataType = {
  duration: number;
  lowPrice: number;
  range: number;
  rangePercent: number;
  aritMeanDailyRange: number;
  varianceDailyRange: number;
  meanDevDailyRange: number;
  coefVarDailyRange: number;
  aritMeanDailyVolume: number;
  varianceDailyVolume: number;
  meanDevDailyVolume: number;
  coefVarDailyVolume: number;
};
*/

async function calculateData(ticker, duration) {
  const query = ticker;
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - duration);
  const period1 = Math.floor(startDate.getTime() / 1000);
  const period2 = Math.floor(endDate.getTime() / 1000);
  const queryOptions = { period1, period2 };

  const response = await yahooFinance2.chart(query, queryOptions);
  const historyData = response.quotes;

  const lows = historyData.map((q) => q.low);
  const highs = historyData.map((q) => q.high);
  const minPrice = Math.min(...lows);
  const maxPrice = Math.max(...highs);

  const range = maxPrice - minPrice;

  const middlePrice = maxPrice - range / 2;
  const halfRange = range / 2;
  const percentageRange = halfRange / (middlePrice * 0.01);

  const dailyRanges = historyData.map((q) => q.high - q.low);
  /*
  console.log("Range je", range);
  console.log("Max price je", maxPrice);
  console.log("Percent rage je", percentageRange);
  */

  const meanRange = math.mean(dailyRanges);
  const varianceRange = math.variance(dailyRanges);
  const stdDevRange = math.std(dailyRanges);
  const coeffVarRange = (stdDevRange / meanRange) * 100;

  const volumes = historyData.map((q) => q.volume);

  const meanVolume = math.mean(volumes);
  const varianceVolume = math.variance(volumes);
  const stdDevVolume = math.std(volumes);
  const coeffVarVolume = (stdDevVolume / meanVolume) * 100;

  const calculatedData2 = {
    duration: duration,
    lowPrice: minPrice,
    range: range,
    rangePercent: percentageRange,
    aritMeanDailyRange: meanRange,
    varianceDailyRange: varianceRange,
    meanDevDailyRange: stdDevRange,
    coefVarDailyRange: coeffVarRange,
    aritMeanDailyVolume: meanVolume,
    varianceDailyVolume: varianceVolume,
    meanDevDailyVolume: stdDevVolume,
    coefVarDailyVolume: coeffVarVolume,
  };

  return calculatedData2;
}

async function yahooData(stock) {
  const data = await yahooFinance2.quote(stock.ticker);

  const outputData = {
    ticker: stock.ticker,
    expirationDay: stock.expirationDay,
    exchange: data.fullExchangeName,
    exchangeTimezone: data.exchangeTimezoneShortName,
    name: data.shortName,
    earningsDate: data.earningsTimestamp,
    earningsStart: data.earningsTimestampStart,
    earningsEnd: data.earningsTimestampEnd,
    dividendDate: data.dividendDate,
    marketCap: data.marketCap,
    priceEOD: data.regularMarketPrice,
    volumeEOD: data.regularMarketVolume,
  };

  return outputData;
}

async function main() {
  for (const stock of inputData) {
    const stockData = await yahooData(stock);

    //console.log(stockData);
    const data7 = await calculateData(stock.ticker, 7);
    const data30 = await calculateData(stock.ticker, 30);

    await prisma.stock.create({
      data: {
        ...stockData,
        calculateParams: {
          create: [data7, data30],
        },
      },
    });
  }
  console.log("Seed data created successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
