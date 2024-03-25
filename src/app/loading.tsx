import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-8">
      <Loader2 className="h-[4rem] w-[4rem] animate-spin" />
      <p className="text-2xl leading-relaxed text-foreground/60">
        Loading, please wait!
      </p>
    </section>
  );
}
