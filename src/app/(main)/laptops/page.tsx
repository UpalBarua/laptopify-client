import { FiltersSidebar } from "@/components/filters-sidebar";
import { LaptopCard } from "@/components/laptop-card";
import { Laptop } from "@/types";

type LaptopsProps = {
  searchParams: {
    brand: string;
    priceRange: string;
    ratings: string;
  };
};

export default async function Laptops({
  searchParams,
}: Readonly<LaptopsProps>) {
  const response = await fetch(
    `http://localhost:8080/laptops?brand=${searchParams.brand || ""}&priceRange=${searchParams.priceRange || ""}&ratings=${searchParams.ratings || ""}`,
    {
      cache: "no-store",
    },
  );
  const laptops = await response.json();

  return (
    <section className="container mx-auto mt-20 flex max-w-7xl flex-col items-start gap-4 px-4 md:flex-row">
      <FiltersSidebar />
      <div>
        <div className="space-y-2 pb-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Our Laptops Collection
          </h2>
          <p className="max-w-prose leading-relaxed text-foreground/60">
            Discover our curated collection. Find your perfect match
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {laptops?.map((laptop: Laptop) => (
            <LaptopCard key={laptop._id} {...laptop} />
          ))}
        </div>
      </div>
    </section>
  );
}
