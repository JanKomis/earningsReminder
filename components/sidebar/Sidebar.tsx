import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <aside className="w-[250px] px-4 flex flex-col">
      <NavLinks />
    </aside>
  );
}
