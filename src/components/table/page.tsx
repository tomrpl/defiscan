"use client";

import { Project, columns } from "./columns";
import { DataTable } from "./data-table";
import { protocols } from "#site/content";
import { useEffect, useState } from "react";

// Define the type for the protocol data fetched from DeFiLlama
export interface Protocol {
  slug: string;
  tvl: number;
  logo: string;
  category: string;
  [key: string]: any; // Add other fields that might be present in the fetched data
}

// Fetch protocol tvl and logo url from defillama
export const fetchProtocolTVL = async (): Promise<Protocol[]> => {
  const response = await fetch("https://api.llama.fi/protocols");
  const data = await response.json();
  return data;
};

export const getData = async (): Promise<Project[]> => {
  // fetch
  const data = await fetchProtocolTVL();
  // merge
  const merged = data
    .map((val) => {
      const res = protocols.find(
        (protocol) => protocol.defillama_slug == val.slug
      );

      if (res)
        return {
          logo: val.logo,
          protocol: res.protocol,
          slug: res.slug,
          tvl: val.tvl,
          chain: res.chain,
          stage: res.stage,
          type: val.category,
          risks: res.risks,
        } as Project;
      return null;
    })
    .filter((el) => el !== null);
  // return
  return merged;
};

export default function Table() {
  const [data, setData] = useState<Project[] | undefined>(undefined);

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
