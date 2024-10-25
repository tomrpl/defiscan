"use client";

import { formatUsd } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { TooltipProvider } from "../rosette/tooltip/tooltip";
import { PizzaRosetteCell } from "../rosette/rosette-cell";
import { getRiskDescriptions } from "../rosette/data-converter/data-converter";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { RiskArray, RiskLevel } from "@/lib/types";

export type Project = {
  logo: string;
  protocol: string;
  slug: string;
  stage: number;
  risks: RiskArray;
  type: string;
  chain: string;
  tvl: number;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "logo",
    header: "",
    cell: ({ row }) => {
      const logo = row.getValue("logo") as string;
      const protocol = row.getValue("protocol") as string;
      if (!logo)
        return (
          <img
            src={"/images/placeholder.png"}
            alt={protocol || ""}
            className="w-16 h-16 object-cover"
          />
        );

      return (
        <img
          src={logo}
          alt={protocol || ""}
          className="w-16 h-16 object-cover"
        />
      );
    },
  },
  {
    accessorKey: "protocol",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Protocol
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: "alphanumeric", // use built-in sorting function by name
  },
  {
    accessorKey: "stage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stage
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const stage = row.getValue("stage") as number;
      return (
        <TooltipProvider>
          <Badge
            stage={stage}
            className={`${
              stage === 0
                ? "bg-red-500"
                : stage === 1
                  ? "bg-yellow-500"
                  : "bg-green-500"
            } text-white px-2 py-1 rounded`}
          >
            {"Stage " + stage}
          </Badge>
        </TooltipProvider>
      );
    },
    sortingFn: "alphanumeric", // use built-in sorting function by name
  },
  {
    accessorKey: "risks",
    header: "Risks",
    cell: ({ row }) => {
      const risks = row.getValue("risks") as RiskArray;

      return (
        <TooltipProvider>
          <PizzaRosetteCell
            values={getRiskDescriptions(risks)}
            isUnderReview={false}
          />
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          className="hidden md:flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="hidden md:block">{row.getValue("type")}</div>;
    },
    sortingFn: "alphanumeric", // use built-in sorting function by name
  },
  {
    accessorKey: "chain",
    header: ({ column }) => {
      return (
        <Button
          className="hidden md:flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Chain
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="hidden md:block">{row.getValue("chain")}</div>;
    },
    sortingFn: "alphanumeric", // use built-in sorting function by name
  },
  {
    accessorKey: "tvl",
    header: ({ column }) => {
      return (
        <Button
          className="hidden md:flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TVL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="hidden md:block">{formatUsd(row.getValue("tvl"))}</div>
      );
    },
    sortingFn: "alphanumeric", // use built-in sorting function by name
  },
];
