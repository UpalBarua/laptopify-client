import { socialLinks } from "@/config";
import { Laptop } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/config";

export function Footer() {
  return (
    <footer className="container mx-auto mt-[min(25dvw,_8rem)] flex flex-col items-center justify-center gap-8 border-t border-foreground/10 py-14 text-center">
      <div className="flex flex-col items-center justify-center space-y-1">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-lg text-foreground"
        >
          <Laptop className="text-xl text-primary" />
          <span className="font-medium tracking-tight">Laptopify</span>
        </Link>
        <p className="text-sm leading-relaxed text-foreground/60">
          Copyright © 2024 hopesync.com
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-foreground/80 hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        {socialLinks.map(({ Icon, link }) => (
          <a
            key={link}
            href={link}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-secondary"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
