import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Table from "@/components/table";
import Chart from "@/components/chart";

export default function Home() {
  return (
    <section className="space-y-10 pb-8 md:pb-12 md:pt-10 lg:py-10">
      <div className="container mt-6 flex max-w-5xl flex-col gap-10 text-left xl:mt-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          DeFi Pulse
        </h1>
        <p className="-mt-6">
          DeFi Pulse provides verifiable insights into the stage of
          decentralization and related risks of DeFi protocols.
        </p>
        <div className="-mt-6">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/about"
          >
            Submit report
          </Link>
        </div>
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
