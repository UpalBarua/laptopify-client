import { brands } from "@/config/laptops";
import { Brand } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function TopBrands() {
  return (
    <section
      id="brands"
      className="container mx-auto flex max-w-7xl scroll-mt-20 flex-col items-center justify-center px-4 pb-[12rem]"
    >
      <div className="space-y-4 pb-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Top Brands
        </h2>
        <p className="max-w-prose leading-relaxed text-foreground/60">
          Discover Top Brands! Explore our premier selection of laptops renowned
          for performance, style, and innovation. Find your perfect match today!
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {brands.slice(0, 6).map(({ name, logo }: Brand) => (
          <Link
            key={logo}
            href={`/laptops?brand=${name}`}
            className="group flex flex-col items-center justify-center gap-2 rounded-md 
            border border-foreground/10 px-12 py-5 shadow hover:border-foreground/20"
          >
            <Image
              src={logo}
              alt={name}
              height={100}
              width={100}
              className="flex-1"
            />
            <p className="pt-2 text-foreground/60 group-hover:text-foreground">
              {name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
