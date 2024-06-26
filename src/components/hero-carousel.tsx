import { LaptopCard } from "@/components/laptop-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Laptop } from "@/types";

export async function HeroCarousel() {
  const laptops = await fetch("https://laptopify-server.vercel.app/trending", {
    next: {
      revalidate: 30,
    },
  }).then((res) => res.json());

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[18rem] md:max-w-[50rem]"
    >
      <CarouselContent>
        {laptops.map((laptop: Laptop) => (
          <CarouselItem key={laptop._id} className="md:basis-1/2 lg:basis-1/3">
            <LaptopCard {...laptop} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
