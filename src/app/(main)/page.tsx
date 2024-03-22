import { FlashSale } from "@/components/flash-sale";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSale />
      <Image
        src="/laptop-img.jpg"
        alt=""
        className="absolute right-0 top-0 h-[100dvh] w-full bg-black object-cover object-center brightness-[10%]"
        width={500}
        height={400}
      />
    </main>
  );
}
