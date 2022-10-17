import React, { useState, useMemo } from "react"
import {
  useReactTable,
  ColumnResizeMode,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender
} from "@tanstack/react-table"
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline"

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
  margin: number
  country: string
  continent: string
  planet: string
  system: string
}

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    margin: 20,
    country: "usa",
    continent: "America",
    planet: "Earth",
    system: "Solar System"
  }
]

// export async function getServerSideProps() {
//   const req = await fetch("/some-api")
//   const data = req.json()

//   return {
//     props: { data },
//     // Incremental static regeneration - re-generate single pages in the background
//     // Next can regenerate a page whenever a new request comes in within a certain time interval
//     revalidate: 30
//   }
// }

const StocksTable = () => {
  const defaultColumns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id
      },
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id
      },
      {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
        footer: (props) => props.column.id
      },
      {
        accessorKey: "status",
        header: "Status",
        footer: (props) => props.column.id
      },
      {
        accessorKey: "progress",
        header: "Profile Progress",
        footer: (props) => props.column.id
      },
      {
        accessorKey: "margin",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      },
      {
        accessorKey: "country",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      },
      {
        accessorKey: "continent",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      },
      {
        accessorKey: "planet",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      },
      {
        accessorKey: "system",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id
      }
    ],
    []
  )

  const [data, setData] = useState(() => [...defaultData])
  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns])
  const [columnResizeMode, setColumnResizeMode] = useState<ColumnResizeMode>("onChange")

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  })

  return (
    <>
      <div className='overflow-x-auto min-w-full max-h-[60vh] scrollbar'>
        <table className='w-full' style={{ width: table.getCenterTotalSize() }}>
          <thead className='bg-slate-200'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='h-7'>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className='px-3 py-1 border border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider relative '
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                    {/* Column resize feature 👇 */}
                    {/* <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? "isResizing" : ""
                      }`}
                      style={{
                        transform:
                          columnResizeMode === "onEnd" && header.column.getIsResizing()
                            ? `translateX(${
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                            : ""
                      }}
                    /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className='h-7'>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='px-3 py-1 border border-gray-200 bg-white text-sm'
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex items-center gap-2'>
        <div className='btn-group'>
          <button
            className='btn btn-sm'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronDoubleLeftIcon className='block h-4 w-4' aria-hidden='true' />
          </button>
          <button
            className='btn btn-sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className='block h-4 w-4' aria-hidden='true' />
          </button>
          {table.getPageOptions().map((item) => (
            <button
              className='btn btn-sm'
              onClick={() => table.setPageIndex(item)}
              key={item}
            >
              {item + 1}
            </button>
          ))}

          <button className='btn btn-sm btn-disabled'>...</button>

          {/* <button className='btn btn-sm'>{table.getPageCount()}</button> */}
          <button
            className='btn btn-sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className='block h-4 w-4' aria-hidden='true' />
          </button>
          <button
            className='btn btn-sm'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronDoubleRightIcon className='block h-4 w-4' aria-hidden='true' />
          </button>
        </div>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className='flex items-center gap-1'>
          | Go to page:
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded w-14'
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default StocksTable