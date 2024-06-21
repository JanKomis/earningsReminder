import EventContainer from "@/components/overview/EventContainer";

export default function Page() {
  return (
    <>
      <header className="pb-4">
        <h1 className="text-4xl font-bold">Stock overview</h1>
      </header>
      <main className="flex flex-col gap-y-4">
        <EventContainer eventName={"earnings"} />
        <EventContainer eventName={"dividends"} />
      </main>
    </>
  );
}

