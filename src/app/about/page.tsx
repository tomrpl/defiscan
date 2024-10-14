import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
          About
        </h1>
      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
          DeFi Pulse is an open-source project created by the DeFi Collective. 
          More information on the decentralization framework can be found on our <a href="https://deficollective.org">website</a>.
        </p>
      </div>
      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
          How to submit a report
        </h1>
      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
          In order to submit a new protocol report follow the steps below:
        </p>
        <ol>
          <li>Fork the project <a href="https://github.com/deficollective/defi-pulse)">GitHub repository</a></li>
          <li>Copy the protocol <a href="/report-template">Report Template</a> to a new file named after the protocol</li>
          <li>Clone and install the Permission Scanner from the <a href="https://github.com/deficollective/permission-scanner">GitHub repository</a></li>
          <li>Create a report of all permissioned functions found in the protocol using the Permission Scanner</li>
          <li>Follow the [Reporting Guidelines](/guidelines) to complete the report</li>
          <li>Submit a PR to the main repository with the name of the analyzed protocol</li>
          <li>Ping the team in the DeFi Collective's <a href="https://discord.gg">Discord</a> in order to get the PR reviewed and merged</li>
        </ol>
      </div>
    </div>
  );
}
