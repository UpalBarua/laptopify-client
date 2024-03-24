"use client";

import Countdown from "react-countdown";

export function CountdownTimer() {
  return (
    <div className="flex max-w-max items-center gap-x-4 rounded-[100vmin] border px-5 py-1.5 text-lg font-medium sm:py-2">
      <p className="text-foreground/60">Ends In</p>
      <Countdown
        date={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)}
      />
    </div>
  );
}
