import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/config";
import { Laptop } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="absolute z-[10] w-full px-4 py-4">
      <div className="container mx-auto flex max-w-7xl items-center justify-between">
        <Link className="flex items-center gap-x-2" href="/">
          <Laptop className="text-primary" />
          <span className="text-foregorund text-lg font-bold tracking-tight">
            Laptopify
          </span>
        </Link>
        <nav className="itmes-center hidden gap-x-2 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
