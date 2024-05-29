import { columns } from "@/components/screener/Columns";
import { DataTable } from "@/components/screener/DataTable";
import { AllStock } from "@/lib/query";

//import { columns } from "@/components/screener/columns";

export default async function Page() {
  const data3 = await AllStock();

  return (
    <>
      <header className="w-full">
        <h1>Stock screener</h1>
      </header>
      <main>
        <DataTable columns={columns} data={data3} />
      </main>
    </>
  );
}

/*
<DataTable columns={columns} data={data} />
        */

//<DataTable columns={columns} data={data} />
