"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/config";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <DropdownMenu open={isNavOpen} onOpenChange={setIsNavOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="md:hidden"
          size="icon"
          variant="outline"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <X /> : <Menu />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-4 min-w-[10rem] space-y-1 p-4 md:hidden">
        {navLinks.map(({ href, label }) => (
          <DropdownMenuItem key={href}>
            <Link href={href}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
