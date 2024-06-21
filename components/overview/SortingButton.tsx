import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export default function SortingButton({ column, label }) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
