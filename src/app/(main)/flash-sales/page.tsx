import { CountdownTimer } from "@/components/countdown-timer";
import { LaptopCard } from "@/components/laptop-card";
import type { Laptop } from "@/types";

export default async function FlashSales() {
  const laptops = await fetch(
    "https://laptopify-server.vercel.app/flash-sales",
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <section className="container mx-auto max-w-7xl px-4 pt-20 md:pt-24">
      <div className="flex flex-col justify-start gap-4 pb-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-0">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Flash Sales
          </h2>
          <CountdownTimer />
        </div>
        <p className="max-w-prose leading-relaxed text-foreground/60">
          Explore our Flash Sales section for limited-time deals on top laptops.
          Hurry, grab your favorite at a discounted price before theyre gone!
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
