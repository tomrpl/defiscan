import React, { PropsWithChildren } from "react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col space-y-6">
      <Navbar />
      <main className="container flex-1">{children}</main>
      <Footer />
    </div>
  );
}
