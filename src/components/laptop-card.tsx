import { ShoppingCart } from "lucide-react";

export function LaptopCard() {
  return (
    <div>
      <div className="relative">
        <img className="w-full rounded-2xl" src="/laptop-img.jpg" alt="" />
        <span className="absolute left-0 top-0 m-2 flex min-w-[4rem] items-center justify-center rounded-full bg-background/60 py-1 text-sm">
          -14%
        </span>
      </div>
      <div className="space-y-1 px-2 py-4">
        <h3>A Great Laptop</h3>
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-foreground/60 line-through">$230.00</span>
            <span>$200.00</span>
          </div>
          <button>
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
