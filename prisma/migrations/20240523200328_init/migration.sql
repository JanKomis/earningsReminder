-- DropForeignKey
ALTER TABLE "CalculateParams" DROP CONSTRAINT "CalculateParams_stockId_fkey";

-- AddForeignKey
ALTER TABLE "CalculateParams" ADD CONSTRAINT "CalculateParams_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
