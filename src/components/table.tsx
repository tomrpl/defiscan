"use client";

import React, { useState, useEffect } from "react";
import { protocols } from "#site/content";
import { formatUsd } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { PizzaRosetteCell } from "./rosette/rosette-cell";
import { getRiskDescriptions } from "./rosette/data-converter/data-converter";
import { TooltipProvider } from "./rosette/tooltip/tooltip";

// Define the type for the protocol data fetched from DeFiLlama
interface Protocol {
  slug: string;
  tvl: number;
  logo: string;
  [key: string]: any; // Add other fields that might be present in the fetched data
}

// Fetch protocol tvl and logo url from defillama
const fetchProtocolTVL = async (): Promise<Protocol[]> => {
  const response = await fetch("https://api.llama.fi/protocols");
  const data = await response.json();
  return data;
};

const Table: React.FC = () => {
  const [data, setData] = useState<Protocol[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProtocolTVL();
      setData(data);
    };
    fetchData();
  });

  // Navigate to the protocol's page when the row is clicked
  const handleRowClick = (slug: string) => {
    window.location.href = slug;
  };

  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2">Protocol</th>
          <th className="border-b px-4 py-2">Type</th>
          <th className="border-b px-4 py-2">Stage</th>
          <th className="border-b px-4 py-2">Risks</th>
          <th className="border-b px-4 py-2">TVL</th>
        </tr>
      </thead>
      <tbody>
        {protocols.map((protocol) => {
          const protocolData =
            data !== undefined
              ? data.filter((e) => e.slug == protocol.defillama_slug)[0]
              : "Loading...";
          return (
            <tr
              key={protocol.slug}
              onClick={() => handleRowClick(protocol.slug)} // Add onClick handler
              className="hover:bg-gray-100 cursor-pointer transition"
            >
              <td className="border-b px-4 py-2">
                <img
                  src={
                    protocolData != "Loading..."
                      ? protocolData.logo
                      : "/images/placeholder.png"
                  }
                  alt={protocol.protocol}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border-b px-4 py-2">{protocol.protocol}</td>
              <td className="border-b px-4 py-2">{protocol.type}</td>
              <td className="border-b px-4 py-2">
                <Badge
                  className={`${
                    protocol.stage === 0
                      ? "bg-red-500"
                      : protocol.stage === 1
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  } text-white px-2 py-1 rounded`}
                >
                  {"Stage " + protocol.stage}
                </Badge>
              </td>
              <td className="border-b px-4 py-2">
                <TooltipProvider>
                  <PizzaRosetteCell
                    values={getRiskDescriptions(protocol.risks)}
                    isUnderReview={false}
                  />
                </TooltipProvider>
                {/* {protocol.risks} */}
              </td>
              <td className="border-b px-4 py-2">
                {protocolData != "Loading..."
                  ? formatUsd(protocolData.tvl)
                  : "N/A"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
