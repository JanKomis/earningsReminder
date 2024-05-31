import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  //const task = taskSchema.parse(row.original);

  return (
    <Button variant="outline" size="icon">
      <DotsHorizontalIcon className="h-4 w-4" />
    </Button>
  );
}
