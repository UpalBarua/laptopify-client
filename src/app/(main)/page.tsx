import { FlashSale } from "@/components/flash-sale";
import { Hero } from "@/components/hero";
import { MostPopular } from "@/components/most-popular";
import { TopBrands } from "@/components/top-brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <FlashSale />
      <TopBrands />
      <MostPopular />
    </main>
  );
}
