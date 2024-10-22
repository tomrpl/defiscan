import React from "react";
// import Table from "@/components/table";
import Chart from "@/components/chart";
import { PiechartStage } from "@/components/pie-charts/pie-stage";
import { PiechartTvl } from "@/components/pie-charts/pie-tvl";
import { PiechartType } from "@/components/pie-charts/pie-type";
import Table from "@/components/table/page";

export default function Home() {
  return (
    <section className="space-y-10 pb-8 md:pb-12 md:pt-10 lg:py-10">
      <div className="container mt-6 flex max-w-5xl flex-col gap-10 text-left xl:mt-0">
        <h1 className="text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          The Heartbeat of DeFi
        </h1>
        <h2 className="text-muted-foreground leading-3 tracking-tight text-xl sm:text-xl md:text-1xl lg:text-2xl -mt-6">
          DeFi Scan provides verifiable insights into the maturity and risks of
          DeFi infrastructure
        </h2>
        <div className="flex flex-row w-full my-4">
          <Chart />
          <div className="flex flex-col w-1/3">
            <PiechartStage
              groupByKey="stage"
              operation="count"
              baseColor="#ae7ef4"
              chartTitle="# Projects by Stage"
              labelValueDescription="Stage-2"
            />
            <PiechartTvl
              groupByKey="stage"
              operation="sum"
              baseColor="#ae7ef4"
              chartTitle="TVL by Stage"
              labelValueDescription="Total TVL"
            />
          </div>
        </div>
        <div className="space-x-4 mb-32">
          <Table />
        </div>
      </div>
    </section>
  );
}
