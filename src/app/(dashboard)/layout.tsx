"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Laptop, Menu } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="relative h-full min-h-screen dark:bg-background dark:text-foreground/90">
      <div className="container mx-auto flex max-w-7xl items-center gap-x-4 px-4 py-4 sm:py-6 md:hidden">
        <Button
          size="icon"
          variant="outline"
          className="md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu />
        </Button>
        <Link
          href="/"
          className="flex items-center gap-x-2 text-lg text-foreground"
        >
          <Laptop className="text-xl text-primary" />
          <span className="text-foregorund text-lg font-bold tracking-tight">
            Laptopify
          </span>
        </Link>
      </div>
      <aside
        className={cn(
          "fixed inset-0 z-10 h-full w-full -translate-x-full bg-background/50  transition-transform duration-500 md:w-[22rem] md:-translate-x-0",
          {
            "-translate-x-0": isSidebarOpen,
          },
        )}
        onClick={() => setIsSidebarOpen(false)}
      >
        <nav className="h-full w-[80%] space-y-1 border-r border-foreground/10 bg-secondary py-8 pl-6 shadow-md md:w-full md:space-y-2">
          <Link
            href="/"
            className="mb-6 flex items-center gap-x-2 text-lg text-foreground"
          >
            <Laptop className="text-xl text-primary" />
            <span className="text-foregorund text-lg font-bold tracking-tight">
              Laptopify
            </span>
          </Link>
          <Link href="/dashboard/all-laptops">All Laptops</Link>
        </nav>
      </aside>
      <section className="inset-0 h-full min-h-screen overflow-y-scroll px-4 py-4 md:fixed md:left-[calc(22rem)] md:px-8 md:py-10">
        {children}
      </section>
    </main>
  );
}
