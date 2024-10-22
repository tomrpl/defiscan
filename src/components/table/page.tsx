"use client";

import { Project, columns } from "./columns";
import { DataTable } from "./data-table";
import { protocols } from "#site/content";
import { fetchProtocolTVL } from "../table";
import { useEffect, useState } from "react";

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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
