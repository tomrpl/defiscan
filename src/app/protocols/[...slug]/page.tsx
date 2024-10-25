import { Metadata } from "next";
import { protocols as allProtocols } from "#site/content";
import "@/styles/mdx.css";
import { Mdx } from "@/components/mdx-component";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BigPizzaRosette } from "@/components/rosette/big-rosette";
import { getRiskDescriptions } from "@/components/rosette/data-converter/data-converter";
import { TooltipProvider } from "@/components/rosette/tooltip/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProtocolPageItemProps {
  params: {
    slug: string[];
  };
}

// Fetch protocol tvl and logo url from defillama
const fetchProtocolDescription = async (
  projectname: string
): Promise<string> => {
  const response = await fetch(`https://api.llama.fi/protocol/${projectname}`);
  const data = await response.json();
  return data.description || "Protocol description not found.";
};

async function getProtocolFromParams(slug: string[]) {
  const slugString = slug.join("/");
  const protocol = allProtocols.find(
    (protocol) => protocol.slugAsParams === slugString
  );

  const description = await fetchProtocolDescription(slugString);

  return { ...protocol, description: description };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const protocol = await getProtocolFromParams(params.slug);

  if (!protocol) {
    return {
      title: "Protocol not found",
      description: "Protocol details could not be found.",
    };
  }

  return {
    title: protocol.protocol,
    description: "DeFi Scan decentralization report for " + protocol.protocol,
    authors: {
      name: protocol.author!.join(", "),
    },
  };
}

export default async function ProtocolPageItem({
  params,
}: ProtocolPageItemProps) {
  const protocol = await getProtocolFromParams(params.slug);

  if (!protocol) {
    return <div>Protocol not found</div>; // Handle not found case
  }

  return (
    <article className="container relative mx-auto py-6 lg:py-10">
      <div>
        <h1 className="mt-2 mb-8 inline-block text-4xl font-bold capitalize leading-tight text-primary lg:text-5xl">
          {protocol.protocol}
        </h1>

        <table className="table-auto border-separate border-spacing-y-2 border-spacing-x-4 -ml-4">
          <tbody>
            <tr>
              <td>Website</td>
              <td>
                <a
                  href={protocol.website}
                  className="text-blue-500 hover:underline"
                >
                  {protocol.website}
                </a>
              </td>
            </tr>
            <tr>
              <td>X (Twitter)</td>
              <td>
                <a href={protocol.x} className="text-blue-500 hover:underline">
                  {protocol.x}
                </a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>
                <a
                  href={protocol.github}
                  className="text-blue-500 hover:underline"
                >
                  {protocol.github}
                </a>
              </td>
            </tr>
            <tr>
              <td>Defillama</td>
              <td>
                <a
                  href={
                    "https://defillama.com/protocol/" + protocol.defillama_slug
                  }
                  className="text-blue-500 hover:underline"
                >
                  {"https://defillama.com/protocol/" + protocol.defillama_slug}
                </a>
              </td>
            </tr>
            <tr>
              <td>Chain</td>
              <td>{protocol.chain}</td>
            </tr>
          </tbody>
        </table>

        <h1 className="mt-10 mb-4 scroll-m-20 text-4xl font-bold text-primary tracking-tight">
          Declaration
        </h1>

        <p>
          This review has been submitted by {protocol.author!.join(", ")} on{" "}
          {protocol.submission_date!.split("T")[0]}.
        </p>
        <p>
          It was reviewed and published by the DeFi Collective team on{" "}
          {protocol.publish_date!.split("T")[0]}.
        </p>
        <p>
          The {protocol.protocol} team has{" "}
          {protocol.acknowledge_date!.split("T")[0] === "1970-01-01"
            ? "NOT acknowledged the review"
            : "acknowledged the review on " +
              protocol.acknowledge_date!.split("T")[0]}
          .
        </p>
        <p>
          {protocol.update_date!.split("T")[0] === "1970-01-01"
            ? "The review has not been updated since the initial submission"
            : "The last update to the review was made on " +
              protocol.update_date!.split("T")[0]}
          .
        </p>
        <h1 className="mt-10 mb-4 scroll-m-20 text-4xl font-bold text-primary tracking-tight">
          Summary
        </h1>
        <p>{protocol.description}</p>

        <h1 className="mt-10 mb-4 scroll-m-20 text-4xl font-bold text-primary tracking-tight">
          Stage
        </h1>

        <TooltipProvider>
          <Badge
            stage={protocol.stage!}
            className={`${
              protocol.stage === 0
                ? "bg-red-500"
                : protocol.stage === 1
                  ? "bg-yellow-500"
                  : "bg-green-500"
            } text-white px-2 py-1 rounded`}
          >
            {"Stage " + protocol.stage}
          </Badge>
        </TooltipProvider>

        <h1 className="mt-10 mb-4 scroll-m-20 text-4xl font-bold text-primary tracking-tight">
          Scores
        </h1>

        <TooltipProvider>
          <BigPizzaRosette
            className="mt-auto"
            values={getRiskDescriptions(protocol.risks!)}
          />
        </TooltipProvider>
        <Mdx code={protocol.body!} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
            <ChevronLeft className="mr-2 size-4" />
            See all Protocols
          </Link>
        </div>
      </div>
    </article>
  );
}
