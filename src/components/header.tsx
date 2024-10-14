"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 text-primary">
            <img src={'/images/logo.png'} width="146" height="50"/>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
        <Link
          key="about-nav"
          href="/about"
          className="font-normal hover:text-primary transition-colors flex items-center text-primary"
        >
          <span>Learn more</span>
        </Link>
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
