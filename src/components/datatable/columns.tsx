
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export type Campaign = {
  campaignName: string
  channel: string
  impressions: number
  clicks: number
  ctr: string
  conversions: number
  startDate: string
}

export const columns: ColumnDef<Campaign>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "campaignName",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Campaign Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => <div>{row.getValue("campaignName")}</div>,
  },
  {
    accessorKey: "channel",
    header: "Channel",
    cell: ({ row }) => <div>{row.getValue("channel")}</div>,
  },
  {
    accessorKey: "impressions",
    header: () => <div className="text-right">Impressions</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("impressions"))
      const formatted = new Intl.NumberFormat("en-US").format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "clicks",
    header: () => <div className="text-right">Clicks</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("clicks"))
        const formatted = new Intl.NumberFormat("en-US").format(amount)
   
        return <div className="text-right font-medium">{formatted}</div>
      },
  },
  {
    accessorKey: "ctr",
    header: "CTR",
    cell: ({ row }) => <div>{row.getValue("ctr")}</div>,
  },
  {
    accessorKey: "conversions",
    header: () => <div className="text-right">Conversions</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("conversions"))
        const formatted = new Intl.NumberFormat("en-US").format(amount)
   
        return <div className="text-right font-medium">{formatted}</div>
      },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div>{new Date(row.getValue("startDate")).toLocaleDateString()}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const campaign = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(campaign.campaignName)}
            >
              Copy campaign name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
