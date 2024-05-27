import { columns } from "@/components/screener/Columns";
import { DataTable } from "@/components/screener/DataTable";
import { AllStock } from "@/lib/query";

//import { columns } from "@/components/screener/columns";

export default async function Page() {
  const data = [
    {
      name: {
        first: "Tanner",
        last: "Linsley",
      },
      info: {
        age: 33,
        visits: 100,
      },
    },
    {
      name: {
        first: "Kevin",
        last: "Vandy",
      },
      info: {
        age: 27,
        visits: 200,
      },
    },
  ];
  const data3 = await AllStock();
  console.log(data3[1])
  console.log(data);
  console.log(columns);
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
