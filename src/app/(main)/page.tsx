import { FlashSale } from "@/components/flash-sale";
import { Hero } from "@/components/hero";
import { MostPopular } from "@/components/most-popular";
import Image from "next/image";
import { TopBrands } from "@/components/top-brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSale />
      <TopBrands />
      <MostPopular />
      <Image
        src="/laptop-img.jpg"
        alt=""
        className="absolute right-0 top-0 min-h-[60rem] w-full bg-black object-cover 
        object-center brightness-[10%] md:min-h-[40rem]"
        width={500}
        height={400}
      />
    </main>
  );
}
