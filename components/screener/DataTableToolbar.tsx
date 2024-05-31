import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { Input } from "../ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
  children,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

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
      <div className="flex items-center py-2 ">
        <Input
          placeholder="Filter tickers..."
          value={(table.getColumn("ticker")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("ticker")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        ></Input>
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

/*

<div className="flex items-center py-4">
        <Input
          placeholder="Filter tickers..."
          value={(table.getColumn("ticker")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("ticker")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"></Input>
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        />
        <DataTableViewOptions table={table}></DataTableViewOptions>
      </div>*/
