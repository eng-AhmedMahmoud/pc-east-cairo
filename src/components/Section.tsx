import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 flex items-center gap-2.5 text-sm font-bold tracking-wide text-red-bright">
      <span aria-hidden className="h-px w-6 bg-red" />
      {children}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  align = "start",
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: "start" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-14 flex max-w-2xl flex-col items-center text-center"
          : "mb-14 max-w-2xl"
      }
    >
      <Kicker>{kicker}</Kicker>
      <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-[0.01em]">
        {title}
      </h2>
      {sub ? <p className="mt-4 max-w-xl text-mute md:text-[1.02rem]">{sub}</p> : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${bordered ? "border-b border-line" : ""} ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
