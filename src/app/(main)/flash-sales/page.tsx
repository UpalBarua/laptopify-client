import { LaptopCard } from "@/components/laptop-card";
import { buttonVariants } from "@/components/ui/button";
import type { Laptop } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function FlashSales() {
  const response = await fetch("http://localhost:8080/flash-sales", {
    cache: "no-store",
  });
  const laptops = await response.json();

  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col justify-start gap-4 pb-8">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Flash Sales
        </h2>
        <p className="max-w-prose leading-relaxed text-foreground/60">
          Explore our Flash Sales section for limited-time deals on top laptops.
          Hurry, grab your favorite at a discounted price before they're gone!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {laptops.map((laptop: Laptop) => (
          <LaptopCard key={laptop._id} {...laptop} />
        ))}
      </div>
    </section>
  );
}
