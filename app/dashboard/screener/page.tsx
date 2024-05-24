import { DataTable } from "@/components/screener/DataTable";
import { AllStock } from "@/lib/query";

//import { columns } from "@/components/screener/columns";

export default async function Page() {
  const data = await AllStock();
  console.log(data[1])
  console.log('nasrat')


  return (
    <>
      <header className="w-full">
        <h1>Stock screener</h1>
      </header>
      <main></main>
    </>
  );
}

/*
<DataTable columns={columns} data={data} />
        <WebSocketComponent/>
        */
