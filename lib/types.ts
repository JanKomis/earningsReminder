//type of start object with all stocks with weekly options from https://www.cboe.com/available_weeklys/
export type WeeklyStockOptionsData = {
  ticker: string;
  expirationDay: string;
};

export type Stock = {
  id: string;
  ticker: string;
  createdAt: Date;
  updatedAt: Date;
  expirationDay: string;
  exchange: string;
  exchangeTimezone: string;
  name: string;
  earningsDate?: Date | null;
  earningsStart?: Date | null;
  earningsEnd?: Date | null;
  dividendDate?: Date | null;
  marketCap: bigint;
  priceEOD: number;
  volumeEOD: number;
  calculateParams: CalculateParams[];
};

export type CalculateParams = {
  id: string;
  stockId: string;
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
  stock: Stock; 
};
