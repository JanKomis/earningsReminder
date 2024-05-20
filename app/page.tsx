import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <p>Welcome</p>
    </main>
  );
}
