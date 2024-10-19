import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function LearnMorePage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
          About
        </h1>
      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
          DeFi Scan is an open-source project created by the DeFi Collective. 
          More information on the decentralization framework can be found on our <a href="https://deficollective.org">website</a>.
        </p>
      </div>
    </div>
  );
}
