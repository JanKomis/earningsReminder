/*
  Warnings:

  - You are about to drop the column `dailyRangeMedian30` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `dailyRangeMedian7` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `percPriceRange30` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `percPriceRange7` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `priceLow30` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `priceLow7` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `priceRange30` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `priceRange7` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `volumeMedian30` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `volumeMedian7` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `exchangeTimezone` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "dailyRangeMedian30",
DROP COLUMN "dailyRangeMedian7",
DROP COLUMN "percPriceRange30",
DROP COLUMN "percPriceRange7",
DROP COLUMN "priceLow30",
DROP COLUMN "priceLow7",
DROP COLUMN "priceRange30",
DROP COLUMN "priceRange7",
DROP COLUMN "volumeMedian30",
DROP COLUMN "volumeMedian7",
ADD COLUMN     "exchangeTimezone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CalculateParams" (
    "id" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "lowPrice" DOUBLE PRECISION NOT NULL,
    "range" DOUBLE PRECISION NOT NULL,
    "rangePercent" DOUBLE PRECISION NOT NULL,
    "aritMeanDailyRange" DOUBLE PRECISION NOT NULL,
    "varianceDailyRange" DOUBLE PRECISION NOT NULL,
    "meanDevDailyRange" DOUBLE PRECISION NOT NULL,
    "coefVarDailyRange" DOUBLE PRECISION NOT NULL,
    "aritMeanDailyVolume" DOUBLE PRECISION NOT NULL,
    "varianceDailyVolume" DOUBLE PRECISION NOT NULL,
    "meanDevDailyVolume" DOUBLE PRECISION NOT NULL,
    "coefVarDailyVolume" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CalculateParams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CalculateParams" ADD CONSTRAINT "CalculateParams_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
