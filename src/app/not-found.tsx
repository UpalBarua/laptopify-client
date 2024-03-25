import { CircleX } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-8">
      <CircleX className="h-[5rem] w-[5rem] text-red-500" />
      <p className="text-2xl leading-relaxed text-foreground/60">
        404 The requested resource could not be found!
      </p>
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          size: "lg",
        })}
      >
        Go Home
      </Link>
    </section>
  );
}
