import { DataTableViewOptions } from "./DataTableViewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem
        commodi molestias quo aut quod exercitationem quam nam totam excepturi
        mollitia, dicta consectetur dolores vel voluptate maxime voluptatem,
        nulla voluptatum.
      </p>
      <DataTableViewOptions table={table} />
    </div>
  );
}
