import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn more",
};

export default function LearnMorePage() {
  return (
    <div className="container relative mb-20 max-w-6xl py-6 lg:py-10">
      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        WTF is DeFiScan?
      </h1>

      <div className="flex-1 mt-6 text-center text-muted-foreground lg:text-start xl:text-base">
        <p>
          The maturity of DeFi technology progresses through a number of stages
          characterized by different degrees of decentralization. Upon
          deployment, DeFi protocols often expose critical risks from central
          dependencies and permissions which are controlled by centralized
          operators. As the protocol matures, these risks are eliminated e.g.
          through the introduction of fallback mechanisms, Security Councils and
          exit windows. To date, however, these stages have not been formalized
          resulting in a lack of transparency around the maturity and related
          risks of DeFi protocols.
        </p>

        <p className="mt-4">
          DeFi Scan offers a framework formalizing the decentralization stages
          of DeFi technology and allowing, for the first time, to assess and
          monitor the technology’s maturity in a verifiable manner. This
          framework consists of two parts:
        </p>
        <ul className="list-disc ml-6">
          <li>
            A centralization risk scoring system based on a scale of “High”,
            “Medium” and “Low” severity risks
          </li>
          <li>
            A formalization of the decentralization stages which relates
            directly to the risk scores achieved by a DeFi protocol
          </li>
        </ul>

        <p className="mt-4">
          We here provide an overview of the framework. For a more detailed
          discussion, please refer to the introduction{" "}
          <a
            href="https://deficollective.org/blog/"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            blog post
          </a>
          .
        </p>
      </div>

      <h1 className="inline-block mt-10 text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        DeFi Centralization Risks
      </h1>

      <div className="flex-1 mt-6 text-center text-muted-foreground lg:text-start xl:text-base">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="font-bold bg-gray-100">
            <tr>
              <td className="px-6 py-4 border border-gray-300">
                Risk / Scores
              </td>
              <td className="px-6 py-4 border border-gray-300">High</td>
              <td className="px-6 py-4 border border-gray-300">Medium</td>
              <td className="px-6 py-4 border border-gray-300">Low</td>
            </tr>
          </thead>

          <tbody>
            <tr className="">
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Chain
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                L2Beat Stage 0
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                L2Beat Stage 1
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Ethereum mainnet or a comparable L1, or L2Beat Stage 2
              </td>
            </tr>
            <tr className="">
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Upgradeability
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Possible upgrades may result in the theft or loss of user funds
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Possible upgrades may result in the theft or loss of unclaimed
                yield or may otherwise materially change the system (but user
                funds remain unaffected)
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Possible upgrades do not materially change the system (or result
                in the theft or loss of user funds and unclaimed yield)
              </td>
            </tr>
            <tr className="">
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Dependency
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Failure of a dependency may result in the theft or loss of user
                funds
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Failure of a dependency may result in the theft or loss of
                unclaimed yield or may otherwise materially change the
                performance of the system (but user funds remain unaffected)
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Failure of a dependency does not materially change the
                performance of the system (or result in the theft or loss of
                user funds and unclaimed yield)
              </td>
            </tr>
            <tr className="">
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Exit Window
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Operators, any account not meeting the Security Council
                requirement, are in control of the permissioned functions with
                an exit window of less than 7 days
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Control of the permissioned functions is delegated to a Security
                Council OR an exit window of at least 7 days is enforced
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Control of the permissioned functions is fully revoked OR
                delegated to a robust on-chain governance system AND an exit
                window of at least 30 days is enforced
              </td>
            </tr>
            <tr className="">
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Accessibility
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                A single user interface exists without a backup solution
                resulting in the temporary freezing of user funds if the
                interface is shutdown
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                A single user interface exists with public access to a backup
                solution such as a self-hosting app
              </td>
              <td className="hover:bg-gray-100 transition px-6 py-4 border border-gray-300">
                Multiple independent user interfaces exist, e.g. websites,
                in-wallet access, etc., guaranteeing access to user funds even
                if one interface is shutdown
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="inline-block mt-10 text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        DeFi Stages Framework
      </h1>

      <div className="flex-1 mt-6 text-center text-muted-foreground lg:text-start xl:text-base">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="font-bold bg-gray-100">
            <tr>
              <td className="px-6 py-4 border border-gray-300">Stage</td>
              <td className="px-6 py-4 border border-gray-300">Description</td>
              <td className="px-6 py-4 border border-gray-300">
                Qualification
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-100 transition">
              <td className="px-6 py-4 border border-gray-300">Stage 0</td>
              <td className="px-6 py-4 border border-gray-300">
                This is the first stage of a DeFi protocol where basic
                requirements give the technology a decentralized foundation.
                Critical permissions are still controlled by centralized
                operators and external dependencies may expose critical risks to
                users. Yet, its foundation allows for the gradual
                decentralization and elimination of these risks.
              </td>
              <td className="px-6 py-4 border border-gray-300">
                <ul className="list-disc list-inside">
                  <li>Blockchain-based, financial protocol</li>
                  <li>Assets are not in custody by centralized entity</li>
                  <li>
                    Public documentation exists that outlines the protocol
                    components and expected performance
                  </li>
                  <li>Source-available codebase</li>
                  <li>Verified contracts</li>
                </ul>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="px-6 py-4 border border-gray-300">Stage 1</td>
              <td className="px-6 py-4 border border-gray-300">
                In the second stage, risks from critical permissions and
                dependencies are significantly reduced by either revoking
                critical permissions, or establishing a Security Council to
                control such permissions, or enforcing an exit window of at
                least 7 days so users can withdraw funds in case of an unwanted
                protocol update. Critical risks from external dependencies are
                mitigated by the implementation of appropriate fallback
                mechanisms. Furthermore, the underlying chain cannot censor
                users’ transactions and a backup user interface exists
                guaranteeing access to user funds.
              </td>
              <td className="px-6 py-4 border border-gray-300">
                At least “Medium” risk scores for all dimensions apart from
                Upgradeability
              </td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="px-6 py-4 border border-gray-300">Stage 2</td>
              <td className="px-6 py-4 border border-gray-300">
                The final stage is reached when critical permissions have either
                been revoked or delegated to an on-chain governance system with
                ample time for users to exit in case of an unwanted protocol
                update. Risks from external dependencies have been further
                reduced such that users’ funds and unclaimed yield remain
                unaffected by a failure. In addition, different independent user
                interfaces and a fully decentralized underlying chain guarantee
                access to users’ funds at any time.
              </td>
              <td className="px-6 py-4 border border-gray-300">
                At least “Low” risk scores for all dimensions apart from
                Upgradeability
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="inline-block mt-10 text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        Security Council Requirements
      </h1>

      <div className="flex-1 my-6 text-center text-muted-foreground lg:text-start xl:text-base">
        <p>
          Any multisig account with the following requirements is an acceptable
          Security Council setup:
        </p>

        <ul className="list-disc ml-6">
          <li>At least 7 signers</li>
          <li>At least 51% threshold</li>
          <li>At least 50% non-team signers</li>
          <li>
            Signer diversity (organization, jurisdiction, etc), is subjectively
            assessed
          </li>
          <li>Signers are publicly announced (with name or pseudonym)</li>
        </ul>
      </div>
    </div>
  );
}
