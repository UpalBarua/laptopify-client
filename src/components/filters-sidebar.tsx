"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { brands } from "@/config/laptops";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X } from "lucide-react";
import { Fragment, useState } from "react";

export function FiltersSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Fragment>
      <aside
        className={cn(
          "fixed inset-0 z-20 h-full w-full -translate-x-full bg-background/90  transition-transform duration-300 md:static md:w-auto md:translate-x-0",
          {
            "translate-x-0": isSidebarOpen,
          },
        )}
      >
        <div className="h-full w-[18rem] overflow-y-scroll bg-background md:w-[16rem] md:overflow-y-hidden">
          <div className="flex justify-end pb-4 md:pb-0">
            <Button
              size="icon"
              variant="outline"
              className="m-2 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div>
            <div className="space-y-4">
              <div className="mx-4 rounded-md border border-foreground/10 p-4 md:mx-0 md:p-6">
                <h3 className="pb-4 font-medium tracking-tight">Price Range</h3>
                <div className="space-y-3">
                  {Array(4)
                    .fill("")
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-x-2.5">
                        <Checkbox className="rounded" id="terms" />
                        <Label htmlFor="terms">$20.00 - $50.00</Label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mx-4 rounded-md border border-foreground/10 p-4 md:mx-0 md:p-6">
                <h3 className="pb-4 font-medium tracking-tight">Brands</h3>
                <div className="space-y-3">
                  {brands.map(({ name }) => (
                    <div key={name} className="flex items-center gap-x-2.5">
                      <Checkbox className="rounded" id="terms" />
                      <Label htmlFor="terms">{name}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-4 rounded-md border border-foreground/10 p-4 md:mx-0 md:p-6">
                <h3 className="pb-4 font-medium tracking-tight">Ratings</h3>
                <div className="space-y-3">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-x-2.5">
                        <Checkbox className="rounded" id="terms" />
                        <Label htmlFor="terms">{i + i} Stars</Label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <Button
        className="flex items-center gap-x-2 md:hidden "
        variant="outline"
        size="sm"
        onClick={() => setIsSidebarOpen(true)}
      >
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filter Products</span>
      </Button>
    </Fragment>
  );
}
