"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-primary">
            <img
              src={"/images/defiscan_by_dc_color_for_light_background.svg"}
              width="200"
              // height="50"
            />
          </Link>
        </div>
        <div className="flex items-right space-x-5 md:space-x-6">
          <Link
            key="learn-more-nav"
            href="/learn-more"
            className="font-normal hover:text-primary transition-colors flex items-center text-primary"
          >
            <span>Learn more</span>
          </Link>

          <Link
            key="submit-report-nav"
            href="/submit-report"
            className="font-normal hover:text-primary transition-colors flex items-center text-primary"
          >
            <span>Submit report</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
