
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, AlertTriangle, Info, XCircle, CheckCircle, ShieldAlert } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type Alert = {
  id: string
  timestamp: string
  alertType: string
  message: string
  severity: "Info" | "Warning" | "Error" | "Critical"
  status: "Unread" | "Acknowledged" | "Resolved"
}

const severityIcons = {
    "Info": <Info className="mr-2 h-4 w-4" />,
    "Warning": <AlertTriangle className="mr-2 h-4 w-4" />,
    "Error": <XCircle className="mr-2 h-4 w-4" />,
    "Critical": <ShieldAlert className="mr-2 h-4 w-4" />,
}

const severityColors = {
    "Info": "bg-blue-500 hover:bg-blue-600",
    "Warning": "bg-yellow-500 hover:bg-yellow-600",
    "Error": "bg-red-500 hover:bg-red-600",
    "Critical": "bg-purple-600 hover:bg-purple-700",
}

type GetColumnsOptions = {
    onDelete: (alertId: string) => void;
}

export const columns = ({ onDelete }: GetColumnsOptions): ColumnDef<Alert>[] => [
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
    accessorKey: "timestamp",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Timestamp
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("timestamp")}</div>,
  },
  {
    accessorKey: "alertType",
    header: "Alert Type",
    cell: ({ row }) => <div>{row.getValue("alertType")}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => <div className="max-w-xs truncate">{row.getValue("message")}</div>,
  },
  {
    accessorKey: "severity",
    header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Severity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    cell: ({ row }) => {
        const severity: "Info" | "Warning" | "Error" | "Critical" = row.getValue("severity");
        return (
            <Badge className={cn("text-white", severityColors[severity])}>
                {severityIcons[severity]}
                {severity}
            </Badge>
        )
    },
    filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const status: "Unread" | "Acknowledged" | "Resolved" = row.getValue("status");
        return (
            <Badge variant={status === "Resolved" ? "default" : "secondary"} className={cn(
                status === "Resolved" ? "bg-green-500" : status === "Acknowledged" ? "bg-blue-200 text-blue-800" : ""
            )}>
                {status}
            </Badge>
        )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const alert = row.original;
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
            <DropdownMenuItem>Mark as Read</DropdownMenuItem>
            <DropdownMenuItem>Acknowledge</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => onDelete(alert.id)}
                className="text-red-600 focus:text-red-600"
            >
                Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
