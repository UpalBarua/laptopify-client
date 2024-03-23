import { LaptopCard } from "@/components/laptop-card";
import { buttonVariants } from "@/components/ui/button";
import type { Laptop } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export async function FlashSale() {
  const response = await fetch("http://localhost:8080/flash-sales", {
    next: {
      revalidate: 30,
    },
  });
  const laptops = await response.json();

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
        {laptops.map((laptop: Laptop) => (
          <LaptopCard key={laptop._id} {...laptop} />
        ))}
      </div>
    </section>
  );
}
