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
