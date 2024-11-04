"use client";

import { Project, columns } from "./columns";
import { DataTable } from "./data-table";
import { protocols } from "#site/content";
import { useEffect, useState } from "react";
import { defiLlama } from "@/services/defillama";

export const getData = async (): Promise<Project[]> => {
  // fetch
  const data = await defiLlama.getProtocolsWithCache();
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
    <div className="mx-auto w-full">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
