import { LaptopCard } from "@/components/laptop-card";
import { buttonVariants } from "@/components/ui/button";
import type { Laptop } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export async function FlashSale() {
  const laptops = await fetch(
    "https://laptopify-server.vercel.app/laptops?limit=8",
    {
      next: {
        revalidate: 30,
      },
    },
  ).then((res) => res.json());

  return (
    <section className="container mx-auto max-w-7xl px-4 pb-[max(10dvw,_6rem)]">
      <div className="flex items-center justify-between pb-8">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Flash Sales
        </h2>
        <Link href="/flash-sales" className={buttonVariants({})}>
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
