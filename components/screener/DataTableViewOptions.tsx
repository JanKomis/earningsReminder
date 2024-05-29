import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}


export function DataTableViewOptions<TData>({ table }) {
  const columns = table.getAllColumns();

  const uniqueGroups = [
    ...new Set(columns.map((column) => column.columnDef.groups)),
  ];

  // Přidáno: Stav pro sledování viditelnosti skupin
  const [groupVisibility, setGroupVisibility] = useState(
    uniqueGroups.reduce((acc, group) => {
      acc[group] = group === "basic";
      return acc;
    }, {})
  );

  
  const handleGroupVisibilityChange = (group) => {
    setGroupVisibility((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
    
    columns.forEach((column) => {
      if (column.columnDef.groups === group) {
        column.toggleVisibility(!groupVisibility[group]);
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        {uniqueGroups.map((group) => (
          <DropdownMenuCheckboxItem
            key={group}
            checked={groupVisibility[group]} // Přidáno: Stav viditelnosti skupin
            onCheckedChange={() => handleGroupVisibilityChange(group)} // Přidáno: Zpracování změny viditelnosti
          >
            {group}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
