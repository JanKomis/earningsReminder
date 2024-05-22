const { weeklyStockOptions: inputData } = require("./weeklyStockOptions.ts");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {
  for (const stock of inputData) {
    await prisma.stock.create({
      data: stock,
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

