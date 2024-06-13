import { columns } from "@/components/screener/Columns";
import { DataTable } from "@/components/screener/DataTable";
import { getUserScreenerData } from "@/lib/query";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const data3 = await getUserScreenerData(session.user.email);

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
