import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const groups = table.getState().groups;

  const handleGroupVisibilityChange = (value) => {
    const updatedGroups = groups.map((group) =>
      group.id === value
        ? { ...group, visible: true }
        : { ...group, visible: false }
    );

    const groupVisibilityMap = updatedGroups.reduce((acc, group) => {
      acc[group.id] = group.visible;
      return acc;
    }, {});

    const result = table.getAllColumns().reduce((acc, column) => {
      const group = column.columnDef.groups;
      const isVisible = groupVisibilityMap[group];
      acc[column.id] = isVisible;
      return acc;
    }, {});

    table.options.onGroupsChange(updatedGroups);
    table.options.onColumnVisibilityChange(result);
  };

  const selectedGroup = groups.find((group) => group.visible).id;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <MixerHorizontalIcon />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuRadioGroup
          value={selectedGroup}
          onValueChange={handleGroupVisibilityChange}
        >
          {groups.map((group) => (
            <DropdownMenuRadioItem key={group.id} value={group.id}>
              {group.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
