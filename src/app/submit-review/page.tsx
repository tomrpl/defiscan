import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Review",
};

export default function SubmitReviewPage() {
  return (
    <div className="container relative mb-20 max-w-6xl py-6 lg:py-10">
      <h1 className="inline-block tracking-tight text-primary font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        Submit New Protocol Reviews
      </h1>
      <h2 className="mt-10 scroll-m-20 pb-1 text-lg md:text-2xl font-semibold text-primary tracking-tight first:mt-0">
        Who Can Submit Reviews?
      </h2>
      <p>
        DeFiScan is an open-source project and everyone can create and submit new protocol reviews. 
        We further run initiatives to involve the community more closely in this process and increase coverage of the DeFi sector.
        Follow us on <a href="https://x.com/defiscan_info" className="text-blue-600 underline">X</a> or join our  <a href="https://discord.gg/Z467Ehv6VU" className="text-blue-600 underline">Discord</a> to stay up-to-date on any such initiatives.
      </p>
      <h2 className="mt-10 scroll-m-20 pb-1 text-lg md:text-2xl font-semibold text-primary tracking-tight first:mt-0">
        Getting Started
      </h2>
      <p>
        Follow the steps below to create and submit a new protocol review:
      </p>
      <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
        <ol className="mt-8 list-decimal list-inside space-y-4 text-left text-sm xl:text-base">
          <li>
            Fork the DeFiScan GitHub{" "}
            <a
              href="https://github.com/deficollective/defiscan"
              className="text-blue-600 underline"
            >
              repository
            </a>
            .
          </li>
          <li>
            Copy the protocol review{" "}
            <a
              href="https://github.com/deficollective/defiscan/blob/main/src/content/template.md?plain=1"
              className="text-blue-600 underline"
            >
              template
            </a>{" "}
            to a new file named after the protocol
          </li>
          <li>
            Clone and install the Permission Scanner from the GitHub{" "}
            <a
              href="https://github.com/deficollective/permission-scanner"
              className="text-blue-600 underline"
            >
              repository
            </a>
            .
          </li>
          <li>
            Create a report of all permissioned functions found in the protocol
            using the Permission Scanner
          </li>
          <li>
            Complete the protocol review following the methodology outlined{" "}
            <a href="https://deficollective.org/blog/introducing-defiscan" className="text-blue-600 underline">
              here
            </a>{" "}
          </li>
          <li>
            Submit a PR on the main{" "}
            <a
              href="https://github.com/deficollective/defiscan"
              className="text-blue-600 underline"
            >
              repository
            </a>{" "}
            with the name of the protocol review
          </li>
          <li>
            Ping the team in our{" "}
            <a
              href="https://discord.gg/Z467Ehv6VU"
              className="text-blue-600 underline"
            >
              Discord
            </a>{" "}
            to get the PR reviewed and merged
          </li>
        </ol>
      </div>
      <p className="mt-10">
      <strong>Note</strong>, by submitting a PR with a protocol review, you agree that the DeFi Collective may freely use the submitted content. Please see our{" "}
            <a
              href="/terms"
              className="text-blue-600 underline"
            >
              Terms
            </a>.
      </p>
    </div>
  );
}
