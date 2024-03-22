import { LaptopCard } from "@/components/laptop-card";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function MostPopular() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Most Popular Products
          </h2>
          <p className="max-w-prose leading-relaxed text-foreground/60">
            Discover our hottest laptops! Top picks for performance,{" "}
            <br className="hidden sm:block" /> style, and innovation. Find your
            match today!
          </p>
        </div>
        <Link href="/flash-sale" className={buttonVariants({})}>
          <span>View All</span>
          <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <LaptopCard key={i} />
          ))}
      </div>
    </section>
  );
}
