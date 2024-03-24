import { Button } from "@/components/ui/button";
import type { Laptop } from "@/types";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LaptopCard({
  _id,
  model,
  price,
  image,
  ratings,
}: Readonly<Laptop>) {
  return (
    <Link
      href={`/laptops/${_id}`}
      className="block rounded-2xl border border-foreground/10 bg-card shadow-md 
      transition-colors hover:border-foreground/20"
    >
      <div className="relative p-2">
        <Image
          className="h-[20rem] w-full rounded-2xl object-cover object-center"
          src={image}
          alt={model}
          height={300}
          width={200}
        />
        <div
          className="absolute left-0 top-0 m-4 flex min-w-[4rem] items-center 
          justify-center gap-1 rounded-full border border-foreground/10 bg-background/80 
          py-1 text-sm"
        >
          <span>{ratings?.average}</span>
          <Star className="h-[0.875rem] w-[0.875rem]" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{model}</h3>
        <div className="flex items-center justify-between">
          <div className="space-x-2.5">
            <span className="text-foreground/60 line-through">${price}</span>
            <span>${price - 200}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-[100vmax]"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
