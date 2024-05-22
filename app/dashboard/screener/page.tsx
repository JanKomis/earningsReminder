import { DataTable } from "@/components/screener/DataTable";
import WebSocketComponent from "@/components/screener/WebSocketComponent";
import { columns } from "@/components/screener/columns";

const data = [
  {
    id: "0323215f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "090290cb",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "c7243b42",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "80b8d97c",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "255e56e0",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

export default function Page() {
  return (
    <>
      <header className="w-full">
        <h1>Stock screener</h1>
      </header>
      <main>
        <DataTable columns={columns} data={data} />
        <WebSocketComponent/>
      </main>
    </>
  );
}
