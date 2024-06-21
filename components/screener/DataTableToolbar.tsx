import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { Input } from "../ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { manageWatchlist } from "@/lib/actions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const isSelected = table.getIsSomeRowsSelected();

  const ResetSelectRow = () => {
    table.resetRowSelection();
  };

  const handleAddAllWatchlist = () => {
    const selectedRows = table.getState().rowSelection;
    const data = table.options.data;

    const selectedData = Object.keys(selectedRows)
      .filter((key) => selectedRows[key])
      .map((key) => data[key]);

    manageWatchlist({ data: selectedData, check: true });
  };

  const handleRemoveAllWatchlist = () => {
    const selectedRows = table.getState().rowSelection;
    const data = table.options.data;

    const selectedData = Object.keys(selectedRows)
      .filter((key) => selectedRows[key])
      .map((key) => data[key]);

    manageWatchlist({ data: selectedData, check: false });
  };

  return (
    <div>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic information</TabsTrigger>
          <TabsTrigger value="statistic7">Statistical data 7D</TabsTrigger>
          <TabsTrigger value="statistic30">Statistical data 30D</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="statistic7">Change your password here.</TabsContent>
        <TabsContent value="statistic30">
          Change your password here.
        </TabsContent>
      </Tabs>
      <div className="flex items-center py-2 gap-4">
        <Input
          placeholder="Filter tickers..."
          value={(table.getColumn("ticker")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("ticker")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        ></Input>
        {isSelected && (
          <>
            <Button variant="ghost" onClick={handleAddAllWatchlist}>
              Add to watchlist
            </Button>
            <Button variant="ghost" onClick={handleRemoveAllWatchlist}>
              Remove from watchlist
            </Button>
            <Button variant="ghost" onClick={ResetSelectRow}>
              Reset
            </Button>
          </>
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()}>
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <div className="ml-auto">
          <DataTableViewOptions table={table}></DataTableViewOptions>
        </div>
      </div>
    </div>
  );
}
