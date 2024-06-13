import prisma from "./db";

export async function getAllStock() {
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

export async function getWatchlist(userId: string) {
  try {
    const watchlist = await prisma.watchlist.findUnique({
      where: { userId: userId },
      include: {
        stocks: true,
      },
    });
    return watchlist;
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserIdByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      console.log(`User ID: ${user.id}`);
      return user.id;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user ID:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getStockByTicker(ticker) {
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

function mergeDataWithWatchlist(stockData, watchlist) {
  const watchlistMap = new Map(
    (watchlist?.stocks || []).map((item) => [item.id, watchlist.id])
  );

  // Mapování stockData a přidání informace o watchlistu
  return stockData.map((item) => {
    const watchlistId = watchlistMap.get(item.id);
    return {
      ...item,
      watchlist: watchlistId
        ? { watchlist: true, watchlistId }
        : { watchlist: false, watchlistId: watchlist?.id || null },
    };
  });
}

export async function getUserScreenerData(email: string) {
  try {
    // 1. Get user ID by email
    const userId = await getUserIdByEmail(email);
    if (!userId) {
      throw new Error("User not found");
    }

    const allStocks = await getAllStock();
    const watchlist = await getWatchlist("clwx6nete0000gf7311ypw9uh");
    const mergedData = mergeDataWithWatchlist(allStocks, watchlist);
    return mergedData;
  } catch (error) {
    console.error("Error in getUserScreenerData:", error);
    return [];
  }
}

export async function createWatchlist(userId) {
  try {
    // Ensure the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Create the watchlist without any stocks
    const watchlist = await prisma.watchlist.create({
      data: {
        user: {
          connect: { id: userId },
        },
      },
    });

    return watchlist;
  } catch (error) {
    console.error("Error creating watchlist:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateWatchlist(watchlistId, stockId, isInWatchlist) {
  try {
    const watchlist = await prisma.watchlist.update({
      where: { id: watchlistId },
      data: {
        stocks: isInWatchlist
        
          ? { disconnect: { id: stockId } }
          : { connect: { id: stockId } },
      },
      include: { stocks: true },
    });

    return watchlist;
  } catch (error) {
    console.error("Error updating watchlist:", error);
    throw error;
  }
}
