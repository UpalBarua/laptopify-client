import { FlashSale } from "@/components/flash-sale";
import { Hero } from "@/components/hero";
import { MostPopular } from "@/components/most-popular";
import { TopBrands } from "@/components/top-brands";

export default function Home() {
  return (
    <main className="pt-20 md:pt-24">
      <Hero />
      <FlashSale />
      <TopBrands />
      <MostPopular />
    </main>
  );
}
