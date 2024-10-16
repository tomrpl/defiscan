import React from "react";
import { Metadata } from "next";
import { protocols as allProtocols } from "#site/content";
import { cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { Mdx } from "@/components/mdx-component";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface ProtocolPageItemProps {
  params: {
    slug: string[];
  };
}

async function getProtocolFromParams(params: ProtocolPageItemProps["params"]) {
  const slug = params?.slug.join("/");
  const protocol = allProtocols.find(
    (protocol) => protocol.slugAsParams === slug
  );

  if (!protocol) {
    return null;
  }

  return protocol;
}

export async function generateMetadata({
  params,
}: ProtocolPageItemProps): Promise<Metadata> {
  const protocol = await getProtocolFromParams(params);

  if (!protocol) {
    return {};
  }

  return {
    title: protocol.protocol,
    description: "DeFi Pulse decentralization report for " + protocol.protocol,
    authors: {
      name: protocol.author,
    },
  };
}

export async function generateStaticParams(): Promise<
  ProtocolPageItemProps["params"][]
> {
  return allProtocols.map((protocol) => ({
    slug: protocol.slugAsParams.split("/"),
  }));
}

export default async function ProtocolPageItem({
  params,
}: ProtocolPageItemProps) {
  const protocol = await getProtocolFromParams(params);

  if (!protocol) {
    return {};
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        <h1 className="mt-2 mb-8 inline-block text-4xl font-bold capitalize leading-tight text-primary lg:text-5xl">
          {protocol.protocol}
        </h1>

        <table className="table-auto border-separate border-spacing-y-2 border-spacing-x-4 -ml-4">
          <tr className="">
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
          <tr className="">
            <td>X (Twitter)</td>
            <td>
              <a href={protocol.x} className="text-blue-500 hover:underline">
                {protocol.x}
              </a>
            </td>
          </tr>
          <tr className="">
            <td>Type</td>
            <td>{protocol.type}</td>
          </tr>
          <tr className="">
            <td>Chain</td>
            <td>{protocol.chain}</td>
          </tr>
          <tr className="">
            <td>Author</td>
            <td>{protocol.author}</td>
          </tr>
          <tr className="">
            <td>Date</td>
            <td>{protocol.date}</td>
          </tr>
        </table>

        <Mdx code={protocol.body} />
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
