import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHead } from "./Section";

export function Coverage() {
  return (
    <Section id="coverage">
      <SectionHead kicker={site.coverage.kicker} title={site.coverage.title} sub={site.coverage.sub} />

      <ul className="flex flex-wrap gap-3">
        {site.coverage.areas.map((area, i) => (
          <Reveal
            as="li"
            key={area}
            delay={i * 0.04}
            className="group flex items-center gap-2.5 rounded-sm border border-line px-5 py-3 transition-colors hover:border-red/60 hover:bg-card"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red transition-transform group-hover:scale-150" />
            <span className="text-[0.98rem]">{area}</span>
          </Reveal>
        ))}
      </ul>

      <div className="relative mt-14 overflow-hidden border-y border-line py-4" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-[1.1rem] uppercase tracking-[0.18em] text-mute-dim">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex gap-10">
              {site.coverage.areas.map((area) => (
                <span key={`${dup}-${area}`} className="flex items-center gap-10">
                  {area}
                  <span className="h-1 w-1 rounded-full bg-red" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
