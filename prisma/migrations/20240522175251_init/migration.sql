/*
  Warnings:

  - Added the required column `dailyRangeMedian30` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dailyRangeMedian7` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earningsDate` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earningsEnd` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earningsStart` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exchange` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketCap` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percPriceRange30` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percPriceRange7` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceEOD` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceLow30` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceLow7` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRange30` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRange7` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volumeEOD` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volumeMedian30` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volumeMedian7` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dailyRangeMedian30" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dailyRangeMedian7" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dividendDate" TIMESTAMP(3),
ADD COLUMN     "earningsDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "earningsEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "earningsStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "exchange" TEXT NOT NULL,
ADD COLUMN     "marketCap" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "percPriceRange30" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "percPriceRange7" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceEOD" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceLow30" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceLow7" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceRange30" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceRange7" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "volumeEOD" INTEGER NOT NULL,
ADD COLUMN     "volumeMedian30" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "volumeMedian7" INTEGER NOT NULL;
