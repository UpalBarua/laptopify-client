import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { LaptopCard } from "@/components/laptop-card";
import Link from "next/link";

export function FlashSale() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between pb-8">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Flash Sale
        </h2>
        <Link href="/flash-sale" className={buttonVariants({})}>
          <span>View All</span>
          <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <LaptopCard />
        <LaptopCard />
        <LaptopCard />
        <LaptopCard />
      </div>
    </section>
  );
}
