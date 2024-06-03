import prisma from "./db";

export async function AllStock() {
  try {
    const stocks = await prisma.stock.findMany({
      include: {
        calculateParams: true,
      },
    });
    return stocks;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getStockDataByTicker(ticker) {
  try {
    const stockData = await prisma.stock.findUnique({
      where: { ticker: ticker },
      include: {
        calculateParams: true, // include related calculateParams data
      },
    });

    console.log(stockData);
    console.log(stockData.ticker);

    if (!stockData) {
      console.log(`No stock found with ticker: ${ticker}`);
      return null;
    }

    return stockData;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
