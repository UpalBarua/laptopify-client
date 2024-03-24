import { HeroCarousel } from "@/components/hero-carousel";

export function Hero() {
  return (
    <div className="border-foregroun/10 mb-[max(10dvw,_6rem)] border-b bg-[url('/laptop-img.jpg')]">
      <div className="backdrop-brightness-[10%]">
        <div className="container relative z-10 mx-auto flex min-h-[52rem] max-w-7xl flex-col items-center justify-center gap-4 px-4 pt-14">
          <h1 className="text-center text-[clamp(1.875rem,_6vw+0.5rem,_3.25rem)] font-extrabold tracking-tight">
            Empowering Your Digital Journey,
            <br className="hidden md:block" />
            One Laptop at a Time!
          </h1>
          <p className="mx-auto max-w-prose pb-4 text-center leading-relaxed text-foreground/60 md:pb-6">
            Discover top-tier laptops at Laptopify. Elevate your digital
            experience with our curated selection, tailored to fuel your
            passions and productivity. Welcome to the future of computing.
          </p>
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
