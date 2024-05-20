import { SignIn } from "./SignIn";
import { UserNav } from "./UserNav";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="p-4 flex justify-end">
      {session ? <UserNav/> : <SignIn />}
    </nav>
  );
}
