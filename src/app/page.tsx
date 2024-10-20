import React from "react";
import Table from "@/components/table";
import Chart from "@/components/chart";

export default function Home() {
  return (
    <section className="space-y-10 pb-8 md:pb-12 md:pt-10 lg:py-10">
      <div className="container mt-6 flex max-w-5xl flex-col gap-10 text-left xl:mt-0">
        <h1 className="text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          The Heartbeat of DeFi
        </h1>
        <h2 className="text-muted-foreground leading-3 tracking-tight text-xl sm:text-xl md:text-1xl lg:text-2xl -mt-6">
          DeFi Scan provides verifiable insights into the maturity and risks of DeFi infrastructure
        </h2>
        <div className="space-x-4 my-4">
          <Chart />
        </div>
        <div className="space-x-4 mb-32">
          <Table />
        </div>
      </div>
    </section>
  );
}
