import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/config";
import { Laptop } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
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
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
