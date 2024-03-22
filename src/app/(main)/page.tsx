import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Image
        src="/laptop-img.jpg"
        alt=""
        className="absolute right-0 top-0 min-h-screen w-full bg-black brightness-[10%]"
        width={500}
        height={400}
      />
    </main>
  );
}
