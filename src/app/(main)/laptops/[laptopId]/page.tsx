import { Button } from "@/components/ui/button";
import type { Laptop } from "@/types";
import { Heart, SquareCheckBig, Star } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  const laptops = await fetch("http://localhost:8080/laptops/").then((res) =>
    res.json(),
  );

  const firstTenLaptops = laptops.slice(0, 10);

  return firstTenLaptops.map((laptop: Laptop) => ({
    laptopId: laptop?._id,
  }));
}

export default async function LaptopDetails({
  params,
}: {
  params: { laptopId: string };
}) {
  const response = await fetch(
    `http://localhost:8080/laptops/${params.laptopId}`,
  );
  const laptopDetails: Laptop = await response.json();

  const {
    image,
    model,
    price,
    ratings,
    description,
    _id,
    createdAt,
    reviews,
    isOnFlashSale,
    ...restDetails
  } = laptopDetails;

  return (
    <section className="container mx-auto mt-[5rem] grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2">
      <Image
        src={image}
        alt={model}
        height={500}
        width={500}
        className="max-h-[25rem] w-full rounded-2xl border object-cover object-center shadow-md"
      />
      <div className="space-y-2 md:p-4">
        <h2 className="text-2xl font-bold">{model}</h2>
        <div className="flex items-center gap-x-6 text-xl">
          <p className="font-medium">${price}</p>
          <div className="flex items-center gap-x-1">
            <Star className="h-5 w-5" />
            <span>{ratings?.average}</span>
          </div>
          <Button variant="outline" size="icon" className="rounded-[100vmin]">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <p className="pb-8 leading-relaxed text-foreground/80">{description}</p>
        <ul className="grid grid-cols-1  gap-1 leading-relaxed text-foreground/80 md:grid-cols-2">
          {Object.values(restDetails).map((value) => (
            <li key={value as string} className="flex items-center gap-x-2.5">
              <SquareCheckBig className="h-4 w-4 text-foreground/60" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
