import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Statement",
};

export default function LearnMorePage() {
  return (
    <div className="container relative mb-20 max-w-6xl py-6 lg:py-10">

      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        Privacy Statement
      </h1>

      <div className="flex-1 mt-6 text-center text-muted-foreground lg:text-start xl:text-base">
        <p>
          This page is provided ...
        </p>
      </div>
    </div>
  );
}
