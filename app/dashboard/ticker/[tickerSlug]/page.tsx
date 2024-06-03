import CardWrapper from "@/components/titlepage/CardWrapper";
import { getStockDataByTicker } from "@/lib/query";

export default async function Page({ params }) {
  const data = await getStockDataByTicker(params.tickerSlug);

  const updateDate = new Date(data.updatedAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <header>
        <div className="flex justify-between text-4xl font-bold">
          <h1>{data.ticker}</h1>
          <h1>{data.priceEOD}</h1>
        </div>
        <h2>{data.name}</h2>
      </header>
      <main className="">
        <CardWrapper data={data} />
      </main>
    </>
  );
}
